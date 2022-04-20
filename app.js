const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

const newMeetingURL = "https://us04web.zoom.us/meeting/schedule";

app.get("/", function(req, res) {
    res.redirect(newMeetingURL);
});

app.listen(port, () => console.log(`App running on port ${port}!`));
