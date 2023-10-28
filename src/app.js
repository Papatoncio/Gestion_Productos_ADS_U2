//Importación de modulos npm (express, morgan, cors)
import express from "express";
import morgan from "morgan";
import cors from "cors";

//Importación de rutas para cada colección de la base de datos
import Image from "./routes/image.routes";
import Producto from "./routes/producto.routes";

const app = express(); //Definición de constante para configurar la aplicación

//Definición de puerto en el que va a correr el servidor
app.set('port', process.env.PORT || 4000);

//Uso de modulos npm (express, morgan, cors)
app.use(express.json()); //Definir uso de json en express
app.use(morgan('dev')); //Definir dev con morgan
app.use(cors()); //Definir uso de cors

//Rutas
//Ruta raíz del servidor
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my application' });
});

app.use('/api/image', Image); //Ruta para acceder a image
app.use('/api/producto', Producto); //Ruta para acceder a producto

//Exportación de la configuración
export default app