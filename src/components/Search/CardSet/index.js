import React from 'react';
import Card from "./Card";

const CardSet = ({ data }) => {
    const cardArray = Object.keys(data).map(category => <Card categoryDetails={data[category]} category={category} />);
    return cardArray || null;
};

export default CardSet;