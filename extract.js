const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('CSI_Hall_of_PRs_Implementation.md', 'utf-8');
const regex = /### \d+\. `([^`]+)`\n+```[a-z]*\n([\s\S]*?)```/g;
let match;

const filesExtracted = [];

while ((match = regex.exec(content)) !== null) {
    const filename = match[1];
    let fileContent = match[2];

    // Replace Parul Prashar with CSI SCT SB
    fileContent = fileContent.replace(/Parul Prashar/g, 'CSI SCT SB');

    // Replace social media link with Instagram link
    fileContent = fileContent.replace(/https:\/\/www\.instagram\.com\/csi_sct/g, 'https://www.instagram.com/csisctsb');

    const dir = path.dirname(filename);
    if (dir !== '.') {
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filename, fileContent, 'utf-8');
    filesExtracted.push(filename);
}

console.log('Extracted files:', filesExtracted);

// Additionally create 'assets' dir and move logo.png if it exists
if (fs.existsSync('logo.png')) {
    fs.mkdirSync('assets', { recursive: true });
    fs.renameSync('logo.png', path.join('assets', 'logo.png'));
    console.log('Moved logo.png to assets/logo.png');
}
