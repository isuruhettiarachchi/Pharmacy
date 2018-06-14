import React, {Component} from 'react';
import axios from 'axios';

export default class Patients extends Component {
    constructor() {
        super()
        this.state = {
            patients: []
        }
        // this.getAllPatients();
    }

    componentWillMount() {
        this.getAllPatients();
    }

    getAllPatients() {
        axios.get('http://localhost:3000/patients').then(res => {
            console.log(res);
            this.setState({
                patients: res.data.patients
            }, () => {
                console.log(this.state);
            })
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return <div>
            <h3>Patients</h3>

        </div>;
    }
}
