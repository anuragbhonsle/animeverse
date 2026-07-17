import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
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

const ResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const handleSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) console.error(error);

      console.log("Session:", data.session);
    };

    handleSession();
  }, []);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password.length < 6) {
      toast({
        title: "Weak password",
        description: "Minimum 6 characters",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Password updated!",
        className: "bg-green-500 text-white border-green-600",
      });
    }

    setLoading(false);
    setSuccess(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Set New Password
            </CardTitle>
            <CardDescription>Enter your new password below.</CardDescription>
          </CardHeader>

          <CardContent>
            <form
              onSubmit={success ? (e) => e.preventDefault() : handleUpdate}
              className="space-y-4"
            >
              <Input
                type="password"
                placeholder="New password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button
                type="submit"
                className="w-full"
                disabled={loading}
                onClick={() => {
                  if (success) {
                    navigate("/auth"); //  go to login page
                  }
                }}
              >
                {loading
                  ? "Updating..."
                  : success
                    ? "Go to Login"
                    : "Update Password"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default ResetPassword;
