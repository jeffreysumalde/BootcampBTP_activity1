const { insertbooks, deletebooks } = require('../srv/setter/index'); //Actions from setter folder
const { fetchbooks } =  require('../srv/getter/index'); //Actions from getter folder

module.exports = async srv => {
    srv.on('insertbooks', async (req) => {
    const { borrowerName, bookTitle, authorName, readDate } = req.data;
    const result = await insertbooks( borrowerName, bookTitle , authorName, readDate);
    return result ; //Return a string.
    });

    srv.on('fetchbooks', async(req) => {
    const { borrowerName } = req.data;
    const result = await fetchbooks( borrowerName );
    return await fetchbooks( borrowerName );
    });

    srv.on('deletebooks', async(req) => {
    const { ID } = req.data;
    const result = await deletebooks( ID );
    return await deletebooks( ID );
    });
};

