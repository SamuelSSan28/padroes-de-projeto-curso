import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal();
console.log("Dish Value 1: ",mainDishBuilder.getPrice());

mainDishBuilder.reset();
const meal2 = mainDishBuilder.makeBeverage().getMeal();
console.log("Dish Value 2: ",meal2.getPrice());

const veganDishBuilder = new VeganDishBuilder();
const veganMeal = veganDishBuilder.makeMeal().getMeal();
console.log("Dish Value 3 (vegan): ",veganMeal.getPrice());