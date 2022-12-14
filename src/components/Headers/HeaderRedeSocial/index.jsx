import './styles.css'
import Logo from '../../../assets/img/logo.svg'
import Lupa from '../../../assets/img/lupa.svg'
import IconeHome from '../../../assets/img/icone_home.svg'
import IconeMensagens from '../../../assets/img/icone_mensagen.svg'
import IconeAmigos from '../../../assets/img/icone_amigos.svg'
import IconeNotificacao from '../../../assets/img/icone_notificacao.svg'
import Foto from '../../../assets/img/ft_rede_social.svg'



function HeaderRedeSocial(){
    return(
        <div Id="ConteudoHeaderRedeSocial">
            {/* <div className="ConteinerLogo-BtnPesquisa"> */}
                <img src={Logo} alt="Logo indikey" className="TamanhoLogoHeaderRedeSocial" />
                {/* <div className="BtnPesquisaHeaderRedeSocial">
                    <img src={Lupa} alt="Pesquisar" />
                    <input type="text" className='BtnPesquisaeHeaderRedeSocial-input' id='BtnPesquisaeHeaderRedeSocial-input' placeholder='Pesquisar' maxLength="25" />
                </div> */}
            {/* </div>    */}
            

            <div className="ConteinerIconesCentroHeaderRedeSocial">
                <img src={IconeHome} alt="Icone de link para a home" className="TamanhoIconesHeaderRedeSocial" />
                <img src={IconeMensagens} alt="Icone de acesso a aba de mensagens" className="TamanhoIconesHeaderRedeSocial" />
                <img src={IconeAmigos} alt="Icone de visualização de amigos na plataforma" className="TamanhoIconesHeaderRedeSocial" />
            </div>
            
            <div className="ConteinerPerfil-Notificacao">
                <img src={IconeNotificacao} alt="Icone de acesso a aba de notificações" className="TamanhoIconesHeaderRedeSocial" />
                <img src={Foto} alt="Foto de perfil do usuario da rede social" className="TamanhoFotoPerfil" />
            </div>
        </div>
    )
}
export default HeaderRedeSocial