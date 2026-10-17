import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";
import Header from "./Header";

export default function DashboardLayout() {
    return (
        <div className="layout-container">
            <Sidebar />
            <div className="main-content">
                <Header />
                <main className="page-body">
                    <Outlet /> {/* Renders the nested child route */}
                </main>
            </div>
        </div>
    );
}