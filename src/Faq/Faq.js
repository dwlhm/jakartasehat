import React, { Component } from 'react';
import './Faq.css'

export default class Faq extends Component {

	_getFaqPoint = () => {
		var faqs = [
			{"pertanyaan": "Apa itu SMART ENVIRONMENT?", "jawaban": "SMART ENVIRONMENT adalah sebuah prototype alat yang terintegrasi dari beberapa sub alat (X-FLOOD,TRASH-X, AIR-X dan X-GROUND) yang mampu memonitor dan mengkontrol kualitas lingkungan berbasis IoT."},
			{"pertanyaan": "Apa fungsi dari SMART ENVIRONMENT?", "jawaban": "Fungsi SMART ENVIRONMENT adalah mampu memonitor dan mengkontrol tingkat kualitas tanah, polusi udara, sampah dan banjir berbasis IoT."},
			{"pertanyaan": "Apa yang mendasari pembuatan SMART ENVIRONMENT?", "jawaban": "Yang mendasari pembuatan SMART ENVIRONMENT adalah keresahan kami terhadap kualitas lingkungan yang buruk, khususnya kota Jakarta."},
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