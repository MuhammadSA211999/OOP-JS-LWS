//Date Time Expalnation
// const now = new Date();
// const timestamp = now.getTime();
// console.log(timestamp)

// OOP-JS simplified from LWS
/*
Class: class is the blueprint of actual object.
class er **constructor function class er prottekta property recieve kore abong initialize kore.
new keyword diye class call kore amra parametre pass kori. za class er constructor function recieve kore.
class er moddhokar kuno function ke amra **method boli. method er maddhome amra constructor function e initialize howya ze kuno property call kore modify/delete korte pari.
**new keyword diye class e parametre pass kore class call korlei class er moddhokar constructor function call hoye key:value property set kore. ebong amra ekta Instance pai.
**Instance e hocce actual object. ar class hocce blue-print.
*/
// Encapsulation
class Player {
    #name
    #birthDay
    #noOfMonths
    #monthlySalary
    constructor(name, birthDay, noOfMonths, monthlySalary) {
        this.#name = name
        this.#birthDay = birthDay
        this.#noOfMonths = noOfMonths
        this.#monthlySalary = monthlySalary
    }

    calculateAge() {
        const diffMilliSec = Date.now() - new Date(this.#birthDay).getTime()
        // Date.now() milliseconds time return kore
        console.log('Today', new Date(Date.now()))
        const ageDate = new Date(diffMilliSec)
        // new Date() method UTC time return kore
        /*
        **Date.now() method call kore ajker date pawa zay.
        **new Date() method argument recive kore. new Date() method argument hisabe recive kora value ke UTC time e convert kore return kore.Zetake **timestapm bola hoy.
        *** new Date() => UTC timestamp return kore
        **getTime() method kuno parametre/argument recieve kore na.
        **lastDay.getTime()
        getTime() method milliseconds timestamp return kore.

        */
        const ageNum = Math.abs(ageDate.getUTCFullYear() - 1970)
        // console.log('ageDate', ageDate.getFullYear())
        //getUTCFullYear() method just full year return kore
        // console.log(ageNum)
        return ageNum
    }
    #calculateSalary() {
        const salary = (this.#noOfMonths * this.#monthlySalary).toLocaleString()
        return salary
    }
}

const msa = new Player('MSA', '1899-01-02', 12, 300)
msa.calculateAge()
