import React from "react";
import buildControl from "./BuildControl/BuildControl";
import "./BuildControls.css";

const controls = [
    {label: "Salad", type: "salad"},
    {label: "Bacon", type: "bacon"},
    {label: "Cheese", type: "cheese"},
    {label: "Meat", type: "meat"}
];

const buildControls = props => {
    return(
        <div className="BuildControls">
            {controls.map(control => (
                <buildControl key={control.label} label={control.label} />
            ))}
        </div>
    )
}

export default buildControls;