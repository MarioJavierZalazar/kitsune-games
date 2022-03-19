import HomeTitle from '../utilities/HomeTitle'
import HomeWidget from '../utilities/HomeWidget'
import '../../css/main.css'

const HomeContainer = () => {
  return (
    <div>
      <HomeTitle/>
      <div className="flex flex-warp justify-center my-12">
        <HomeWidget acction={'ver catalogo'} picture={'foxCatalogo.jpg'} to={'/productos'}/>
        <HomeWidget acction={'ir a Contacto'} picture={'foxLogin2.png'} to={'/contacto'}/>
      </div>
    </div>
  )
}

export default HomeContainer