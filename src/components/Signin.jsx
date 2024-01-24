import { useForm } from "react-hook-form"
import { emailValidation, maxPassword, minPassword } from "../utils/validators"
import{getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import { app } from "../firebase"
import { useNavigate } from "react-router-dom"
import { useState, useEffect} from "react"

export const Signin = () => {

                    /* Estado del formulario para verificar los errores */
  const {register, handleSubmit, formState: {errors}, reset } = useForm()
  const auth = getAuth(app)
  const navigate = useNavigate()
  const [error, setError] = useState()

  useEffect(() => {
    reset();
  }, []);

  const createUser = async (data) => {
    try {
       await createUserWithEmailAndPassword(auth, data.email, data.password)

            /* Para saltar a la  ruta login */
        navigate('/login')
    }catch(error){
     setError(error.message.replace('Firebase', ''))
    }
  }

  return (
    <>
     <div className="card ">
          <div className="card-body">
            <h5 className="card-title text-center">Create new user</h5>

            <form onSubmit={handleSubmit(createUser)}>
                <div className="mb-3">

                    <input 
                    type="email" 
                    name="email"                                                                                   //Expresión regular para validar un correo electrónico           
                    {...register('email', {required: 'Email is required', pattern: emailValidation})}
                    className="form-control" 
                    placeholder="type your email"
                    />
                    {
                      errors.email && <span className="text-danger">{errors.email.message}</span>
                    }
                </div>

                <div className="mb-3">
                    <input 
                    type="password" 
                    name="password"
                    {...register('password', {required: 'Password is required', minLength: minPassword, maxLength: maxPassword})}
                    className="form-control" 
                    placeholder="type your password"
                    />
                    {
                      errors.password && <span className="text-danger">{errors.password.message}</span>
                    }
                </div>
                <div className="mb-3 d-grid gap-2">
                    <button type="submit" className="btn btn-primary">
                      Create
                    </button>
                </div>
            </form>
            {/* Cuanddo error exista lo vamos a pintar */}
            {
              error && <span className="text-danger">{error}</span>
            }
          </div>
        </div>
    
    </>
  )
}
