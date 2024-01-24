import { useForm } from "react-hook-form"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { app } from "../firebase"
import { emailValidation, maxPassword, minPassword } from "../utils/validators"
import{getAuth, signInWithEmailAndPassword} from 'firebase/auth'

export const Login = () => {

                /* Estado del formulario para verificar slos errores */
  const {register, handleSubmit, formState: {errors}, reset} = useForm()
  const auth = getAuth(app)
  const navigate = useNavigate()
  const [error, setError] = useState()

  useEffect(() => {
     reset();
  }, []);

  const loginUser = async (data) => {
    try {
       const response = await signInWithEmailAndPassword(auth, data.email, data.password)
            /* Para saltar a la  ruta login */
            console.log(response)
       navigate('/auth/products') 
    }catch(error){
     setError(error.message.replace('Firebase', ''))
    }
  }

  return (
    <>
    <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center">Login new user</h5>

            <form onSubmit={handleSubmit(loginUser)}>
                <div className="mb-3">

                    <input 
                    type="email" 
                    name="email"                                                                                   
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
                  
                        Log in
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
