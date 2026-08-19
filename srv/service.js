const { insertbooks } = require('../srv/setter/index'); //Actions from setter folder

module.exports = async srv => {
    srv.on('inserbooks', async (req) => {
    const { borrowerName, bookTitle, authorName, readDate } = req.data;
    const result = await insertbooks( borrowerName, bookTitle , authorName, readDate);
    return result ; //Return a string.
    });
};

