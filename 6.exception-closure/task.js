let result;

function parseCount(number) {
  result = (Number.parseFloat(number));

  if (Number.isNaN(result)) {
    let error = new Error('Невалидное значение');
    throw error;
  }
  return +result;
}

function validateCount(number) {
  try {
    return parseCount(number);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    this.side1 = a;
    this.side2 = b;
    this.side3 = c;

    if ((a + b) < c || (a + c) < b || (b + c) < a) {
      let error = new Error('Треугольник с такими сторонами не существует');
      throw error;
    }
  }

  get perimeter() {
    let perimeter = Number(this.side1 + this.side2 + this.side3);
    return perimeter;
  }

  get area() {
    const p = 0.5 * (this.side1 + this.side2 + this.side3);
    let square = Number((Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3))).toFixed(3));
    return square;
  }
}

function getTriangle(a, b, c) {
  try {
    let getTriangle1 = new Triangle(a, b, c);
    return getTriangle1;
  } catch (error) {
    return error = {
      get perimeter() {
        return 'Ошибка! Треугольник не существует';
      },
      get area() {
        return 'Ошибка! Треугольник не существует';
      }
    }
  }
}


