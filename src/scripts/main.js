//Variables

//Dom elements
let menu = document.getElementById('menu');
let select = document.getElementById('numCards');
let start = document.getElementById('start');

//Configuring the menu
for (let i = 4; i <= 10; i+=2) {//From 4 to 10
    let n = i*i;//Get i²
    //Create a new option for the select
    let op = document.createElement('option');

    //Set both value and content to i²
    op.value=n;
    op.innerHTML=n;

    //Add the new option to the page
    select.appendChild(op);
}

