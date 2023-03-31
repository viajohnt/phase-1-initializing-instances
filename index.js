// Write your code here
class Breakfast {
    constructor(food, drink) {
        this.food = food;
        this.drink = drink;
    }
}
let bfast = new Breakfast("eggs", "juice");

class Lunch {
    constructor(salad, soup, drink) {
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}
let newLunch = new Lunch("side salad", "broccoli cheddar soup", "iced tea");

class Dinner {
    #dessert;
    constructor(salad, soup, entree) {
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        // this.#dessert = dessert;
    }
}
let newdinner = new Dinner("balsamic salad", "consomme", "filet mignon");
