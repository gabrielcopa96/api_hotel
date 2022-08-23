
const version = (req, res) => {
    res.status(200).json({
        version: "1.0.0"
    });
}


module.exports = {
    version
};


