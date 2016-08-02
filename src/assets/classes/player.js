export class Player {
    constructor() {
        //This is temporary for now
        this.playerId = '00001';
        this.primitive = 'entity';
        this.npc = true;
        this.level = 0;
        this.playerName = 'The Guy';
        this.class = 'proto';
        this.weaponTypes = [];
        this.ability = [];
        this.fight = false;
        this.run = false;
        this.summon = false;
        this.magic = false;

        //The player inventory
        this.inventory = {
            bag: {
                maxItem: 1000,
            },
            special: {

            }
        };

        //The base starting stats for the player
        this.baseStats = {
            exp: 0,
            hp: 100,
            mana: 100,
            res: 0,
            dex: 0,
            str: 0,
            agi: 0,
            wis: 0,
            luk: 0,
        };
    }
}