import React, { Component } from 'react';
import './Faq.css'

export default class Faq extends Component {

	_getFaqPoint = () => {
		var faqs = [
			{"pertanyaan": "Apa itu Jakarta Sehat?", "jawaban": "Jakarta Sehat merupakan visualisasi data dari data - data yang dihimpun dan diproses oleh sistem - sistem dalam Smart Environment"},
			{"pertanyaan": "Apa itu Smart Environment?", "jawaban": "Smart Environment adalah sistem kompleks yang mengintegrasikan berbagai sistem lain didalamnya."},
			{"pertanyaan": "Apa yang mendasari terbentuknya Smart Environment(Jakarta Sehat)?", "jawaban": "Smart Environment hadir dari keresahan kami terhadap kondisi lingkungan Jakarta yang sedang tidak baik berdasarkan data."},
			{"pertanyaan": "Apa keunggulan Smart Environment?", "jawaban": "Smart Environment khususnya dengan Jakarta Sehat mampu meningkatkan tingkat kepedulian publik terhadap masalah kualitas lingkungan di sekitarnya. Dengan sistem realtime serta otomatisasi, Smart Environment menjadi pilihan pertama dalam penanggulangan serta pengawasan setiap perubahan yang memengaruhi kualitas lingkungan"},
			{"pertanyaan": "Sistem - sistem apa saja yang terintegrasi dalam Smart Environment?", "jawaban": "Smart Environment terintegrasi dengan beberapa modul alat, Jakarta Sehat, dan API. Sistem - sistem tersebut diintegrasikan dalam sistem inti Smart Environment."},
			{"pertanyaan": "Modul alat apa saja yang terintegrasi dengan Smart Environment?", "jawaban": "X-Flood yang dapat mendeteksi kemungkinan banjir, Air-X yang dapat mendeteksi kualitas udara sekitar, Trash-X yang dapat memberishkan sampah disungai, X-Ground yang dapat mendeteksi kualitas tanah dalam suatu area."},
			{"pertanyaan": "Berapa maksimal jumlah modul alat yang dapat terintegrasi dengan Smart Environment?", "jawaban": "Tidak ada batasan. Malahan, Smart Environment terbuka terhadap setiap inovasi baru untuk diintegrasikan dengan Smart Environment. Smart Environment sangat terbuka terhadap permintaan untuk mengintegrasikan modul alat yang dibuat oleh publik, apalagi kalau modul alat tersebut memiliki fokus yang sama dengan Smart Environemnt yakni kualitas lingkungan."}
		];
		return faqs;
	}

	_renderFaqPoint = (faq, index) => {
		
		return(
				<div class="card faq" key={`marker-${index}`}>
		    		<div class="card-header op" id="heading{index}">
		    			<h2 class="mb-0">
		        			<button class="btn btn-link" type="button" data-toggle="collapse" data-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>
		          				{faq.pertanyaan}
						    </button>
						</h2>
		    		</div>
		
		    		<div id={`collapse${index}`} class="collapse" aria-labelledby={`heading${index}`} data-parent="#accordionExample">
		      			<div class="card-body">
		        			{faq.jawaban}
		        		</div>
		    		</div>
		  		</div>
		  	)
	}

	render() {
		return(
				<div className="wrappertentangan">
					<h2>Frequently Asked Question</h2>
					<article className="isi">

						<div class="accordion" id="accordionExample">
							{this._getFaqPoint().map(this._renderFaqPoint)}
						</div>

					</article>

				</div>
			)
	}
}