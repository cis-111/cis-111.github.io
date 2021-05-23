"using strict;"
//your name here

//create array of objects 
//each product is an object with item and price 
//{item: "itemname": price: 10}

const inventory = [
//add objects here
    
];

//declare any global variables
let grandtotal = 0;



//display the inventory in a table on the webpage



//function to run when add is clicked
function addItem(){
   
    


}

//function to run when clear is clicked
function newOrder(){


}


//this function searches for useritem in the inventory array
//it returns the price if found
//or -1 if the product is not found
//DO NOT CHANGE THIS CODE
function findPrice(useritem)
{
    //search the inventory, return price or -1
    for (let i = 0; i < inventory.length; i++)
    {
        if (inventory[i].item == useritem)
            return inventory[i].price;
    }
    //not found, return -1
    return -1;
}
