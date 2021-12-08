// API : https://wheretheiss.at/w/developer
import React, { Component} from 'react';
import './charts.css';
import {
    BarChart,
    Bar, 
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
} from "recharts";

// Url API 
const API_URL1 = "http://api.open-notify.org/astros.json" ;

const todayDate = new Date();
const today = (todayDate.getMonth()+1)+'.'+todayDate.getDate()+'.'+todayDate.getFullYear();

const maData = [{name: 'Mark Vande Hei', Ddate: '4.9.2021'}, 
    {name: 'Pyotr Dubrov', Ddate: '4.9.2021'}, 
    {name: 'Anton Shkaplerov', Ddate: '10.5.2021'}, 
    {name: 'Zhai Zhigang', Ddate: '10.15.2021'}, 
    {name: 'Wang Yaping', Ddate: '10.15.2021'}, 
    {name: 'Ye Guangfu', Ddate: '10.15.2021'}, 
    {name: 'Raja Chari', Ddate: '11.11.2021'}, 
    {name: 'Tom Marshburn', Ddate: '11.11.2021'}, 
    {name: 'Kayla Barron', Ddate: '11.11.2021'}, 
    {name: 'Matthias Maurer', Ddate : '11.11.2021'},
];


class Api_Graph extends Component {
    state = {
        post: {}
    }
	
    componentDidMount() {
        fetch(API_URL1).then((response) => {
            response = response.json();
            response.then((result) => {
                this.setState({post: result});
            })
        })
    }

	getTpsEsp(givenName){
		let temp = 0;
		for(let ct=0; ct< this.state.post.number; ct++){
			if (maData[ct].name == givenName){	
				var date1 = new Date(maData[ct].Ddate);
				var date2 = new Date(today);
				var timeDiff = Math.abs(date2 - date1);
				temp= Math.ceil(timeDiff / (1000 * 3600 * 24));
			}
		}
		return temp;
	}

	getData(rep){
		let repp = rep.state.post;
		let nbrA = repp.number;
		const dataIn = new Array(nbrA);
		for(let ct=0; ct< nbrA; ct++)
			{   
				let diffDay = this.getTpsEsp(repp.people[ct].name);
				var obj = {
					name: repp.people[ct].name,
					"Jours passé dans l'Espace": diffDay,
				};
				dataIn[ct] = obj;
			}	
		return dataIn;	
	}
	
    render() {
		return (
			<BarChart 
				width={500}
				height={450}
				data={this.getData(this)}
				margin={{top: 5, right: 30, left: 20, bottom: 5,}}
				>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name"/>
				<YAxis />
				<Tooltip />
				<Legend />
				<ReferenceLine y={0} stroke="#000" />
				<Bar dataKey="Jours passé dans l'Espace" fill="#100F5A" />
			</BarChart>

		);
	}
}
export default Api_Graph;
