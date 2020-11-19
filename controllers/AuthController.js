module.exports = {
    login: (req, res) =>{
        console.log(req.body);
        return res.json(req.body);
    }
}