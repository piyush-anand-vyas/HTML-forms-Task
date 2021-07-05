let submit = document.querySelector("button");
// let fisrtName = document.querySelector("#firstName");
// let lastName = document.querySelector("#lastName");
// let address = document.querySelector("#address");
// let male = document.getElementById("male");
// let female = document.getElementById("female");
// let other = document.getElementById("other");
// let indian = document.getElementById("indian");
// let chinese = document.getElementById("chinese");
// let italian = document.getElementById("italian");
// let continental = document.getElementById("continental");
// let seaFood = document.getElementById("seaFood");
// let pincode = document.getElementById("pincode");
// let state = document.getElementById("state");
// let country = document.getElementById("country");
let form = document.querySelector("form");
let details = [];
let foods = [];
let count = 0;
submit.addEventListener("click",function(){
    for(i=0;i<form.elements.length;i++){
        if(i > 2 && i < 6){
            details.push(document.querySelector('input[name="gender"]:checked').value);
            i = 5;
        }
        else if(i > 5 && i < 11){
            if(form.elements[i].checked){
                foods.push(form.elements[i].value);
                count++;
            }
            
            //details.push(document.querySelector('input[name="food"]:checked').value);
        }
        else{
            details.push(form.elements[i].value);
        }
        
    }
    let tblDetails = [];
    for(k=0;k<details.length;k++){
        if(k == 3){
            tblDetails[4] = details[3];
        }
        else if(k == 4){
            tblDetails[3] = details[4];
        }
        else{
            tblDetails[k] = details[k];
        }
    }
    console.log(details);
    console.log(foods);
    console.log(tblDetails);
    let tbody = document.querySelector("tbody");
    console.log(tbody);
    let tr = document.createElement("tr");
    let flag = false;
    if(count > 2){
        for(j=0;j<8;j++){
            var td = document.createElement("td");
            if(j == 5 && flag==false){
                td.innerHTML = foods;
                flag = true;
                j--;
            }
            else{
                td.innerHTML = tblDetails[j];
            }
            tr.appendChild(td);
        }
        details = [];
            foods = [];
            tblDetails = [];
        tbody.appendChild(tr);
        for(i=0;i<form.elements.length;i++){
            if(i > 2 && i < 6){
                if(form.elements[i].checked){
                    form.elements[i].checked = false;
                }
                i = 5;
            }
            else if(i > 5 && i < 11){
                if(form.elements[i].checked){
                    form.elements[i].checked = false;
                }
            }
            else
            form.elements[i].value = "";
        }
    }
    else{
        foods = [];
        alert("Please choose minimum 2 foods");
    }
    
    if(count >= 2){
        count = 0;
    }

   // console.log(document.querySelector("form").elements[0].value);
   //document.querySelector('input[name="rate"]:checked').value;
})