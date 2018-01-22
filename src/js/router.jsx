import React from 'react'
import { Route, Switch} from 'react-router-dom'
import CheckoutContainer from './container/checkout';
import DetailContainer from './container/detail';
import ListingContainer from './container/listing';

const Routes = () => (
    <div>
        <Switch>
            <Route path="/detail/:id" component={DetailContainer}/>
            <Route exact path="/checkout" component={CheckoutContainer} />
            <Route exact path='/' component={ ListingContainer } />
            <Route component={ListingContainer}/>
        </Switch>
    </div>
)
export default Routes
