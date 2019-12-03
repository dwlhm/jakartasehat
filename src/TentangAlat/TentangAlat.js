import React, { Component } from 'react';
import './TentangAlat.css';

export default class TentangAlat extends Component {

	render() {
		return(
				<div className="wrappertentangan">
					<h2>Tentang <span className="jakarta">Jakarta</span> <span className="sehat">Sehat</span></h2>
					<article className="isi">
						<p>Jakarta Sehat merupakan bagian dari sistem Smart Environment. Smart Environment merupakan sistem yang menghimpun data modul - modul alat terintegrasi untuk kemudian diproses dan divisualisasikan oleh Jakarta Sehat. Data - data dihimpun secara realtime metode long polling menggunakan API yang telah terintegrasi dengan serangkaian sistem Smart Environment. Modul - modul alat yang terintegrasi dalam sistem Smart Environment ini mampu memonitoring serta mengontrol beberapa point penting yang dapat memengaruhi kualitas lingkungan seperti kualitas udara, kualitas tanah, serta kualitas air sungai. Hal tersebut dilakukan oleh setiap modul dengan cara mengukur setiap parameter - parameter yang telah ditentukan di lingkungan tempat modul alat tersebut dioperasikan.</p>
						<p>Smart Environment merupakan solusi terhadap buruknya kualitas lingkungan yang ada. Khususnya dengan Jakarta Sehat, Smart Environment menghadirkan transparansi data. Transparansi data tersebut diharapkan mampu menambah sensitivitas atau kepedulian publik terhadap kondisi lingkungan sekitarnya yang semakin memburuk. Smart Environment dengan modul - modul alatnya juga memiliki fitur otomatisasi yang dapat menjadi penanggulangan pertama terhadap setiap perubahan kondisi yang terjadi.</p>
						<p>Smart Environment kini memiliki beberapa modul yang telah terintegrasi dan harapannya dapat bertambah dengan kreativitas serta dukungan publik. Smart Environment kami rancang secara terbuka dan mudah dalam pengintegrasian, kami sangat terbuka terhadap setiap inovasi yang ingin diintegrasikan degan Smart Environment. Banyak platform penghimpunan serta pemvisualisasian data, namun sedikit platform yang menyediakannya secara terbuka dan terintegrasi dalam satu sistem utuh. Modul - modul alat yag telah terintegrasi dengan Smart Environment ialah X-Flood, Air-X, Trash-X, X-Ground. Kesetiap modul alat memiliki kegunaannya masing masing. X-Flood dapat mendeteksi kemungkinan banjir, Air-X dapat mendeteksi kualitas udara sekitar, Trash-X dapat memberishkan serta memonitoring seiap sampah yang ada disungai, X-Ground dapat memonitoring kualitas tanah dalam suatu area.</p>
					</article>
				</div>
			)
	}
}