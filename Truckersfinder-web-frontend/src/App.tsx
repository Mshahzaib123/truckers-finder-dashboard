import React from 'react'
import styled from 'styled-components'
import { Route, BrowserRouter, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import ProfilePage from './pages/ProfilePage'
import Signup from './pages/Signup'
import Login from './pages/Login'
import SignupSetps from './pages/SignupSetps'
import CarriesPage from './pages/Carriers/CarriersPage'
import './App.css'
import AddCarrier from './pages/Carriers/AddCarrier'
import Chat from './pages/Chat'
import MyCarriersPage from './pages/Carriers/MyCarriersPage'
import MyCarrierDetails from './pages/Carriers/MyCarrierDetails'
import Wallet from './pages/Wallet/Wallet'

import './App.css'
import AvailableLoads from './pages/AvailableLoads'
import CreateLoad from './pages/CreateLoad'
import MyLiveLoad from './pages/MyLiveLoad'
import JobHistoryPage from './pages/JobHistory'
import JobHistoryDetailsPage from './pages/JobHistory/jobDetails'
import CarrierDb from './pages/Carriers/CarriersDB'
import PeoplePage from './pages/people'

const MainWrapper = styled.div.attrs({
    className: 'dashboard_main flex',
})``
const MainContent = styled.div`
    width: calc(100% - 240px);
`
const MainContentInr = styled.div`
    height: calc(100vh - 88px);
    @media (max-width: 1024px) {
        height: calc(100vh - 78px);
    }
`
function App() {
    const currentPath = window.location.pathname

    return (
        <BrowserRouter>
            <Routes>
                <Route path="auth/*">
                    <Route path="signup" element={<Signup />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signupsteps" element={<SignupSetps />} />
                </Route>
            </Routes>
            {!currentPath.includes('auth') && (
                <MainWrapper className="dashboard_main">
                    <div className="sidebar_main">
                        <Sidebar />
                    </div>
                    <MainContent className="main_content w-[100%] flex-1">
                        <Header />
                        <MainContentInr className="main_content_inr bg-bgShade2 overflow-y-auto">
                            <Routes>
                                <Route
                                    path="profile"
                                    element={<ProfilePage />}
                                />
                                <Route path="chat" Component={Chat} />
                                <Route
                                    path="add-carrier"
                                    Component={AddCarrier}
                                />
                                <Route
                                    path="carriers"
                                    element={<CarriesPage />}
                                />
                                <Route
                                    path="carrier-db"
                                    element={<CarrierDb />}
                                />
                                <Route
                                    path="my-carriers"
                                    element={<MyCarriersPage />}
                                />
                                <Route
                                    path="my-carriers/details"
                                    element={<MyCarrierDetails />}
                                />
                                <Route
                                    path="available-loads"
                                    element={<AvailableLoads />}
                                />
                                <Route
                                    path="create-loads"
                                    element={<CreateLoad />}
                                />
                                <Route
                                    path="my-live-load"
                                    element={<MyLiveLoad />}
                                />
                                <Route path="wallet" element={<Wallet />} />
                                <Route
                                    path="job-history"
                                    element={<JobHistoryPage />}
                                />
                                <Route
                                    path="job-details/:id"
                                    element={<JobHistoryDetailsPage />}
                                />
                                <Route
                                    path="manage-people"
                                    element={<PeoplePage />}
                                />
                            </Routes>
                        </MainContentInr>
                    </MainContent>
                </MainWrapper>
            )}
        </BrowserRouter>
    )
}

export default App
