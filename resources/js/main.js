//target DOM Elements
const main = document.querySelector("#main");
const addUserBtn = document.querySelector("#add-user");
const rmToptUserBtn = document.querySelector("#remove-user-top");
const rmBottomtUserBtn = document.querySelector("#remove-user-bottom");
const doubleMoneyBtn = document.querySelector("#double-money");
const showMillionairesBtn = document.querySelector("#show-millionaires");
const sortBtn = document.querySelector("#sort");
const calculateBtn = document.querySelector("#calculate-wealth");

//initialize array for data
let data = [];

//format number as Money
function formatMoney(number){
    const Regex = "/\d(?=(\d{3})+\.)/g, '$&,'";
    return '$' + (number).toFixed(2).replace(Regex);
}

//Updates DOM 
function updateDOM(providedData = data){
    //Clear main div
    main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

    //loops through array of data
    providedData.forEach(function(person){
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${person.name}</strong> ${formatMoney(person.money)}`;
        main.appendChild(element);
    });
}

//sort users by richest
function sortByRichest(){
    data.sort(function(a,b){
        return b.money - a.money;
    });
    updateDOM();
}

//double Money for users
function doubleMoney(){
    data = data.map(function(user){
        return {...user, money: user.money * 2};
    });

    updateDOM();
}

//Adds User Data
function addUserData(obj){
    data.push(obj);
    updateDOM();
}

//Removes First User in Array
function removeTopUser(){
    data.shift();
    updateDOM();
}

//Removes Last User in Array
function removeBottomUser(){
    data.pop();
    updateDOM();
}

//Fetch Random User and Add Money
async function getRandomUser(){
    const API = 'https://randomuser.me/api';
    const RES = await fetch(API);
    const DATA = await RES.json();

    const user =  DATA.results[0];

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 100000)
    };

    addUserData(newUser);
}


//Event Listeners
addUserBtn.addEventListener('click', getRandomUser);
rmToptUserBtn.addEventListener('click', removeTopUser);
rmBottomtUserBtn.addEventListener('click', removeBottomUser);
doubleMoneyBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);

//Populates Initial Users
getRandomUser();
getRandomUser();
getRandomUser();
