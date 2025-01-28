import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import excelRoutes from './routes/excelRoutes';
import pdfRoutes from './routes/pdfRoutes'
import cloudRoutes from './routes/cloudRoutes'
import videoRoutes from './routes/videoRoutes'
import notifyRoute from './routes/notifyRoute';

import {
  botoneraRoutes,
  coreRoutes,
  ordenanzaRoutes,
  votacionRoutes,
  botoneraDemoRoute,
  ordenanzaDemoRoute,
  votacionDemoRoute,
  botoneraPostgresRoute,
  ordenanzaPostgresRoute,
  votacionPostgresRoute,
  botoneraTalcahuanoRoute,
  ordenanzaTalcahuanoRoute,
  votacionTalcahuanoRoute,
  infoblBotoneraRoute,
  infoblOrdenanzaRoute,
  infoblVotacionRoute,
  s3FilesRoutes
} from './routes/index';

dotenv.config();

const app = express();
const port = 5557;

// Configuración de CORS
app.use(cors());

// Middleware para procesar JSON
app.use(express.json());

// rutas
app.use('/auth', authRoutes);
app.use('/excel', excelRoutes);
app.use('/pdfs', pdfRoutes);
app.use('/doc', cloudRoutes);
app.use('/video', videoRoutes);

app.use('/core', coreRoutes);

//cron server
app.use('/cron', notifyRoute);

//rutas s3
app.use('/upload-file', s3FilesRoutes);

//rutas infobl
app.use('/botonera-bl', infoblBotoneraRoute);
app.use('/botonera-bl', infoblOrdenanzaRoute);
app.use('/votacion-bl', infoblVotacionRoute);


//rutas core
app.use('/botonera', botoneraRoutes);
app.use('/ordenanza', ordenanzaRoutes);
app.use('/votacion', votacionRoutes);

//rutas demo
app.use('/botonera-demo', botoneraDemoRoute);
app.use('/ordenanza-demo', ordenanzaDemoRoute);
app.use('/votacion-demo', votacionDemoRoute);

//rutas postgres
app.use('/botonera-postgres', botoneraPostgresRoute);
app.use('/ordenanza-postgres', ordenanzaPostgresRoute);
app.use('/votacion-postgres', votacionPostgresRoute);

//rutas talcahuano
app.use('/botonera-talcahuano', botoneraTalcahuanoRoute);
app.use('/ordenanza-talcahuano', ordenanzaTalcahuanoRoute);
app.use('/votacion-talcahuano', votacionTalcahuanoRoute);

// Iniciar el servidor
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor escuchando en http://0.0.0.0:${port}`);
});