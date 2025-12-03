const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER_SUPER_ADMIN,
    pass: process.env.EMAIL_PASS_SUPER_ADMIN, // ⚠️ Deve essere una App password
  },
});

// ✅ DEBUG SMTP: verifichiamo che sia pronto
transporter.verify((err, success) => {
  if (err) {
    console.error(" Errore di connessione SMTP:", err);
  } else {
    console.log(" SMTP pronto a inviare email");
  }
});

module.exports = transporter;
