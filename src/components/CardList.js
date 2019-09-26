import React from 'react';
import Card from './Card';

const CardList = props => {
    return (
        <div className='flex flex-wrap items-center justify-center'>
            {
                props.robots.map(user => {
                    return <Card key={user.id} id={user.id} email={user.email} name={user.name} />
                })
            }
        </div>
    );
};

export default CardList;