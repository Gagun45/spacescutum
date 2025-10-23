import Header from "./components/Header/Header";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider";
import SearchAndFilterDesktop from "./components/TodosSection/SearchAndFilterDesktop/SearchAndFilterDesktop";
import TodosSection from "./components/TodosSection/TodosSection";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Header />
      <main className="xl:flex xl:flex-row">
        <SearchAndFilterDesktop />
        <TodosSection />
      </main>
    </ThemeProvider>
  );
}

export default App;
