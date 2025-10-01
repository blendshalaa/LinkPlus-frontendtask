import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserList from './components/UserList.jsx';
import UserDetails from './components/UserDetails.jsx';
import SearchFilter from './components/SearchFilter.jsx';
import {useEffect, useState} from "react";
import AddUser from "./components/AddUserForm.jsx";

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    const handleAddUser = (newUser) => {
        setUsers(prevUsers => [newUser, ...prevUsers]);

    };

    const router = createBrowserRouter([
        {
            path: '/',
            element: <UserList searchTerm={searchTerm} users={users} />,
            errorElement: <div>404 PAGE NOT FOUND</div>,
        },
        {
            path: '/user/:id',
            element: <UserDetails />,
            errorElement: <div>404 PAGE NOT FOUND</div>,
        },
    ]);

    return (
        <>
            <SearchFilter onSearch={setSearchTerm} />
            <RouterProvider router={router} />
            <AddUser onAddUser={handleAddUser} />
        </>
    );
}

export default App;
