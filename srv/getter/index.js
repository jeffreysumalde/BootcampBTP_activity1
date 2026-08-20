
const cds = require('@sap/cds');

async function fetchbooks(){
try{
     //SELECT RECORD FROM BOOKS
    const data = await SELECT.from('ACTIVITY1_BOOKS');
     //SELECT SINGLE RECORDS
    const row = data[0];
return{
    borrowerName : row.borrowerName,
    bookTitle    : row.bookTitle,
    authorName   : row.authorName,
    readDate     : row.readDate
};
    }catch(error){
        return { MESSAGE : error.message };

    }
}

module.exports = {

    fetchbooks

}




