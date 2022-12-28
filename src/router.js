const { Router } = require("express");
const router = Router();
const controller = require("./controller");

router.post("/sendSMS", controller.prueba);

module.exports = router;
