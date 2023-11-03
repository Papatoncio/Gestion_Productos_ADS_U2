import pool from "../postgresql"

export const getProductos = (request, response) => {
    const accion = parseInt(request.body.accion);
    const filtro = JSON.stringify(request.body.filtro);

    pool.query('SELECT * FROM filtrar_producto($1, $2)', [filtro, accion], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

export const gestionarProductos = (request, response) => {
    const accion = parseInt(request.body.accion);
    const producto = JSON.stringify(request.body.producto);

    pool.query('SELECT * FROM gestionar_producto($1, $2)', [producto, accion], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });

    const id_producto = pool.query('SELECT id_producto FROM producto WHERE clave = $1', [producto.clave]);

    for (let id_categoria of request.body.producto.id_categoria) {
        pool.query('INSERT INTO productocategoria(id_producto, id_categoria) VALUES($1, $2)', [id_producto, id_categoria], (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).json(results.rows);
        });
    }
}
