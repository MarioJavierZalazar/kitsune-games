import '../../css/card.css'

const Item = ( {p} ) => {

  return (
    <div className="card">
        <div className="cardImg">
            <a href='#'>
                <img src={p.picture} alt={p.title} />
            </a>
        </div>
        <div className="cardbody">
            <h3 className='cardTitle'>{p.title}</h3>
            <p className='cardText'>{p.description}</p>
            <div className='cardPrice'>
                <button className='btnPrice'>$ {p.price}</button>
            </div>
        </div>
        
    </div>
  )
}

export default Item