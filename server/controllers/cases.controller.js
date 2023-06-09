import { getConnection } from "../database";

const getCases = async (req, res) => {
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT  id, nombre, probabilidad, fecha_lanzamiento, rareza, imagen_url, precio FROM cases");
        res.json(result);
    }
    catch(error){
        res.status(500);
        res.send(error.message);
        console.log(error);
    }
};

const getCase = async (req, res) => {
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT  nombre, descripcion, imagen_url, precio, probabilidad, skins_disponibles, fecha_lanzamiento, rareza FROM cases WHERE id = " + req.params.id);
        res.json(result);
    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }
}

const createCase = async (req, res) => {
    try{
        const { nombre, descripcion, precio, probabilidad, skins_disponibles, fecha_lanzamiento, rareza, imagen_url} = req.body;
        const connection = await getConnection();
        const newCase = {
            nombre,
            descripcion,
            precio,
            probabilidad,
            skins_disponibles,
            fecha_lanzamiento,
            rareza,
            imagen_url
        };
        const result = await connection.query("INSERT INTO cases SET ?", [newCase]);
        res.json(result);
    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const updateCase = async (req, res) => {
    try{
        const { id } = req.params;
        const { nombre, descripcion, precio, probabilidad, skins_disponibles, fecha_lanzamiento, rareza, imagen_url} = req.body;
        const connection = await getConnection();
        const newCase = {
            nombre,
            descripcion,
            precio,
            probabilidad,
            skins_disponibles,
            fecha_lanzamiento,
            rareza,
            imagen_url
        };
        const result = await connection.query("UPDATE cases SET ? WHERE id = ?", [newCase,id]);
        res.json(result);
    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const deleteCase = async (req, res) => {
    try{
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM cases WHERE id = ?", [id]);
        res.json(result);
    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getCases,
    getCase,
    createCase,
    updateCase,
    deleteCase
};
