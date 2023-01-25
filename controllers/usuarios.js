const { response, request} = require('express');


const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');

const usuariosGet = (req = request, res=response)=> {
    const {q, nombre, apikey} =req.query;
    res.json({
       msg: 'get API - controlador',
       q,
       nombre,
       apikey
   });
}
const usuariosPut = (req, res=response)=> {
    const id =req.params.id;
    res.json({
       msg: 'Put API - controlador',
       id

   });
}
const usuariosPost = async (req, res=response)=> {

    const {nombre, correo, password, rol} =req.body;
    const usuario = new Usuario({nombre, correo, password,rol});

    //Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password =bcryptjs.hashSync(password, salt);

    //Guardar en base de datos
    await usuario.save();

    res.json({
       
       usuario
   });
}
const usuariosPatch = (req, res)=> {
    res.json({
       msg: 'Patch API - controlador'
   });
}
const usuariosDelete = (req, res)=> {
    res.json({
       msg: 'Delete API - controlador'
   });
}
module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete,
}