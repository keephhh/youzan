import React from 'react'
import { Router, Route} from 'react-router'

import App from '../App';
import Publish from '../Page/Publish/publish';



class RouteMap extends React.Component {
    updateHandle() {
        console.log('每次router变化之后都会触发')
    }
    render() {
        return (
            <Router  onUpdate={this.updateHandle.bind(this)}>
                <Route path='/' component={App}>
                    <Route path='publish' component={Publish}/>
                </Route>
            </Router>
        )
    }
}

export default RouteMap
