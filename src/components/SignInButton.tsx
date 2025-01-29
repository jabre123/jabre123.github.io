import { LogIn } from "lucide-react";

export const SignInButton = () => {
  return (
    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-200">
      <LogIn className="h-4 w-4 mr-2" />
      Sign In
    </button>
  );
};