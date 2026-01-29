import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Lock, User, Building, Phone, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const emailSchema = z.string().email();
const passwordSchema = z.string().min(6, "Password must be at least 6 characters");

const AuthPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { language } = useLanguage();
  const { user, signIn, signUp } = useAuth();
  const { toast } = useToast();

  // Get state from navigation (from BookingChoiceModal)
  const locationState = location.state as { 
    from?: string; 
    rememberMe?: boolean;
    mode?: "login" | "signup";
  } | null;

  const [mode, setMode] = useState<"login" | "signup">(locationState?.mode || "signup");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(locationState?.rememberMe ?? true);
  
  // Form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Get redirect destination from location state
  const redirectTo = locationState?.from || "/";

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate(redirectTo, { replace: true });
    }
  }, [user, navigate, redirectTo]);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    try {
      emailSchema.parse(email);
    } catch {
      newErrors.email = language === "tr" ? "Geçerli bir e-posta girin" : "Enter a valid email";
    }

    try {
      passwordSchema.parse(password);
    } catch {
      newErrors.password = language === "tr" ? "Şifre en az 6 karakter olmalı" : "Password must be at least 6 characters";
    }

    if (mode === "signup" && fullName.trim().length < 2) {
      newErrors.fullName = language === "tr" ? "Ad soyad gerekli" : "Full name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      if (mode === "login") {
        const { error } = await signIn(email, password);
        if (error) {
          const message = error.message.includes("Invalid login credentials")
            ? (language === "tr" ? "E-posta veya şifre hatalı" : "Invalid email or password")
            : error.message;
          toast({
            title: language === "tr" ? "Giriş Hatası" : "Login Error",
            description: message,
            variant: "destructive",
          });
        } else {
          toast({
            title: language === "tr" ? "Hoş Geldiniz!" : "Welcome!",
            description: language === "tr" ? "Başarıyla giriş yaptınız." : "You have successfully logged in.",
          });
          navigate(redirectTo, { replace: true });
        }
      } else {
        const { error } = await signUp(email, password, {
          full_name: fullName,
          company_name: companyName || null,
          phone: phone || null,
        });
        if (error) {
          const message = error.message.includes("already registered")
            ? (language === "tr" ? "Bu e-posta zaten kayıtlı" : "This email is already registered")
            : error.message;
          toast({
            title: language === "tr" ? "Kayıt Hatası" : "Registration Error",
            description: message,
            variant: "destructive",
          });
        } else {
          toast({
            title: language === "tr" ? "Kayıt Başarılı!" : "Registration Successful!",
            description: language === "tr" 
              ? "Hesabınız oluşturuldu. %5 indiriminiz aktif!" 
              : "Your account has been created. 5% discount activated!",
          });
          navigate(redirectTo, { replace: true });
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex-shrink-0 bg-background/80 backdrop-blur-xl border-b border-border/50 z-10">
        <div className="flex items-center gap-4 px-4 py-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-bold">
            {mode === "login" 
              ? (language === "tr" ? "Giriş Yap" : "Log In")
              : (language === "tr" ? "Üye Ol" : "Sign Up")
            }
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
              ? "Türkiye - Avrupa Ekspres Taşımacılık" 
              : "Turkey - Europe Express Shipping"
            }
          </p>
        </motion.div>

        {/* Member Benefits */}
        {mode === "signup" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 rounded-2xl bg-primary/10 border border-primary/20"
          >
            <p className="text-sm font-medium text-primary">
              {language === "tr" 
                ? "🎉 Üyelere Özel: Tüm gönderilerde %5 indirim + Canlı Takip" 
                : "🎉 Members Only: 5% off all shipments + Live Tracking"
              }
            </p>
          </motion.div>
        )}

        {/* Form */}
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {mode === "signup" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="fullName">
                  {language === "tr" ? "Ad Soyad" : "Full Name"} *
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={language === "tr" ? "Adınızı girin" : "Enter your name"}
                    className="pl-10 h-12 rounded-xl"
                  />
                </div>
                {errors.fullName && (
                  <p className="text-sm text-destructive">{errors.fullName}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyName">
                  {language === "tr" ? "Firma Adı (Opsiyonel)" : "Company Name (Optional)"}
                </Label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="companyName"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder={language === "tr" ? "Firma adınız" : "Your company name"}
                    className="pl-10 h-12 rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">
                  {language === "tr" ? "Telefon (Opsiyonel)" : "Phone (Optional)"}
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+90 5XX XXX XX XX"
                    className="pl-10 h-12 rounded-xl"
                  />
                </div>
              </div>
            </>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">
              {language === "tr" ? "E-posta" : "Email"} *
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ornek@email.com"
                className="pl-10 h-12 rounded-xl"
              />
            </div>
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">
              {language === "tr" ? "Şifre" : "Password"} *
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="password"
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

          {/* Remember Me Checkbox */}
          <div className="flex items-center gap-3 py-2">
            <Checkbox
              id="rememberMeAuth"
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(checked === true)}
              className="border-primary/50 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <label 
              htmlFor="rememberMeAuth" 
              className="text-sm text-muted-foreground cursor-pointer select-none"
            >
              {language === "tr" ? "Beni Hatırla (Sürekli aktif kal)" : "Remember Me (Stay logged in)"}
            </label>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-14 rounded-2xl btn-primary-glow text-base font-semibold"
          >
            {loading 
              ? (language === "tr" ? "İşleniyor..." : "Processing...")
              : mode === "login"
                ? (language === "tr" ? "Giriş Yap" : "Log In")
                : (language === "tr" ? "Üye Ol" : "Sign Up")
            }
          </Button>
        </motion.form>

        {/* Toggle Mode */}
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            {mode === "login" 
              ? (language === "tr" ? "Hesabınız yok mu?" : "Don't have an account?")
              : (language === "tr" ? "Zaten üye misiniz?" : "Already have an account?")
            }
            {" "}
            <button
              type="button"
              onClick={() => {
                setMode(mode === "login" ? "signup" : "login");
                setErrors({});
              }}
              className="text-primary font-medium hover:underline"
            >
              {mode === "login" 
                ? (language === "tr" ? "Üye Ol" : "Sign Up")
                : (language === "tr" ? "Giriş Yap" : "Log In")
              }
            </button>
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
