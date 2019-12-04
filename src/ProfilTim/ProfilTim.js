import React, { Component } from 'react';
import sthev from './sthev.PNG';
import elfan from './elfan.PNG';
import dwi from './dwi.PNG';

export default class ProfilTim extends Component {

	render() {
		return(
				<div className="wrappertentangan">
					<h2>Profil Elco_Siliwangi Team</h2>
					<article className="isi">
						<table className="table table-borderless">
						  <tbody>
						    <tr>
						      <td><img src={sthev} /></td>
						      <td>
						      	<tr>Ketua	</tr>
								<tr>Asal	</tr>
								<tr>TTL		</tr>
								<tr>Profesi	</tr>
						      </td>
						      <td>
						      	<tr>: Stheven Erlangga</tr>
						      	<tr>: Jakarta</tr>
						      	<tr>: Tanggerang, 26 September 2000</tr>
						      	<tr>: Mahasiswa</tr>
						      </td>
						    </tr>
						    <tr>
						      <td><img src={elfan} /></td>
						      <td>
						      	<tr>Anggota	</tr>
								<tr>Asal	</tr>
								<tr>TTL		</tr>
								<tr>Profesi	</tr>
						      </td>
						      <td>
						      	<tr>: Elfan Ahmad Rifansyah </tr>
								<tr>: Garut </tr>
								<tr>: Garut, 28 November 1999</tr>
								<tr>: Mahasiswa</tr>
							  </td>
						    </tr>
						    <tr>
						      <td><img src={dwi} /></td>
						      <td>
						      	<tr>Anggota	</tr>
								<tr>Asal	</tr>
								<tr>TTL		</tr>
								<tr>Profesi	</tr>
						      </td>
						      <td>
						      	<tr>: Dwi Ilham Maulana</tr>
								<tr>: Cilacap</tr>
								<tr>: Cilacap, 26 Juni 2000</tr>
								<tr>: Mahasiswa</tr>
						      </td>
						    </tr>
						  </tbody>
						</table>
					</article>
				</div>
			)
	}
}