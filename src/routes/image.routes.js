import { Router } from "express"; //Importación Router de express

import * as imageController from "../controllers/Image.controller";  //Importación de metódos

const router = Router(); //Declaración de constante router para poder usar las rutas

router.get('/', imageController.findAllImages); //Ruta para obtener todas las imagenes

router.get('/producto/', imageController.findImagesByProduct); //Ruta para obtener imagenes de un producto

router.post('/', imageController.insertImages); //Ruta para insertar imagenes

router.delete('/', imageController.deleteImages); //Ruta para eliminar imagenes

router.put('/', imageController.updateImages); //Ruta para actualizar imagenes

export default router //Exportación de las rutas