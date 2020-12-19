import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters
}) => {

    return (
        <div className="col">
            <div className="card" style={{ maxWidth: 300, margin: 'auto' }}>
                <img src={`./assets/heroes/${id}.jpg`} className="card-img-top card-img" alt={superhero} />
                <div className="card-body">
                    <h5 className="card-title">
                        {superhero}
                    </h5>
                    <p className="card-text">
                        {alter_ego}
                    </p>

                    <p className="card-text">
                        <small className="text-muted">{first_appearance}</small>
                    </p>

                    <Link to={`./hero/${id}`} className="btn btn-primary">
                        Más...
                    </Link>
                </div>
            </div>
        </div>
    )
}
