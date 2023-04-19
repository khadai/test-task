import React from 'react';
import styled from "styled-components";

interface Props {
    className?: string;
}

const ChooseMode = ({className}: Props) => {
    return (
        <div className={className}>
            <h4>Please choose game mode</h4>
        </div>
    );
};

export default styled(ChooseMode)`
    margin: 8px;
`;
