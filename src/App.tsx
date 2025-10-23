import Header from "./components/Header/Header";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider";
import TodosSection from "./components/TodosSection/TodosSection";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Header />
      <main>
        <TodosSection />
      </main>
    </ThemeProvider>
  );
}

export default App;
