# fullpage-capture
An easy to use tool to capture a screenshot of a whole website.

Have you ever wanted to capture an entire website as a screenshot, but gotten fed up with the lackluster support from dodgy extensions or third party apps? Maybe you've tried to install a few CLI applications, but they've just failed on you.
Do I have the solution for you!

The more complex you make something, the more that can break, and I've made this as simple as I possibly could. I spent an afternoon learning javascript and whipped this bad boy up. Full disclosure, it's using the Capture-Website API, so go check that out if you want to learn more.
https://github.com/sindresorhus/capture-website

So what do you have to do to install this app?
Firstly, grab yourself a copy of Node.JS. This will also get you NPM, which is what we'll use to install the tools we need.
From there; run these two commands:
npm install capture-website

npm install fullpage-capture

And then you're all done. To use, simply execute by:
node fullpage-capture
Input your variables and bobs your uncle. A word of warning; I haven't implemented the ability for you to choose a default directory for the screenshots to end up in. For me, my screenshots end up in my user folder on macOS. Usually it'll end up somewhere similar for you. It's something I'll be focusing on in the next build.
