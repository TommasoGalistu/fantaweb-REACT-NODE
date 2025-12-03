const jwt = require("jsonwebtoken");

module.exports = function allowRoles(...allowedRoles) {
  return (req, res, next) => {
    try {
      const token = req.cookies.token;
      if (!token) return res.status(401).json({ error: "Token mancante" });

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (!allowedRoles.includes(decoded.role)) {
        return res.status(403).json({ error: "Accesso negato: ruolo insufficiente" });
      }

      req.user = decoded; 
      next();
    } catch (err) {
      return res.status(403).json({ error: "Token non valido o scaduto" });
    }
  };
};
