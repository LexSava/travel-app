import app = require('../app');
import config = require('../common/config');
import connectToDB = require('../common/db/mongodb');

const port = process.env.PORT || config.DEV_PORT;

app.listen(port, () =>
  console.log(`server listening at http://localhost:${port}`)
);

connectToDB();
