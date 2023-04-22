import React, { memo } from 'react';

const Son = memo(({number, increment}) => {
    console.log("again reloaded");

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={() => increment(number)}
        >
            {number}
        </button>
    );
})

export default Son;