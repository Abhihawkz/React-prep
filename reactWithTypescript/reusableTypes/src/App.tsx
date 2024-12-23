import './App.css'
import UserComponent from './UserComponent'
import AdminComponent from './AdminComponent'

function App() {

  return (
    <>
      <UserComponent name='john wick' age={44} email='johnwick@gmail.com' location={['new york','sydney']} />
      <AdminComponent name='jackie chan' age={23} email='jackiechan@gamil.com' location={['chaina','seol']} admin={true}/>
    </>
  )
}

export default App
