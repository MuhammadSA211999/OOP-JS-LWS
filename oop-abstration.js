//OOP-abstraction by class BetterArray
// Explore, how to make a library by OOP

class BetterArray {
    #items
    constructor() {
        this.#items = []
    }
    //methods for making complex work to easy
    getAllItems() {
        return [...this.#items]
    }

    addItem(item) {
        this.#items, push(item)
    }

    removeItem(itemToDelete) {
        this.#items = this.#items.filter((item) => item !== itemToDelete)
    }

    modifyItem(whichItem, replaceBy) {
        const index = this.#items.indexOf(whichItem)
        if (index !== -1) {
            this.#items[index] = replaceBy
        }



    }
}