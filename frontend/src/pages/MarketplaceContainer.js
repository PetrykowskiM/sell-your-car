//@flow
import { connect } from 'react-redux';
import Marketplace from './Marketplace';

// actions
import { addCar } from '../reducers/cars';
import { setFilter } from '../reducers/filter';
import { postCar, type CarType } from '../api';

import type { Dispatch } from 'redux';
import type { StateType } from '../reducers';

const addNewCar = (car: CarType) => {
  return (dispatch: Dispatch) => {
    postCar(car).then(newCar => dispatch(addCar(newCar)));
  };
};

const mapStateToProps = (state: StateType) => ({
  cars: state.cars.filter((car: CarType) => {
    return (
      car.headline.includes(state.filter) ||
      car.type.includes(state.filter) ||
      car.description.includes(state.filter) ||
      (car.price + '').includes(state.filter)
    );
  }),
  filter: state.filter,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setFilter: (filter: string) => {
    dispatch(setFilter(filter));
  },
  onAddCar: (car: CarType) => {
    dispatch(addNewCar(car));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Marketplace);
