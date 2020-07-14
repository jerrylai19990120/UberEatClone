
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 5000;

const posts = require("./routes/posts");

app.use('/posts', posts);

app.listen(port, () => {
    
})
