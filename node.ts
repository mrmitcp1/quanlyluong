export class Node {

    month : string;
    money: number;
    next : Node | null = null

    constructor( month: string, money: number) {

        this.month = month;
        this.money = money;
    }
}