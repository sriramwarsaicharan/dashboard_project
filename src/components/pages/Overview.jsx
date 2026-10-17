function Overview() {
    return (<div>
        <h2 style={{ marginBottom: "1.5rem" }}>System Overview</h2>
        <div className="card-grid">
            <div className="card">
                <p style={{ color: "#64748b", fontSize: "0.85rem" }}>Total Users</p>
                <h3 style={{ fontSize: "1.75rem", marginTop: "0.25rem" }}>1,482</h3>
            </div>
            <div className="card">
                <p style={{ color: "#64748b", fontSize: "0.85rem" }}>Active Sessions</p>
                <h3 style={{ fontSize: "1.75rem", marginTop: "0.25rem" }}>324</h3>
            </div>
            <div className="card">
                <p style={{ color: "#64748b", fontSize: "0.85rem" }}>Conversion Rate</p>
                <h3 style={{ fontSize: "1.75rem", marginTop: "0.25rem" }}>4.8%</h3>
            </div>

        </div>
    </div>);
}

export default Overview;