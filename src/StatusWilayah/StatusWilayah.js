import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './StatusWilayah.css';

export default class StatusWilayah extends Component {

	constructor(props) {
		super(props);
		this.state = {
			airx: null,
			xground: null,
			xflood: null,
			trashx: null,
			statuswilayah: true,
			wilayah: null
		}
	}

	componentDidMount() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
         
			axios.get("https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?prox=" + String(position.coords.latitude) + "%2C" + String(position.coords.longitude) + "%2C250&mode=retrieveAddresses&maxresults=1&gen=9&app_id=9fqnaB6d6rLJWxFpNASK&app_code=RoB26jtN0zFQ1BBhPdJe2A")
				.then((response) => {
					console.log(response.data.Response.View[0].Result[0].Location.Address.Subdistrict);
					var kolp = String(response.data.Response.View[0].Result[0].Location.Address.Subdistrict);
					this.setState({ wilayah: kolp });
				axios.get("https://jkts.herokuapp.com/all/airx/"+ kolp)
					.then((response) => {
						var angka = true;
						response.data.map((doc) => {
							console.log("status");
							console.log(doc.status);
							if(doc.status == "baik" && angka) {
								angka = true;
							} else {
								angka = false;
							}
						})
						console.log(angka);

						axios.get("https://jkts.herokuapp.com/all/xflood/"+ kolp)
						.then((response) => {
							response.data.map((doc) => {
								console.log("status");
								console.log(doc.status);
								if(doc.status == "baik" && angka) {
									angka = true;
								} else {
									angka = false;
								}
							})
							console.log(angka);

							axios.get("https://jkts.herokuapp.com/all/xground/"+ kolp)
							.then((response) => {
								response.data.map((doc) => {
									console.log("status");
									console.log(doc.status);
									if(doc.status == "baik" && angka) {
										angka = true;
									} else {
										angka = false;
									}
								})
								console.log(angka);

								axios.get("https://jkts.herokuapp.com/all/trashx/"+ kolp)
								.then((response) => {
									response.data.map((doc) => {
										console.log("status");
										console.log(doc.status);
										if(doc.status == "baik" && angka) {
											angka = true;
										} else {
											angka = false;
										}
									})
									console.log(angka);

									if (angka) {
										this.setState({ statuswilayah: "BAIK"});
									} else {
										this.setState({ statuswilayah: "KURANG"});
									}

								})
								.catch( (error) => {
					                console.log(error);
					            })

							})
							.catch( (error) => {
				                console.log(error);
				            })

						})
						.catch( (error) => {
			                console.log(error);
			            })

					})
					.catch( (error) => {
		                console.log(error);
		            })
		        })
				.catch( (error) => {
	                console.log(error);
	            })
				
			})
		}
	}

	render () {
		return(
				<div className="card" id="StatusWilayah">
					<div id="StatusWilayahWrap">
						<div className="bag1">
							<h2>Status <br/>Wilayah <br/>Kamu</h2>
						</div>
						<div className="bag2">
							<Link to={`/dashboard/${this.state.wilayah}`}>{this.state.statuswilayah}</Link>
						</div>
						<a href="#" id="lengkapi">*Selengkapnya</a>
					</div>
				</div>
			)
	}
}