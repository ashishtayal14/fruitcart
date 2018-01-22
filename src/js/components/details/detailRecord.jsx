import React from 'react';
import PropTypes from 'prop-types';

class DetailRecord extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.getBlankStars = this.getBlankStars.bind(this);
        this.getFilledStars = this.getFilledStars.bind(this);
        this.getComments = this.getComments.bind(this);
        this.blankStarsCount = 4-this.props.value;
        this.filledStarsCount = this.props.value;        
    }

    getBlankStars(){
        let blankStars = [];        
        for(let i=0;i<this.blankStarsCount;i++){
            blankStars.push(<img key={i} src="../assets/images/starEmpty.jpg" />);
        }
        return blankStars;
    }

    getFilledStars(){
        let filledStars = [];        
        for(let i=0;i<this.filledStarsCount;i++){
            filledStars.push(<img key={i} src="../assets/images/starFilled.jpg" />);
        }
        return filledStars;
    }

    getComments(){
        switch(this.filledStarsCount){
            case 0 : return {"title":"Negligible","desc":"below 5% of the recomended daily value."}
            case 1 : return {"title":"Low","desc":"between 5% to 10% of the recomended daily value."}
            case 2 : return {"title":"Average","desc":"between 10% to 20% of the recomended daily value."}
            case 3 : return {"title":"High","desc":"between 20% to 30% of the recomended daily value."}
            case 4 : return {"title":"Too High","desc":"above 30% of the recomended daily value."}
            default : return {"title":"Average","desc":"between 10% to 20% of the recomended daily value."}
        }
    }
    render() {
        let blankStars = this.getBlankStars();
        let filledStars = this.getFilledStars();
        let comment = this.getComments();
        return (
            <tr>
                <td className="nutrients">
                    <h4> {this.props.name} </h4>
                </td>
                <td className="value">               
                    {filledStars.map((star) => {
                        return star;
                    })}    
                    {blankStars.map((star) => {
                        return star;
                    })} 
                </td>
                <td className="description">
                    <span>
                        <b>
                            {comment.title} : 
                        </b>
                    </span>
                    <span> {comment.desc}</span>
                </td>
            </tr>

        );
    }
}

DetailRecord.propTypes = {};

export default DetailRecord;
