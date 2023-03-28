import React, { useMemo } from 'react';

export function FilteredList({ people }) {
    const filteredList = useMemo(() => {
        return people.filter(item => item.age > 18);
    }, [people]);

    return (
        <ul>
            {filteredList.map(item => (<li key={item.id}>{item.name}, {item.age}</li>))}
        </ul>
    );
};