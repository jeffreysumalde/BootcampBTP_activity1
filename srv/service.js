const { insertbooks, deletebooks } = require('../srv/setter/index'); //Actions from setter folder
const { fetchbooks } =  require('../srv/getter/index'); //Actions from getter folder
const { executeHttpRequest } = require('@sap-cloud-sdk/http-client');

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

      srv.on('northwind', async(req) =>{
        try {
            const product = await executeHttpRequest(
                {
                destinationName:"Northwind",
                },
                {
                method: "GET",
                url: "/V4/Northwind/Northwind.svc/Products?$format=json",
                headers:{
                    'Content-Type': 'application/json'
                },     
                }              
        );


         const supplier = await executeHttpRequest(
                {
                destinationName:"Northwind",
                },
                {
                method: "GET",
                url: "/V4/Northwind/Northwind.svc/Suppliers?$format=json",
                headers:{
                    'Content-Type': 'application/json'
                },     
                }              
        );

         const category = await executeHttpRequest(
                {
                destinationName:"Northwind",
                },
                {
                method: "GET",
                url: "/V4/Northwind/Northwind.svc/Categories?$format=json",
                headers:{
                    'Content-Type': 'application/json'
                },     
                }              
        );
    
        // Optional: clear existing data first
            const products   = product.data.value;
            const categories = category.data.value;
            const suppliers   = supplier.data.value;

            await DELETE.from('Products');
            await DELETE.from('Suppliers');
            await DELETE.from('Categories');

        // Insert data
            await INSERT.into('Products').entries(products.map(p => ({
                ProductID: cds.utils.uuid(),
                ProductName: p.ProductName,
                SupplierID: p.SupplierID,
                CategoryID: String(p.CategoryID),
                QuantityPerUnit: p.QuantityPerUnit,
                UnitPrice: String(p.UnitPrice),
                UnitsInStock: p.UnitsInStock,
                UnitsOnOrder: p.UnitsOnOrder,
                ReorderLevel: p.ReorderLevel,
                Discontinued: String(p.Discontinued)
            }))
        );
        
            await INSERT.into('Suppliers').entries(suppliers.map(s =>({
                SupplierID: cds.utils.uuid(),
                CompanyName: s.CompanyName,
                ContactName: s.ContactName,
                ContactTitle: s.ContactTitle,
                Address: s.Address,
                City: s.City,
                Region: s.Region,
                PostalCode: s.PostalCode,
                Country: s.Country,
                Phone: s.Phone,
                Fax: s.Fax,
                HomePage: s.HomePage
            }))
        );
            await INSERT.into('Categories').entries(categories.map(c =>({
                CategoryID: String(c.CategoryID),
                CategoryName: c.CategoryName,
                Description: c.Description
            }))
        );
        return{ 
            MESSAGE:"Northwind data imported successfully",
            products: product.data.value,
            supplier: supplier.data.value,
            categories: category.data.value
            
             } 
        } catch (error) {
            return { 'MESSAGE' : error.message || error.toString() };
        }
    })

};

