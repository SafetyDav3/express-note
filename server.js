const htmlRoutes = require("./routes/htmlRoutes/index.js");
const apiRoutes = require("./routes/apiRoutes/index.js");
// Express setup
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

// Parse docs and set static
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Routes for api and html
app.use(`/api`, apiRoutes);
app.use(`/`, htmlRoutes);

// Make to server live and log the address
app.listen(PORT, () => {
  console.log(`

Server now live at address below...

↓↓↓↓↓↓
→→→→→→→→→ http://localhost:${PORT}/
↑↑↑↑↑↑

`);
});
