import React from 'react';
import styled from "styled-components";

interface Props {
    className?: string;
    rowIndex: number;
    columnIndex: number;
}

const LogListItem = ({className, rowIndex, columnIndex}: Props) => {
    return (
        <div className={className}>
           <p>row {rowIndex} column {columnIndex}</p>
        </div>
    );
};

export default styled(LogListItem)`
  text-align: center;
    background-color: lightgoldenrodyellow;
    border: orange 1px solid;
    border-radius: 10px;
    margin: 4px;
    padding: 4px;
    color: peru;
`;
