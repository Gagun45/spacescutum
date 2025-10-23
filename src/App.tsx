import Header from "./components/Header/Header";
import TodosSection from "./components/TodosSection/TodosSection";

function App() {
  return (
    <>
      <Header />
      <main>
        <h1 className="text-center">TODO APP</h1>
        <TodosSection />
      </main>
    </>
  );
}

export default App;
