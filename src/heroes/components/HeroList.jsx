import { useMemo } from "react";
import { getHerosByPublished } from "../helpers";
import { HeroCard } from "./HeroCard";

export const HeroList = ({publisher}) => {
    const heroes = useMemo( () => getHerosByPublished(publisher), [publisher] );


    return (
        <>
        <div className="row row-cols-1 row-cols-md-3 g-3">
            {
                heroes.map(hero => (
                    <HeroCard key={hero.id} hero={hero}/>
                ))
            }
        </div>
        </>
    )
}
