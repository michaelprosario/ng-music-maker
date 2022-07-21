// background: https://blog.logrocket.com/how-to-set-up-node-typescript-express/
import express, { Express } from 'express';
import dotenv from 'dotenv';
const routes = require('./routes');
const swaggerFile = require('./swagger-output.json')
const swaggerUi = require('swagger-ui-express')
var bodyParser = require('body-parser')

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(bodyParser.json({ type: 'application/json' }))
const port = 8000;

app.use('/', routes)
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
