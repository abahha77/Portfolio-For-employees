let Productname=document.getElementById("productName");
let Productcategory=document.getElementById("productCategory");
let Productprice=document.getElementById("productPrice");
let Productdescription=document.getElementById("productDescription");


let prname=document.getElementById("prname");
let prprice=document.getElementById("prprice");
let prcategory=document.getElementById("prcategory");
let prdesc=document.getElementById("prdescription");

let table=document.getElementById("tbt");
let table2=document.getElementById("tbn");

let allproducts=[];
let allpr=[];

function Store()
{
    let products={
        Productname:Productname.value,
        Productcategory:Productcategory.value,
        Productprice:Number(Productprice.value),
        Productdescription:Productdescription.value,
    }
    allproducts.push(products);
    Dispaly();
}


function Dispaly()
{
    let html="";

    for(let x=0;x<allproducts.length;x++)
    {
        html+=`<tr>
        <td>${x+1}</td>
        <td>${allproducts[x].Productname}</td>
        <td>${allproducts[x].Productcategory}</td>
        <td>${allproducts[x].Productprice}</td>
        <td>${allproducts[x].Productdescription}</td>
      <td>  <button class="btn btn-outline-info" onclick="update()">Update</button></td>
      <td>  <button class="btn btn-outline-primary" onclick="Delete(${x})">Delete</button> </td>
      </tr>`
    }
    table.innerHTML=html;
    clear();

}


function clear()
{
    Productname.value="";
    Productcategory.value="";
    Productprice.value="";
    Productdescription.value="";
}

function Delete(indx)
{

    allproducts.splice(indx,1);
    Dispaly();

}
function update()
{

    let indx=Number(window.prompt("please enetr the index"));

    for(let x=0;x<allproducts.length;x++)
    {
        if(x===indx)
        {
            let choose=window.prompt("please choose the Data You Want To Change");

            if(choose=="productName")
            {
                let New_Name=window.prompt("please enter the new name");
                allproducts[x].Productname=New_Name;
            }

            else if(choose=="productcategory")
            {
                let New_Cat=window.prompt("please enter the new cattegory");
                allproducts[x].Productcategory=New_Cat;
            }

            else if(choose=="productprice")
            {
                let price=window.prompt("please enter the new price");
                allproducts[x].Productprice=price;
            }

            else if(choose=="productdescription")
            {
                let New_desc=window.prompt("please enter the new description");
                allproducts[x].Productdescription=New_desc;
            }

            else
            {
                window.prompt("please enter a right choice");
            }
        }
        Dispaly();

    }

}


try {
    let x=10;

}
 catch (error) {

    console.log(error);
}



function store2()
{
    let pr={
        prname:prname.value,
        prprice:prprice.value,
        prcategory:prcategory.value,
        Prdesc:prdesc.value,
    }

    allpr.push(pr);
    Adding();
}


function Adding()
{
    let html="";
    for(let x=0;x<allpr.length;x++)
    {
        html+=`
        <tr>
        <td>${x+1}</td>
        <td>${allpr[x].prname}</td>
        <td>${allpr[x].prprice}</td>
        <td>${allpr[x].prcategory}</td>
        <td>${allpr[x].prdesc}</td>
        <button class="btn btn-outline-info">Update</button>
        <button class="btn btn-outline-primary">Delete</button>
      </tr>
        `
    }
    table2.innerHTML=html;
    clear2();
}

function clear2()
{
    prname="";
    prprice="";
    prdesc="";
    prcategory="";
    Adding();
}

