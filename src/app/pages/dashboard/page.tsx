"use client"

import { toast } from "sonner";
import { useEffect, useState } from "react";

import { getUserData } from "./dashboard";


export default function Dashboard() {

    const [userId, setUserId] = useState();

    useEffect(() => {
      async function fetchUserData() {
          const userId = await getUserData();
          console.log(userId);
        setUserId(userId);
      }

      void fetchUserData();
    }, []);

  return (
    <main className="flex flex-col gap-4 p-5">
      <header>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-neutral-700">Welcome to your dashboard.</p>
      </header>
      <section>
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
      </section>
    </main>
  );
}
