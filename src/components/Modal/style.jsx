import styled from "styled-components";

export const Container = styled.section`
    background-image: url(https://cdn-icons-png.flaticon.com/512/188/188918.png);
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: row;
    position: fixed;
    width: 700px;
    height: 600px;
    color: black;
    align-items: center;
    justify-content: space-around;
    z-index: 10;
`

export const Botao = styled.div`
    position: absolute;
    top: 5px;
    right: 20px;
    cursor: pointer;
`

export const X = styled.p`
    font-size: larger;
    color: black;
    font-weight: bold;
`

export const Image = styled.img`
    width: 450px;
    height: 450px;
`

export const Typography = styled.div`
    font-size: larger;
    font-weight: bold;
    border: 2px black solid;
    border-radius: 20px;
    text-transform: capitalize;
    background-color: white;
`