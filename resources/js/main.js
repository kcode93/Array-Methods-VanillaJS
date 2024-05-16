//target DOM Elements
const main = document.querySelector("#main");
const addUserBtn = document.querySelector("#add-user");
const doubleMoneyBtn = document.querySelector("#double-money");
const showMillionairesBtn = document.querySelector("#show-millionaires");
const sortBtn = document.querySelector("#sort");
const calculateBtn = document.querySelector("#calculate-wealth");

//initialize array for data
let data = [];

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

    addUserBtn(newUser);

}
