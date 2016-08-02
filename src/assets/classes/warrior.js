import {Player} from "./player"

export class Warrior extends Player {
    constructor() {
        super();
        this.class = 'warrior';
        this.weaponTypes = ['sword', '2h-sword', 'axe', '2h-axe', 'spear', 'shield'];

        //The base adjustment for the class
        this.baseStats.hp += 50;
        this.baseStats.res += 10;
        this.baseStats.str += 20;
        this.baseStats.agi += 10;
        this.baseStats.agi += 2;
    }
}