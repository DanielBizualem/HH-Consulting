const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const projectRoot = 'C:\\Users\\PC\\Desktop\\HH Consulting\\website';

// Try the two most common locations
const possibleDirs = [
  path.join(projectRoot, 'public'),           // ← Most likely
  path.join(projectRoot, 'website', 'public') // ← Previous guess
];

let publicDir = null;

for (const dir of possibleDirs) {
  if (fs.existsSync(dir)) {
    publicDir = dir;
    console.log('✅ Found public folder here:', dir);
    break;
  }
}

if (!publicDir) {
  console.error('❌ Still cannot find public folder!');
  console.log('Please run this command and paste the result:');
  console.log('dir "' + projectRoot + '"');
  process.exit(1);
}

// Now fix all PNGs
let count = 0;
fs.readdirSync(publicDir).forEach(file => {
  if (file.toLowerCase().endsWith('.png')) {
    const input = path.join(publicDir, file);
    const temp = path.join(publicDir, 'temp-' + file);

    sharp(input)
      .png({ compressionLevel: 6 })
      .toFile(temp)
      .then(() => {
        fs.renameSync(temp, input);
        console.log(`✅ Fixed: ${file}`);
        count++;
      })
      .catch(err => console.error(`❌ Error fixing ${file}:`, err.message));
  }
});

console.log('\n🎉 Done! Fixed', count, 'images.');