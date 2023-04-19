import React, {useEffect} from 'react';
import {GameField, LogList} from "./layouts";
import axios from "axios";
import {setModes} from "./redux/slice";
import {useDispatch} from "react-redux";
import {ModeSelect} from "./components";
import styled from "styled-components";

interface Props {
    className?: string;
}

const App = ({className}: Props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        axios.get(`https://60816d9073292b0017cdd833.mockapi.io/modes`)
            .then(res => {
                const modes = res.data;
                dispatch(setModes(modes));
            })
    });

    return (
        <div className={className}>
            <div className='content'>
                <div className='content-game-field'>
                    <ModeSelect/>
                    <GameField/>
                </div>
                <div  className='content-game-log'>
                    <LogList/>
                </div>
            </div>
        </div>
    );
}

export default styled(App)`
  width: 1024px;
  margin-left: auto;
  box-sizing: border-box;
  margin-right: auto;
  display: block;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    
    .content-game-field{
      flex-grow: 9;
    }
    
    .content-game-log{
      flex-grow: 6;
    }
  }

  @media (max-width: 950px) {
    width:300px;
  }
`;
