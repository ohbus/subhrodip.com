const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'app', 'data');
const files = ['en.ts', 'bn.ts', 'de.ts'];

function checkFile(filename) {
  const filePath = path.join(dir, filename);
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const errors = [];

  lines.forEach((line, i) => {
    // Check for rotted breadcrumbs
    if (line.includes('breadcrumb') && line.includes('ohbus')) {
      errors.push(`Line ${i + 1}: Suspected rotted breadcrumb -> ${line.trim()}`);
    }
    
    // Check for 404 links I fixed earlier but might have missed in other files
    if (line.includes('github.com/ohbus/twitter-backend-java')) errors.push(`Line ${i + 1}: Old link -> twitter-backend-java`);
    if (line.includes('github.com/ohbus/spring-cloud-aws')) errors.push(`Line ${i + 1}: Old link -> spring-cloud-aws`);
    if (line.includes('github.com/ohbus/sclr.ac-backend')) errors.push(`Line ${i + 1}: Old link -> sclr.ac-backend`);
    
    // Check for balanced HTML tags in the line
    const tags = line.match(/<[^>]+>/g) || [];
    const stack = [];
    tags.forEach(tag => {
      if (tag.startsWith('</')) {
        stack.pop();
      } else if (!tag.endsWith('/>') && !tag.includes('<br>')) {
        stack.push(tag);
      }
    });
    if (stack.length > 0) {
      // Some tags might span multiple lines, but mostly in our data they are inline
      // like <strong>...</strong>. Let's just flag it for manual review if it looks suspicious.
      if (line.includes('<strong>') && !line.includes('</strong>')) {
        errors.push(`Line ${i + 1}: Unclosed <strong> tag`);
      }
    }
  });

  // Count top-level keys
  const keys = (content.match(/^\s+\w+:/gm) || []).length;
  console.log(`${filename}: Found ${keys} estimated keys.`);

  return errors;
}

files.forEach(file => {
  const errors = checkFile(file);
  if (errors.length > 0) {
    console.log(`--- Issues in ${file} ---`);
    errors.forEach(e => console.log(e));
  } else {
    console.log(`${file}: No obvious issues found.`);
  }
});
