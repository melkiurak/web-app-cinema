import './index.css'
import { Header } from './Components/Header/Header'
import { Filters } from './Page/Filters/Filters'


function App() {

  return (
    <div>
      <Header/>
      <main className='container !pt-14'>
        <Filters/>
      </main>
    </div>
  )
}

export default App
