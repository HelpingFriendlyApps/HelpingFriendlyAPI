const {Shows} = require('../db.js');

var ShowsModel = module.exports = {

    getAllShows: function () {
        console.log(Shows.find());
        return Shows.find();
    }
}