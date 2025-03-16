import React from "react";
import style from "./createTrf.module.css";
import { useState } from "react";
import Input from "../form/Input.jsx";
import Select from "../form/Select.jsx";
import Button from "../form/Button.jsx";

const CreateBook = () => {

    /* CRIA A ESTRUTURA DE STATE PARA OS DADOS DE LIVRO */
    const[trf, setTrf] = useState({});

     // captura de dados dos elementos de input
    function handlerchanceTrf(event){
        setTrf({...trf, [event.target.name] : event.target.value });
        console.log(trf);
    }

    // captura de dados dos elementos de select
    function handlerChangeCategory(event){
        setTrf({...trf, category : event.target.options[event.target.selectIndex].text})
    }

    //Envio dos dados para a API
    function submit(event){
        event.preventDefault();
        console.log
    } 

    return(
        <section className={style.create_book_container}>

            <h1>Cadastro de Livro: </h1>

            <form onSubmit={submit}>

                <Input type="text"
                    name="txt_livro"
                    id="tct_livro"
                    placeholder="Digite o nome da tarefa: "
                    text="Insira a Tarefa: "
                    handlerChange={handlerchanceTrf}
                />

                <Input type="text"
                    name="txt_autor"
                    id="tct_livro"
                    placeholder="Ex. 01/01/2001 "
                    text="Data de conclusão: "
                    handlerChange={handlerchanceTrf}
                />

                <Input type="text"
                    name="txt_descricao"
                    id="tct_livro"
                    placeholder="Descreva a tarefa: "
                    text="Insira a descrição da Tarefa: "
                    handlerChange={handlerchanceTrf}
                />

                <Select
                    name="slc_categorias"
                    id="slc_categorias"
                    text="Categorias da Tarefa: "
                    handlerChange={handlerchanceTrf}
                />

                <Button
                    title="Salvar a Tarefa"
                />
            </form>
        </section>
    )
}

export default CreateBook;