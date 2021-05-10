function view(counter) {
    return "    Count: " + counter+"\n\n    (+) (-)"+"\n\n\n    (q) for quit"+"\n\nWhat would you do? "
}

function update(msg, counter) {
    if (msg==="-")
        return counter - 1;
    if (msg==="+")
        return counter + 1;
    else {
        return counter
    }
}    
console.log(update("+", 0));