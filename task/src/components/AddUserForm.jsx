import React, { useState } from 'react';
import '../App.css'

function AddUserForm({ onAddUser }) {
    const [form, setForm] = useState({ name: '', email: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email) {
            alert('Name and email are required!');
            return;
        }
        const newUser = {
            id: Date.now(),
            name: form.name,
            email: form.email,
            address: { street: '', city: '' },
            phone: '',
            website: '',
            company: { name: 'New Company' },
        };
        if (onAddUser) onAddUser(newUser);
        setForm({ name: '', email: '' });
    };

    return (
        <div className="mt-6 p-4 border rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-2">Add New User</h2>
            <form onSubmit={handleSubmit} className="space-y-2">
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    required
                />
                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200"
                >
                    Add User
                </button>
            </form>
        </div>
    );
}

export default AddUserForm;