import {Item} from "../item"

export class Consumable extends Item {
    constructor() {
        super();
        this.guid = '00003';
        this.type1 = 'consumable';
        this.maxInventory = 99;
    }
}