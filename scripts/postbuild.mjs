import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');

function processHtmlFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Convert absolute asset paths to relative paths starting with ./
  // Handles href="/_astro/...", src="/_astro/...", href="/images/...", src="/images/...", etc.
  content = content.replace(/(href|src|data-src|poster)=["']\/(_astro\/|images\/|assets\/|fonts\/|favicon[^"']*)/g, '$1="./$2');

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`[postbuild] Converted asset paths to relative in ${path.relative(process.cwd(), filePath)}`);
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      processHtmlFile(fullPath);
    }
  }
}

// 1. Process all HTML files in dist/
walkDir(distDir);

// 2. Ensure .nojekyll exists in dist/ for GitHub Pages
const nojekyllPath = path.join(distDir, '.nojekyll');
if (!fs.existsSync(nojekyllPath)) {
  fs.writeFileSync(nojekyllPath, '');
  console.log('[postbuild] Created dist/.nojekyll');
}

// 3. Remove unwanted CNAME file from dist if present to prevent GitHub Pages domain hijacking
const cnamePath = path.join(distDir, 'CNAME');
if (fs.existsSync(cnamePath)) {
  fs.unlinkSync(cnamePath);
  console.log('[postbuild] Removed dist/CNAME to prevent domain mismatch on GitHub Pages');
}

