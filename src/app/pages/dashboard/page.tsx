"use client"

import { toast } from "sonner";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import Cookies from 'js-cookie';

import { Button } from "~/components/ui/button";

import { getUserData, deleteCookie } from "./dashboard";

export default function Dashboard() {

  const [userId, setUserId] = useState();
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    // 1. get cookie
    async function fetchUserData() {
      if (!hasFetched) {
        console.log("Fetching data...")
        const userId = await getUserData();
        setUserId(userId);
        setHasFetched(true)
        console.log("Data fetched!")
      }
    }

    void fetchUserData();

  }, []);

  async function logout() {
    try {
      if (await deleteCookie("userId")) {
        toast.success("Sesión cerrada correctamente!")
        redirect("/pages/login")
      } else {
        toast.error("No se ha podido cerrar sesión...")
        console.log(userId)
      }
    } catch (error) {
      toast.error("Ha habido un problema", error)
    }
  }

  return (
    <main className="flex flex-col gap-4 p-5">
      <header>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-neutral-700">Welcome to your dashboard.</p>
      </header>
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold">Your data</h2>
          <p className="text-neutral-700">Here you can see your data.</p>
        </div>
        <div>
          {
            userId ? (
              <p>Your user id: {userId.value}</p>
            ) : (
              <p>Loading...</p>
            )
          }
        </div>
        <div>
          <Button variant="destructive" onClick={logout}>Cerrar sesión</Button>
        </div>
      </section>
    </main>
  );
}
