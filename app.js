class Shape{
    constructor(color){
        this._color =color;
    }
    shareColor(){
        return `I am ${this._color}`
    }
}
class Square extends Shape{
    constructor(color ,share){
       super(color)
        this._share =share;
    }
    childShareColor(){
        super.shareColor();
        return `${this._share} is of ${this._color} color: `;
    }

}
const square12 =new Square('red', 'square');

console.log(square12.childShareColor())