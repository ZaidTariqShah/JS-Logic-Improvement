let target = {
    length: 0
};

let handleObject = {
    set(...args) {
        args[0][args[1]] = args[2];
        args[0].length = Object.keys(args[0]).length - 1;

        return true;
    }
};

let p = new Proxy(target, handleObject);

p.name = "hey";

console.log(p);
