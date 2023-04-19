import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {addActiveSquare, removeActiveSquare, setModes} from "../redux/slice";

interface Props {
    className?: string;
    size: number;
    rowIndex:number;
    columnIndex:number;
}

const Square = ({className, rowIndex, columnIndex}: Props) => {
    const [active, setActive] = useState(false);
    const dispatch = useDispatch();
    const activeSquares = useSelector((state: any) => state.game.activeSquares);

    const handleMouseOver = () => {
        setActive(!active)
    };

    useEffect(()=>{
        console.log(activeSquares)
    }, [activeSquares])

    useEffect(()=>{
        if (active){
            dispatch(addActiveSquare({rowIndex,columnIndex}));
        }else {
            dispatch(removeActiveSquare({rowIndex,columnIndex}));
        }
    }, [active])

    return (
        <div className={className} onMouseOver={handleMouseOver} style={{backgroundColor: active ? "lightblue" : "white"}}>
            <p className='test'>{rowIndex} {columnIndex}</p>
        </div>
    );
};

export default styled(Square)`
  outline: 0.5px black solid;
  display: flex;
  height: 0;
  width: ${({size}) => 100 / size}%;
  padding-top: ${({size}) => 100 / size}%;
  
  .test{
    position: absolute;
  }
`;
