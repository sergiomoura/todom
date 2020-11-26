module.exports = {
    index: (req, res) => {
        console.log(req.token);
        res.send("lalala");
    }
}