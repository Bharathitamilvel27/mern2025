import React from 'react'
import Child from './components/Child'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Skills from './pages/Skills/'
import Login from './pages/Login/'
import Counter from './pages/Counter/'

const App = () => {
  var fruits=["apple","banana","grapes"]
  var userdetails={name:"puvi",password:"4687564"}
  return (
    <div>
      <Child name="Bharathi" phonenum="9878786565" dept="IT"/>
      <Child name="Tamil" phonenum="7878756765" dept="CSE"/>
      
      <About/><Contact/>
      <Home items={fruits} users={userdetails} />
     
      <Skills/>
      <Login/>
      <Counter/>
    </div>
  )
}

export default App