import React, {useEffect} from 'react';
import {GameField, LogList} from "./layouts";
import axios from "axios";
import {setModes} from "./redux/slice";
import {useDispatch} from "react-redux";
import {ModeSelect} from "./components";
import styled from "styled-components";

interface Props {
    className?: string;
}

const App = ({className}: Props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        axios.get(`https://60816d9073292b0017cdd833.mockapi.io/modes`)
            .then(res => {
                const modes = res.data;
                dispatch(setModes(modes));
            })
    });

    return (
        <div className={className}>
            <div>
                <ModeSelect/>
                <GameField/>
            </div>
            <div>
                <LogList/>
            </div>
        </div>
    );
}

export default styled(App)`
  display: flex;
`;
