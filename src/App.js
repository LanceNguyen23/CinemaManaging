import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "~/routes";
import { sectionSelector } from "./store/selectors";
function App() {
  let isLoggedIn = useSelector(sectionSelector);
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return (
              <Route key={index} exact path={route.path} element={<Page />} />
            );
          })}

          {isLoggedIn &&
            privateRoutes.map((route, index) => {
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />;
            })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
