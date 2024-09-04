import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default class Nav extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
				 <div id="first">
    					<nav id="first-navsection">
    						<div className="nav-wapper">
		    					<ul id="nav-mobile" className="right hide-on-med-and-down">
		        					<li className="card" id="khususon"><Link to="/">Jakarta <br/><span className="sehat">Sehat</span></Link></li>
		        					<li className="card" id="khususon1"><Link to="/tentangalat/">Tentang <br/> <span class="jakarta">Jakarta</span><br/> <span class="sehat">Sehat</span></Link></li>
		        					<li className="card hid" id="khususon1"><Link to="/profiltim/">Profil <span className="elco">Elco</span><br/> <span className="siliwangi">_Siliwangi</span><br/> <span className="team">Team</span></Link></li>
		        					<li className="card"><Link to="/faq/"><i className="fas fa-question-circle ikon" />FAQ</Link></li>
		        					<li className="card"><Link to="/carakerja/"><i className="fas fa-cogs ikon" />Cara Kerja</Link></li>
		    					</ul>
		    				</div>
	    				</nav>
  				</div>
			);
	}
}
