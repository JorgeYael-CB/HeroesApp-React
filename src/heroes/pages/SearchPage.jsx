import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import queryString from "query-string";
import { getHeroesByName } from "../helpers/getHeroesByName";
import { HeroCard } from "../components/HeroCard";


export const SearchPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    const heroes = getHeroesByName(q);

    const { searchText, onInputChange } = useForm({
        searchText: q,
    });


    const onSearchSubmit = (event) => {
        event.preventDefault();
        navigate(`?q=${ searchText.toLowerCase().trim() }`);
    };


    return (
        <>
            <h1>Search</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />

                    <form onSubmit={ onSearchSubmit }>
                        <input
                            type="text"
                            placeholder="Search hero"
                            className="form-control"
                            name="searchText"
                            autoComplete='off'
                            value={ searchText }
                            onChange={ onInputChange }
                        />

                        <button className="btn btn-outline-primary mt-1">Search</button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {
                        (q === '')
                            ?
                                <div className="alert alert-primary">
                                    Search a hero
                                </div>
                            :
                                (heroes.length <= 0 && <div className="alert alert-danger">
                                    No hero with <b>{q}</b>
                                </div>
                            )
                    }

                    {
                        heroes.map( hero => (
                            <HeroCard hero={hero} key={hero.id}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
