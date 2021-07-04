import './App.scss';
import Contacts from './components/Contacts';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux'
import store from './store';
import { BrowserRouter , Route, Switch } from 'react-router-dom'
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';


function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
        <div className="App">
          <Navbar />
          <div className="container">
              <Switch>
                <Route exact path='/' component={Contacts} />
                <Route exact path='/contacts/add' component={AddContact} /> 
                <Route exact path='/contacts/edit/:id' component={EditContact} />
              </Switch>
            </div>
        </div>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
