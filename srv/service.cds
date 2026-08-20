using activity1 as my from '../db/schema';

service CatalogService {

entity books as projection on my.books;
//Need to indicate the data type why? 
//Because CAP needs to know the data type of each parameter.
action  insertbooks ( borrowerName : String(50),
                     bookTitle    : String(100),
                     authorName   : String(100),
                     readDate     : Date
                   ) returns String;

 //action fetchbooks() returns String;                  
                
};
