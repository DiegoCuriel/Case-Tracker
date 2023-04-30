import express from 'express';
import morgan from 'morgan';

import casesRoutes from './routes/cases.routes';

const app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); // Permite solicitudes desde http://localhost:3000
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Permite los métodos HTTP permitidos
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Permite las cabeceras permitidas
    next();
  });

app.set('port', process.env.PORT || 3001);

app.use(morgan('dev'));
app.use(express.json());

app.use(casesRoutes);

export default app;
