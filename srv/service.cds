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

action fetchbooks ( ID :String(50),
                    borrowerName : String(50),
                    bookTitle    : String(100),
                    authorName   : String(100),
                    readDate     : Date ) returns array of books; 

action deletebooks ( ID :String(50)) returns String; 

function northwind() returns String;

function getNorthwindData() returns array of {
                    ProductID    : Integer;
                    ProductName  : String;
                    SupplierID   : Integer;
                    CompanyName  : String;
                    Address      : String;
                    City         : String;
                    Region       : String;
                    CategoryName : String;
                    Description  : String;
    };                                            
}
