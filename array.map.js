const tags = require('/tags.json');
const fs = require('fs');

fs.writeFileSync('/tags.json', JSON.stringify(tags.map(tag => tag.name)));