import React from 'react';
import Card from '../Dashboard/Card';

const Cards = () => {
    return (
        <div className="w-full flex flex-col  items-center">
            <div className="flex w-full items-center justify-center gap-16  mb-5">
                <Card color="linear-gradient(107.38deg, #2D60FF 2.61%, #539BFF 101.2%)" text="#fff" />
                {/* Pass a static color */}
                <Card color="linear-gradient(107.38deg, #4C49ED 2.61%, #0A06F4 101.2%) " text="#fff" />
                <Card color="#ffffff" text="black" />
            </div>
        </div>
    );
};

export default Cards;




