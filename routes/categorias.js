const {Router}=require('express');
const {check}=require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { crearCategoria } = require('../controllers/categorias');



const router = Router();

//optener todas las categorias - publico
router.get('/', (req, res) => {
    res.json('get');
});

//optener una categoria por id - publico 
//TODO check('id).custom(existeCategoria) ver video taread crud de categorias min 4
router.get('/:id',(req, res) => {
    res.json('get - id');
});

//crear una categoria - privado - cualquier rol, cualquier persona con un token valido
router.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(), 
    validarCampos 
    ], crearCategoria); 

//actualizar un registro por este id
router.put('/:id', (req, res) => {
    res.json('put');
});

//Eliminar un registro por este id - cualquiera con token valido
router.delete('/:id', (req, res) => {
    res.json('delete');
});


//borrar una categoria - admin
router.put('/:id', (req, res) => {
    res.json('put');
});


module.exports = router;