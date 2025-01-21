//complete this code
class Rectangle {
	constructor(width,height)
	{
		this.width = width
		this.height = height
	}
	get getArea()
	{
		return (${this.height}*${this.width})
	}
}

class Square extends Animal {
	constructor(n)
	{
		this.n = n
	}
	get getPerimeter()
	{
		return ${this.n}*4
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
