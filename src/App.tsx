import Header from "./components/Header/Header";
import TodosSection from "./components/TodosSection/TodosSection";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <Header />
      <main>
        <h1 className="text-center">TODO APP</h1>
        <TodosSection />
        <Button className="fixed bottom-0 right-0">Add new todo</Button>
      </main>
    </>
  );
}

export default App;
