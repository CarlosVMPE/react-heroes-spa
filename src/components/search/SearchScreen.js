import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);


    const [{ search }, handleInputChange] = useForm({ search: q });

    const heroesFilter = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${search}`);
    }

    return (
        <div>
            <h1>SearchScreen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="search"
                            value={search}
                            autoComplete="off"
                            onChange={handleInputChange} />

                        <button
                            type="submit"
                            className="btn btn-block btn-outline-primary mt-4">
                            Search
                        </button>
                    </form>

                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {
                        (q === '') &&
                        <div
                            className="alert alert-info">
                            Search a hero
                        </div>
                    }
                    
                    {
                        (q !== '' && heroesFilter.length === 0) &&
                        <div
                            className="alert alert-danger">
                            There is no a hero with {q}
                        </div>
                    }

                    {
                        heroesFilter.map(hero => (
                            <HeroCard key={hero.id}
                                {...hero} />
                        ))
                    }
                </div>

            </div>
        </div>
    )
}
