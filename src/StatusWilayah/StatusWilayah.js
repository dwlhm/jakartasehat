import React, { Component } from 'react';
import axios from 'axios';
import './StatusWilayah.css';

export default class StatusWilayah extends Component {

	constructor(props) {
		super(props);
		this.state = {
			airx: null,
			xground: null,
			xflood: null,
			trashx: null,
			statuswilayah: true
		}
	}

	componentDidMount() {
		axios.get("https://jkts.herokuapp.com/all/airx")
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

				axios.get("https://jkts.herokuapp.com/all/xflood")
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

					axios.get("https://jkts.herokuapp.com/all/xground")
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

						axios.get("https://jkts.herokuapp.com/all/trashx")
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
	}

	render () {
		return(
				<div className="card" id="StatusWilayah">
					<div id="StatusWilayahWrap">
						<div className="bag1">
							<h2>Status <br/>Wilayah <br/>Kamu</h2>
						</div>
						<div className="bag2">
							<a href="#">{this.state.statuswilayah}</a>
						</div>
						<a href="#" id="lengkapi">*Selengkapnya</a>
					</div>
				</div>
			)
	}
}