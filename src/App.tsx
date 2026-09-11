import { Suspense } from "react"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Loader from "./Components/Loader"
import TechSection from "./Components/TechSection"
import type { TechType } from "./Types/techType"


const techPromise = async(): Promise<TechType[]> => {
  let res = await fetch('/data.json')
  let data = await res.json()
  return data
}


const App = () => {
  return (
    <div className="">
       <Navbar></Navbar>
       <Hero></Hero>
       <Suspense fallback={<Loader></Loader>}>
          <TechSection
          techPromise = {techPromise()}
          ></TechSection>
       </Suspense>
    </div>
  )
}

export default App