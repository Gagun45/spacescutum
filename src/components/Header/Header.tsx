import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Header = () => {
  return (
    <header className="bg-foreground text-background shadow-md ">
      <div className="max-w-3xl mx-auto grid grid-cols-2 w-full px-6">
        <h1 className="text-3xl font-bold tracking-wide">Manage Your Tasks</h1>
        <ThemeToggle />
      </div>
    </header>
  );
};
export default Header;
