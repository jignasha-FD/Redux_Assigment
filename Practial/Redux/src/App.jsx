import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FinanceManager from './Redux/FinanceManager/FinanceManager'
import { Provider } from 'react-redux'
import { store } from './Redux/app/store'
import Todo from './Redux/Todo/Todo'

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' Component={FinanceManager}></Route> */}
          <Route path='/' Component={Todo}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
