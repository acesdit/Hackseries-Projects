function App() {
  let fruits = ["Apple", "Grapes", "Banana", "Watermelon"];
  return (
    <>
      <h1>Healthy Fruits</h1>
      <ul className="list-group">
        {fruits.map((item, index) => (
          <li className="list-group-item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;  
