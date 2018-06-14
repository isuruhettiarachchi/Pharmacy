import React, {Component} from 'react';
import axios from 'axios';

export default class AddPatient extends Component {
    constructor() {
        super()
        this.state = {
            patient: []
        }
    }

    componentWillMount() {}

    addNewUser(e) {
        console.log(this.refs.patientName.value);
        if (!this.refs.patientName.value) {
            alert('Name is required');
        } else if (!this.refs.patientAddress.value) {
            alert('Address is required');
        } else if (!this.refs.patientNIC.value) {
            alert('NIC is required');
        } else if (!this.refs.patientDOB.value) {
            alert('Birthdate is required');
        } else if (!this.refs.patientContact.value) {
            alert('Contact number is required');
        } else {
            console.log(this.refs);
        }
        e.preventDefault();
    }

    render() {
        return <div>
            <h3>Add Patient</h3>
            <div>
                <form onSubmit={this.addNewUser.bind(this)}>
                    <div>
                        <label>Name: 
                            <input type="name" ref="patientName" />
                        </label>
                        <br/>
                    </div>
                    <div>
                        <label>Address: 
                            <textarea type="text" ref="patientAddress" />
                        </label>
                        <br/>
                    </div>
                    <div>
                        <label>NIC: 
                            <input type="text" ref="patientNIC" />
                        </label>
                        <br/>
                    </div>
                    <div>
                        <label>Date of Birth: 
                            <input type="date" ref="patientDOB" />
                        </label>
                        <br/>
                    </div>
                    <div>
                        <label>Contact Number: 
                            <input type="tel" ref="patientContact" />
                        </label>
                        <br/>
                    </div>
                    <div>
                        <input type="submit" />
                        <br/>
                    </div>
                </form>
            </div>
        </div>;
    }
}
