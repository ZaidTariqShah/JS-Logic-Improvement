let target = {
    length: 0
};

let handleObject = {
    set(target, property, value) {
        target[property] = value;
        target.length = Object.keys(target).length - 1;

        return true;
    }
};

let proxy = new Proxy(target, handleObject);

proxy.name = "test";

console.log(proxy);

proxy.name = "test2";

console.log(proxy);
