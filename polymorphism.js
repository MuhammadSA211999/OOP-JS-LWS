//polymorphism=Poly+Morphius
// parent class er kuno ekti ba ekadik method extend kora child class e override holei eke Polymorphism bola hoy.
//Example: parent class Player e details() method english e palyer er information described kor, kintu extend kora class Cricketer e details() method bangla te details described kore ebng argument songkhao vinno. Tokhon etake polymorphism bole.
// ** kintu duti method e same structure value return korbe. parent method string return korle child method keo string return korte hobe. vinnotay TS e error dibe, kintu JS warn korbe

class Player {
    #name
    #age
    constructor(name, age) {
        this.#name = name
        this.#age = age
    }

    playerDetails() {
        details = `${this.#name} is ${this.#age} years old`
    }

    getName() {
        return [this.#name, this.#age]
    }
}

class Cricketer extends Player {
    constructor(name, age, centuries) {
        super(name, age)
    }

    //polymorphism method
    playerDetails() {
        details = `${(this.getName()[0])} er boyos ${this.getName()[1]} bocor`
    }
    hobby(type, size) {
        const hobbyDetails = `${this.getName()[0]} try to make a garden for ${type} in ${size} acre`
        //parent class Player e kuno property zodi private hoy, tahole sei property child class access korte parbe na.Tobe **super call er maddhome parent class e patathe parbe.
        //kintu access korar jonno se property ke getter() function er maddhome return kore, child class e sei getter function call korle sei private value pawa zay
        return hobbyDetails
    }
}