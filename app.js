import express from 'express';
import fileUpload from 'express-fileupload';
import fileRoutes from './routes/file.route.js'

const app = express();

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads'
}));

app.use(express.static('images'));

app.set('port', 3000);

app.use(express.json());

app.use('/api/v1/fileStore', fileRoutes);

export default app;