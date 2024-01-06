import React, { useState } from "react";
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
      
}


export default UserInterface;