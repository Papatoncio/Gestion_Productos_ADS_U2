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
}
