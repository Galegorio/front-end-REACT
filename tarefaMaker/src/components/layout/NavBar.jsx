import { Outlet, Link } from "react-router-dom"
import style from "./navBar.module.css"

const NavBar = ()=>{
    return(
        <>
            <nav className={style.navbar}>
                <ul className={style.list}>

                    <Link to='/'>
                        <li className={style.item}><img src="./tarefa.png" alt="Logo tipo" className={style.logo}/></li>
                    </Link>

                    <Link to='/'>
                        <li className={style.item}>HOME</li>
                    </Link>

                    <Link to='/newBook'>
                        <li className={style.item}>CADASTRAR </li>
                    </Link>

                    <Link to='/listBook'>
                        <li className={style.item}>VER TAREFAS</li>
                    </Link>

                </ul>
            </nav>
            <Outlet/>
        </>
    )
}

export default NavBar