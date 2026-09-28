const fs = require('fs');
const path = require('path');

const directories = ['app', 'components'];

const replacements = {
  'rounded-lg': 'rounded',
  'rounded-xl': 'rounded',
  'rounded-2xl': 'rounded',
  'rounded-3xl': 'rounded'
};

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.css')) {
        results.push(file);
      }
    }
  });
  return results;
}

directories.forEach(dir => {
  const files = walk(dir);
  files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    
    for (const [oldClass, newClass] of Object.entries(replacements)) {
      const regex = new RegExp(`\\b${oldClass}\\b`, 'g');
      if (regex.test(content)) {
        content = content.replace(regex, newClass);
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(file, content);
      console.log(`Updated classes in ${file}`);
    }
  });
});
