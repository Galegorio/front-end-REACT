import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css'; // Importando o CSS Module

function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Lógica de autenticação simples (substitua com sua lógica real)
    if (usuario === 'admin' && senha === '123') {
      navigate('/');
    } else {
      setErro('Usuário ou senha inválidos!');
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_box}>
        <h1 className={styles.title}>Login</h1>
        <form onSubmit={handleLogin} className={styles.form}>
          <div className={styles.input_group}>
            <label htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.input_group}>
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className={styles.input}
              required
            />
        <Link to ='/Home'>
            <text>
                Não é cadastrado? Cadastre-se Aqui
            </text>
        </Link>
          </div>
          {erro && <p className={styles.error}>{erro}</p>}
          <button type="submit" className={styles.submit_button}>Entrar</button>

        </form>
      </div>
    </div>
  );
}

export default Login;
