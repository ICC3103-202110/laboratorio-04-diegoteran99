function view(counter) {
    return "    Count: " + counter+"\n\n    (+) (-)"+"\n\n\n    (q) for quit"+"\n\nWhat would you do? "
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

function app(counter) {
    while (true) {
        console.clear();
        const currentView = view(counter);
        var prompt = require('prompt-sync')({
            history: require('prompt-sync-history')(),
            sigint: true
        });
        var n = prompt(currentView);
        prompt.history.save();
        if (n==="q")
            return false
        counter = update(n,counter);
    }
}
app(0);