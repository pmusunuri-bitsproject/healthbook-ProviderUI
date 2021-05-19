import React, { Component } from "react";

class Hospitals extends Component {
  state = {};
  onLinkClick = (e) => {
      //console.log(e.target.id);
      this.props.onHospitalClick(e.target.id);
  };

  render() {
    let hospitals = this.props.hospitals;
    return (
      <React.Fragment>
        {hospitals.length > 0 ? (
          <div>
            <p className="text-muted pl-3 lead">
              <b>Hospitals</b>
            </p>
            <ul className="nav flex-column pl-3 text-capitalize">
              {hospitals.map((hos) => (
                <li className="nav-item" key={hos.id}>
                  <a
                    className="nav-link"
                    href="#hospital"
                    id={hos.id}
                    onClick={this.onLinkClick}
                  >
                    {hos.name}
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

export default Hospitals;
