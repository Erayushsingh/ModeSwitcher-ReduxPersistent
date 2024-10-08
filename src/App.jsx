import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"
import store from "./redux/store"
import Login from "./Login"

const persistor = persistStore(store)

const App = ()=>{
  
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Login />
      </PersistGate>
    </Provider>
  )
}

export default App