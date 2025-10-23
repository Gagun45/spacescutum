import ThemeToggle from "../General/ThemeToggle/ThemeToggle";

const Header = () => {
  return (
    <header className="bg-foreground text-background shadow-md ">
      <div className="max-w-3xl xl:max-w-[1440px] mx-auto flex justify-between w-full px-6 xl:px-12 gap-2">
        <h1 className="text-3xl font-bold tracking-wide">Manage Your Tasks</h1>
        <ThemeToggle />
      </div>
    </header>
  );
};
export default Header;
