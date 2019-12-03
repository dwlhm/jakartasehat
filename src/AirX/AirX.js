
import React, { Component } from 'react';
import axios from 'axios';
import Chart from "react-apexcharts";

export default class AirX extends Component {
	constructor(props) {
		super(props);
		const { match: { params }} = this.props;
		this.state = {
			lokasi: params.lokasi,
			airx: null,
			airxdata: null,
			options: {
		    	chart: {
		        	id: "basic-bar"
		        },
		        xaxis: {
		        	categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
		        }
		    },
		    series: [
		        {
		        	name: "series-1",
		        	data: [30, 40, 45, 50, 49, 60, 70, 91]
		        },
		        {
		        	name: "series-2",
		        	data: [91, 70, 40, 60, 49, 50, 45, 30]
		        }
		    ],
		}
	}

	componentDidMount() {
		this.interval = setInterval( () => {
		axios.get("https://jkts.herokuapp.com/profil/airx/"+String(this.state.lokasi))
            .then( (response) => {
            	console.log("4");
                this.setState({ airx: response.data });
                axios.get("https://jkts.herokuapp.com/data/airx/"+String(this.state.lokasi))
		            .then( (response) => {
		            	console.log("4");
		            	this.setState({ options:{xaxis:{categories: response.data[0]}} })
		            	this.setState({ series: [{ name: "gas", data: response.data[1] },
		            							{ name: "ketinggian", data: response.data[2] },
		            							{ name: "suhu", data: response.data[3] }]
		            				})
		                this.setState({ airxdata: [response.data[0], response.data[1]] });
		                console.log(this.state.airxdata[0])
		            })
		            .catch( (error) => {
		                console.log(error);
		            })
            })
            .catch( (error) => {
                console.log(error);
            })
        
        }, 1000)
	}

	_renderCard = (info, index) => {
		return(
				<div className="card mb-3">
				  <div className="row no-gutters">
				    <div className="col-md-4 gbgb">
				      <img src={info.gambar} className="card-img" />
				    </div>
				    <div className="col-md-8">
				      <div className="card-body">
				        <h5 className="card-title">{`${info.alat} - ${info.state}`}</h5>
				        <p className="card-text">Status: {info.status}</p>
				        <p className="card-text"><small class="text-muted">{`${info.latitude}, ${info.longitude}`}</small></p>
				      </div>
				    </div>
				  </div>
				</div>
			)
	}

	_renderCardBaik = (info, index) => {
		return(
			<div className="card text-white bg-dark mb-3">
				<div className="card-body">
					<h5 className="card-title">Status: {info.status}</h5>
					<p className="card-text">{info.co2}(gas); {info.kelembaban}(kelembaban);{info.suhu}(suhu)</p>
					<h6 class="card-subtitle mb-2 text-muted">{`${info.latitude}, ${info.longitude}`}</h6>
				</div>
			</div>
		)
	}

	render() {
		return( 
			<div className="resume">
				<div className="mixed-chart">
					{this.state.airx !== null ? this.state.airx.map(this._renderCard) : "loading..."}
				</div>

				<div className="mixed-chart">
			        <Chart
			          options={this.state.options}
			          series={this.state.series}
			          type="bar"
			          width={window.innerWidth}
			        />	
			    </div>

			    <div className="mixed-chart">
			    	{this.state.airxdata !== null ? this.state.airxdata.forEach(this._renderCardBaik) : "loading..."}
			    </div>
			</div>
		)	
	}
	
}