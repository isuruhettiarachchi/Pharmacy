
import React, {Component}       from 'react';
import axios                    from 'axios';
// import PropTypes                from 'prop-types';

var URI                         = require("../../Config.app");
var NODE_URI = URI.NODE_API;
var pharmacists = [];
var pharmacistID = [];
export default class Pharmacists extends Component{
    // static get propTypes() {
    //     return {
    //         pharmacists: propTypes.array
    //     }
    // }
    
    constructor(props){
        super(props);
        this.getAllPharmacists();
    }

    // componentWillReceiveProps(props) {
    //     this.setState(props)
    // }

    getAllPharmacists(){
        axios.get(NODE_URI, {headers: { 'crossDomain': true }}).then((results)=>{
            console.log(results['status']);
            console.log(results.status)
            if(results["status"]===200){
                var pharmacistsArray = results.message;
                for(var i in pharmacistsArray){
                    console.log(i+ ", " +pharmacistsArray[i]);
                    // pharmacists.push(i, pharmacistsArray[i]);
                    // pharmacistID.push(i,pharmacistsArray[i]);
                }
            }
        })
        
    }

    render(){
        // this.pharmacists = this.props.pharmacists;
        return <div>
            <h3>Pharmacists</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    
                    
                          
                                <tr>
                                    <td>{

                                        
                                           pharmacistID[0]
                                   
                                    }</td>
                                    <td>
                                        {

                                            pharmacists[0]
                                            
                                        }

                                    </td>
                                </tr>
                            
                     
                    
                </tbody>
            </table>
        </div>
    }
}