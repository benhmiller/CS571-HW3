import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function BakedGood(props) {
    const [numItems, setNumItems] = useState(0);

    const isFeatured = props.featured ? 'featured' : '';

    return (
        <div className={`BakedGood ${isFeatured}`}>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <p>${props.price}</p>
            <div>
                <Button
                    variant="primary"
                    className={`inline ${numItems <= 0 ? 'disabled-button' : ''}`}
                    onClick={() => setNumItems(oldNumItems => oldNumItems - 1)}
                    disabled={numItems <= 0}
                >
                    -
                </Button>
                <p className="inline">{numItems}</p>
                <Button
                    variant="primary"
                    className={`inline`}
                    onClick={() => setNumItems(oldNumItems => oldNumItems + 1)}
                >
                    +
                </Button>
            </div>
        </div>
    );
}