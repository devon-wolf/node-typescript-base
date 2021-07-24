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