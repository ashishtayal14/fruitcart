import React from 'react';
import PropTypes from 'prop-types';
import ListRecord from './listRecord';
import Cart from '../core/cart';

class ListTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {        
        let items = this.props.items;
        if(items.length>0){
            return (
                <div className="table-container">
                    <table className="table table-bordered">
                        <tbody>
                            <tr className="tableHeader">
                                <td colSpan="4">
                                    {items.length > 0 && <Cart items={this.props.items}/>}                                
                                </td>
                            </tr>
                            {items.length>0 && items.map((item)=>{                            
                                return <ListRecord key={item.id} item={item} updateCart={this.props.updateCart}/>;
                            })}
                            {/* <ListRecord /> */}
                            <tr className="tableFooter">
                                <td colSpan="4">
                                    {items.length > 0 && <Cart items={this.props.items}/>}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );  
        }
        else{
            return null;
        }
    }
}

ListTable.propTypes = {};

export default ListTable;
