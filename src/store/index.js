import Match from "../models/Match";


import { decorate, observable, action } from "mobx";


class Store {
  matches=[];

  constructor() {
  /*  this.addDrink(new Drink(`Cola`, 2));
    this.addDrink(new Drink(`Ice Tea`, 2.5));
    this.addDrink(new Drink(`Omer`, 4.5));
    this.addDrink(new Drink(`Water`, 2));
    this.addDrink(new Drink(`Koffie`, 1.5));*/
    //this.addMatch(new Match(1, 2, 3, 2, 1, 2, "match"))
  }

  addMatch = match => {
   this.matches.push(match);

  }


  removeMatch = id => {
    const match = this.matches.filter(m => m.id === id)[0];
    const index = this.matches.indexOf(match);
    this.matches.splice(index, 1);
  };



}

decorate(Store, {
  matches:observable,
  addMatch: action,
  removeMatch: action
});

const store = new Store();
export default store;
