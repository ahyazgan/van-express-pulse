import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, Lock, Eye, EyeOff, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const passwordSchema = z.string().min(6, "Password must be at least 6 characters");

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isRecoverySession, setIsRecoverySession] = useState(false);
  const [sessionChecked, setSessionChecked] = useState(false);

  useEffect(() => {
    // Check if we have a recovery session
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      // Check URL for recovery token (Supabase redirects with hash fragments)
      const hashParams = new URLSearchParams(window.location.hash.substring(1));
      const accessToken = hashParams.get("access_token");
      const type = hashParams.get("type");
      
      if (type === "recovery" && accessToken) {
        // Set the session from the recovery token
        const { error } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: hashParams.get("refresh_token") || "",
        });
        
        if (!error) {
          setIsRecoverySession(true);
        }
      } else if (session) {
        // User has an active session (might be from recovery)
        setIsRecoverySession(true);
      }
      
      setSessionChecked(true);
    };

    checkSession();

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") {
        setIsRecoverySession(true);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    try {
      passwordSchema.parse(password);
    } catch {
      newErrors.password = language === "tr" 
        ? "Şifre en az 6 karakter olmalı" 
        : "Password must be at least 6 characters";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = language === "tr" 
        ? "Şifreler eşleşmiyor" 
        : "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const { error } = await supabase.auth.updateUser({ password });

      if (error) {
        toast({
          title: language === "tr" ? "Hata" : "Error",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: language === "tr" ? "Şifre Güncellendi!" : "Password Updated!",
          description: language === "tr" 
            ? "Şifreniz başarıyla değiştirildi. Giriş yapabilirsiniz." 
            : "Your password has been successfully changed. You can now log in.",
        });
        
        // Sign out and redirect to login
        await supabase.auth.signOut();
        navigate("/auth", { replace: true });
      }
    } finally {
      setLoading(false);
    }
  };

  // Show loading while checking session
  if (!sessionChecked) {
    return (
      <div className="h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  // If no recovery session, show error
  if (!isRecoverySession) {
    return (
      <div className="h-screen bg-background flex flex-col overflow-hidden">
        <div className="flex-shrink-0 bg-background/80 backdrop-blur-xl border-b border-border/50 z-10 safe-top">
          <div className="flex items-center gap-4 px-4 py-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={() => navigate("/auth")}
                className="rounded-full w-10 h-10 border-border/60 bg-background/50 backdrop-blur-sm shadow-sm"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </motion.div>
            <h1 className="text-lg font-bold">
              {language === "tr" ? "Geçersiz Bağlantı" : "Invalid Link"}
            </h1>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center px-5">
          <div className="text-center max-w-md">
            <p className="text-muted-foreground mb-6">
              {language === "tr" 
                ? "Bu şifre sıfırlama bağlantısı geçersiz veya süresi dolmuş. Lütfen yeni bir şifre sıfırlama isteği gönderin." 
                : "This password reset link is invalid or has expired. Please request a new password reset."
              }
            </p>
            <Button
              onClick={() => navigate("/auth", { state: { mode: "login" } })}
              className="btn-primary-glow"
            >
              {language === "tr" ? "Giriş Sayfasına Git" : "Go to Login"}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex-shrink-0 bg-background/80 backdrop-blur-xl border-b border-border/50 z-10 safe-top">
        <div className="flex items-center gap-4 px-4 py-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="icon"
              onClick={() => navigate("/auth")}
              className="rounded-full w-10 h-10 border-border/60 bg-background/50 backdrop-blur-sm shadow-sm"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </motion.div>
          <h1 className="text-lg font-bold">
            {language === "tr" ? "Yeni Şifre Belirle" : "Set New Password"}
          </h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-8 pb-12">
        <div className="max-w-md mx-auto">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-primary">RouteEU</h2>
            <p className="text-sm text-muted-foreground mt-1">
              {language === "tr" 
                ? "Yeni şifrenizi belirleyin" 
                : "Set your new password"
              }
            </p>
          </motion.div>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 rounded-2xl bg-primary/10 border border-primary/20 flex items-start gap-3"
          >
            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-primary">
              {language === "tr" 
                ? "E-posta doğrulandı. Şimdi yeni şifrenizi belirleyebilirsiniz." 
                : "Email verified. You can now set your new password."
              }
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="newPassword">
                {language === "tr" ? "Yeni Şifre" : "New Password"} *
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="newPassword"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="pl-10 pr-10 h-12 rounded-xl"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-destructive">{errors.password}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">
                {language === "tr" ? "Şifre Tekrar" : "Confirm Password"} *
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="pl-10 pr-10 h-12 rounded-xl"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-sm text-destructive">{errors.confirmPassword}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-14 rounded-2xl bg-accent hover:bg-accent/90 text-accent-foreground text-base font-semibold"
            >
              {loading 
                ? (language === "tr" ? "Güncelleniyor..." : "Updating...")
                : (language === "tr" ? "Şifreyi Güncelle" : "Update Password")
              }
            </Button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
