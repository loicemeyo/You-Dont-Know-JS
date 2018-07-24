const tax_rate = 0.16;
const phone_price = 1000.0;
const acessory_price = 200.00;
const spending_threshold = 8000;

let bank_account = 10000.00;
let amount = 0;

function calculate_tax(amount){
    return amount * tax_rate
}
function format_amount(amount){
    return "$" + amount.toFixed(2)
}

// keep buying a phone while our banck account can support
while  (bank_account > amount){
    amount = amount + phone_price;
    console.log("You bought a phone! at: ", amount)
    }
    // if we still have cash to spend spoil it on an accessory!
    if(spending_threshold > amount){
    amount = amount + acessory_price
    console.log("The phone came with an accessory! Total cost of phone with accessory: ", amount)
}
// you forgot about tax?!
amount = amount + calculate_tax(amount)
// let's see your formatted total
console.log (" Your purchase : " + format_amount(amount)
);
// Let's say you're trying to buy this phone and you're broke as hell...
if (amount > bank_account){
    console.log ("Nigga you broke. Ger arra hee")
}