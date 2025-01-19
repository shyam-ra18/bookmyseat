import express from 'express';
import apiRoutes from './routes/index.js';
import { config } from './config/index.js';

const { Logger, ServerConfig } = config;

const app = express();

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Server Running on Port:${ServerConfig.PORT}`);
});