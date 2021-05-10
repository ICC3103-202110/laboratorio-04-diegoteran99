function view(counter) {
    return "    Count: " + counter+"\n\n    (+) (-)"+"\n\n\n    (q) for quit"+"\n\nWhat would you do? "
}

function update(msg, counter) {
    if (msg==="-")
        return counter - 1;
    if (msg==="+")
        return counter + 1;
    if (msg==="q")
        return 0
    else {
        return counter
    }
}    

function app(counter) {
    while (update!==0) {
        //const currentView = view(counter);
        console.clear();
        var prompt = require('prompt-sync')({
            sigint: true
        });
        var n = prompt(view(counter));
        counter = update(n,counter);
    }
}
app(0);