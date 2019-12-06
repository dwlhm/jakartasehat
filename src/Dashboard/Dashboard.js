import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Dashboard.css';

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nilai: null,
      datalist: null,
      options: {
        labels: ['Kesehatan Lingkungan'],
        plotOptions: {
          radialBar: {
              hollow: {
                  size: '70%',
              }
          },
        },
      },
      series: [0],
      seriesLine: [{
        name: 'airx',
        data: [32]
      }, {
        name: 'xflood',
        data: [41]
      }, {
        name: 'xtrash',
        data: [12]
      }, {
        name: 'groundx',
        data: [65]
      }]
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
          axios.get("http://jkts.herokuapp.com/summary/"+String(this.state.wilayah))
          .then((response) => {
            console.log(response.data);
            this.setState({ datalist: response.data });
          })
          .catch((error) => {
            console.log(error);
          })
        axios.get("https://jkts.herokuapp.com/all/airx/"+ kolp)
          .then((response) => {
            var angka = 0;
            var value = true;
            response.data.map((doc) => {
              console.log("status");
              console.log(doc.status);
              if(doc.status == "baik") {
                angka++;
              } else {
                angka--;
              }
              if (doc.status == "kurang") {
                value = false
              }
            })
            console.log(angka);

            axios.get("https://jkts.herokuapp.com/all/xflood/"+ kolp)
            .then((response) => {
              response.data.map((doc) => {
                console.log("status");
                console.log(doc.status);
                if(doc.status == "baik") {
                  angka++;
                } else {
                  angka--;
                }
                if (doc.status == "kurang" && value) {
                  value = false;
                }
              })
              console.log(angka);

              axios.get("https://jkts.herokuapp.com/all/xground/"+ kolp)
              .then((response) => {
                response.data.map((doc) => {
                  console.log("status");
                  console.log(doc.status);
                  if(doc.status == "baik") {
                    angka++;
                  } else {
                    angka--;
                  }
                  if (doc.status == "kurang" && value) {
                    value = false;
                  }
                })
                console.log(angka);

                axios.get("https://jkts.herokuapp.com/all/trashx/"+ kolp)
                .then((response) => {
                  response.data.map((doc) => {
                    console.log("status");
                    console.log(doc.status);
                    if(doc.status == "baik") {
                      angka++;
                    } else {
                      angka--;
                    }
                    if (doc.status == "kurang" && value) {
                      value = false;
                    }
                  })
                  console.log(angka);

                  this.setState({ nilai: value });

                  this.setState({ series: [(angka/8)*100] })
                  console.log(this.state.series);

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

  _renderStatus = (alat, index) => {
    return(
      <div className="col-sm-4">
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4 kartuStatus rounded">
              <img src={alat.gambar} className="card-img" alt={alat.gambar} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{`${alat.alat} - ${alat.state}`}</h5>
                <p className="card-text">Status: {alat.status}</p>
                <p className="card-text"><small class="text-muted">{alat.latitude}, {alat.longitude}<br/>
                  <div className="detaildashboard"><Link className="linkstatus rounded" to={`/${alat.alat}/${alat.state}`}>Detail</Link></div>
                </small></p>
              </div>
            </div>
          </div>
        </div>
        </div>
      )
  }

  render() {

    return (
      <div className="dashboard"> 
        <div className="radialbar mixed-chart" >
          <Chart options={this.state.options} series={this.state.series} type="radialBar" height="380" />
        </div>
        <div className="container">
          <div className="row">
            {this.state.datalist !== null ? this.state.datalist.map(this._renderStatus) : "loading..."}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;