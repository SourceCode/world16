import {MapGen} from "assets/maps/mapgen"
import {Item} from "assets/items/item.js"
import {Sword} from "assets/items/weapons/sword.js"
import {Consumable} from "assets/items/consumeable/consumeable.js"
import {Player,Warrior} from "assets/classes"

class World16 {
    constructor() {
        this.version = '0.0.1';
        this.serverName = 'Alpha-1';
    }
}

var server = new World16();
var coreItem = new Item();
var testSword = new Sword();
var testConsumable = new Consumable();
var testPlayer = new Player();
var testWarrior = new Warrior();

console.log(server);
console.log(coreItem);
console.log(testSword);
console.log(testConsumable);
console.log(testPlayer);
console.log(testWarrior);

console.log('-MG Results');

var MG = new MapGen(8,8);
console.log(MG.room);