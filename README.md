# calm-charm

Repo for the Calm Charm mobile app

## Commit + PR Linting

Commit messages are best writting using the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) syntax but this is not currently enforces.
PR titles must be written using Conventional Commit syntax, and there is a Github action to check PR titles.

# Getting Started

## Running locally

Run `npm run start` to run the app locally on port 3000. Make sure that you have complete `.env` and `.env.test` files locally.

## Formatting

Formatting + ESLint options are saved in the repo, so should be picked up by the IDE. Run `npm run format:check` to look for any errors and `npm run format:fix` to try and auto-solve them. These commands are run when you commit to any branch, so you can't commit any code which goes against format guidelines.

## Building

Run `npm run build`

## Android

## Testing

## Running

## Releases

Releasing with [standard-version](https://www.npmjs.com/package/standard-version) changes the package version number and updates the CHANGELOG with all the things that have been PR'ed into the Main branch since the last releases. Using Conventional Commits makes sure that the PR changes are formatted into categories eg/ bug fixes, features.
