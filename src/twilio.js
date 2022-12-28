const twilio = require("twilio");

const accountSid = "xxxxxxxxxx";
const authToken = "xxxxxxxxxx";

const client = new twilio(accountSid, authToken);

const createSMS = () => {
  client.messages
    .create({
      body: "Este es un mensaje de prueba",
      to: "xxxxxxxxxx",
      from: "xxxxxxxxxx",
    })
    .then((message) => console.log("SMS ===> ENVIADO"));
};

exports.sendSMS = () => createSMS();
