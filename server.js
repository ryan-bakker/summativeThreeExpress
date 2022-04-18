const express = require("express");
const cors = require("cors");
const Products = require("./models/products");
const Comments = require("./models/comments");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./connection");
app.use(cors());

// app to use api routes
const router = express.Router();

app.use("/api", router);

// Routes

router.get("/view-products", function (req, res) {
  Products.find().then((response) => {
    res.json(response);
  });
});

// Get products

router.get("/view-product-by-id/:id", function (req, res) {
  Products.findOne({ _id: req.params.id }).then((response) => {
    res.json(response);
  });
});

// Delete single product

router.delete("/delete-product-by-id/:id", function (req, res) {
  Products.deleteOne({ _id: req.params.id })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      // if there was an error return it to the app/user
      return res.json({ error: true, error_type: err });
    });
});

// Create new product

router.post("/create-product", function (req, res) {
  var newProduct = new Products();
  var theFormData = req.body;
  console.log(">>> ", theFormData);

  Object.assign(newProduct, theFormData);

  newProduct
    .save()
    .then((response) => {
      return res.json(response);
    })
    .catch((err) => {
      // if there was an error return it to the app/user
      return res.json({ error: true, error_type: err });
    });
});

// Update existing product

router.put("/update-product/:id", (req, res) => {
  Products.findOne({ _id: req.params.id }, function (err, objFromMongoDB) {
    var data = req.body;

    if (err) {
      return res.json({ result: false });
    }

    Object.assign(objFromMongoDB, data);
    objFromMongoDB.save().then((response) => {
      res.json({ result: response });
    });
  });
});

// Get comments

router.get("/view-comment", function (req, res) {
  Comments.find().then((response) => {
    res.json(response);
  });
});

// Delete single comment

router.delete("/delete-comment-by-id/:id", function (req, res) {
  Comments.deleteOne({ _id: req.params.id })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      // if there was an error return it to the app/user
      return res.json({ error: true, error_type: err });
    });
});

// Create new comment

router.post("/create-comment", function (req, res) {
  var newComment = new Comments();
  var theFormData = req.body;
  console.log(">>> ", theFormData);

  Object.assign(newComment, theFormData);

  newComment
    .save()
    .then((response) => {
      return res.json(response);
    })
    .catch((err) => {
      // if there was an error return it to the app/user
      return res.json({ error: true, error_type: err });
    });
});

// catch bad endpoints on the api route only

router.get("/*", (req, res) => {
  return res.json({ result: "hey, no hacking please...." });
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Port ${PORT} on standby`);
});
