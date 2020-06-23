// David

function makeChange(amount){
	amount = amount * 100
	let change = {quarters: 0, dimes: 0, nickles: 0, pennies: 0}
	change.quarters = Math.floor(amount/25)
	amount = amount - (change.quarters * 25)
	change.dimes = Math.floor(amount/10)
	amount = amount - (change.dimes * 10)
	change.nickles = Math.floor(amount/5)
	amount = amount - (change.nickles * 5)
	change.pennies = amount
	console.log(change)
}


// Aidan

function makeChange(num) {
    if (num >= 0 && num <= 1) {
      num = Math.floor(num * 100) / 100
      let returnHash = {};
      returnHash["Quarters"] = Math.floor(num / .25)
      num = num % .25
      returnHash["Dimes"] = Math.floor(num / .1)
      num = num % .1
      returnHash["Nickles"] = Math.floor(num / .05)
      num = num % .05
      returnHash["Pennies"] = Math.floor(num / .01)
      return returnHash
    }
    return "Please input a proper value"
}