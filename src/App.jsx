
import Outside from './components/tarih/outside'
import './App.css'
import Information from './components/bilgi'
import Program from './components/hedef'
import TextRamadan from './components/ramazan'
import StoreContext from './store'
import useDate from './data/useDate'


function App() {
    const {hijriDay,hijriMonth,hijriYear}=useDate();

  return (
    <StoreContext.Provider value={{hijriDay,hijriMonth,hijriYear}}  >
  
      <TextRamadan/>
      <div className="page">      
      <Information/>
      <Outside/>
      <Program/>
      </div>
  
    </StoreContext.Provider>
  )
}

export default App
