let age = 50;
let name = 'Max';
let toggle = true;
let empty = null;
let notInitialize = undefined;
let callback = (a) => { return 100 + a; };
let anything = -20;
anything = 'Text';
anything = {};
let some;
some = 'Text';
let str = '';
if (typeof some === 'string') {
    str = some;
}
let User = ['Sam', 21];
var Status;
(function (Status) {
    Status["Loading"] = "LOADING";
    Status["Ready"] = "READY";
})(Status || (Status = {}));
let loader = Status.Loading;
function showMessage(message) {
    return message;
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
const Page1 = {
    title: "Сторінка",
    views: 426,
    accounts: ['Acc1', 'Acc2', 'Acc3'],
    status: "open",
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    }
};
const Page2 = {
    title: "Python чи JS",
    views: 123,
    accounts: ['Acc4'],
    status: "closed",
};
class Key {
    signature = Math.floor(Math.random() * 100) + 1;
    get getSignature() {
        return this.signature;
    }
}
class Person {
    key;
    constructor(key) {
        this.key = key;
    }
    get getKey() {
        return this.key;
    }
}
class House {
    door = false;
    key;
    tenants = [];
    constructor(key) {
        this.key = key;
    }
    comeIn(person) {
        if (this.door === true) {
            this.tenants.push(person);
        }
    }
}
class myHouse extends House {
    openDoor(key) {
        if (this.key === key) {
            this.door = true;
        }
    }
}
console.log({
    age,
    name,
    toggle,
    empty,
    notInitialize,
    callback: callback(20),
    anything,
    some,
    str,
    User,
    status: Status,
    loader,
    showMessage: showMessage('Hello TypeScript!'),
    calc: calc(10, 20),
    Page1,
    Page2,
    house: myHouse,
});
export {};
//# sourceMappingURL=index.js.map