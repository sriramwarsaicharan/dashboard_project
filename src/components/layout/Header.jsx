export default function Header() {
    return (
        <header className="header">
            <h4>Dashboard Console</h4>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "0.85rem", color: "#64748b" }}>Admin User</span>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#cbd5e1" }} />
            </div>
        </header>
    );
}