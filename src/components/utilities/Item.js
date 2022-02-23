import '../../css/card.css'

const Item = ( {p} ) => {

  return (
    <div className="bg-slate-100 rounded-3xl py-1.5 px-5 m-5">
        <div className="cardImg overflow-hidden w-48 h-48 mx-auto my-2.5 bg-white rounded-3xl border-solid border-2 border-black">
            <img className='object-contain w-48 h-48' src={p.picture} alt={p.title} />
        </div>
        <div className="cardbody">
            <h3 className='cardTitle text-xl font-bold text-center uppercase'>{p.title}</h3>
            <p className='h-20 m-2.5 italic text-xs'>{p.description}</p>
            <div className='cardPrice w-40 text-center my-2.5 mx-auto rounded-3xl py-1.5 px-5 text-white border-solid border-2 border-black'>
                <button>$ {p.price}</button>
            </div>
        </div>
        
    </div>
  )
}

export default Item