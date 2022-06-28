import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from '../../src/components/Card/Card';
import styles from '../../styles/Home.module.css'
import Modal from '../../src/components/Modal/Modal'

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
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${choice}`)
            .then((response) => {
                setAbilities(response.data)
                setOpenModal(true)
            })

    }

    return (
        <div>
            <div className={styles.modal}>
                {openModal &&
                    <Modal
                        nome={abilities?.name}
                        tipo={abilities && abilities?.types[0]?.type?.name}
                        hp={abilities && abilities?.stats[0].base_stat}
                        ataque={abilities && abilities?.stats[1].base_stat}
                        defesa={abilities && abilities?.stats[2].base_stat}
                        ataqueEspecial={abilities && abilities?.stats[3].base_stat}
                        defesaEspecial={abilities && abilities?.stats[4].base_stat}
                        velocidade={abilities && abilities?.stats[5].base_stat}
                        imagem={abilities?.sprites?.other["official-artwork"]?.front_default} alt=""
                        setOpenModal={setOpenModal} />
                }
            </div>
            <div className={styles.poster}>
                <a className={styles.voltar} href="/">voltar</a>
                <a href="/"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png' /></a>
            </div>

            <div className={styles.page}>
                {data?.results?.map((item, index) => {

                    return (
                        <div key={index} onClick={() => pokemonAbilities(item.name)}>
                            <Card data={item.url} />
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
