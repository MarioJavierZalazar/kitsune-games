import { NavLink } from 'react-router-dom'

const HomeWidget = ( {acction, picture, to} ) => {
  return (
      <div>
            <div className="overflow-hidden w-1/4 mx-auto my-2.5 bg-black rounded-3xl p-2">
                <NavLink to={to}>
                    <img className='object-contain w-full' src={`./img/${picture}`} alt={acction}/>
                    <div className='text-center'>
                        <h3 className='title uppercase font-bold'>{acction}</h3>
                    </div>
                </NavLink>
            </div>
    </div>
  )
}

export default HomeWidget