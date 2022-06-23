/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(timer){
  if(timer === 0){
    return 'Lasagna is done.'
  }
  else if(timer > 0){
    return 'Not done, please wait.'
  }
  return 'You forgot to set the timer.'
}

export function preparationTime(layers, minPerLayer = 2){
	return layers.length * minPerLayer;	

}
export function quantities(layers = []){
  let sauceNeed = 0;	
  let noodlesNeed = 0;
	layers.map((layer) => {
    console.log(layer)
    if(layer === 'sauce'){
      sauceNeed += .2;
    }
    if(layer === 'noodles'){
      noodlesNeed += 50
    }
})
  return { noodles: noodlesNeed, sauce: sauceNeed}
}

export function addSecretIngredient(friendsList, myList){
	const secretIngredient = friendsList.slice(friendsList.length -1)
  myList.push(...secretIngredient)
}
  export function scaleRecipe(recipe, portions){
    
    const namesArr = Object.keys(recipe);
    const quantityArr = []
    const result = {};
  
    for(const myRecipe in recipe){
      quantityArr.push(recipe[myRecipe] * (portions / 2))
    }
    
    namesArr.forEach((key,i) => result[key] = quantityArr[i]);
    return result
    
    
    
  }