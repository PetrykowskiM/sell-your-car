// @flow
type CarType = {
  headline: string,
  type: string,
  description: string,
  price: number,
};

export const ADD_CAR = 'ADD_CAR';
export const addCar = (car: CarType) => ({
  type: ADD_CAR,
  payload: car,
});

type CarActionType = { type: 'ADD_CAR', payload: CarType };
type CarStateType = CarType[];

const cars = (state: CarStateType = [], action: CarActionType) => {
  switch (action.type) {
    case ADD_CAR:
      return [...state, action.payload];
    default:
      return [...state];
  }
};

export default cars;
