var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { messages: messages });
});

router.post("/new",(req,res)=>{
  let contents=req.body;

  messages.unshift({
    text:contents.message,
    user:contents.name,
    added:new Date(),
  })

  res.redirect("/");
})

module.exports = router;
