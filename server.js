const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const obituaryRoutes = require('./routes/orbituary.routes');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Routes
app.use('/', obituaryRoutes);

// Sync Database
sequelize.sync()
  .then(() => console.log("Database synced"))
  .catch(err => console.log("Error syncing database:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
