
export const SELECT_FRUIT = 'SELECT_FRUIT';
export const SHOW_DESCRIPTION = 'SHOW_DESCRIPTION';


export function selectFruit(type) {
  console.log(type);
  return { type: SELECT_FRUIT, payload: type }
}

export function showFruitDescription(description){
  return { type: SHOW_DESCRIPTION, payload: description}
}
