import { type JSX } from "react";
import { Link } from "react-router-dom";
import "tailwindcss";
import appIcon from "../../assets/app-icon.png";

type CustomMenuItem = {
    label: string;
    icon?: string;
    url: string;
};

function Navegacao(): JSX.Element {
    const items: CustomMenuItem[] = [
        { label: "Produtos", icon: "pi pi-box", url: "/lista/produtos" },
        { label: "Categorias", icon: "pi pi-tags", url: "/lista/categorias" },
        { label: "Movimentacao", icon: "pi pi-briefcase", url: "/lista/movimentacao" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-slate-600 flex items-center px-2 md:px-4 py-3 min-h-[64px]">
            <div className="flex items-center flex-1">
                <Link to="/" className="mr-4 md:mr-6 lg:mr-10 flex-shrink-0">
                    <img
                        src={appIcon}
                        alt="Logo"
                        className="h-10 md:h-12 lg:h-14 w-auto ml-2 md:ml-4 lg:ml-6"
                    />
                </Link>

                <nav className="flex items-center gap-3 md:gap-6">
                    {items.map((item) => (
                        <Link
                            key={item.url}
                            to={item.url}
                            className="flex items-center text-white text-sm md:text-base lg:text-lg no-underline hover:text-gray-300 transition-colors"
                        >
                            {item.icon && <i className={item.icon}></i>}
                            <span className="ml-2">{item.label}</span>
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Navegacao;