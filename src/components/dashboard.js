import React, { Component } from "react";
import Appointments from "./appoointments";
import Hospitals from "./hospitals";

class Dashboard extends Component {
  state = {
    hospitals: [],
    appointments: [],
  };

  componentDidMount = () => {
    this.getHospitals();
  };

  getAppointments = (hospitalId) => {
    let myHeaders = new Headers();
    myHeaders.append("User-Agent", "");

    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `https://services.healthbook.anikumar.net/appointments/42dcd8fa-bd84-570f-82ca-063891de3fae`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        //console.log(result);
        let appt = result.length ? result : [result];
        this.setState({ appointments: appt });
      })
      .catch((error) => {
        console.log("error", error);
        this.setState({ appointments: [] });
      });
  };

  getHospitals = () => {
    let myHeaders = new Headers();
    myHeaders.append("User-Agent", "");

    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `https://services.healthbook.anikumar.net/providers/details/77829903082`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          hospitals: result.organizations,
        });
        //console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  handleOnHospitalClick = (id) => {
    //console.log(id);
    this.getAppointments(id);
  };

  handleOnAppointmentClick = (id) => {
    console.log(id);
  };

  render() {
    return (
      <React.Fragment>
        <div className="bg-dark p-3 pt-3 height-100 width-25 text-white-70">
          <h3 className="pl-3">Hi, {this.props.user.name}</h3>

          <hr className="bg-secondary" />

          <Hospitals
            hospitals={this.state.hospitals}
            onHospitalClick={this.handleOnHospitalClick}
          />
          <Appointments
            appointments={this.state.appointments}
            onAppointmentClick={this.handleOnAppointmentClick}
          />

          <p className="text-muted pl-3 lead">
            <b>Settings</b>
          </p>
          <ul className="nav flex-column pl-3">
            <li className="nav-item">
              <a className="nav-link disabled" href="#profile">
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#logout"
                onClick={this.props.onLogOut}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
        <div className="lead text-capitalize fixed-top p-3 pt-3 margin-left-25 width-75">
          <div>
            <p>
              <b>Ramesh Mehta</b> | 2021-05-21 (10:30-11:00)
            </p>
            <p>
              <b>apollo Labs </b>| LB Nagar | 8888999985
            </p>
          </div>
          <div className="mt-5">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  New Prescriptions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Previous Prescriptions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Lab Reports
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-3">
            <p>Medications</p>
            <div class="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-success" type="submit">
                  Add
                </button>
              </div>
            </div>
            <div>
                <ul>
                    <li>Doxy 50mg</li>
                    <li>Paracip 50mg</li>
                </ul>
            </div>
          </div>

          <div className="mt-3">
            <p>Lab Tests</p>
            <div class="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-success" type="submit">
                  Add
                </button>
              </div>
            </div>
            <div>
                <ul>
                    <li>X-ray</li>
                    <li>Sugar Level</li>
                </ul>
            </div>
          </div>

                <button className="btn btn-success">
                  Save
                </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
