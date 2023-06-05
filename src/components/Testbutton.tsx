import React, { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    font-size: ${(props) => props.value || "30px"};
    background-color: white;
    border-color: white;
    color: ${(props) => props.color || "blue"};
`;

const Testbutton = () => {
    const [bigger, setbigger] = useState<string>();

    const onClick = (e: any) => {
        e.target.value == "300px" ? setbigger("30px") : setbigger("300px");
        console.log(bigger);
    };

    return (
        <StyledButton color="greenyellow" value={bigger} onClick={onClick}>
            sibal
        </StyledButton>
    );
};

export default Testbutton;
