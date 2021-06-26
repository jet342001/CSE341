const express = require("express");
const router = express.Router();

// Path to your JSON file, although it can be hardcoded in this file.
const dummyData = require("../public/dummydata.json");

router.get("/", (req, res, next) => {
  res.render("pages/pr10", {
    title: "Team Activity 10",
    path: "/pr10",
  });
});

router.get("/fetchAll", (req, res, next) => {
  res.json(dummyData);
});

router.post("/insert", (req, res, next) => {
  //console.log("you reached the insert path");
  if (req.body.newName !== undefined) {
    const newName = req.body.newName;

    // Make our submissions somewhat unique.
    if (!dummyData.avengers.some((a) => a.name === newName)) {
      dummyData.avengers.push({ name: newName }); // Push new object into the dummyData
      res.sendStatus(200);
    }
  } else {
    res.sendStatus(400); // Bad request error code
  }
});

module.exports = router;
