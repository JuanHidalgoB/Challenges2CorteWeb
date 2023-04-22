import { useCallback } from "react";
import { useState } from "react";
import Son from "./son";

const Father = () => {
    const list = [2, 4, 6, 8, 10];
    const [valor, setValor] = useState(0);

    const incrementCB = useCallback(
        (number) => setValor(val => val + number), []
    );

    return (
        <div>
            <h1>Father</h1>
            <p>Total: {valor}</p>
            <hr />

            {
                list.map( (n, idx) => {
                    return (
                        <Son
                            key={idx}
                            number={n}
                            increment={incrementCB}
                        />
                    )
                })
            }
        </div>
    )
}

export default Father