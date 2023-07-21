import app from "./app.js";
import { sequelize } from "../db/db.js";
 


const main = async () => {
  try {
     await sequelize.sync()
    app.listen(4000);
    console.log("Server is listening on port ", 4000);
  } catch (error) {
    console.log("error:", error);
  }
};

main();
