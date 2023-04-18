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
            <Select options={options} defaultValue={value} onChange={(v) => setValue(v)}/>
            <button onClick={handleSubmit}>Pick</button>
        </div>
    );
};

export default styled(ModeSelect)`
`;
