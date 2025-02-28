import  mongoose from 'mongoose';
const config = require("./main");

export const initDB = () => {
  mongoose.connect(config.databaseL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  mongoose.set('useFindAndModify', false);
  mongoose.set('useCreateIndex', true);
  
  mongoose.connection.once("open", () => {
    console.log("connected to database");
  });
};

export default initDB;
