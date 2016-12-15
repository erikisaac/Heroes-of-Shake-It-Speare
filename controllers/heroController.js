var Reminder = require("../models/heroModel")

var heroController = {
  index: function(req, res) {
    Hero.find({}, function(err, docs) {
      // res.render("reminders/index", {reminders: docs});
    });
  }
}

module.exports = heroController;