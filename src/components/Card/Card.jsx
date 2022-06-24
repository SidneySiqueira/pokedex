/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import { useState, useEffect } from "react";
import * as S from './style'

export default function Card({ data }) {
    console.log("data", data)
    const infoAllPoke = (url) => {
        const [poke, setPoke] = useState()
        useEffect(() => {
            axios
                .get(url)
                .then((response) => {
                    setPoke(response.data);

                })
        }, []);
        return poke
    }


    const call = infoAllPoke(data)
    return (
        <S.Card >
            <S.Name>{call?.name}</S.Name>
            <S.Image src={call?.sprites.other.dream_world.front_default} />
        </S.Card>
    )

}
