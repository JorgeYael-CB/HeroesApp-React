import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicsRoutes } from "./PublicsRoutes";



export const AppRouter = () => {
    return (
        <>
            <Routes>

                <Route path="/login" element={
                    <PublicsRoutes>
                        <LoginPage/>
                    </PublicsRoutes>
                }/>

                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes/>
                    </PrivateRoute>
                }/>
            </Routes>
        </>
    )
};