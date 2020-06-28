//Задача 1;
function parseCount(parsMeaning) {
    parsMeaning = Number.parseInt(parsMeaning);
    if (isNaN(parsMeaning)) {
        const error = new Error("Невалидное значение");
        throw error;
    }

    return parsMeaning;
}

function validateCount(parsMeaning) {
    try {
        return parseCount(parsMeaning);
    } catch (e) {
        return e;
    }
}



//Задача 2;


class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ((this.a + this.c) < this.b || (this.a + this.b) < this.c || (this.c + this.b) < this.a) {

            const error = new Error("Треугольник с такими сторонами не существует");
            throw error;
        }

    }
    getPerimeter() {
        
        return (this.a + this.b + this.c);
    }

    getArea() {
        let p = this.getPerimeter() / 2;
        let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Number(s.toFixed(3));
    }

}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (e) {
        return {
            getPerimeter() {
                return ("Ошибка! Неправильный треугольник");
            },
            getArea() {
                return ("Ошибка! Неправильный треугольник");
            }
        }
    }
}
