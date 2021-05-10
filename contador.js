function view(counter) {
    return "    Count: " + counter+"\n\n    (+) (-)"+"\n\n\n    (q) for quit"+"\n"
}

function update(msg, counter) {
    if (msg==="-") {
        return counter - 1;
    }
    if (msg==="+") {
        return counter + 1;
    } else {
        return counter
    }
}    

var prompt = require('prompt-sync')({
    sigint: true
});

function app(counter) {
    while (true) {
        console.clear();
        const currentView = view(counter);
        console.log(currentView);
        var n = prompt("What would you do? ");
        if (n==="q")
            return false
        counter = update(n,counter);
    }
}
app(0);