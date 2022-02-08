export interface IProduct {
    name: string;
    price: string;
    link: string;
    note: string;
}

export class Product implements IProduct {
    constructor(
        public name: string,
        public price: string,
        public link: string,
        public note: string,
      ) {
        this.name = name;
        this.price = price;
        this.link = link;
        this.note = note;
      }
}