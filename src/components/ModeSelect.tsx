import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Select, {SingleValue} from "react-select";
import {useDispatch, useSelector} from "react-redux";
import {resetActiveSquares, setSize} from "../redux/slice";

interface Props {
    className?: string;
}

const ModeSelect = ({className}: Props) => {
    const dispatch = useDispatch();
    const modes = useSelector((state: any) => state.game.modes);

    const [options, setOptions] = useState();
    const [value, setValue] = useState<SingleValue<{ value: string; label: string; }>>(modes[0]);

    useEffect(() => {
        setOptions(modes.map((item: { name: string, field: number, id: string }) => {
            return {
                value: item.field, label: item.name
            }
        }))
    }, [modes])

    const handleSubmit = () => {
        if (value) {
            dispatch(setSize(parseInt(value.value)));
        }
    };

    return (
        <div className={className}>
            <Select options={options} defaultValue={value} onChange={(v) => setValue(v)} className='mode-select'/>
            <button onClick={handleSubmit} className='mode-start-btn'>START</button>
        </div>
    );
};

export default styled(ModeSelect)`
  display: flex;
  margin: 8px;

  .mode-select {
    width: 60%;
  }
  
  .mode-start-btn{
    width: 80px;
    margin-left: 8px;
    background-color: cornflowerblue;
    text-transform: capitalize;
    color: white;
    border-radius: 4px;
    border: none;
  }
`;
