import { useMemo, useState, Fragment } from 'react';
import './App.css';
import LoginBox from './components/login-box/login-box.component';
import { UserContext } from "../src/context/userContext"
function App() {
  const [user, setUser] = useState({ userName: "", password: "" })
  const ProviderValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <div className='App'>
      <UserContext.Provider value={ProviderValue}>
        <Fragment>
          <LoginBox />
        </Fragment>
      </UserContext.Provider>

    </div>
  );
}

export default App;
