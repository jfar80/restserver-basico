const { Categoria } = require('../models');
const Role = require('../models/role');
const usuario = require('../models/usuario');
const Producto = require('../models/producto');


const esRoleValido = async(rol='') => {
    const existeRol = await Role.findOne({ rol });
    if (!existeRol){
        throw new Error(`El rol ${rol} no esta registrado en la base de datos`)
    }
};
const CorreoExiste =async(correo ='')=>{
const existeEmail = await Usuario.findOne({correo});
if (existeEmail){
    throw new Error(`El correo ${correo} ya esta registrado en la base de datos`)
}
};
const IdExiste =async(id)=>{
    const existeId = await usuario.findById(id);
    if (!existeId){
        throw new Error(`El id ${id} no existe en la base de datos`) 
     }
};

const existeCategoriaPorId =async(id)=>{
    const existeCategoria = await Categoria.findById(id);
    if (!existeCategoria){
        throw new Error(`El id ${id} no existe en la base de datos`) 
     }
};
const existeProductoPorId =async(id)=>{
    const existeProducto = await Producto.findById(id);
    
    if (!existeProducto){
        throw new Error(`El id ${id} no existe en la base de datos`) 
     }
};

module.exports = {esRoleValido, CorreoExiste, IdExiste, existeCategoriaPorId, existeProductoPorId}