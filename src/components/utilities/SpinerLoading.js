import ClipLoader from "react-spinners/ClipLoader";
import '../../css/spiner.css'

const SpinerLoading = () => {
  return (
      <div className="flex flex-warp justify-center mt-64">
        <ClipLoader loading="true" color='#ea8223' size={50}/>
        <p className="spinerText self-center mx-4 text-3xl ">Cargando...</p>
      </div>
  )
}

export default SpinerLoading