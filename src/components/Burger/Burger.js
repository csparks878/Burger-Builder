import React from "react";
import "./Burger.css";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";

const Burger = props => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])]
                .map((_, i) => {
                    return <BurgerIngredients key={igKey + i} type={igKey} />
                });
        })
        .reduce((acc, cur) => {
            console.log(acc, cur);
            return acc.concat(cur);
        }, []);

    if (!transformedIngredients.length) transformedIngredients = <p>Please start adding ingredients!</p>
    
    return(
        <div className="burger">
            <BurgerIngredients type="bread-top" />
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom" />
        </div>
    );
}

export default Burger;