import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { PopupHeader } from "./PopupHeader";

import { Homepage } from "../pages/Homepage";
import { SendToken } from "../pages/SendToken";
import { ReceiveToken } from "../pages/ReceiveToken";
import { CryptoTrade } from "../pages/CryptoTrade";
import { Earn } from "../pages/Earn";
import { Swap } from "../pages/Swap";

const PopupLayout = () => {
    
    return (
        <div className="popup-container">
            <PopupHeader />
            <Suspense>
                <Routes>
                    <Route path="/homepage" element={<Homepage/>} />
                    <Route path="/send-token" element={<SendToken/>} />
                    <Route path="/receive-token" element={<ReceiveToken/>} />
                    <Route path="/earn" element={<Earn/>} />
                    <Route path="/swap" element={<Swap/>} />
                    <Route path="/crypto-trade" element={<CryptoTrade/>} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default PopupLayout;
