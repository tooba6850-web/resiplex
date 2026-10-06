const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else if (file.endsWith('.css') || file.endsWith('.jsx')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk('c:/xampp/htdocs/resiplex/src');
let count = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Replace old gold rgba with new blue rgba
    content = content.replace(/rgba\(184,\s*146,\s*90/g, 'rgba(37, 99, 235');
    // Replace old dark background gradient base with black (for image overlays)
    content = content.replace(/rgba\(11,\s*10,\s*8/g, 'rgba(0, 0, 0');
    // Replace old light text/line rgba with white or gray
    content = content.replace(/rgba\(243,\s*238,\s*229/g, 'rgba(255, 255, 255');
    
    // Replace old hex gold
    content = content.replace(/#b8925a/g, '#2563eb');

    if (content !== original) {
        fs.writeFileSync(file, content);
        count++;
    }
});

console.log(`Replaced colors in ${count} files.`);
