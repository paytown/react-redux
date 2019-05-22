export const ADD_BEANS = 'ADD_BEANS';
export const addBeans = beans => ({
  type: ADD_BEANS,
  payload: beans
});

export const ADD_FRUIT = 'ADD_FRUIT';
export const addFruit = fruit => ({
  type: ADD_FRUIT,
  payload: fruit
});

export const ADD_DRINK = 'ADD_DRINK';
export const addDrink = drink => ({
  type: ADD_DRINK,
  payload: drink
});

export const REMOVE_BEANS = 'REMOVE_BEANS';
export const removeBeans = () => ({
  type: REMOVE_BEANS
});

export const REMOVE_FRUIT = 'REMOVE_FRUIT';
export const removeFruit = () => ({
  type: REMOVE_FRUIT
});

export const REMOVE_DRINK = 'REMOVE_DRINK';
export const removeDrink = () => ({
  type: REMOVE_DRINK
});

export const EMPTY_BOX = 'EMPTY_BOX';
export const emptyBox = () => ({
  type: EMPTY_BOX
});

export const FILL_EM_ALL = 'FILL_EM_ALL';
export const fillEmAll = (beans, fruit, drink) => ({
  type: FILL_EM_ALL,
  payload: {
    beans: beans,
    fruit: fruit,
    drink: drink
  }
});
