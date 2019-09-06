<<<<<<< HEAD
require('dotenv').config();
const server = require('./api/server.js');

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
=======
// Set up server 💻
const server = require('./api/server')

// Enable .env 💬
require('dotenv').config()

// Made port dynamic for deployment 🚀
const port = process.env.PORT || 4000

// Let dev know server is listening 👂
server.listen(port, () => {
  console.log(`\n* Server Running on http://localhost:${port} *\n`)
})
>>>>>>> 2901c76431f5df3cffc8ec04c22fbecfcf8ba752
