import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import { useEffect, useState } from "react"
import { app } from "../firebase"
import { useNavigate } from "react-router-dom"

export const ProductPage = () => {

    const auth = getAuth(app)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
                             //Comprueba la sesión si existe o no, viene de firebase
      const authentication = onAuthStateChanged(auth, (user) => {
      
        if(user){
          console.log("Logueado correctamente")
        }else{
          navigate('/login')
        }
        setLoading(false)
       
      })

      return () => {
        authentication()
      }
    
    }, [auth, navigate])


    //Cerrar sesión
    const logout = async() => {
      await signOut(auth)
      navigate('/login')
    }

    if(loading) return <h1>Loading...</h1>

  return (
    <>
 
    <h1>Pagina de productos(ruta protegida)</h1>
  <button type="button" className="btn btn-primary m-5" onClick={logout}> Cerrar sesión</button>
    </>
  )
}
