import styled from "styled-components";

export const Button = styled.button`
width: 200px;
height:50px;
background-color: ${(props) => props.lightTheme ? "blue" : "white"};
color: ${(props) => props.lightColor ? "white" : "blue"};

`;
