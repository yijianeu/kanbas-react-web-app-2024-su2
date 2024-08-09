import {useState} from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function EnvironmentVariables() {
    const [a, setA] = useState("34");
    const [b, setB] = useState("23");
    return (
        <div>
            <h4>Calculator</h4>
            <input type="number" value={a}
                   onChange={(e) => setA(e.target.value)}/>
            <input type="number"
                   onChange={(e) => setB(e.target.value)} value={b}/>
            <h3>Path Parameters</h3>
            <a href={`${REMOTE_SERVER}/lab5/add/${a}/${b}`}>
                Add {a} + {b}</a>
            <br/>
            <a href={`${REMOTE_SERVER}/lab5/subtract/${a}/${b}`}>
                Substract {a} - {b}</a>
        </div>
    );
}
