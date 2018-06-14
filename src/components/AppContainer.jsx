import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Drugs from './drugs.component/drugs.component';
import Patients from './patients.component/patients.component';
import Pharmacists from './pharmacists.component/pharmcists.component'

export default class AppContainer extends Component {
    render() {
        return <div>
            <h2>Pharmacy</h2>
            <Router>
                <div>
                    <div className="row">
                        <div className="col-sm">
                            <Link to="/">Drugs</Link>
                        </div>
                        <div className="col-sm">
                            <Link to="/about">Patients</Link>
                        </div>
                        <div className="col-sm">
                            <Link to="/pharmacists">Pharmacists</Link>
                        </div>
                    </div>
                    <Route exact path="/" render={props => {
                        return <Drugs/>
                    }}/>
                    <Route path="/about" render={props => {
                        return <Patients/>
                    }}/>
                    <Route path="/pharmacists" render={props =>{
                        return <Pharmacists/>
                    }}/>
                </div>
            </Router>
        </div>;
    }
}
