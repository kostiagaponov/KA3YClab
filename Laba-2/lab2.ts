function MaxNum(numbers: number[]): number {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

const numbers: number[] = [1.5, 2.3, 7.8, 0.9, 5.6];
const maxNum = MaxNum(numbers);
console.log(maxNum); 




function NegNum(matrix: number[][]): boolean {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] < 0) {
                return true;
            }
        }
    }
    return false;
}

const matrix: number[][] = [
    [1, 2, 3],
    [4, -5, 6],
    [7, 8, 9]
];

const isNeg = NegNum(matrix);
console.log(isNeg);





type NumKort = [number, number, number];

function sumKort(numbers: NumKort): number {
    return numbers[0] + numbers[1] + numbers[2];
}


const myKort: NumKort = [10, 20, 30];
const Sum = sumKort(myKort);

console.log(Sum);





enum Balls {
    Football = "Футбольный мяч",
    Basketball = "Баскетбольный мяч",
    Tennis = "Теннисный мяч",
    Volleyball = "Волейбольный мяч"
}


console.log(Balls.Basketball);

 




class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
    return "No speak. I am fish!";
    }
   }
   class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
    return "Yaw-Gaw!";
    }
   }
   class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
    return "Miyau!";
   }
}


function printPetInfo<T extends Pet>(pet: T): void {
    console.log(`Имя: ${pet.name}`);
    console.log(`Годики: ${pet.age}`);
    console.log(`Хонест реакция: ${pet.speak()}`);
}


const dog = new Dog();
const cat = new Cat();

printPetInfo(dog);
printPetInfo(cat); 





enum MoreBalls {
    Football = "Футбольный мяч",
    Basketball = "Баскетбольный мяч",
    Tennis = "Теннисный мяч",
    Volleyball = "Волейбольный мяч"
}


interface Ball {
    type: MoreBalls;   
    weight: number;
    color: string;     
}


const football: Ball = {
    type: MoreBalls.Football,
    weight: 450,
    color: "Черно-белый"
};


console.log(JSON.stringify(football));
