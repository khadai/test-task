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
            <h1 className='log-list-header'>Hover squares:</h1>
            <div className='log-list'>
                {activeSquares.map(({rowIndex, columnIndex}: { rowIndex: number; columnIndex: number; }) =>
                    (<LogListItem key={`${rowIndex}${columnIndex}`} rowIndex={rowIndex + 1}
                                  columnIndex={columnIndex + 1}/>)
                )}
            </div>
        </div>
    );
};

export default styled(LogList)`
  padding: 8px;
  width: 100%;

  .log-list-header {
    margin: 8px;
  }

  .log-list {
    height: 500px;
    overflow: hidden;
    overflow-y: scroll;
  }
`;
