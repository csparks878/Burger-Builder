import React, {Component} from 'react';
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component{
    render(){
        return(
            <div className="burgerbuilder">
                <Burger />
                <div>Build Controls</div>
            </div>
        );
    }
}

export default BurgerBuilder;