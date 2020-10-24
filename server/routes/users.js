const express = require("express");
const router = express.Router();
const User = require("../");

//Creating one
router.post("/login", async (req, res) => {
  const mockedUser = {
    email: 'test@test.pl',
    password: 'Pasword1',
  }
  try {
    if(req.body.email === mockedUser.email && req.body.password === mockedUser.password){
      res.status(200).json({ message: 'success'});
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
module.exports = router;
