const functions = require("firebase-functions");

exports.hello = functions.https.onRequest((req, res) => {
  res.json({message: "Hello from Firebase Backend 🎉"});
});
