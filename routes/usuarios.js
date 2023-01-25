const {Router}=require('express');
const {check}=require('express-validator')
const { usuariosGet, usuariosPatch, usuariosPut, usuariosPost, usuariosDelete } = require('../controllers/usuarios');

const router = Router();

router.get('/',  usuariosGet);

router.put('/:id',  usuariosPut);

router.post('/', [
    check('correo', 'El correo no es valido').isEmail(),
], usuariosPost);

router.patch('/',  usuariosPatch);

router.delete('/',  usuariosDelete);


module.exports = router;