import React, {Component}           from 'react';
import axios                        from 'axios';

var URL                             = require("../../Config.app");
var NODE_URL                        = URL.NODE_API;

export default class Reports extends Component{


    constructor(){
        super();
        this.state = {

        }
    }

    componentWillMount(){
        this.getReports();
    }

    getReports(){
        axios.get(NODE_URL+"/reports", {headers:{'crossDomain':true}}).then(
            (recieved)=>{
                console.log(recieved);
                if(recieved.status==200){

                }
            }).catch(
                (err)=>{
                    console.log(err);
                }
                
            )
    }

    render(){
        return <div>
            <h3 align="center">Reports on dispenses</h3>

            <br/>
            <table id="reportTable"></table>
            <input type="button" value="Generate Report" onClick={this.getReports()} />
            
            </div>
    }

}