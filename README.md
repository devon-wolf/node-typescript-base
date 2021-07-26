# node-typescript-base

A template for Node-Express-PostgreSQL projects written in TypeScript, based on the Alchemy Code Lab Express/SQL template.

There are several `npm` scripts:
- `npm run start`
	- runs `tsc` to transpile your TS to JS, putting it in a `/dist` directory, then runs `node dist/server.js`
- `npm run start:watch`
	- runs two other scripts alongside each other using [`concurrently`](https://www.npmjs.com/package/concurrently), running `tsc` on any changes while updating with `nodemon`
- `npm run test` and `npm run test:watch`
	- running `jest` (configured for TS), either once or watching for changes
- `npm run setup-db`
	- runs through the database-related pieces of the template, dropping and creating tables and setting up a Postgres client
	- runs `tsc` to make sure it's using the latest code, then runs the `setup-db.js` file from `/dist`

Environment variables are currently funneled through the `constants` file for sake of organization. There are plenty of other, probably better ways to do this - implement whatever method you prefer!

## How to Use This Template
### (particularly if you're new to TypeScript)

- Click the handy green `Use this template` button at the top of the code for this repository. This will take you to the repo creation page - go ahead and make the repo as you normally would; you don't need to check the 'include all branches' box.

- When your new repo has been created from the template, clone it down from that new repo's page.

- In your local environment, `cd` into the newly cloned project and run `npm i` to install the needed packages (take a peek in the `package.json` for a full list).

- Set up your environment variables in a `.env` file. The included `.env-example` has a generic DATABASE_URL included and assigns PORT to 7890. Change these as needed in your `.env`. Any additional variables you might want to include in your `.env` should be funneled through `src/config/constants` when you include them in your project, following the pattern of what's already included. As mentioned above, this is something you can totally feel free to change; but if you're using the template as-is and not tinkering with the structure, this is the pattern to follow for things to work correctly.

- To check that everything has been configured correctly, I recommend running the tests (see scripts above). There is a single example test that should pass, but if you can't get it to pass on a fresh install then there is likely something off in how I've configured this. **Please let me know!** Feel free to open issues or PRs for this or anything else that seems fishy.

- If the test passes, run one of the start scripts and make sure it starts up correctly - once the server is successfully running you'll see a console log indicating what port it's listening on. If it doesn't work on the first try, try again - there are some quirks with how the TypeScript transpilation happens and I'm not confident I've worked them all out, but once the `/dist` folder has been created the start scripts should work just fine.

- The `/dist` folder gets created the first time `tsc` runs, which may happen as a result of several scripts. It is included in the `.gitignore` list, so if you need to include your transpiled code in the repo where this will be uploaded (e.g. for deployment) you will want to remove it from the `.gitignore`.

- Don't change files in the `/dist` folder. They're going to look awful, and that's okay. This is the result of your TypeScript code being transpiled to JavaScript, and it will update to reflect your most recent changes automatically.

- In general, leave the top-level folder/file hierarchy as it is. The `/sql` folder, for example, needs to be where it is to make it available to both the TS files in the `/src` directory and the JS files in `/dist` via the same path.
