import { Smile } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-faint bg-background backdrop-blur supports-[backdrop-filter]:bg-background">
            <div className="container flex h-16 px-25 items-center justify-between">
                <NavLink to="/" className="flex items-center gap-2 text-xl font-bold text-primary hover:text-primary\80 transition-colors">
                    <Smile className="h-6 w-6"/>
                    <span>Sorriso Perfeito</span>
                </NavLink>
                <nav className="flex items-center gap-6">
                    <NavLink 
                        to="/"
                        className={({ isActive }) =>
                            `text-sm font-medium transition-colors ${
                            isActive
                                ? "text-primary"
                                : "text-foreground hover:text-foreground"
                            }`
                        }
                    >
                        Inicio
                    </NavLink>
                    <NavLink 
                        to="/contato"
                        className={({ isActive }) =>
                            `text-sm font-medium transition-colors ${
                            isActive
                                ? "text-primary"
                                : "text-foreground hover:text-foreground"
                            }`
                        }
                    >
                        Contato
                    </NavLink>

                </nav>
            </div>
        </header>
    );
}

export default Header;