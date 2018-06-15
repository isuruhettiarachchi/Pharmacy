import React, {Component}           from 'react';
import axios                        from 'axios';

import styled, { css }              from 'styled-components';
import jsPDF                        from 'jspdf';
import html2canvas                  from 'html2canvas';
var URL                             = require("../../Config.app");
var NODE_URL                        = URL.NODE_API;

export default class Reports extends Component{


    constructor(){
        super();
        this.state = {
            date :new Date()
        }
    }

    componentWillMount(){
        // this.getReports();
    }

    getReports(){
        axios.get(NODE_URL+"/reports", {headers:{'crossDomain':true}}).then(
            (recieved)=>{
                console.log(recieved);
                if(recieved.status===200){
                    console.log("report Data :"+JSON.stringify(recieved.data.message+"<><>"));
                    recieved.data.message.forEach(element => {
                        console.log("id: "+element.id+
                        "\nname: "+element.name+
                        "\ntype: "+element.type+
                        "\ndescription: "+element.description+
                        "\ndeleted: "+element.deleted);
                    });

                    var tbd =document.getElementById("reportTableB")
                    recieved.data.message.forEach(
                        element=>{

                            if(element.deleted===false){
                                console.log("here"+element.deleted);
                                var tr = document.createElement('tr');
                                var td1 = document.createElement('td');
                                    td1.innerHTML = "<font color=green>"+element.id+"</font>";
                                    td1.colSpan="5" ;
                                    td1.width ="150px";
                                var td2 = document.createElement('td');
                                    td2.innerHTML = element.name;
                                    td2.colSpan="5" ;
                                    td2.width ="150px";
                                var td3 = document.createElement('td');
                                    td3.innerHTML = element.type;
                                    td3.colSpan="5" ;
                                    td3.width ="150px";
                                var td4 = document.createElement('td');
                                    td4.innerHTML = "<font color=green>"+element.description+"</font>";
                                    td4.colSpan="5" ;
                                    td4.width ="150px";

                                tr.appendChild(td1);
                                tr.appendChild(td2);
                                tr.appendChild(td3);
                                tr.appendChild(td4);
                                
                                tbd.appendChild(tr);
                            }
                            
                        }
                    );
                    const input = document.getElementById('divToPrint');
                    html2canvas(input).then(
                        (canvas)=>{
                            const imageData = canvas.toDataURL('image/png');
                            const pdf = new jsPDF();
                            pdf.addImage(imageData, "JPEG", 0, 0);
                            // pdf.output('dataurlnewwindow');
                            pdf.save("Report.pdf");
                        });
                }
            }).catch(
                (err)=>{
                    console.log(err);
                }
                
            )
    }

    render(){
        return <div>
                <div id="divToPrint" {...css({
                    backgroundColor: '#f5f5f5',
                    width: '210mm',
                    minHeight: '297mm',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                })}>
                    <h3 align="center">Reports on dispenses</h3>

                    <br/>
                    <table id="reportTable">
                    <thead>
                    <tr>
                        <th colSpan="5" width ="150px">Report ID</th>
                        <th colSpan="5" width ="150px">Report Name</th>
                        <th colSpan="5" width ="150px">Report Type</th>
                        <th colSpan="5" width ="150px">Report Description</th>
                    </tr>
                    </thead>
                    <tbody id="reportTableB">
                        
                    </tbody>
                    </table>
                    <span style={{position:"relative"}}>{this.state.date.toString()}</span>
                   
                 </div>   
                    <input type="button" value="Generate Report" onClick={this.getReports()} />
            
            </div>
    }

}