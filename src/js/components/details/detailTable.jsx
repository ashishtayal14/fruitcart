import React from 'react';
import PropTypes from 'prop-types';
import DetailRecord from './detailRecord';
import Cart from '../core/cart';

class DetailTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.getItem = this.getItem.bind(this);
        this.getFruitNutrients = this.getFruitNutrients.bind(this);
        this.item = this.getItem();
    }
    getItem() {
        for (let item of this.props.items) {
            if (item.id == this.props.itemId) {
                return item;
            }
        }
    }
    getFruitNutrients() {
        let nutrients = [];
        for (let property in this.item.properties) {
            if (property != "calories") {
                let nutrient = this.item.properties[property];
                nutrient["name"] = property;
                nutrients.push(nutrient);
            }
        }
        return nutrients;
    }
    render() {
        let nutrients = this.getFruitNutrients();
        return (
            <div className="table-container">
                <table className="table table-bordered">
                    <tbody>
                        <tr className="tableHeader">
                            <td colSpan="4">
                                {this.props.items.length > 0 && <Cart items={this.props.items} itemId={this.props.itemId} />}
                            </td>
                        </tr>
                        <tr>
                            <td className="nutrients">
                                <h4> Calories </h4>
                            </td>
                            <td className="value">
                                <h2>{this.item.properties.calories.value}</h2>
                            </td>
                            <td className="description">
                            </td>
                        </tr>
                        {
                            nutrients.map((nutrient) => {
                                return <DetailRecord key={nutrient.name} {...nutrient} />
                            })}

                        <tr className="tableFooter">
                            <td colSpan="4">
                                {this.props.items.length > 0 && <Cart items={this.props.items} itemId={this.props.itemId} />}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

DetailTable.propTypes = {};

export default DetailTable;
