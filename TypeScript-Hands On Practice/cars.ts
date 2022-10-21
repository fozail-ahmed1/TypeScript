export class Car {
    brand:string;
    model:string;
    color:string;
    year:string;

    constructor(brand:string,model:string,color:string,year:string){
        this.brand=brand;
        this.model=model;
        this.color=color;
        this.year=year;
    }

    years(){
        console.log(this.year);
    }
}
