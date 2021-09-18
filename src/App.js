import "./App.css";
import WeatherContainer from "./Components/WeatherContainer/WeatherContainer";
import { useFetchData } from "./Hooks/useFetchData";

function App() {
  const data = useFetchData();
  console.log(data);
  return <WeatherContainer />;
}

export default App;
