import React from 'react'

import '../Styles/Login.css'

export const LoginPage: React.FC = () => {
    return(
        <div className="Container">
            <div className="Cadastro">
                <h3 >Login</h3>

                <section className="InfoPessoais">
                    <a id="Google">
                        Entrar com o Google
                    </a>
                    
                    OU

                    <input className='Inputs' type="email" placeholder="Email"/>
                    <input className='Inputs' type="password" placeholder='Senha'/>
                    <button id='Enviar' type="submit">Entrar</button>
                    
                </section>

                <section className="Forgot">
                    <span>
                        <input type="checkbox" id='LembrarDeMim'/>
                        <label htmlFor="LembrarDeMim">Lembrar de mim</label>
                    </span>

                    <span>
                        <a href="#" id='ForgotPassword'>Esqueci minha senha</a>
                    </span>
                </section>

                <footer>
                    <a href="#">Ainda não tenho uma conta</a>
                </footer>
            </div>
        </div>
    )
}