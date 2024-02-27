const mongoose = require("mongoose");
console.log("process.env.MONGO_URI :>> ", process.env.MONGO_URI);
const db = mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

module.exports = db;
