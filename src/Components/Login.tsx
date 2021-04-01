import React from 'react'

import '../Styles/Login.css'

export const LoginPage: React.FC = () => {
    return(
        <div className="Container">
            <div className="Cadastro">

                <section className="InfoPessoais">
                    <h3 className='Title'>Login</h3>

                    <a href='#' id="Google">
                       <img src={'Assets/Google.svg'} alt="Logo do Google" id='GoogleIcon'/>
                       Entrar com o Google
                    </a>
                    
                    OU

                    <input className='Inputs' type="email" placeholder="Email"/>
                    <input className='Inputs' type="password" placeholder='Senha'/>
                    
                    <div id='LembrarDeMim' >
                        <input type="checkbox"/>
                        <label htmlFor="LembrarDeMim">Lembrar de mim</label>
                    </div>

                    <button id='Enviar' type="submit">Entrar</button>
                    
                </section>

                <footer>
                    <a href="#" id='ForgotPassword'>Esqueci minha senha</a>
                    <a href="#">Ainda não tenho uma conta</a>
                </footer>
            </div>
        </div>
    )
}