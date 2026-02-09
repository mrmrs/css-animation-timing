const fs = require('fs');
const path = require('path');
const { transform } = require('lightningcss');

const srcFile = path.join(__dirname, 'src', 'animation-timing.css');
const distDir = path.join(__dirname, 'dist');

// Read source
const source = fs.readFileSync(srcFile, 'utf8');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Unminified — just normalize formatting
const { code: unminified } = transform({
  filename: 'animation-timing.css',
  code: Buffer.from(source),
  minify: false,
});

fs.writeFileSync(path.join(distDir, 'animation-timing.css'), unminified);

// Minified
const { code: minified } = transform({
  filename: 'animation-timing.css',
  code: Buffer.from(source),
  minify: true,
});

fs.writeFileSync(path.join(distDir, 'animation-timing.min.css'), minified);

console.log('Build complete:');
console.log(`  dist/animation-timing.css     ${unminified.length} bytes`);
console.log(`  dist/animation-timing.min.css ${minified.length} bytes`);
