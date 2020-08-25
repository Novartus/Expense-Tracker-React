const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log(
      `MonogDB Connected Successfully to ${conn.connection.host}`.red.underline
    );
  } catch (error) {
    console.error(`${error}`.yellow);
    process.exit(1);
  }
};

module.exports = connectDB;
