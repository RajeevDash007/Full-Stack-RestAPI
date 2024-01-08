import React, { useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "./CardComponent";

interface User{
    id: number;
    name: string;
    email: string;
}

interface UserInterfaceProps{
    backendName: string; 
}

const UserInterface: React.FC<UserInterfaceProps>=({backendName})=>{
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
    const [users, setUsers] = useState<User[]>([]);
    const [newUser, setNewUser] = useState({ name: '', email: '' });
    const [updateUser, setUpdateUser] = useState({ id: '', name: '', email: '' });

    const backgroundColors: { [key: string]: string } = {
        go: 'bg-cyan-500',
      };
    
      const buttonColors: { [key: string]: string } = {
        go: 'bg-cyan-700 hover:bg-blue-600',
      };

      const bgColor = backgroundColors[backendName as keyof typeof backgroundColors] || 'bg-gray-200';
      const btnColor = buttonColors[backendName as keyof typeof buttonColors] || 'bg-gray-500 hover:bg-gray-600';
      
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`${apiUrl}/api/${backendName}/users`);
            setUsers(response.data.reverse());
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [backendName, apiUrl]);

      return (
        <div className={`user-interface ${bgColor} ${backendName} w-full max-w-md p-4 my-4 rounded shadow`}>
          I am good 
        </div>
      );
};


export default UserInterface;