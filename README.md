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

## How to Use This Template

### (particularly if you're new to TypeScript)

- Click the handy green `Use this template` button at the top of the code for this repository. This will take you to the repo creation page - go ahead and make the repo as you normally would; you don't need to check the 'include all branches' box.

- When your new repo has been created from the template, clone it down from that new repo's page.

- In your local environment, `cd` into the newly cloned project and run `npm i` to install the needed packages (take a peek in the `package.json` for a full list).

- Set up your environment variables in a `.env` file. The included `.env-example` has a generic DATABASE_URL included and assigns PORT to 7890. Change these as needed in your `.env`. The `dotenv` module configuration is handled in the scripts, so you can simply refer to `process.env.SOME_VARIABLE` wherever needed without importing the module.

- To check that everything has been configured correctly, I recommend running the tests (see scripts above). There is a single example test that should pass, but if you can't get it to pass on a fresh install then there is likely something off in how I've configured this. **Please let me know!** Feel free to open issues or PRs for this or anything else that seems fishy.

- If the test passes, run one of the start scripts and make sure it starts up correctly - once the server is successfully running you'll see a console log indicating what port it's listening on. If it doesn't work on the first try, try again - there are some quirks with how the TypeScript transpilation happens and I'm not confident I've worked them all out, but once the `/dist` folder has been created the start scripts should work just fine.

- The `/dist` folder gets created the first time `tsc` runs, which may happen as a result of several scripts. It is included in the `.gitignore` list, so if you need to include your transpiled code in the repo where this will be uploaded (e.g. for deployment) you will want to remove it from the `.gitignore`.

- Don't change files in the `/dist` folder. They're going to look awful, and that's okay. This is the result of your TypeScript code being transpiled to JavaScript, and it will update to reflect your most recent changes automatically.

- In general, leave the top-level folder/file hierarchy as it is. The `/sql` folder, for example, needs to be where it is to make it available to both the TS files in the `/src` directory and the JS files in `/dist` via the same path.

## Testing and CI
Jest testing in GitHub's test environment is configured in `.github/workflows/nodejs.yml`. I have removed the hardcoded credentials so that this can be used with whatever test database environment you happen to be using. You will need to add the relevant credentials to your GitHub repository - instructions for this process are currently outside the scope of this template, but I'll add a good link if I find one. Here are the credentials you will need to add if you wish to use this feature - these fields can also be replaced in the mentioned `.yml` file with the relevant information:
- `POSTGRES_TEST_USER`
  - the username for your postgres test environemnt
- `POSTGRES_TEST_PASSWORD`
  - the password for your postgres test environment
- `POSTGRES_TEST_DB`
  - the connection string for your postgres test database, which would look *something* like `postgres://username:password@host:port/databasename`