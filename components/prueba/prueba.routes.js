 const {Router} = require ("express");
 const router = Router();

 router.get("/", (req, res)=>{
    res.status(200).send('Ruta de prueba')
 })

 module.exports = router;
