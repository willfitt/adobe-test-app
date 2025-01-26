const express = require('express');
const app = express();
const port = 8080;

// Middleware for handling JSON requests
app.use(express.json());

// Example API endpoint /romannumeral?query={integer}
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the Express server!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});