import { Signin } from "../components/Signin"

export const HomePage = () => {

  
  return (
    <>
        <h1 className="text-center">Welcome, create new User!</h1><br />

      <section className="container d-flex justify-content-center">
        <Signin/>
        </section>
    </>
  )
}
