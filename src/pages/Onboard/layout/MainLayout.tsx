import { useNavigate } from "react-router-dom";
import { Suspense } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Routes, Route } from "react-router-dom";
import { Recovery } from "../pages/Recovery";
import { Verify } from "../pages/Verify";
import { CreateProfile } from "../pages/CreateProfile";
import { Finish } from "../pages/Finish";
import { Fallback } from "../components/Fallback";

const MainLayout = () => {
    const navigate = useNavigate();
    const goBackHandler = () => {
        console.log('goBackHandler');
        navigate(-1);
    }
    return (
        <div className="main-layout">
            <FaArrowLeft
                className="absolute top-6 left-6 text-[#717173] text-xl cursor-pointer"
                onClick={goBackHandler}
            />
            <Suspense
                fallback={<Fallback/>}
            >
                <Routes>
                    <Route
                        path="/recovery"
                        element={<Recovery />}
                    />
                    <Route
                        path="/verify"
                        element={<Verify />}
                    />
                    <Route
                        path="/create-profile"
                        element={<CreateProfile />}
                    />
                    <Route
                        path="/finish"
                        element={<Finish />}
                    />
                </Routes>
            </Suspense>
        </div>
    )
}

export default MainLayout;