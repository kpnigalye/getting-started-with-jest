// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  usersUrl: "http://localhost:3000/users/",
  feesDetailsUrl: "http://localhost:3000/feesdetails/",
  paymentsUrl: "http://localhost:3000/payments/",
  studentsUrl: "http://localhost:3000/students/",
  settingsUrl: "http://localhost:3000/settings/"
};
