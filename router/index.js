import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Home from '../page/home/index';
import Login from '../page/login/index';
import Register from '../page/register/index';
import RegisterOther from '../page/register_other/index';
import Personal from '../page/personal/index';
import ForgetPwd from '../page/forgetpwd/index';

export default class RouteMap extends React.Component {
    updateHandle() {
        console.log('每次router变化之后都会触发')
    }
    render() {
        return (
            <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Route path="/" component={Home}></Route>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/registerother" component={RegisterOther} />
                <Route path="/personal" component={Personal} />
                <Route path="forgetpwd" component={ForgetPwd} />
            </Router>
        )
    }
}

