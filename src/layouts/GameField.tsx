import React, {useEffect} from 'react';
import styled from "styled-components";
import {ChooseMode, Square} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {resetActiveSquares} from "../redux/slice";

interface Props {
    className?: string;
}

const GameField = ({className}: Props) => {
    const dispatch = useDispatch();

    const fieldSize = useSelector((state: any) => state.game.fieldSize);
    const sizeArr = new Array(fieldSize).fill(null);

    useEffect(() => {
        dispatch(resetActiveSquares());
    }, [fieldSize])

    const gameField = sizeArr.map((j, rowIdx) =>
        <div className='row'>
            {sizeArr.map((i, colIdx) => (
                <Square key={colIdx + rowIdx} size={fieldSize} rowIndex={rowIdx} columnIndex={colIdx}/>
            ))}
        </div>
    )

    return (
        <div className={className}>
            {fieldSize < 1 ? <ChooseMode/> : gameField}
        </div>
    );
};

export default styled(GameField)`
  border: 1px black solid;
  width: 100%;

  .row {
    display: flex;
  }
`;
