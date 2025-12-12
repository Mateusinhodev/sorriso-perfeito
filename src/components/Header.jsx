import { useState } from "react";
import { Smile, Menu, X  } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {

    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-faint bg-background backdrop-blur supports-[backdrop-filter]:bg-background">
            <div className="container flex h-16 px-4 items-center justify-between">

                {/* Logo */}
                <NavLink to="/" className="flex items-center gap-2 text-xl font-bold text-primary hover:text-primary/80 transition-colors">
                <Smile className="h-6 w-6" />
                <span>Sorriso Perfeito</span>
                </NavLink>

                {/* Botão Mobile */}
                <button 
                className="md:hidden p-2"
                onClick={() => setOpen(!open)}
                >
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>

                {/* Menu Desktop */}
                <nav className="hidden md:flex items-center gap-6">
                <NavLink 
                    to="/"
                    className={({ isActive }) =>
                    `text-sm font-medium transition-colors ${
                        isActive ? "text-primary" : "text-foreground hover:text-foreground"
                    }`
                    }
                >
                    Início
                </NavLink>

                <NavLink 
                    to="/contato"
                    className={({ isActive }) =>
                    `text-sm font-medium transition-colors ${
                        isActive ? "text-primary" : "text-foreground hover:text-foreground"
                    }`
                    }
                >
                    Contato
                </NavLink>
                </nav>
            </div>

            {/* Menu Mobile Dropdown */}
            {open && (
                <nav className="md:hidden bg-background border-b border-faint p-4 flex flex-col gap-4">
                <NavLink 
                    to="/"
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                    `text-sm font-medium transition-colors ${
                        isActive ? "text-primary" : "text-foreground hover:text-foreground"
                    }`
                    }
                >
                    Início
                </NavLink>

                <NavLink 
                    to="/contato"
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                    `text-sm font-medium transition-colors ${
                        isActive ? "text-primary" : "text-foreground hover:text-foreground"
                    }`
                    }
                >
                    Contato
                </NavLink>
                </nav>
            )}
        </header>
    );
}

export default Header;