"use server";

import { db } from "~/server/db";

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

