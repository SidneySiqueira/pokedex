import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from '../../src/components/Card/Card';
import styles from '../../styles/Home.module.css'
import Modal from '../../src/components/Modal/Modal';

export default function AllPokemons() {
    const [data, setData] = useState();
    const [openModal, setOpenModal] = useState(false)
    const [abilities, setAbilities] = useState("")

    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
            .then((response) => setData(response.data))
    }, []);
    const pokemonAbilities = (choice) => {
        console.log("choice" , choice);
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${choice}`)
        .then((response) => setAbilities(response.data))
        setOpenModal(true)
  }
  console.log("pokemonAbilities" , pokemonAbilities);

    return (
        <div>
            <div className={styles.main}>
                <button><a href="/"/>voltar</button>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png' />
            </div>
            <div className={styles.page}>
            {data?.results?.map((item, index) => {

                return (
                    <div key={index} onClick={() => pokemonAbilities( index + 1)}>
                        <Card data={item.url}  />
                        {openModal && 
                        <Modal/>} 
                    </div>
                    
                )
            })}
            </div>
        </div>
    )
}
