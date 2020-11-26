module.exports = {
    index: (req, res) => {
        console.log(req.user);
        res.send("lalala");
    }
}