import React from 'react';
import styled from "styled-components";
import {Square} from "../components";
import {useSelector} from "react-redux";

interface Props {
    className?: string;
}

const GameField = ({className}: Props) => {
    const fieldSize = useSelector((state: any) => state.game.fieldSize);
    const sizeArr = new Array(fieldSize).fill(null);

    const gameField = sizeArr.map((j, rowIdx) =>
        <div className='row'>
            {sizeArr.map((i, colIdx) => (
                <Square key={colIdx+rowIdx} size={fieldSize} rowIndex={rowIdx} columnIndex={colIdx}/>
            ))}
        </div>
    )

    return (
        <div className={className}>
            {fieldSize < 1 ? <p>Please choose game mode</p> : gameField}
        </div>
    );
};

export default styled(GameField)`
  border: 1px black solid;
  width: 100%;
  //height: 500px;

  .row {
    display: flex;
  }
`;
