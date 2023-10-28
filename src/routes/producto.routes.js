import { Router } from "express"; //Importación Router de express

import * as productoController from "../controllers/Producto.controller"; //Importación de todos los controladores

const router = Router(); //Declaración de constante router para poder usar las rutas

router.get('/obtener', productoController.getProductos); //Ruta para obtener todos los productos

router.get('/gestionar', productoController.gestionarProductos); //Ruta para gestionar los productos

export default router //Exportación de las rutas