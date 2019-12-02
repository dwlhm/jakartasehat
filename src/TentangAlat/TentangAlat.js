import React, { Component } from 'react';
import './TentangAlat.css';

export default class TentangAlat extends Component {

	render() {
		return(
				<div className="wrappertentangan">
					<h2>Tentang <span className="jakarta">Jakarta</span> <span className="sehat">Sehat</span></h2>
					<article className="isi">
					SMART ENVIRONMENT adalah sebuah prototype alat yang digunakan <br/>
					untuk memonitor dan mengkontrol tingkat kualitas lingkungan dengan mengukur parameter-paramter penting yang ada di dalamnya. <br/>
					SMART ENVIRONMENT adalah sebuah solusi terhadap buruknya kualitas lingkungan yang ada. Dengan transparansi data berbasis IoT dapat memudahkan akses informasi bagi banyak orang. <br/>

					</article>
				</div>
			)
	}
}