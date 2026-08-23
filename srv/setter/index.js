const DELETE = require('@sap/cds/lib/ql/DELETE');
const { v4: uuidv4 } = require('uuid');
const today = new Date().toISOString().split('T')[0];
console.log("uuidv4");

async function insertbooks( borrowerName, bookTitle, authorName ) {
const txtInsert = await cds.transaction();
const data = await SELECT.from('ACTIVITY1_BOOKS').where({ borrowerName : borrowerName });
try{
      if (!data || data.length === 0){
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
      }else{  
         return { 
                 MESSAGE :`A book is already logged for borrower ${borrowerName}.`
                };
      }
   }catch(error){
         return { 
                  MESSAGE : error.message 
                };

   }
   }

async function deletebooks( ID ){
   const txtDelete = await cds.transaction();
try{
   await txtDelete.begin();
   await txtDelete.run(DELETE.from('ACTIVITY1_BOOKS').where({ ID : ID }));
}catch(error){
    return {MESSAGE: error.message };
   
};

await txtDelete.commit();

return 'Succesfully Deleted';

}

module.exports = {
    
insertbooks,
deletebooks

}