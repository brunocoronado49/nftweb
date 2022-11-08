import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainMenu } from "../pages/MainMenu";

export const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainMenu />} />
            </Routes>
        </BrowserRouter>
    );
};
