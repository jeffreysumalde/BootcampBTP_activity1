
const cds = require('@sap/cds');

async function fetchbooks( borrowerName ){
try{
    const data = await SELECT.from('ACTIVITY1_BOOKS').where({ borrowerName : borrowerName });
    if (!data || data.length === 0){
      return {  MESSAGE :`No books fetch for borrower ${borrowerName}.` };
    } else {    
      return data
    }
    }catch(error){
        return { MESSAGE : error.message };

    }

}

module.exports = {

    fetchbooks

}




