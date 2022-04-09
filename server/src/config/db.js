const mongoose = require("mongoose");

const connect = () => {
  // return mongoose.connect("mongodb://127.0.0.1:27017/audit-block-demo2", {
  //mongosh "mongodb+srv://auditblock.thuxa.mongodb.net/myFirstDatabase" --apiVersion 1 --username schakraborty --password schakraborty

  return mongoose.connect(
    "mongodb+srv://schakraborty:schakraborty@auditblock.thuxa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
  );
};

module.exports = connect;
