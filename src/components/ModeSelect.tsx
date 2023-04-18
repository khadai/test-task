import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Select, {SingleValue} from "react-select";
import {useDispatch, useSelector} from "react-redux";
import {setSize} from "../redux/slice";

interface Props {
    className?: string;
}

const ModeSelect = ({className}: Props) => {
    const dispatch = useDispatch();
    const mode = useSelector((state: any) => state.game.modes);
    // console.log(mode);

    const options = [
        {value: '5', label: '5'},
        {value: '10', label: '10'},
        {value: '15', label: '15'}
    ]

    const [value, setValue] = useState<SingleValue<{ value: string; label: string; }>>(options[0]);

    useEffect(()=>{
        console.log(mode)
    },[mode])
    const handleSubmit = () => {
        if (value){
            dispatch(setSize(parseInt(value.value)));
        }
    };

    return (
        <div className={className}>
            <Select options={mode} defaultValue={value} onChange={(v) => setValue(v)}/>
            <button onClick={handleSubmit}>Pick</button>
        </div>
    );
};

export default styled(ModeSelect)`
`;
