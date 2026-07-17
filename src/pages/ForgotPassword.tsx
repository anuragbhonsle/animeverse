import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: "Enter email",
        description: "Email is required",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      await resetPassword(email);
      toast({
        title: "Email sent",
        description: "Check your inbox for reset link",
      });
    } catch (err: any) {
      toast({
        title: "Error",
        description: err.message || "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="relative flex-grow flex items-center justify-center py-26 md:py-26 px-4 overflow-hidden bg-secondary">
        {/* Ambient glow */}

        <Card className="relative w-full max-w-md mx-auto shadow-xl border-border/60 bg-card/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Forgot Password
            </CardTitle>
            <CardDescription>
              Enter your email to receive a reset link.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleReset} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-full"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => navigate("/auth")}
                  className="text-sm text-anime-light-purple hover:underline"
                >
                  Sign In?
                </button>
              </div>
              <Button
                type="submit"
                className="w-full btn-glow rounded-full"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Reset Link"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default ForgotPassword;
