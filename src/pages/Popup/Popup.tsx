import { Routes, Route, HashRouter } from 'react-router-dom';
import { createContext, useState } from 'react';

import { Login } from './pages/Login';
import { ReceiveTokenDetail } from './pages/ReceiveTokenDetail';
import { SendTokenDetail } from './pages/SendTokenDetail';
import { History } from './pages/History';
import { SelectCrypto } from './pages/CryptoTrade/SelectCrypto';
import { SelectCurrency } from './pages/CryptoTrade/SelectCurrency';

import { Settings } from './pages/Settings';
import { EditAccount } from './pages/Settings/EditAccount';
import { EditAccountName } from './pages/Settings/EditAccount/EditAccountName';
import { DeleteAccount } from './pages/Settings/DeleteAccount';
import { ManageAccount } from './pages/Settings/ManageAccount';
import { DeveloperSettings } from './pages/Settings/DeveloperSettings';
import { SecurityPrivacySettings } from './pages/Settings/SecurityPrivacySettings';
import { AboutCommune } from './pages/Settings/AboutCommune';
import { Network } from './pages/Settings/Network';
import { SeedPhrase } from './pages/Settings/EditAccount/SeedPhrase';
import { Privatekey } from './pages/Settings/EditAccount/Privatekey';
import { ConnectedWebsite } from './pages/Settings/SecurityPrivacySettings/ConnectedWebsite';
import { ChangePassword } from './pages/Settings/SecurityPrivacySettings/ChangePassword';
import { AutoLock } from './pages/Settings/SecurityPrivacySettings/AutoLock';

import { SelectToken } from './pages/Swap/SelectToken';
import { SwapConfirm } from './pages/Swap/SwapConfirm';

import PopupLayout from './container/PopupLayout';
import { SwapContextProvider } from './container';
import { TradeContextProvider } from './container';

const Popup = () => {

  return (
    <TradeContextProvider>
      <SwapContextProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/receive-token-detail" element={<ReceiveTokenDetail />} />
            <Route path="/send-token-detail" element={<SendTokenDetail/>} />
            <Route path="/history" element={<History/>} />
            <Route path="/select-crypto" element={<SelectCrypto/>} />
            <Route path="/select-currency" element={<SelectCurrency/>} />

            {/* Settings */}
            
            <Route path="/setting" element={<Settings/>} />
            <Route path="/edit-account" element={<EditAccount/>} />
            <Route path="/edit-account-name" element={<EditAccountName/>} />
            <Route path="/delete-account" element={<DeleteAccount/>} />
            <Route path="/manage-account" element={<ManageAccount/>} />
            <Route path="/developer-settings" element={<DeveloperSettings/>} />
            <Route path="/security-privacy-settings" element={<SecurityPrivacySettings/>} />
            <Route path="/about-commune" element={<AboutCommune/>} />
            <Route path="/network" element={<Network/>} />
            <Route path="/check-seedphrase" element={<SeedPhrase/>} />
            <Route path="/check-privatekey" element={<Privatekey/>} />
            <Route path="/connected-websites" element={<ConnectedWebsite/>} />
            <Route path="/change-password" element={<ChangePassword/>} />
            <Route path="/auto-lock" element={<AutoLock/>} />

            {/* Swap */}

            <Route path="/select-token" element={<SelectToken/>} />
            <Route path="/swap-confirm" element={<SwapConfirm/>} />

            <Route path="/*" element={<PopupLayout />} />
          </Routes>
        </HashRouter>
      </SwapContextProvider>
    </TradeContextProvider>
  );
}

export default Popup;
