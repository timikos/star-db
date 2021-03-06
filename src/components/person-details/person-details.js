import React from "react";

import './person-details.css'

const PersonDetails = () => {
    return (
        <div className="person-details card">
            <img src="" alt="" className="person-image"/>
            <div className="card-body">
                <h4>R2-D2</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Gender</span>
                        <span>male</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth Year</span>
                        <span>43</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye Color</span>
                        <span>red</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PersonDetails