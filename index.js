//Dependancies
const captureWebsite = require('capture-website');
const prompt = require('prompt-sync')();
const fs = require('fs');
var path = require("path");

//Checking for valid path.
var pathdata = fs.readFileSync(path.resolve(__dirname, "path.txt")).toString();
console.log(pathdata);
if (pathdata == '' || pathdata == 'firsttime') {
	var pathdata = prompt('Where do you want your screenshots to end up?');
	const data = fs.writeFileSync(path.resolve(__dirname, "path.txt"), pathdata);
}

//Grabbing user input for website capture.
var URL = prompt('What is the URL?');
var NAME = prompt('What is the filename?') + '.png';

//Actual website capturing.
(async () => {
	await captureWebsite.file(String(URL), String(pathdata) + '/' + String(NAME), {fullPage: 'True'}), page.setDefaultNavigationTimeout(0);
})();