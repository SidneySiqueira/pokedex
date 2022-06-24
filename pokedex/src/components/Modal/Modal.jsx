import React from 'react'
import * as S from './style'

export default function Modal({ nome, tipo, hp, ataque, defesa, ataqueEspecial, defesaEspecial, velocidade, imagem, setOpenModal = { setOpenModal } }) {

    return (
        <S.Container >
            <S.Typography>
                <p>Nome:{nome}</p>
                <p>Tipo:{tipo}</p>
                <p>HP:{hp}</p>
                <p>Ataque:{ataque}</p>
                <p>Defesa:{defesa}</p>
                <p>Ataque-Especial:{ataqueEspecial}</p>
                <p>Defesa-Especial:{defesaEspecial}</p>
                <p>Velocidade:{velocidade}</p>
            </S.Typography>
            <div>
                <S.Image src={imagem}></S.Image>
            </div>
            <S.Botao>
                <S.X onClick={() => setOpenModal(false)}>X</S.X>
            </S.Botao>
        </S.Container >
    )
}
