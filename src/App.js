import { BrowserRouter , Route, Routes ,} from "react-router-dom";
import {Routee} from './Routes';

function App() {
  return (
    <div className="App">
     {/* <Title>Hello Faces members</Title> */}
     <BrowserRouter>
        <Routes>
          {Routee.map((items) => {
            return (
              <Route
                key={items.id}
                exact={items.exact}
                path={items.path}
                element={items.component}
              />
            );
          })}
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
