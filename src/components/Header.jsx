import { useState } from "react";
import { Smile, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  const linkBase =
    "text-sm font-medium transition-colors hover:text-primary";

  const linkActive = "text-primary";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background backdrop-blur supports-[backdrop-filter]:bg-background">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-bold text-primary hover:text-primary/80 transition-colors"
          onClick={() => setOpen(false)}
        >
          <Smile className="h-6 w-6" />
          <span>Sorriso Perfeito</span>
        </NavLink>

        {/* Botão Mobile */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted transition"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : "text-foreground"}`
            }
          >
            Início
          </NavLink>

          <NavLink
            to="/contato"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : "text-foreground"}`
            }
          >
            Contato
          </NavLink>
        </nav>
      </div>

      {/* Menu Mobile */}
      {open && (
        <nav className="md:hidden border-t border-border bg-background px-4 py-4">
          <div className="flex flex-col gap-4">
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : "text-foreground"}`
              }
            >
              Início
            </NavLink>

            <NavLink
              to="/contato"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : "text-foreground"}`
              }
            >
              Contato
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
