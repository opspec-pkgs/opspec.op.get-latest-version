const semVers = require('/semVers.json');
const fs = require('fs');

fs.writeFileSync('/latestVersion', semVers.pop());