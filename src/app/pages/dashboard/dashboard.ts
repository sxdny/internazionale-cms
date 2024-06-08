"use server";

import { db } from "~/server/db";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getUserData() {
    if (cookies().get("userId")) {
        return cookies().get("userId")
    } else {
        redirect("/pages/login")
    }
}





