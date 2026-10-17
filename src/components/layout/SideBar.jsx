import { NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <h2 style={{ fontSize: "1.2rem", paddingLeft: "0.5rem" }}>Project D</h2>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
                    Overview
                </NavLink>
                <NavLink to="/customers" className={({ isActive }) => (isActive ? "active" : "")}>
                    Customers
                </NavLink>
                <NavLink to="/settings" className={({ isActive }) => (isActive ? "active" : "")}>
                    Settings
                </NavLink>
            </nav>
        </aside>
    );
}