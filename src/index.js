import express from 'express';
import { ServerConfig } from './config/server-config.js';
import apiRoutes from './routes/index.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Server Running on Port:${ServerConfig.PORT}`);
});