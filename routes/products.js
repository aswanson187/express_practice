const express = require("express");
const router = express.Router();

router.get("/all", (req, res) => {
  res.send("/all");
});

router.get("/:productId", (req, res) => {
  res.send(req.params);
});

module.exports = router;
