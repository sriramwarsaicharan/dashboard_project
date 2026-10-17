export default function Badge({ status }) {
    const colors = {
        Active: { bg: "#dcfce7", text: "#15803d" },
        Pending: { bg: "#fef9c3", text: "#a16207" },
        Inactive: { bg: "#fee2e2", text: "#b91c1c" },
    };

    const style = colors[status] || { bg: "#f1f5f9", text: "#475569" };

    return (
        <span
            style={{
                padding: "0.25rem 0.65rem",
                borderRadius: "9999px",
                fontSize: "0.75rem",
                fontWeight: "600",
                backgroundColor: style.bg,
                color: style.text,
            }}
        >
            {status}
        </span>
    );
}