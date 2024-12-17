"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import styles for the toast
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { nhost } from "@/lib/nhost";
import { useAuthenticated } from "@nhost/react";

const loginSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." }),
});

const Login = () => {
  const isAuthenticated = useAuthenticated(); // Check if the user is authenticated
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: "" },
  });

  useEffect(() => {
    if (isAuthenticated) {
      // Redirect authenticated users to the homepage
      window.location.href = "/";
    }
  }, [isAuthenticated]);

  const onSubmit = async (data: { username: string }) => {
    try {
      await nhost.auth.signIn({ email: data?.username });
      toast.success("Login link sent to your email!");
    } catch (error: any) {
      toast.error(error.message || "An error occurred during login.");
    }
  };

  const handleGithubLogin = async () => {
    try {
      await nhost.auth.signIn({ provider: "github" });
      toast.success("Successfully connected with GitHub!");
    } catch (error: any) {
      toast.error(error.message || "An error occurred with GitHub login.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      {/* Toast container */}
      <ToastContainer />

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Input
          placeholder="Enter your username"
          {...form.register("username")}
        />
        <Button type="submit">Login</Button>
        <br />
        <Button type="button" onClick={handleGithubLogin}>
          Continue with GitHub
        </Button>
      </form>
    </div>
  );
};

export default Login;
