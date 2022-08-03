import app from "./app";
import "dotenv/config";
import connectToDatabase from "./connection";

const port = process.env.PORT || 3000;

connectToDatabase()
  .then(() => {
    app.listen(port, () =>
      console.log(`Example app listening on port ${port}!`)
    );
  })
  .catch((err) => console.error(err));
