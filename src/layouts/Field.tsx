import React from 'react';
import styled from "styled-components";
import {Square} from "../components";
import {useSelector} from "react-redux";

interface Props {
    className?: string;
}

const Field = ({className}: Props) => {
    const fieldSize = useSelector((state: any) => state.game.fieldSize);
    const sizeArr = new Array(fieldSize).fill(null);

    const row = <div className='row'>
        {sizeArr.map((i, idx) => (
            <Square key={idx} size={fieldSize}/>
        ))}
    </div>;

    const gameField = sizeArr.map(() =>
        row
    )

    return (
        <div className={className}>
            {fieldSize < 1 ? <p>Please choose game mode</p> : gameField}
        </div>
    );
};

export default styled(Field)`
  border: 1px black solid;
  width: 500px;
  height: 500px;

  .row {
    display: flex;
  }
`;
