import { Button } from "./ui/button";

export function Navbar() {
    return (
        <nav className="flex border-b justify-between p-5 bg-slate-50">
            <div>
                <Button className="hover:no-underline" variant="link">
                    <h1 className="text-xl">Internazionale</h1>
                </Button>
            </div>
            <div>
                <Button variant="link">
                    Servicios
                </Button>
                <Button variant="link">
                    Ayuda
                </Button>
                <Button>Iniciar Sesión</Button>
            </div>
        </nav>
    )
}