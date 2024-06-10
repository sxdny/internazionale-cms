"use server";

import { cookies } from "next/headers";

export async function getUserData() {
    return cookies().get("userId")
}

export async function deleteCookie(name: string) {
    if (cookies().delete(name)) {
        return true;
    } else {
        return false;
    }
}



