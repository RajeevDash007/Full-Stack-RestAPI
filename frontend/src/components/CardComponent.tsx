import React from "react";

interface Card{
    id: number;
    name: string;
    email: string;
}

const CardComponent: React.FC<{card:Card}> = ({card}) => {
    return(
        <div>
            <h2>{card.name}</h2>
            <h2>{card.email}</h2>
        </div>
    );
}

export default CardComponent;