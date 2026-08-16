let age:number = 50;
let name:string = 'Max';
let toggle:boolean = true;
let empty:null = null;
let notInitialize:undefined = undefined;
let callback = (a: number):number => { return 100 + a };

let anything:any = -20;
anything = 'Text';
anything = {};

let some:unknown;
some = 'Text';

let str: string = '';

if (typeof some === 'string') {
    str = some
}

let User: [string, number] = ['Sam', 21]

enum Status{
    Loading = "LOADING",
    Ready = "READY"
}

let loader = Status.Loading

function showMessage(message:string):string {
 return message
}

function calc(num1:number, num2:number):number {
 return num1 + num2;
}

function customError(): never {
    throw new Error('Error');
}

interface Tpage1 {
    title: string,
    views: number,
    accounts: string[],
    status: Status,
    details: {
        createAt: Date;
        updateAt: Date;
    }; 
}
const Page1: Tpage1 = {
    title: "Сторінка",
    views: 426,
    accounts: ['Acc1', 'Acc2', 'Acc3'],
    status: Status.Ready,
    details: {
   createAt: new Date('2021-01-01'),
   updateAt: new Date('2021-05-01'),
 }
}

interface Tpage2 {
    title: string,
    views: number,
    accounts: string[],
    status: string,
}
const Page2: Tpage2 = {
    title: "Python чи JS",
    views: 123,
    accounts: ['Acc4'],
    status: "closed",
 }
class Key {
    signature: number = Math.floor(Math.random() * 100) + 1;
    get getSignature(){
        return this.signature;
    }
}

class Person {
    key: Key;
     constructor(key: Key) { 
        this.key = key;
    }
    get getKey() {
        return this.key;
    }
}


abstract class House {
    door: boolean = false;
    key: Key;
    tenants: Person[] = []
    constructor(key: Key) { 
        this.key = key;
    }
    comeIn(person: Person): void{
        if (this.door === true) {
           this.tenants.push(person)
       }
    }
    abstract openDoor(key: Key): void;
}  

class myHouse extends House{
    openDoor(key: Key):void {
        if (this.key === key) {
        this.door = true
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

    showMessage: showMessage('Тест'),
    calc: calc(10, 20),

    Page1,
    Page2,
    house: myHouse,
});