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

    }

    getReports(){
        axios.get(NODE_URL+"/reports", {headers:{'crossDomain':true}}).then(
            (recieved)=>{
                cosnole.log(recieved);
                if(recieved.status==200){

                }
            }).catch(
                (err)=>{
                    console.log(err);
                }
                
            )
    }

}