import avatar from '../img/perfil.jpeg'
import '../styles/components/sidebar.sass'
import SocialNetworks from './SocialNetworks'


const Sidebar = () => {
  return (
    <aside id="sidebar">
        <img src={avatar} alt="Erick Estanislau" />
        <p className="title">Desenvolvedor</p>
        <SocialNetworks/>
        <p>Informações de contato</p>
        <a href="" className="btn">Download do currículo</a>
    </aside>
  )
}

export default Sidebar