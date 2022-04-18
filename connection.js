const mongoose = require("mongoose");

// start editable

const dbname = "retailer";
const username = "rmb_2002";
const password = "crazy8s";

const url = `mongodb+srv://${username}:${password}@mondayweekfour.6osbn.mongodb.net/${dbname}?retryWrites=true&w=majority`;

// end editable

// connection start

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// console feedback

mongoose.connection.on("connected", (err, res) => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.log("Error connecting to MongoDB ", err);
});

// end connection code
