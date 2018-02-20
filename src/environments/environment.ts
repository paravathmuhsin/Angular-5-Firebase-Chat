// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: 'AIzaSyBz3jvrPD32KXJ-CIYAU2o1Vr6lZ18kVYg',
      authDomain: 'chat-ca2c7.firebaseapp.com',
      databaseURL: 'https://chat-ca2c7.firebaseio.com',
      projectId: 'chat-ca2c7',
      storageBucket: 'chat-ca2c7.appspot.com',
      messagingSenderId: '413541450245'
  }
};
