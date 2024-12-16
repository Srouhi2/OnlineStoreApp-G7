const app = require('./app'); // Import the app setup

const PORT = 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});