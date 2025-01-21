var authmodel = require("./createmodel.js");

exports.users1data = async (req, res) => {
  try {
    var data = await authmodel.users1model();

    if (data) {
      res.send(data);
    } else {
      res.send("no data ");
    }
  } catch (err) {
    res.send(err);
  }
};