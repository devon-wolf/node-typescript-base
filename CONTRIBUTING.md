# Contributing to This Project
So you'd like to help maintain this template - excellent!

## Getting Up and Running
These are things you'll likely only need to do once:
1. Things you'll need first:
	- Node and npm, somewhere to edit code, a terminal you know how to use
	- TODO: add links to installation instructions
1. Fork this repo.
	- TODO: add link to basic GitHub instructions
1. Clone it down.
	- TODO: add link to basic GitHub instructions
1. From the project directory, run `npm i` to install the project dependencies.
1. Add a file to the root project directory called `.env` - copy the contents of `.env-example` into this file for now; this is where your environment variables will live.
	- you can do this manually in whatever your preferred code editor is, or you can do this from the command line like this: `cp .env-example .env`

## Things to Do Each Time You Work on the Project
1. Pull in any changes from the upstream repo.
	- TODO: add steps and link to docs
1. Run `npm i` if there have been changes to the dependencies since the last time you worked on this project. If you're not sure, or you're troubleshooting, it's not going to hurt to run `npm i` - there may be updates you need.
1. Run the tests with `npm run test` - you should be starting with a working project; if you have any failing tests, you may not be set up right. Confirm that you have followed all of the above steps correctly, that you are on a branch that reflects the latest upstream changes, that you are in the project directory, etc.
1. To be doubly sure things are working, you can run the application with `npm run start` or `npm run start:watch` - you should see a message that says 'Started on 7890' (or whatever port you've configured it to run on, if you've changed your `.env`). You can stop the application with `Ctrl`+`C`. The tests should be reliable enough that this step is just for verification, so if you find tests are passing but you can't run the app please open an issue/let me know!
1. Make a development branch - whether it's a feature or a bugfix or something else, make a new branch off the code that you verified is working. Ideally, make the branch name descriptive of what you're working on, such as `feature/authorization-template` or `bugfix/SSL-errors`.

### This document is still in progress! Yell my way if you want to contribute and have any questions.

