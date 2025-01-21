class Rectangle {
	constructor(width,height)
	{
		this.width = width
		this.height = height
	}
 getArea()
	{
		return (this.height*this.width)
	}
}

class Square extends Rectangle {
	constructor(num)
	{
	    super(num,num)
		this.num = num
	
	}
getPerimeter()
	{
		return `${this.num}` *4
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
