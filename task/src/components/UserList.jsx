import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function UserList({ searchTerm, users }) {
    const [sortAsc, setSortAsc] = useState(true);


    const filteredUsers = users.filter(user =>
        user && user.name && user.email &&
        (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()))
    );


    const handleSort = () => {
        const sorted = [...filteredUsers].sort((a, b) =>
            sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
        );
        setSortAsc(!sortAsc);
        return sorted;
    };

    return (
        <div>
            <button
                onClick={() => {}}
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
            >
                Sort by Name ({sortAsc ? 'A-Z' : 'Z-A'})
            </button>
            <div className="space-y-4">
                {filteredUsers.map(user => (
                    <div key={user.id} className="border p-4 rounded-lg shadow-sm hover:shadow-md transition duration-200">
                        <Link to={`/user/${user.id}`} className="text-blue-500 hover:underline">
                            {user.name || 'Unnamed User'}
                        </Link>
                        <p className="text-gray-600">{user.email || 'No email'}</p>
                        <p className="text-gray-600">{user.company && user.company.name ? user.company.name : 'No company'}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserList;