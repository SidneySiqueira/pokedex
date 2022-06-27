import styled from 'styled-components';

interface Props {
    cor: any
    cor2: any
}

export const Card = styled.div<Props>`
    margin: 20px;
    height: 350px;
    width: 200px;
    border: 5px white solid;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: ${props => props.cor};
`
export const Name = styled.p`
    text-transform: uppercase;
    font-size: 25px;
    border-radius: 5px;
    background: white;
    font-weight: bold;
`

export const Image = styled.img`
    width: 150px;
`
