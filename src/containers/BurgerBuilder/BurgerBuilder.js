import React, {Component} from 'react';
import BuildControls  from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component{
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        }
    }

    addIngredientHandler = type => {

    }

    removeIngredientHandler = type => {
        
    }
    render(){
        return(
            <div className="burgerbuilder">
                <Burger ingredients={this.state.ingredients} />
                <BuildControls />
            </div>
        );
    }
}

export default BurgerBuilder;