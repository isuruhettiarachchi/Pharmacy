import React, {Component}           from 'react';
import axios                        from 'axios';
import URI                          from '../../Config.app';

export default class AddPharmacist extends Component{
    constructor(props){
        super(props);
        this.state = {
            pharmacist:[]
        }
    }
    componentWillMount(){
        
    }
    addNewPharmacist(e){
        console.log(this.refs.pharmacistName.value)
        if(!this.refs.pharmacistName.value){
            alert('Name is required');
        }else if(!this.refs.pharmacistUname.value){
            alert('User Name is required');
        }else if(!this.refs.pharmacistPassword.value){
            alert('Password is required');
        }else if(!this.refs.pharmacistNIC.value){
            alert('NIC is required');
        }else if(!this.refs.pharmacistAddress.value){
            alert('Address is required');
        }else if(!this.refs.pharmacistContact.value){
            alert('Contact is required');
        }else if(!this.refs.pharmacistEmail.value){
            alert('Email is required');
        }else {
            console.log(this.refs);

            this.registerPharmacist(this.refs);
            alert(this.refs.pharmacistPassword.value);
        }
        e.preventDefault();
    }

    registerPharmacist(refs){
        alert(refs.pharmacistName.value);
        axios.post(URI.NODE_API+"/pharmacists",
            {
                
                name:refs.pharmacistName.value, nic:refs.pharmacistNIC.value, address:refs.pharmacistAddress.value, contact:refs.pharmacistContact.value, email:refs.pharmacistEmail.value, username:refs.pharmacistUname.value, password:window.btoa(refs.pharmacistPassword.value), role:refs.pharmacistRole.value
            }).then((results)=>{
                alert(refs);
                console.log(results);
                if(results["status"]===200){
                    alert("Pharmacist added");
                }
            }).catch(err=>{
                console.log(err);
                alert(err.message);
        });  
        alert(refs);
    }

    render(){
        return <div>
                <h3>
                    Register Pharmacists
                </h3>
                
                <div>
                    <form onSubmit = {this.addNewPharmacist.bind(this)}>
                        <div>
                            <label className="col-lg-12"><span className="col-lg-6">Name:</span>
                                <span className="col-lg-6">
                                <input type="text" ref="pharmacistName"/>
                                </span>
                            </label>
                            <br/>
                        </div>
                        <div>
                            <label className="col-lg-12"><span className="col-lg-6">NIC:</span>
                                
                            <span className="col-lg-6"></span><input type="text" ref="pharmacistNIC"/>
                            </label>
                            <br/>
                        </div>
                        <div >
                            <label className="col-lg-12"><span className="col-lg-6">Address:</span>
                                <input type="text" ref="pharmacistAddress"/>
                            </label>
                            <br/>
                        </div>
                        <div>
                            <label className="col-lg-12"><span className="col-lg-6">Contact:</span>
                            <span className="col-xm-2"></span><input type="tel" ref="pharmacistContact"/>
                            </label>
                            <br/>
                        </div>
                        <div>
                            <label  className="col-lg-4" ><span className="col-sm-6">Email  :</span>
                            
                            <span className="col-xm-2"></span><input type="text" ref="pharmacistEmail"/>
                            </label>
                            <br/>
                        </div>
                        <div>
                            <label  className="col-lg-12" ><span className="col-sm-8">Role:</span>
                            <span className="col-sm-2"></span><input type="text" ref="pharmacistRole"/>
                            </label>
                            <br/>
                        </div>
                        <br/><br/>
                        <div>
                            <label>User Name:
                                <input type="text" ref="pharmacistUname"/>
                            </label>
                        </div>
                        <div>
                            <label>Password:
                                <input type="password" ref="pharmacistPassword"/>
                            </label>
                            <br/>
                        </div>
                        <div>
                            <input type="submit" />
                            <br/>
                        </div>                    


                    </form>
                </div>
              </div>
    }
}