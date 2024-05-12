import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../UI"
import { MarvelPage } from "../pages/MarvelPage"
import {Dcpage} from '../pages/DcPage'
import { SearchPage } from "../pages/SearchPage"
import { HeroPage } from "../pages/HeroPage"



export const HeroesRoutes = () => {
    return (
        <>
            <Navbar/>

            <div className="container">
                <Routes>
                    <Route path="marvel" element={ <MarvelPage/> }/>
                    <Route path="dc" element={ <Dcpage/> }/>

                    <Route path="search" element={ <SearchPage/> }/>
                    <Route path="hero/:id" element={ <HeroPage/> }/>


                    {/* Search, HeroById */}

                    <Route path="/" element={ <Navigate to="marvel"/> }/>
                </Routes>
            </div>
        </>
    )
}