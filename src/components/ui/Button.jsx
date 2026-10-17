export default function Button({ children, variant = "primary", onClick, type = "button" }) {
    const styles = {
        padding: "0.55rem 1rem",
        borderRadius: "6px",
        fontWeight: "500",
        border: "none",
        cursor: "pointer",
        backgroundColor: variant === "primary" ? "#3b82f6" : "#e2e8f0",
        color: variant === "primary" ? "#ffffff" : "#1e293b",
    };

    return (
        <button type={type} onClick={onClick} style={styles}>
            {children}
        </button>
    );
}