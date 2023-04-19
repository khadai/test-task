import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {addActiveSquare, removeActiveSquare, resetActiveSquares} from "../redux/slice";

interface Props {
    className?: string;
    size: number;
    rowIndex: number;
    columnIndex: number;
}

const Square = ({className, rowIndex, columnIndex, size}: Props) => {
    const [active, setActive] = useState(false);
    const dispatch = useDispatch();

    const handleMouseOver = () => {
        setActive(!active)
    };

    useEffect(() => {
        setActive(false);
    }, [size])

    useEffect(() => {
        if (active) {
            dispatch(addActiveSquare({rowIndex, columnIndex}));
        } else {
            dispatch(removeActiveSquare({rowIndex, columnIndex}));
        }
    }, [active])

    return (
        <div className={className} onMouseOver={handleMouseOver}
             style={{backgroundColor: active ? "lightblue" : "white"}}>
        </div>
    );
};

export default styled(Square)`
  outline: 0.5px black solid;
  display: flex;
  height: 0;
  width: ${({size}) => 100 / size}%;
  padding-top: ${({size}) => 100 / size}%;
`;
