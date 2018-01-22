import React from 'react'
import PropTypes from 'prop-types'
import { TRY_AGAIN } from '../../constants/constants'
const ErrorComponent = (props) => {
    
   if(props.noDataFound)
        return (
            <div className='alert alert-danger'>
                <strong>{TRY_AGAIN}</strong>
            </div>
        )
    return null
}
ErrorComponent.propTypes = {
    noDataFound: PropTypes.bool,
};
export default ErrorComponent
