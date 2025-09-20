require('dotenv').config();
const app = require('./app');
const db = require('./models');

const PORT = process.env.PORT || 4000;

async function start() {
  try {
    await db.sequelize.authenticate();
    await db.sequelize.sync({ alter: true });
    console.log('Database connected & models synced');
    
    // This line will now work correctly
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

start();
