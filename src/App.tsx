import './index.css'
import { Header } from './Components/Header/Header'
import { Movies } from './Components/Movie/Movie'


function App() {

  return (
    <div>
      <Header/>
      <main className='container !pt-14'>
        <Movies/>
      </main>
    </div>
  )
}

export default App
