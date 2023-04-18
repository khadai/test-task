import React from 'react';
import styled from "styled-components";
import {Square} from "../components";
import {useSelector} from "react-redux";
import ModeSelect from "../components/ModeSelect";

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

    return (
        <div className={className}>
            {sizeArr.map(() =>
                row
            )}
            <ModeSelect/>
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
