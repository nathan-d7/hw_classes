console.log('Classes. Inheritance');

class Lamp {
    constructor(itemParams) {
        this.model = itemParams.model;
        this.color = itemParams.color;
        this.price = itemParams.price;
        this.material = itemParams.material;
        this._socketStatus = false;
        this._lampOn = false;
    }

    get info() {
        return 'Model: ' + this.model + '\n' +  'Color: ' + this.color + '\n' + 'Price: ' + this.price + '\n' + 'Material: ' + this.material;
    }

    set info(data) {
        this.model = data.model;
        this.color = data.color;
        this.price = data.price;
        this.material = data.material;
    }

    socketIn() {

        if(this._socketStatus) return;

        this._socketStatus = true;
        console.log('Лампа включена в розетку');
        return
    }

    socketOff() {
        if(!this._socketStatus) return;

        this._socketStatus = false;
        console.log('Лампа выключена из розетки');
        return
    }

    turnOn() {

        if(this._lampOn) {
            console.log('Лампа уже включена');
            return
        }

        if(this._socketStatus && !this._lampOn) {
            this._lampOn = true;
            console.log('Лампа включена');
            return
        }
        
        if(!this._socketStatus) {
            console.log('Включите лампу в розетку');
            return 
        } 
    }

    turnOff() {

        if(!this._lampOn) {
            console.log('Лампа уже выключена');
            return;
        }

        if(this._lampOn && this._socketStatus) {
            this._lampOn = false;
            console.log('Лампа выключена');
            return
        } 

        if(!this._socketStatus) {
            console.log('Включите лампу в розетку');
            return
        } 
    }

}

let lamp1 = new Lamp({model: 'MV123', color: 'black', price: 20, material: 'wood'});
lamp1.info = {model: 'NV56', color: 'white', price: 70, material: 'plastic'};
console.log(lamp1.info);


class TableLamp extends Lamp {
    constructor(itemParams, type) {
        super(itemParams);

        this.type = type;
    }

    get lampType() {
        return this.type;
    }

    set lampType(value) {
        this.type = value;
    }

    getFullInfo() {
        let fullInfo = super.info;
        console.log(fullInfo + '\n' + 'Type: ' + this.type);
    }
}

let tableLamp1 = new TableLamp({model: 'PO23', color: 'red', price: 40, material: 'metal'}, 'table');

console.log('-----------------');

/*
    Домашка по классам
    Задание 2
*/

class User {

    constructor(dataInfo) {

        this.data = {
            id: dataInfo.id,
            name: dataInfo.name,
            email: dataInfo.email,
            address: dataInfo.address,
            phone: dataInfo.phone
        }
    }

    get userInfo() {
        return this.data;
    }

    edit(newData) {
        this.data = {
            ...this.data,
            ...newData
        }
    }


}

let moris = new User({id: 5, name: 'Moris', email: 'moris@gmail.com', address: 'Street', phone: '1243-34313'});
let glam = new User({id: 6, name: 'Glam', email: 'glam@gmail.com', address: '49 Street', phone: '0232-34241'});
let alex = new User({id: 2, name: 'Alex', email: 'alex@gmail.com', address: '123 Street', phone: '124032-123'});
let sam = new User({id: 3, name: 'Sam', email: 'sam@gmail.com', address: '982 Street', phone: '0932-323112'});

console.log(sam.data.id);

/*Задание 2 - class Contacts*/

class Contacts {

    constructor() {
        this.contactsData = [];
        this.targetObj = null;
    }

    add(contact) {
        let userObj = new User(contact);
        this.contactsData.push(userObj);
    }
    

     edit(id, newObj) {
        this.targetObj = this.contactsData.find(contact => contact.data.id === id);

        if(!this.targetObj) {
            console.log('Контакт не найден');
            return;
        }

        this.targetObj.edit(newObj);
        return this.targetObj;

    }

    remove(id) {
        const index = this.contactsData.findIndex(contact => contact.data.id === id);

        if (index === -1) {
            console.log('Контакт с таким id не найден');
            return;
        }

        this.contactsData.splice(index, 1);

    }

    get contactInfo() {
        return this.contactsData.map(user => user.data)
    } 
}
