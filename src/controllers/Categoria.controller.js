import pool from "../postgresql"

export const getCategorias = (request, response) => {
    const accion = parseInt(request.body.accion);
    const filtro = JSON.stringify(request.body.filtro);

    pool.query('SELECT * FROM filtrar_categoria($1, $2)', [filtro, accion], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

export const gestionarCategorias = (request, response) => {
    const accion = parseInt(request.body.accion);
    const categoria = JSON.stringify(request.body.categoria);

    pool.query('SELECT * FROM gestionar_categoria($1, $2)', [categoria, accion], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}
