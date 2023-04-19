import React, {useEffect} from 'react';
import {GameField} from "./layouts";
import axios from "axios";
import {setModes} from "./redux/slice";
import {useDispatch} from "react-redux";
import {ModeSelect} from "./components";

const App = () => {
    const dispatch = useDispatch();
    useEffect(()=> {
        axios.get(`https://60816d9073292b0017cdd833.mockapi.io/modes`)
            .then(res => {
                const modes = res.data;
                dispatch(setModes(modes));
            })
    });

    return (
        <div className="App">
            <ModeSelect/>
            <GameField/>
        </div>
    );
}

export default App;
