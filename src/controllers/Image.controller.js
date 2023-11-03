import Image from "../models/Image";

// Método para obtener todas las imagenes
export const findAllImages = async (req, res) => {
    // Busca todas las imagenes
    const allImages = await Image.find();

    //Si encuentra imagenes continua si no muestra un error
    if (allImages.length == 0) return res.json({ message: "No se encontraron imagenes" });

    res.json({ message: "Imagenes encontradas", object: allImages });
}

// Método para obtener las imagenes de un producto
export const findImagesByProduct = async (req, res) => {
    // Busca las imagenes de un producto
    const productImages = await Image.find({ claveProducto: req.body.claveProducto });

    //Si encuentra imagenes continua si no muestra un error
    if (productImages.length == 0) return res.json({ message: "No se encontraron imagenes" });

    res.json({ message: "Imagenes encontradas", object: productImages });
}

// Método para insertar imagenes de un producto
export const insertImages = async (req, res) => {
    // Inserta las imagenes de un producto
    const newImages = new Image({
        claveProducto: req.body.claveProducto,
        imgB64: req.body.imgB64
    });

    // Guarda las imagenes
    const imageSaved = await Image.insertMany(newImages);

    res.json({ message: "Imagenes insertadas", object: imageSaved });
}

// Método para eliminar imagenes de un producto
export const deleteImages = async (req, res) => {
    // Elimina las imagenes de un producto
    const deletedImages = await Image.deleteMany({ claveProducto: req.body.claveProducto });

    //Si elimina checkin continua si no muestra un error
    if (deletedImages.deletedCount == 0) return res.json({ message: "No se encontraron imagenes" });

    res.json({ message: "Imagenes eliminadas", object: deletedImages });
}

// Método para actualizar imagenes de un producto
export const updateImages = async (req, res) => {
    // Actualiza las imagenes de un producto
    const updatedImages = await Image.updateMany({ claveProducto: req.body.claveProducto }, { imgB64: req.body.imgB64 });

    //Si actualiza checkin continua si no muestra un error
    if (updatedImages.modifiedCount == 0) return res.json({ message: "No se encontraron imagenes" });

    res.json({ message: "Imagenes actualizadas", object: updatedImages });

}