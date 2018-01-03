// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBKsjpYUqdqDTTE3UGwZI2B80y_IirnYIA',
    authDomain: 'angular-corpse-game.firebaseapp.com',
    databaseURL: 'https://angular-corpse-game.firebaseio.com',
    projectId: 'angular-corpse-game',
    storageBucket: 'angular-corpse-game.appspot.com',
    messagingSenderId: '481710050138'
  }
};
