
import React, {Component}       from 'react';
import axios                    from 'axios';
// import PropTypes                from 'prop-types';

var URI                         = require("../../Config.app");
var NODE_URI = URI.NODE_API;
var pharmacists =  new Map();
// var pharmacistID = [];
export default class Pharmacists extends Component{
    // static get propTypes() {
    //     return {
    //         pharmacists: propTypes.array
    //     }
    // }
    
    constructor(){
        super();
        this.state = {
            pharmacists:new Map(),
            pharmaID:[],
            pharmaname:[]
        }
        // this.getAllPharmacists();
    }

    // componentWillReceiveProps(props) {
    //     this.setState(props)
    // }

    componentWillMount(){
        
        this.getAllPharmacists();
    }

    getAllPharmacists(){
        axios.get(NODE_URI, {headers: { 'crossDomain': true }}).then((results)=>{
            // console.log(results);
            
            if(results["status"]===200){
                var pharmacistsArray = results['data']['message'];
                for(var i in pharmacistsArray){
                    // console.log(i+ ", " +JSON.stringify(pharmacistsArray[i]));
                    if(pharmacistsArray[i].id!=null&&pharmacistsArray[i].name!=null){
                         pharmacists.set(pharmacistsArray[i].id,pharmacistsArray[i].name);
                        //  console.log(this.state+"pharmac:"+pharmacists);
                    }
                    // pharmacistID.push();

                }
                
                this.setState({
                    pharmacists: pharmacists,
                    // pharmaID:pharmacistID,
                    // pharmaname:
                }, ()=>{
                    console.log(this.state+"pharm:"+this.state.pharmacists);
                });
            }
        }).catch(err=>{
                console.log(err);
        });  
    }

    render(){
        // this.pharmacists = this.props.pharmacists;
        // this.getAllPharmacists();
        return <div>
            <h3>Pharmacists</h3>
            <table >
                <thead>
                    <tr>
                        <th colSpan="5" width ="150px">ID</th>
                        <th colSpan="5" width ="150px">Name</th>
                    </tr>
                </thead>
                <tbody id= "tablePhB">
                    {
                        
                 this.state.pharmacists.forEach(
                                    
                                    (key,value) => {
                          
                                
                                
                                  
                                    console.log(key+":"+value);
                                    var tb = document.getElementById("tablePhB");
                                    var r = document.createElement('tr');
                                    var d1 = document.createElement('td');
                                    d1.innerHTML =  value;
                                    d1.colSpan = 5;
                                    var d2 = document.createElement('td');
                                    d2.innerHTML = key;
                                    d2.colSpan  =5;
                                    r.appendChild(d1);
                                    r.appendChild(d2);
                                    tb.appendChild(r);
                                    
                                    // return <tr>
                                    //             {
                                    //             <td>
                                    //                 {value}
                                    //             </td>
                                    //             }
                                    //             {
                                    //             <td>
                                    //                 {key}
                                    //             </td>
                                    //             }
                                                
                                    //         </tr>
   
                            
                               
                        })  
                            
                    }
                    
                </tbody>
            </table>
        </div>
    }
}