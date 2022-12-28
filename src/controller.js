const sms = require("./twilio");

exports.prueba = (req, res) => {
  try {
    sms.sendSMS();
    if (!sms) {
      res.send("Error al envíar el mensaje");
    }

    res.send("Mensaje envíado exitosamente");
  } catch (error) {
    console.error(error);
  }
};
