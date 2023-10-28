import { Router } from "express"; //Importación Router de express

import * as categoriaController from '../controllers/Categoria.controller'; //Importación del controlador de categoria

const router = Router(); //Declaración de constante router para poder usar las rutas

router.post('/obtener', categoriaController.getCategorias); //Ruta para obtener todos los productos

router.post('/gestionar', categoriaController.gestionarCategorias); //Ruta para gestionar los productos

export default router //Exportación de las rutas