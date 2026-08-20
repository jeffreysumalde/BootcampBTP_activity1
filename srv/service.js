const { insertbooks } = require('../srv/setter/index'); //Actions from setter folder
const { fetchbooks } =  require('../srv/getter/index'); //Actions from getter folder

module.exports = async srv => {
    srv.on('insertbooks', async (req) => {
    const { borrowerName, bookTitle, authorName, readDate } = req.data;
    const result = await insertbooks( borrowerName, bookTitle , authorName, readDate);
    return result ; //Return a string.
    });

    srv.on('fetchbooks', async() => {
    const result = await fetchbooks();
    return result;
    });
};

