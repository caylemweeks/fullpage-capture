# fullpage-capture
An easy to use tool to capture a screenshot of a whole website.

CURRENT VERSION: 1.0.3

Note: ignore the version that github says; I'm a dingus and forgot to upload the readme to NPM so I had to create another version on there JUST FOR THAT.

Have you ever wanted to capture an entire website as a screenshot, but gotten fed up with the lackluster support from dodgy extensions or third party apps? Maybe you've tried to install a few CLI applications, but they've just failed on you.
Do I have the solution for you!

The more complex you make something, the more that can break, and I've made this as simple as I possibly could. I spent an afternoon learning javascript and whipped this bad boy up. Full disclosure, it's using the Capture-Website API, so go check that out if you want to learn more.
https://github.com/sindresorhus/capture-website

So what do you have to do to install this app?
Firstly, grab yourself a copy of Node.JS. This will also get you NPM, which is what we'll use to install the tools we need.
From there; run these three commands:

1. npm install capture-website

2. npm install prompt-sync

3. npm install fullpage-capture

And then you're all done. To use, simply execute by:

node fullpage-capture

Input your variables and bobs your uncle. Upon initial startup, you'll need to set your default directory for where you want screenshots to go. Easiest way to do this is to find the folder you want to store your screenshots in and drag it into your terminal/command prompt window; it should grab the pathname and work from there.
