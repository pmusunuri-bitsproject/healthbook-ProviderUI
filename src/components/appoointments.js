import React, { Component } from "react";

class Appointments extends Component {
  state = {};

  onAppointmentClick = (e) => {
    //console.log(e.target.id);
    this.props.onAppointmentClick(e.target.id);
  };

  render() {
    let appointments = this.props.appointments;
    return (
      <React.Fragment>
        {appointments.length > 0 ? (
          <div>
            <p className="text-muted pl-3 lead">
              <b>Appointments</b>
            </p>
            <ul className="nav flex-column pl-3">
              {appointments.map((appt) => (
                <li className="nav-item" key={appt.id}>
                  <a
                    className="nav-link"
                    href="#appointment"
                    id={appt.id}
                    onClick={this.onAppointmentClick}
                  >
                    {appt.appointmentDate} at {appt.appointmentTimeSlot}
                  </a>
                </li>
              ))}
            </ul>

            <hr className="bg-secondary" />
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

export default Appointments;
