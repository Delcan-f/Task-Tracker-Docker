const app = require("./index.js");
const connectDB = require("./utilites/database.js");

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
