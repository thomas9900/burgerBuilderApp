import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
        return ( 
                <li key={igKey}>
                    <span style={{textTransform: "capitalize"}}>{igKey}</span>
                    : {this.props.ingredients[igKey]}
                </li>);
        });
        return (
        <Aux>
            <h3>your order</h3>
            <p>a delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>total price: {this.props.price.toFixed(2)}</p>
            <p>continue to checkout?</p>
            <Button btnType='Danger' clicked={this.props.purchaseCancelled}>cancel</Button>
            <Button btnType='Success' clicked={this.props.purchaseContinued}>continue</Button>
        </Aux>
        );
    }
};

export default OrderSummary;