import avatar from '../img/perfil.jpeg'
import '../styles/components/sidebar.sass'

const Sidebar = () => {
  return (
    <aside id="sidebar">
        <img src={avatar} alt="Erick Estanislau" />
        <p className="title">Desenvolvedor</p>
        <p>Redes sociais</p>
        <p>Informações de contato</p>
        <a href="" className="btn">Download do currículo</a>
    </aside>
  )
}

export default Sidebar