import { Button } from "../components/ui/button";

/*
* Este componente se ejecuta en el servidor
* por lo que el console.log no se verá en el navegador,
* se verá en la consola del warp.
*/

export default function HomePage() {

  return (
    <main className="flex min-h-screen justify-center items-center flex-col gap-5 p-5">
      <header className="flex p-20 
    flex-col justify-center items-center gap-5">
        <h1 className="text-7xl font-semibold">
          Hotel Internazionale
        </h1>
        <p className="text-2xl text-neutral-700">
          Una estancia irrepetible.
        </p>
        <Button>
          Reservar
        </Button>
      </header>
      <div>
        
      </div>
    </main>
  );
}
