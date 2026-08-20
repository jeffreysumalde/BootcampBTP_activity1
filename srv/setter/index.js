const { v4: uuidv4 } = require('uuid');
const today = new Date().toISOString().split('T')[0];
console.log("uuidv4");

async function insertbooks( borrowerName, bookTitle, authorName ) {
const txtInsert = await cds.transaction();

await  txtInsert.begin();
await txtInsert.run(INSERT.into('ACTIVITY1_BOOKS').entries({
   ID: uuidv4(),
   borrowerName : borrowerName,
   bookTitle : bookTitle,
   authorName : authorName,
   readDate: today
}));

await txtInsert.commit();

return 'Succesfully Inserted';

};

module.exports = {
    
insertbooks

}