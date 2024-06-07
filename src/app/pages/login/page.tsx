"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import Link from "next/link";
import { getUserByUsername, getUserByUsernameAndPassword } from "./login";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
});

export default function Login() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    const users = await getUserByUsernameAndPassword(
      values.username,
      values.password,
    );

    if (users.length === 0) {
      console.log("User not found with this credentials...");
      form.setError("username", {
        message: "",
      });
      form.setError("password", {
        message: "Incorrect username or password.",
      });
    } else {
      console.log(`Welcome, ${users[0]?.name}!`);
      console.log(users[0]);
    }
  }

  return (
    <main className="flex flex-grow flex-col items-center justify-center p-5">
      <div>
        <header className="flex flex-col justify-start gap-2">
          <h1 className="mb-1 text-3xl font-bold">Login</h1>
          <p className="mb-5 text-neutral-700">
            Please enter your username and password to login.
          </p>
        </header>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input className="w-full" placeholder="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-2">
              <p>Don&apos;t have an account?</p>
              <Link
                className="underline underline-offset-4"
                href="/pages/register"
              >
                Register
              </Link>
            </div>
            <Button type="submit">Log in</Button>
          </form>
        </Form>
      </div>
    </main>
  );
}
