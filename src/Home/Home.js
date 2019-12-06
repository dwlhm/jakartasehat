import React, { Component } from 'react';
import ReactMapGL, {Marker, Popup } from 'react-map-gl';
import { Link } from 'react-router-dom';
import axios from 'axios';
import StatusWilayah from '../StatusWilayah/StatusWilayah';
import './Home.css';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			viewport: {
				width:window.innerWidth,
				height:window.innerHeight,
				latitude: 5,
				longitude: 35,
				zoom: 15
			},
			airx: null,
			xground: null,
			xflood: null,
			trashx: null,
			popupInfo: null,
			error: 'null'
		}
	}

	componentDidMount() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				this.setState(({viewport}) => ({viewport: {
                        ...viewport,
                	    latitude: position.coords.latitude,
                	    longitude: position.coords.longitude
                    }})
                );				
			
		axios.get("https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?prox=" + String(position.coords.latitude) + "%2C" + String(position.coords.longitude) + "%2C250&mode=retrieveAddresses&maxresults=1&gen=9&app_id=9fqnaB6d6rLJWxFpNASK&app_code=RoB26jtN0zFQ1BBhPdJe2A")
				.then((response) => {
					console.log(response.data.Response.View[0].Result[0].Location.Address.Subdistrict);
					var akol = String(response.data.Response.View[0].Result[0].Location.Address.Subdistrict);
					axios.get("https://jkts.herokuapp.com/all/airx/")
	            .then( (response) => {
	            	console.log('1');
	                this.setState({ airx: response.data });

	                axios.get("https://jkts.herokuapp.com/all/xground/")
	            .then( (response) => {
	            	console.log("2");
	                this.setState({ xground: response.data });
		                axios.get("https://jkts.herokuapp.com/all/xflood/")
		            .then( (response) => {
		            	console.log("3");
		                this.setState({ xflood: response.data });
			                axios.get("https://jkts.herokuapp.com/all/trashx/")
			            .then( (response) => {
			            	console.log("4");
			                this.setState({ trashx: response.data });
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

	_renderAirXMarker = (alat, index) => {
		return(
				<Marker key={`marker-${index}`} longitude={alat.longitude} latitude={alat.latitude} class="preorder">
					<i className="fas fa-map-marker-alt markerAlat markerAirX" onClick={() => this.setState({popupInfo: alat})}></i>
				</Marker>
			)
	}

	_renderXGroundMarker = (alat, index) => {
		return(
				<Marker key={`marker-${index}`} longitude={alat.longitude} latitude={alat.latitude} class="preorder">
					<i className="fas fa-map-marker-alt markerAlat markerXGround" onClick={() => this.setState({popupInfo: alat})}></i>
				</Marker>
			)
	}

	_renderXFloodMarker = (alat, index) => {
		return(
				<Marker key={`marker-${index}`} longitude={alat.longitude} latitude={alat.latitude} class="preorder">
					<i className="fas fa-map-marker-alt markerAlat markerXFlood" onClick={() => this.setState({popupInfo: alat})}></i>
				</Marker>
			)
	}

	_renderTrashXMarker = (alat, index) => {
		return(
				<Marker key={`marker-${index}`} longitude={alat.longitude} latitude={alat.latitude} class="preorder">
					<i className="fas fa-map-marker-alt markerAlat markerTrashX" onClick={() => this.setState({popupInfo: alat})}></i>
				</Marker>
			)
	}

	_renderPopup() {
	    const {popupInfo} = this.state;

	    return (
	      	popupInfo && (
	        	<Popup
	          		tipSize={5}
			        anchor="top"
			        longitude={popupInfo.longitude}
			        latitude={popupInfo.latitude}
			        closeOnClick={false}
			        onClose={() => this.setState({popupInfo: null})}
	        	>
	          		<div>
	          			<div className="card popuppop">
					    	<img src={popupInfo.gambar} className="card-img-top" alt={popupInfo.gambar} />
					        <div className="card-body">
					          <h5 className="card-title">{popupInfo.alat} - {popupInfo.state}</h5>
					          <h6 className="subtitle">{popupInfo.longitude}, {popupInfo.latitude}</h6>
					          <p className="card-text">status: {popupInfo.status}</p>
					          <Link to={`${popupInfo.alat}/${popupInfo.state}/`} className="btn btn-primary">Detail</Link>
					        </div>
					    </div>
	          		</div>
	        	</Popup>
	      	)
	    );
	}

	render() {



		return( 
			<div>
				<ReactMapGL 
					className="mapContainer"
					{...this.state.viewport}
					onViewportChange={(viewport) => this.setState({viewport})}
					mapboxApiAccessToken={"pk.eyJ1IjoibWF1bGFuYTAyNiIsImEiOiJjazFvODM2cXowZHNhM2hvaWttNnlkczFxIn0.GytjwhxtQ1VS1wysWsp89A"} 
				>

					{this._renderPopup()}
					
					{console.log(this.state.airx)}

				    {this.state.airx !== null ?  this.state.airx !== "no data" ? this.state.airx.map(this._renderAirXMarker) : "loading..." : "Loading..."}

				    {this.state.xground !== null ? this.state.xground !== "no data" ? this.state.xground.map(this._renderXGroundMarker) : "loading..." : "Loading..."}

				    {this.state.xflood !== null ?  this.state.xflood !== "no data" ? this.state.xflood.map(this._renderXFloodMarker) : "loading..." : "Loading..."}

				    {this.state.trashx !== null ?  this.state.trashx !== "no data" ? this.state.trashx.map(this._renderTrashXMarker) : "loading..." : "Loading..."}
				</ReactMapGL>
				<div id="legenda" className="card">
					<ul>
						<li><span>AirX</span><i className="fas fa-map-marker-alt markerAlat markerAirX"></i></li>
						<li><span>XFlood</span><i className="fas fa-map-marker-alt markerAlat markerXFlood"></i></li>
						<li><span>XGround</span><i className="fas fa-map-marker-alt markerAlat markerXGround"></i></li>
						<li><span>TrashX</span><i className="fas fa-map-marker-alt markerAlat markerTrashX"></i></li>
					</ul>
				</div>
				<StatusWilayah />
			</div>
		)	
	}
	
}