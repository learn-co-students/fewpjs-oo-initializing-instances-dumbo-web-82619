class Breakfast {
  constructor(food, drink) {
    this.food = food
    this.drink = drink
  }
}

class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad
    this.soup = soup
    this.drink = drink
  }
}

class Dinner {
  constructor(salad, soup, entree, _dessert) {
    this.salad = salad
    this.soup = soup
    this.entree = entree
    this._dessert = _dessert
  }
}

let brekkie = new Breakfast('eggs', 'orange juice')
let lunch = new Lunch('caesar salad', 'tomato soup', 'water')
let dindin = new Dinner('cobb salad', 'borscht', 'roast beef & kale', 'apple pie')