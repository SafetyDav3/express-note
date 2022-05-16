// Setup router
const path = require("path");
const router = require("router");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/assets/index.html"));
});

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/assets/notes.html"));
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/assets/index.html"));
});

module.exports = router;
