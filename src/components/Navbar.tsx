import { Button } from "./ui/button";

import Link from "next/link";

import { checkUserLogin } from "~/app/pages/login/login";

export async function Navbar() {
    return (
        <nav className="flex border-b justify-between p-5 bg-slate-50">
            <div>
                <Button className="hover:no-underline" variant="link">
                    <Link href="/">
                    <h1 className="text-xl">Internazionale</h1>
                    </Link>
                </Button>
            </div>
            <div>
                <Button variant="link">
                    Servicios
                </Button>
                <Button variant="link">
                    Ayuda
                </Button>
                <Button>
                    {
                        await checkUserLogin() ? (
                            <Link href="/pages/dashboard">
                                Dashboard
                            </Link>
                        ) : (
                            <Link href="/pages/login">
                                Iniciar Sesión
                            </Link>
                        )
                    }
                </Button>
            </div>
        </nav>
    )
}