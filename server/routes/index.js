const express = require("express");
const router = express.Router();

router.get("/fin", (req, res) => {
  res.end("le serveur de test est fermé");
});

module.exports = router;
