
module.exports = function (err, req, res, next) {
    console.error("Error logged: ", err); 

    res.status(500).send('Something failed.');
}