const express = require("express");
const router = express.Router();

const Daos = require("../models/daos.model");
//*********************************
//Get all Daos Present in the Database
//*********************************
router.get("/", async (req, res) => {
  const daos = await Daos.find().exec();
  return res.status(200).json({ success: true, data: daos });
});

//*********************************
//Get a particular Dao depend upon the Dao ID
//*********************************
//Eg. http://localhost:2244/daos/getDaoById?id=1123
router.get("/getDaoById", async (req, res) => {
  const dao = await Daos.findOne({ _id: req.query.id }).exec();

  if (dao) {
    return res.status(200).json({ success: true, data: dao });
  }

  return res.status(200).json({ success: false, data: dao });
});

//*********************************
//Store a new Dao data into the Database
//*********************************
router.post("/create", async (req, res) => {
  //Checks the Dao is already present or not
  let dao = await Daos.findOne({ name: req.body.name }).exec();

  //If presents, return "not possible to create the Dao"
  if (dao) {
    return res
      .status(400)
      .json({ success: false, error: "Dao already exists" });
  }

  //If not then create new Dao and store into the database
  dao = await Daos.create(req.body);
  return res.status(201).json({ success: true, data: dao });
});

module.exports = router;
