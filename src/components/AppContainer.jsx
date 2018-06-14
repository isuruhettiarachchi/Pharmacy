import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Drugs from './drugs.component/drugs.component';
import Patients from './patients.component/patients.component';
import AddPatient from './patients.component/AddPatient.component';

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
                    </div>
                    <div>
                        
                    </div>
                    <Route exact path="/" render={props => {
                        return <Drugs/>
                    }}/>
                    <Route path="/about" render={props => {
                        return <AddPatient/>
                    }}/>
                </div>
            </Router>
        </div>;
    }
}
