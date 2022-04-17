import Header from "./components/Header";
import PinList from "./components/PinList";
import xoosha from "./api/xoosha";
import { useEffect, useState } from "react";

function App() {
  const [pins, setPins] = useState([]);

  useEffect(() => {
    function getPins() {
      xoosha
        .get("https://xoosha.com/ws/1/test.php", {
          params: {
            offset: 10,
          },
        })
        .then((res) => {
          setPins((pins) => [...res.data, ...pins]);
        })
        .catch((e) => console.log(e));
    }
    getPins();
  }, []);

  const onSearchSubmit = (searchTerm = "") => {
    if (searchTerm.length > 1) {
      let filteredPins = pins.filter(
        (pin) => pin.description.indexOf(searchTerm) > -1
      );

      setPins(filteredPins);
    }
  };

  return (
    <div className="App">
      <Header onSubmit={onSearchSubmit} />
      {pins.length ? <PinList pins={pins} /> : <h2>No match found</h2>}
    </div>
  );
}

export default App;
