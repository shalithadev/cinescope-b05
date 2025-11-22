"use server";
import { signUp } from "@/lib/auth-client";

export const registerUser = async (_, formData) => {
  if (formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const { error } = await signUp.email(
        {
          email,
          password,
          name,
          image: null,
          callbackURL: "/dashboard",
        },
        {
          onError: (ctx) => {
            console.error("Registration error:", ctx.error);
          },
        }
      );

      return {
        success: !error,
        message: error ? error.message : "Registration successful.",
      };
    } catch (error) {
      console.error("Error registering user:", error);

      return { success: false, message: "Registration failed." };
    }
  }
};
