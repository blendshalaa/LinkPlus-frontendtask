import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function UserDetails() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.error('Error fetching user details:', error));
    }, [id]);




    if (!user) {
        return (
            <div className="max-w-3xl mx-auto p-6">
                <div className="flex items-center justify-center h-64">
                    <div className="text-lg text-gray-500 animate-pulse">Loading...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto p-6">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8
                          hover:shadow-lg transition-all duration-300 ease-in-out">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    {user.name || 'Unnamed User'}
                </h2>
                <div className="space-y-4">
                    <p className="text-gray-700 flex items-center">
                        <span className="font-semibold w-28">Email:</span>
                        <span>{user.email || 'No email'}</span>
                    </p>
                    <p className="text-gray-700 flex items-center">
                        <span className="font-semibold w-28">Address:</span>
                        <span>
                            {user.address?.street || 'N/A'}, {user.address?.city || 'N/A'}
                        </span>
                    </p>
                    <p className="text-gray-700 flex items-center">
                        <span className="font-semibold w-28">Phone:</span>
                        <span>{user.phone || 'No phone'}</span>
                    </p>
                    <p className="text-gray-700 flex items-center">
                        <span className="font-semibold w-28">Website:</span>
                        <span className="text-blue-600 hover:underline">
                            {user.website ? (
                                <a
                                    href={`https://${user.website}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {user.website}
                                </a>
                            ) : (
                                'No website'
                            )}
                        </span>
                    </p>
                    <p className="text-gray-700 flex items-center">
                        <span className="font-semibold w-28">Company:</span>
                        <span>{user.company?.name || 'No company'}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default UserDetails;