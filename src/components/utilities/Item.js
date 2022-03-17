import { NavLink } from 'react-router-dom'
import '../../css/card.css'

const Item = ( {p} ) => {
  return (
    <div className="bg-slate-100 rounded-3xl py-1.5 px-5 m-5">
        <div className="cardImg overflow-hidden w-48 h-48 mx-auto my-2.5 bg-white rounded-3xl border-solid border-2 border-black">
            <img className='object-contain w-48 h-48' src={`./img/${p.picture}`} alt={p.title} />
        </div>
        <div className="cardbody">
          <div className='flex flex-wrap justify-between'>
            <h4 className='cardTitle font-bold uppercase'>{p.title}</h4>
            <p className='cardPrice font-bold'>$ {p.price}</p>
          </div>
          <p className='h-20 m-2.5 italic'>{p.description}</p>
          <div className='cardDetalle w-40 text-center my-2.5 mx-auto rounded-3xl py-1.5 px-5 text-white border-solid border-2 border-black'>
            <NavLink to={`/productos/${p.id}`}>Ver detalles</NavLink>
          </div>
        </div>
    </div>
  )
}

export default Item