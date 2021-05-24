import { connect } from 'react-redux';

import { AppState } from '../../core/reducers/rootReducer';
import * as actionTypes from '../../core/actionTypes/pizzaActionTypes';
import PizzaComponent from './PizzaComponent';

const mapStateToProps = (state: AppState) => {
    return {
        pizza: state.pizza.pizza,
        isLoading: state.isLoading[actionTypes.GET_PIZZA],
        error: state.error[actionTypes.GET_PIZZA]
    };
};

export default connect(
    mapStateToProps,
    null
)(PizzaComponent)