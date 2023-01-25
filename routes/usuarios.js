const {Router}=require('express');
const {check}=require('express-validator');
const {validarCampos} = require('../middlewares/validar-campos');
const {esRoleValido, CorreoExiste} = require ('../helpers/db-validators')

const { usuariosGet, usuariosPatch, usuariosPut, usuariosPost, usuariosDelete } = require('../controllers/usuarios');

const router = Router();

router.get('/',  usuariosGet);

router.put('/:id',  usuariosPut);

router.post('/', [
    check('nombre', 'El nombre obligatorio').not().isEmpty(),
    check('password', 'El password debe ser de mas de 6 letras').isLength({min:6}),
    check('correo', 'El correo no es valido').isEmail(),
    check('correo').custom(CorreoExiste),
    check('rol').custom(esRoleValido),
    validarCampos   
], usuariosPost);

router.patch('/',  usuariosPatch);

router.delete('/',  usuariosDelete);


module.exports = router;