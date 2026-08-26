namespace activity1;

entity books {
   key ID: UUID;
   borrowerName : String(50);
   bookTitle : String(100);
   authorName : String(100);
   readDate : Date;    
}

entity Suppliers {
    key SupplierID : UUID;
    CompanyName : String(100);
    ContactName : String(100);
    ContactTitle : String(100);
    Address : String(100);
    City : String(100);
    Region : String(100);
    PostalCode : String(100);
    Country : String(100);
    Phone : String(100);
    Fax : String(50);
    HomePage : String(200);
}

entity Categories {
    key CategoryID : String(100);
    CategoryName : String(100);
    Description : String(255);
}

entity Products {
    key ProductID : UUID;
    ProductName : String(100);
    SupplierID : UUID;
    CategoryID : String(100);
    QuantityPerUnit : String(100);
    UnitPrice : String(100);
    UnitsInStock : Integer;
    UnitsOnOrder : Integer;
    ReorderLevel : Integer;
    Discontinued : String(100);
    supplier : Association to Suppliers
    on supplier.SupplierID = SupplierID;
    
    category : Association to Categories
    on category.CategoryID = CategoryID;
}