export class Instruction {

    id: string;
    orderID: number;
    instruction: string;

    constructor(orderID: number, instruction: string) {
        this.orderID = orderID;
        this.instruction = instruction;
    }

}
