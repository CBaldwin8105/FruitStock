var fruits = ["apple", "apples", "banana", "bananas", "blueberry", "blueberries", "tangerine", "tangerines", "orange", "oranges"]

alert("Welcome to the fruit store. We try to have some fruits.")

var choice = prompt("Enter a fruit to see if we have it in stock:")

for (var i = 0; i < 10; i++) {
    if (fruits[i] == choice) {
        var have = fruits[i]
        break;
    }
}

if (have == choice) {
    console.log(`We do carry ${choice} in our store!`)
} else {
    console.log(`We do not have ${choice}. Sorry!`)
}
