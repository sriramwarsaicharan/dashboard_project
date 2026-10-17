import { useMemo, useState } from 'react';
import { initialCustomers } from "../../data/mockData";
import Badge from "../ui/Badge";
import Modal from "../ui/Modal";
import Button from "../ui/Button";



function Customers() {
    const [customers, setCustomers] = useState(initialCustomers);
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('All')
    const [isModelOpen, setIsModelOpen] = useState(false);

    const [formData, setFormdata] = useState({ name: "", email: "", role: "Viewer", status: "Active" });
    const [error, setError] = useState('');

    const filteredCustomers = useMemo(() => {
        return customers.filter(item => {
            const matchesSearch = item.name.toLowerCase().includes(search) || item.email.toLowerCase().includes(search);
            const matchStatusSearch = statusFilter === "All" || item.status === statusFilter;
            return matchesSearch & matchStatusSearch;
        })
    }, [customers, search, statusFilter]);

    const handleCreateCustomer = (e) => {
        e.preventDefault();

        if (!formData.name.trim() || !formData.email.trim()) {
            setError("Please Enter both name and email address");
            return;
        }

        const newEntry = {
            id: Date.now(),
            ...formData
        }

        setCustomers([newEntry, ...customers]);
        setFormdata({ name: "", email: "", role: "Viewer", status: "Active" });
        setError("");
        setIsModelOpen(false);
    }


    return (<div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
            <h2 style={{ color: "red" }}>Customer Management</h2>
            <button onClick={() => setIsModelOpen(true)}>+ Add Customer</button>
        </div>

        <div>
            <input type='text' placeholder='' value={search} onChange={(e) => setSearch(e.target.value)} style={{ padding: "0.55rem", border: "1px solid #cbd5e1", borderRadius: "6px", width: "260px" }} />
            <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                style={{ padding: "0.55rem", border: "1px solid #cbd5e1", borderRadius: "6px" }}
            >
                <option value="All">All Statuses</option>
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
                <option value="Inactive">Inactive</option>
            </select>
        </div>

        <div className='table-wrapper'>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCustomers.length > 0 ? (
                        filteredCustomers.map((customer) => (
                            <tr key={customer.id}>
                                <td>#{customer.id}</td>
                                <td><strong>{customer.name}</strong></td>
                                <td>{customer.email}</td>
                                <td>{customer.role}</td>
                                <td><Badge status={customer.status} /></td>
                            </tr>
                        ))
                    ) : (<tr>
                        <td colSpan="5" style={{ textAlign: "center", color: "#64748b", padding: "2rem" }}>
                            No records match your criteria.
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>

        <div>
            <Modal isOpen={isModelOpen} title="New Customer" onClose={() => setIsModelOpen(false)}>
                {error && <p style={{ color: "red", fontSize: "0.85rem", marginBottom: "0.75rem" }}>{error}</p>}
                <form onSubmit={handleCreateCustomer} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div>
                        <div>
                            <label style={{ display: "block", fontSize: "0.85rem", marginBottom: "0.25rem" }}>Full Name</label>
                            <input type='text' required placeholder='Enter fullname' value={formData.name} onChange={(e) => setFormdata({ ...formData, name: e.target.value })} style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #cbd5e1" }} />
                        </div>
                        <div>
                            <label style={{ display: "block", fontSize: "0.85rem", marginBottom: "0.25rem" }}>Email</label>
                            <input type='text' required placeholder='Enter email' value={formData.email} onChange={(e) => setFormdata({ ...formData, email: e.target.value })} style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #cbd5e1" }} />
                        </div>
                        <div style={{ flex: 1 }}>

                            <label style={{ display: "block", fontSize: "0.85rem", marginBottom: "0.25rem" }}>Role</label>
                            <select value={formData.role} onChange={(e) => setFormdata({ ...formData, role: e.target.value })} style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #cbd5e1" }} >
                                <option value="Admin">Admin</option>
                                <option value="Editor">Editor</option>
                                <option value="Viewer">Viewer</option>

                            </select>
                        </div>
                        <div style={{ flex: 1 }}>

                            <label style={{ display: "block", fontSize: "0.85rem", marginBottom: "0.25rem" }}>Role</label>
                            <select value={formData.status} onChange={(e) => setFormdata({ ...formData, status: e.target.value })} style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #cbd5e1" }} >
                                <option value="Pending">Pending</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.5rem", marginTop: "1rem" }}>
                        <Button variant='secondary' onClick={() => { setIsModelOpen(false) }}>Close</Button>
                        <Button type="submit" variant='Primary'>Create</Button>
                    </div>
                </form>
            </Modal>
        </div>
    </div>);
}

export default Customers;