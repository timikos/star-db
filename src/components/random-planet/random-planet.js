import React, {useState} from "react";

import SwapiService from "../../services/swapi-service";

import './random-planet.css'

const RandomPlanet = () => {
    const [name, setName] = useState(null)
    const [population, setPopulation] = useState(null)
    const [rotationPeriod, setRotationPeriod] = useState(null)
    const [diameter, setDiameter] = useState(null)
    const [id, setId] = useState(null)

    const swapiService = new SwapiService()

    const updatePlanet = () => {
        // const id = Math.floor(Math.random() * 25 + 2)
        const id = 2
        swapiService.getPlanet(id).then(planet => {
            setName(planet.name)
            setPopulation(planet.population)
            setRotationPeriod(planet.rotation_period)
            setDiameter(planet.diameter)
            setId(id)
        })
    }
    updatePlanet()

    return (
        <div className="random-planet jumbotron rounded">
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population </span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period </span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter </span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default RandomPlanet