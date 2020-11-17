const captureWebsite = require('capture-website');
const prompt = require('prompt-sync')();
 
const URL = prompt('What is the URL?');
const NAME = prompt('What is the filename?') + '.png';

(async () => {
	await captureWebsite.file(String(URL), NAME, {fullPage: 'True'}), page.setDefaultNavigationTimeout(0);
})();