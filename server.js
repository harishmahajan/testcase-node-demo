const express = require('express');
const app = express();
const port = 3300;
app.get('/message', function (req, res) {
    var h = { "name": "harish" };
    res.send(h);
});
app.get('/media', function (req, res) {
    var response = {
        result: [{
            "media": "podcast",
            "link": "https://podcasts.com/574",
            "createdAt": "2018-12-20T06:30:00.618Z",
            "updatedAt": "2019-01-31T06:30:00.864Z"
        }],
        total: 1
    }
    if (response.result.length > 0) {
        res.send(response);
    } else {
        var errorObj = {
            httpCode: 404,
            message: 'NOT_FOUND',
            description: 'The resource referenced by request does not exists.',
            details: 'Podcast is not available'
        }
        res.status(404);
        res.send(errorObj)
    }
});
app.listen(port, function () {
    console.log("\nServer is running on port " + port);
});
module.exports = app; // for testing