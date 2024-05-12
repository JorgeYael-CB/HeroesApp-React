import { heroes } from "../data/heros";


export const getHeroById = (id) => {
    const hero = heroes.find( hero => hero.id === id );

    return hero;
};