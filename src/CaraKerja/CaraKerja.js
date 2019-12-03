import React, { Component } from 'react';
import gambar from './carakerja.PNG';

export default class Faq extends Component {

	render() {
		return(
				<div className="wrappertentangan">
					<h2>Cara Kerja</h2>
					<article className="isi">
						<img src={gambar} className="gambar" />
						<div>
							<p>Jakarta Sehat merupakan visualisasi berbentuk web application dari serangkaian sistem Smart Environment, dimana Smart Environment merupakan sistem monitoring terintegrasi dengan beragam modul alat untuk mencapai transparansi data kepada publik. Data yang menjadi fokus utama smart environment ialah data kualitas lingkungan mulai dari kualitas udara, kualitas air sungai, kualitas tanah.</p>
							<p>Cara kerja Smart Environment dimulai dengan menghimpun setiap data yang telah terkumpul dari setiap modul alat yang telah terintegrasi menggunakan sebuah api. Setelah data - data dihimpun, data tersebut kemudian diproses dengan serangkaian logika kerja di server untuk divisualisasikan oleh Jakarta Sehat. Semua proses dalam Smart Environment berjalan secara realtime dengan metode long polling.</p>
							<p>Modul alat yang terintegrasi dalam sistem Smart Environment ialah X-Flood yang dapat mendeteksi kemungkinan banjir, Air-X yang dapat mendeteksi kualitas udara sekitar, Trash-X yang dapat memberishkan sampah disungai, X-Ground yang dapat mendeteksi kualitas tanah dalam suatu area.</p>
						</div>
					</article>
				</div>
			)
	}
}