import React, { useEffect, useState } from 'react'
import axios from "axios"
// import styles from '../styles/Home.module.css'
import Card from '../../src/components/Card/Card';

export default function AllPokemons() {
    const [data, setData] = useState();

    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
            .then((response) => setData(response.data))
    }, []);


    return (
        <>
            {/* <button><a href='/' />voltar</button> */}
            {data?.results?.map((item, index) => {

                return (
                    <div key={index} >
                        <Card data={item.url} />
                    </div>
                )
            })}



        </>
    )
}
