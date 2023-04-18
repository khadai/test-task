import React from 'react';
import styled from "styled-components";

interface Props {
    className?: string;
    size: number;
}

const Square = ({className}: Props) => {
    return (
        <div className={className}/>
    );
};

export default styled(Square)`
  outline: 0.5px black solid;
  display: flex;
  height: 0;
  width: ${({size}) => 100 / size}%;
  padding-top: ${({size}) => 100 / size}%;


  :hover {
    background-color: lightblue;
  }
`;
