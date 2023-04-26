import app from './app';
import casesRoutes from './routes/cases.routes';

app.use(casesRoutes);

app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
}
);

