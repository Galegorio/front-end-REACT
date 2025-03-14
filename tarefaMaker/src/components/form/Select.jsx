import styles from "./select.module.css"

const Select = ({text, name, id, handlerChange}) => {
    return(
        <div className={styles.form_control}>

            <label htmlFor={name}>{text}</label>

            <select name={name} id={id} onChange={handlerChange}> 

                <option value="">Selecione uma categoria</option>

                <option value="">Extrema Importância</option>

                <option value="">Importante</option>

                <option value="">Medio</option>

                <option value="">Minima Importância</option>

            </select>

        </div>
    );
}

export default Select;