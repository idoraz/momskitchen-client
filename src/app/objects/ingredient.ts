export class Ingerdient {

    id: string;
    name: string;
    foodCategory: string;
    quantity: number;
    measure: string;
    orderID: number;

    constructor(name: string, foodCategory: string, quantity: number, measure: string, orderID: number) {
        this.name = name;
        this.foodCategory = foodCategory;
        this.quantity = quantity;
        this.measure = measure;
        this.orderID = orderID;
    }

}
