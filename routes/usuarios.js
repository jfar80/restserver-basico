const {Router}=require('express');
const {check}=require('express-validator');
const Role = require('../models/role');
const {validarCampos} = require('../middlewares/validar-campos');
const { usuariosGet, usuariosPatch, usuariosPut, usuariosPost, usuariosDelete } = require('../controllers/usuarios');

const router = Router();

router.get('/',  usuariosGet);

router.put('/:id',  usuariosPut);

router.post('/', [
    check('nombre', 'El nombre obligatorio').not().isEmpty(),
    check('password', 'El password debe ser de mas de 6 letras').isLength({min:6}),
    check('correo', 'El password debe ser de mas de 6 letras').isLength({min:6}),
    //check('rol', 'No es un rol permitido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol').custom(async(rol='') => {
        const existeRol = await Role.findOne({ rol });
        if (!existeRol){
            throw new Error(`El rol ${rol} no esta registrado en la base de datos`)
        }
    }),
    validarCampos   
], usuariosPost);

router.patch('/',  usuariosPatch);

router.delete('/',  usuariosDelete);


module.exports = router;