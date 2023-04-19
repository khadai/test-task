import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {LogListItem} from "../components";

interface Props {
    className?: string;
}

const LogList = ({className}: Props) => {
    const activeSquares = useSelector((state: any) => state.game.activeSquares);

    return (
        <div className={className}>
            <h1>Hover squares:</h1>
            <div className='list'></div>
            {activeSquares.map((square: { rowIndex: number; columnIndex: number; }) =>
                (<LogListItem rowIndex={square.rowIndex + 1} columnIndex={square.columnIndex + 1}/>)
            )}
        </div>
    );
};

export default styled(LogList)`
  height: 800px;
  overflow: hidden;
  overflow-y: scroll;

  .list {

  }
`;
