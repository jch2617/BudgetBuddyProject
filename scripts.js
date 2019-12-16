"use strict";

class BudgetTracker {
    constructor(price, description = '') {
        this.price = price;
        this.description = description;
    }
}

//have a variable for budget and then have it displayed
const totalBudget = 100;
let totalSpent = 0;

const category1Budget = 0.25 * totalBudget;
const category2Budget = 0.25 * totalBudget;
const category3Budget = 0.25 * totalBudget;
const category4Budget = 0.25 * totalBudget;

let category1Spent = 0;
let category2Spent = 0;
let category3Spent = 0;
let category4Spent = 0;

//researching progress bar, looks like the java will control how much width the bar will take up
/**
 * @src for progress bar https://www.w3schools.com/howto/howto_js_progressbar.asp
 */
//take user input for purchase, category drop down and option description and store them
//purchase amount stored into an category arrays to be displayed
//create a class for itemPurchase with constructors of price and description
//setting price = price and description = ""

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const price = Number(document.querySelector('#moneySpent').value);

    if (price > 0) {
        totalSpent +=  price;

        const latestTransaction = new BudgetTracker(price);

        const selectedCategory = document.querySelector('#categoryDropdown').value;
        let priceDisplay;

        switch (selectedCategory) {
            case '1':
                category1Spent += latestTransaction.price;

                priceDisplay = document.querySelector('#dollarsCategory1');
                priceDisplay.innerHTML = `$${category1Spent.toFixed(2)} / $${category1Budget.toFixed(2)}`;

                break;
            case '2':
                category2Spent += latestTransaction.price;

                priceDisplay = document.querySelector('#dollarsCategory2');
                priceDisplay.innerHTML = `$${category2Spent.toFixed(2)} / $${category2Budget.toFixed(2)}`;;

                break;
            case '3':
                category3Spent += latestTransaction.price;

                priceDisplay = document.querySelector('#dollarsCategory3');
                priceDisplay.innerHTML = `$${category3Spent.toFixed(2)} / $${category3Budget.toFixed(2)}`;;

                break;
            case '4':
                category4Spent += latestTransaction.price;

                priceDisplay = document.querySelector('#dollarsCategory4');
                priceDisplay.innerHTML = `$${category4Spent.toFixed(2)} / $${category4Budget.toFixed(2)}`;;

                break;
        }
    }
});

//create arrays for all category's and use either a if statement or a switch case to determine what array info will be sorted

//create function to that loops over every arrays and finds dollar amounts, to total them up
//function paramter would the array

//function(array.bill)

//look into spread operator

//take data for budget and user input and display dollars spent for each category
