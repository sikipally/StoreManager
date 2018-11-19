import express from 'express';
import bodyParser from 'body-parser';
import {} from 'dotenv/config';
import morgan from 'morgan';
import router from './routes';


const app = express();
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router);
app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'Welcome to Store-Manager by Aprekuma Tamunoibi',
  });
});

app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Nothing found here please check the route and try again',
  });
});

module.exports = app;
