function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction() {
    function namedFunction() {
        console.log("before all");
    }
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    console.log("returnsAnAnonymousFunction");
    return function() {
        console.log("before all");
    };
}