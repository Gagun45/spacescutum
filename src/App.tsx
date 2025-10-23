import Header from "./components/Header/Header";
import SearchAndFilterDesktop from "./components/SearchAndFilterDesktop/SearchAndFilterDesktop";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider";
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
