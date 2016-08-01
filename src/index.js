import {Item} from "assets/items/item.js"
import {Sword} from "assets/items/weapons/sword.js"

class World16 {
    constructor() {
        this.version = '0.0.1';
        this.serverName = 'Alpha-1';
    }
}

var server = new World16();
var coreItem = new Item();
var testSword = new Sword();
console.log(server);
console.log(coreItem);
console.log(testSword);