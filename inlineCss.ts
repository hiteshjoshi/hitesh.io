import * as fs from 'fs';
import * as path from 'path';

const cssFilePath = path.join(__dirname, 'src/styles/dist.css'); // Path to your Tailwind CSS file
const htmlFilePath = path.join(__dirname, 'src/components/InlineCss.astro'); // Path for the new HTML file

fs.readFile(cssFilePath, 'utf8', (err, cssContent) => {
    if (err) {
        console.error('Error reading the CSS file:', err);
        return;
    }

    const htmlContent = `<style>${cssContent}</style>`;

    fs.writeFile(htmlFilePath, htmlContent, 'utf8', (err) => {
        if (err) {
            console.error('Error writing the HTML file:', err);
            return;
        }
        console.log('HTML file with inline CSS generated successfully!');
    });
});
