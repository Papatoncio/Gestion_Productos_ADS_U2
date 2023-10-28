import { Schema, model } from "mongoose"; //Importación Schema y model de mongoose

//Creación de esquema para la colección
const imageSchema = new Schema(
    { //Atributos de la colección
        claveProducto: {
            type: String,
            required: true
        },
        imgB64: [{
            type: String,
            required: true
        }]
    }
);

export default model('Image', imageSchema); //Exportación del modelo basado en el esquema