const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Description',
  },
  host: '8000-michaelpros-ngmusicmake-rpifr6736o5.ws-us54.gitpod.io',
  schemes: ['https'],
};

const outputFile = './dist/swagger-output.json';
const endpointsFiles = ['./dist/routes.js'];

/* NOTE: if you use the express Router, you must pass in the
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
