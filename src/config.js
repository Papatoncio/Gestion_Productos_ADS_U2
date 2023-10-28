//Importación config
import { config } from 'dotenv';

config(); //Permitir configuración

//Exportar configuración de mongodbURL y SECRET
export default {
    mongodbURL: process.env.MONGODB_URI, //URL Mongo Atlas
    SECRET: 'sammyshop-api' //Palabra secreta para generación de token
}