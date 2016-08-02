/**
 * The map generator can generate maps for exploring
 *
 * Legend:
 *  * = Solid
 * ' ' = Empty (Empty spot)
 *  ^ = Trap
 *  + = Item
 *  @ = Character
 *  % = Enemy
 *
 */
export class MapGen {
    constructor(roomSizeX, roomSizeY, config)
    {
        this.frame = {
            topLeft: '╔',
            topRight: '╗',
            bottomLeft: '╚',
            bottomRight: '╝',
            lineSeg: '═',
            sidSeg: '║'
        };

        this.mapLegend = {
            enemy: '☻',
            item: '☼',
            empty: '·',
            solid: '∙',
            entrance: '⌂',
            passage: '◘'
        };

        this.mapConfig = {
            maxMonster: 5,
            maxNPC: 2,
            maxItem: 2,
            maxPassage: 2,
            requireEntrance: true,
            maxEntrance: 1
        };

        this.roomStats = {
            monster: 0,
            npc: 0,
            item: 0,
            passage: 0,
            entrance: 0
        };

        this.roomMeta = {
            monster: [],
            npc: [],
            item: [],
            doors: []
        };


        this.room = [];
        this.config = config;
        if (roomSizeX > 0 && roomSizeY > 0)
        {
            for(var i=0; i < roomSizeX; i++)
            {
                this.room[i] = [];

                for(var i2=0; i2 < roomSizeY; i2++)
                {
                    this.room[i][i2] = this.mapLegend.empty;
                }
            }


            /*
             * Decorate Room - Bad Guys
             */
            for(i=0; i < this.room.length; i++)
            {
                for(i2=0; i2 < this.room[i].length; i2++)
                {
                    var seedMin = roomSizeY * 10 * 1.2142;
                    seedMin += Math.floor((Math.random() * 2600) + 1) * 0.32998;
                    seedMin = Math.ceil(seedMin);
                    var seed = Math.floor((Math.random() * 2600) + 1) * 1.32998;
                    seed = Math.ceil(seed);
                    var seed2 = seed % 2;
                    var seed3 = seed / 3.5;
                    seed3 = Math.floor(seed3);
                    var seed4 = seed3 % 2;

                    if ((seed2 == 0 && seed4 == 1 && (seed >= 2400 || seed <= seedMin)) && this.roomStats.monster < this.mapConfig.maxMonster)
                    {
                        this.room[i][i2] = this.mapLegend.enemy;
                        this.roomStats.monster += 1;
                        console.log('set monsters');
                    }
                }
            }

            /*
             * Decorate Room - Entrance
             */
            for(i=0; i < this.room.length; i++)
            {
                //console.log('-set door1');
                for(i2=0; i2 < this.room[i].length; i2++)
                {
                    seedMin = roomSizeY * 10 * 1.2142;
                    seedMin += Math.floor((Math.random() * 2600) + 1) * 0.32998;
                    seedMin = Math.ceil(seedMin);
                    seed = Math.floor((Math.random() * 2600) + 1) * 1.32998;
                    if ((seed >= 2400 || seed <= seedMin) && this.roomStats.entrance < this.mapConfig.maxEntrance)
                    {
                        this.room[i][i2] = this.mapLegend.entrance;
                        this.roomStats.entrance += 1;
                    }
                }
            }

            /*
             * Decorate Room - Passage
             */
            for(i=0; i < this.room.length; i++)
            {
                console.log('-set passage');
                for(i2=0; i2 < this.room[i].length; i2++)
                {
                    seedMin = roomSizeY * 10 * 1.12938;
                    seedMin += Math.floor((Math.random() * 2600) + 1) * 0.321451;
                    seedMin = Math.ceil(seedMin);
                    seed = Math.floor((Math.random() * 2600) + 1) * 1.2947;
                    if (i==0) seed -= 65;

                    console.log('Proc Passage');
                    console.log(seed);
                    console.log(seedMin);
                    console.log(this.roomStats);
                    console.log(this.mapConfig.maxEntrance);
                    if ((seed >= 2000 || seed+10 <= seedMin) && this.roomStats.entrance < this.mapConfig.maxEntrance)
                    {
                        this.room[i][i2] = 'X';
                        this.roomStats.passage += 1;
                    }
                }
            }

        }
    }

    getPlanAsAscii(plan)
    {

    }
}