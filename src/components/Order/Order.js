import React from 'react';

import styles from './Order.module.css';

const order = (props) => {
    const ingredients = [];

    for (let ingredientName in props.ingredients) {
        ingredients.push(
            {
                name: ingredientName, 
                amount: props.ingredients[ingredientName]
            }
        );
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span 
            style={{
                textTransform: 'capitalize', 
                display: 'inline-block', 
                margin: '0 8px', 
                padding: '5px',
                border: '1px solid #ccc'
                }}
                key={ig.name}>
                {ig.name} ({ig.amount})</span>;
    });


    


    let order =
        <div className={styles.Order} >
            <p>ingredients: {ingredientOutput} <button className={styles.DelBtn} onClick={props.clicked}>x</button></p>
            <p>price: <strong>USD {Number(props.price.toFixed(2))}</strong></p>

        </div>

    return (
         <div>
           {order}
        </div>

    )

};

export default order;