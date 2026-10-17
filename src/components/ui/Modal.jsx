export default function Modal({ isOpen, title, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div style={{
            position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex", alignItems: "center", justifyContent: "center", zIndex: 50
        }}>
            <div style={{ background: "#fff", padding: "1.5rem", borderRadius: "8px", width: "450px", maxWidth: "90%" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                    <h3>{title}</h3>
                    <button onClick={onClose} style={{ border: "none", background: "none", cursor: "pointer", fontSize: "1.2rem" }}>&times;</button>
                </div>
                {children}
            </div>
        </div>
    );
}