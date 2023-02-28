# calm-charm 🌼

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

This project uses [Capacitor.js](https://capacitorjs.com/) to write and build a cross-platform app from a React Webapp.
To sync changes to Android studio run -
`npx cap copy`
`npx cap syncy`
`npx cap open android`
From Android studio it should be possible to run the app on an emulated device, or build an APK to run on a physical device.

## iOS

//TODO if app is popular on Android or makes enough to cover iOS development costs. Capacitor allows us to build for iOS so shouldn't be too tricky.

## Testing

Ideally every UI component would have a Jest test. The tests must include at least a render + snapshot test, but it's encouraged to include other relevent test cases.
To run the Jest tests run `npm run test`, or to update snapshots run `npx jest -u`

//TODO - For complex UI interactions we use e2e testing with Cypress. This is yet to be configured.

## Running

To run the Calm Charm app locally, simply run `npm start`. For running on native iOS/Android devices, see above section in README.

## Releases

Releasing with [standard-version](https://www.npmjs.com/package/standard-version) changes the package version number and updates the CHANGELOG with all the things that have been PR'ed into the Main branch since the last releases. Using Conventional Commits makes sure that the PR changes are formatted into categories eg/ bug fixes, features.
