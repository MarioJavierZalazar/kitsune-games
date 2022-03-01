const Formulario = () => {
  return (
    <div>
        <form action="" className="text-2xl">
            <div className="flex flex-warp justify-around my-12">
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input type='text' name="nombre" id="nombre" className="bg-slate-100 mx-4 w-96 px-2 rounded-xl"/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type='email' name="email" id="email" className="bg-slate-100 mx-4 w-96 px-2 rounded-xl" placeholder="correo@correo.com"/>
                </div>
            </div>
            <div className="text-center my-12">
                <label htmlFor="motivo">Motivo de su contacto</label>
                <input type='text' name="motivo" id="motivo" className="bg-slate-100 mx-4 w-1/4 px-2 rounded-xl"/>
            </div>
            <div className="text-center my-12">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea className="bg-slate-100 block mx-auto w-3/4 text-sm rounded-xl" name="mensaje" id="mensaje" style={{resize: 'none'}}></textarea>
            </div>
            <div className='formBtn w-40 text-center my-2.5 mx-auto rounded-3xl py-1.5 px-5 text-white border-solid border-2 border-black'>
                <button type="submit">Enviar</button>
            </div>
        </form>
    </div>
  )
}

export default Formulario