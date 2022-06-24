/* eslint-disable @next/next/no-html-link-for-pages */
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from "react";
import axios from "axios"
import Modal from '../src/components/Modal/Modal';


export default function Home() {
  const [abilities, setAbilities] = useState("")
  const [pokemon, setPokemon] = useState("")
  const [openModal, setOpenModal] = useState(false)

  const pokemonAbilities = (choice) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${choice}`)
      .then((response) => setAbilities(response.data))
    setOpenModal(true)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokedex</title>
      </Head>

      <main className={styles.main}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png' />

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

        <div>
          <input onChange={(e) => setPokemon(e.target.value)} />
          <button className={styles.entre} onClick={() => pokemonAbilities(pokemon)} > Entre</button>
          <button className={styles.button}><a href="/Pokemon">Todos Pokemons</a></button>
        </div>
      </main>
    </div >
  )
}
