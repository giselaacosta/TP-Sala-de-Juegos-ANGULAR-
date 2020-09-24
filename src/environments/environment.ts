// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  database: 'https://tpjuegos-6e863.firebaseio.com',
  firebaseConfig : {
    apiKey: "AIzaSyDCt8ShAk2tP1Jzk7hPtEaKdtzi_Y10hdM",
    authDomain: "tpjuegos-6e863.firebaseapp.com",
    databaseURL: "https://tpjuegos-6e863.firebaseio.com",
    projectId: "tpjuegos-6e863",
    storageBucket: "tpjuegos-6e863.appspot.com",
    messagingSenderId: "399187566981",
    appId: "1:399187566981:web:5fce434f0f5581f73ee4ec",
    measurementId: "G-7VZZ3VD3FQ"
  },
  jugadores: 'jugadores.json',
  juegos: 'archivoJuegos.json',
  palabras: ['tomate','zanahoria','vehiculo','persona','episcopal','vasija','palindromo',
          'elefante']
};