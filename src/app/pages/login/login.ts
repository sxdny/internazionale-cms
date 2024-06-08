"use server";

import { db } from "~/server/db";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getAllUsers() {
    return await db.query.users.findMany();
}

export async function getUserByUsername(username: string) {
    return await db.query.users.findMany({
        where: (users, { eq }) => eq(users.username, username),
        limit: 1,
    })
}

export async function getUserByUsernameAndPassword(username: string, password: string) {
    return await db.query.users.findMany({
        where: (users, { and, eq }) => and(
            eq(users.username, username),
            eq(users.password, password),
        ),
        limit: 1,
    })
}

// Coockies managment
export async function setCookie(userId: number) {
    cookies().set({
        name: "userId",
        value: userId.toString(),
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
    })
}

export async function checkCookie() {
    if (cookies().get("userId")) {
        redirect("/")
    } else {
        redirect("/pages/login")
    }
}

// User managment
export async function checkUserLogin() {
    if (cookies().get("userId")) {
        return true;
    } else {
        return false;
    }
}

