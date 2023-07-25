class Player {
    name
    age
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    playerDetails() {
        details = `${this.name} is ${this.age} years old`
    }
}

class Cricketer extends Player {
    constructor(name, age, centuries) {
        super(name, age)
        this.centuries = centuries
    }
    hobby(type, size) {
        const hobbyDetails = `${this.name} try to make a garden for ${type} in ${size} acre`
        return hobbyDetails
    }
}

class Footballer extends Player {
    constructor(name, age, goals) {
        super(name, age)
        this.goals = goals
    }

    training(stadium, hrs) {
        const trainingDetails = `${this.name} tarined in ${stadium} for ${hrs} hours`
        //parent class Player e name property zodi private hoy, tahole sei property child class access korte parbe na.Tobe super call er maddhome parent class e patathe parbe.
        return trainingDetails
    }

}

const dhoni = new Cricketer('MS Dhoni', 43, 28)
const dhoniHobby = dhoni.hobby('Flower', 8)
console.log(dhoniHobby)