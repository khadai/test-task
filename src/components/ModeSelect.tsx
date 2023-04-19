import React, {useState} from 'react';
import styled from "styled-components";
import Select, {SingleValue} from "react-select";
import {useDispatch, useSelector} from "react-redux";
import {setSize} from "../redux/slice";

interface Props {
    className?: string;
}

const ModeSelect = ({className}: Props) => {
    const dispatch = useDispatch();
    const modes = useSelector((state: any) => state.game.modes);
    const [selectValue, setSelectValue] = useState<SingleValue<{ value: string; label: string; }>>(modes[0]);

    const handleSubmit = () => {
        if (selectValue) {
            dispatch(setSize(parseInt(selectValue.value)));
        }
    };

    return (
        <div className={className}>
            <Select options={modes} defaultValue={selectValue} onChange={(v) => setSelectValue(v)}
                    className='mode-select'
                    placeholder='Pick mode...'/>
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

  .mode-start-btn {
    width: 80px;
    margin-left: 8px;
    background-color: cornflowerblue;
    text-transform: capitalize;
    color: white;
    border-radius: 4px;
    border: none;
  }
`;
