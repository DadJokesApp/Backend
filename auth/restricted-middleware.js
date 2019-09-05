const jwt = require('jsonwebtoken');
const secrets = ('../config/secrets.js');


module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        console.log(err);
        res.status(401).json({message: "Problem with the token", error: err});
      } else {
        req.decodedJwt = decodedToken;
        next();
      }
    })
  } else {
    // res.status(401).json({message: "No token"})

    // we should show only public jokes here...
    // can we redirect to another route, like jokes/public ?

    res.redirect('/api/jokes/public');
  }
}
