import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HeartPulse } from "lucide-react";
import { motion } from "framer-motion";

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden bg-gradient-to-r from-[#F9FAFC] to-[#E3F2FD]">
      {/* Background Animations */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute w-96 h-96 bg-[#D32F2F] opacity-20 rounded-full top-10 left-10 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        className="absolute w-96 h-96 bg-[#00B4D8] opacity-20 rounded-full bottom-10 right-10 blur-3xl"
      />
      
      {/* Login Card */}
      <Card className="w-full max-w-3xl shadow-2xl p-12 flex flex-row gap-8 items-center bg-white relative z-10">
        <div className="w-1/2 flex flex-col items-center">
          <HeartPulse className="text-[#D32F2F]" size={60} />
          <h2 className="text-4xl font-bold text-[#1B365D] text-center mt-4">Heart Disease Prediction</h2>
        </div>
        <div className="w-1/2">
          <CardContent className="space-y-6">
            <h2 className="text-3xl font-bold text-[#1B365D] text-center">Login</h2>
            <div>
              <Label className="text-[#1B365D]">Email</Label>
              <Input type="email" placeholder="Enter your email" className="mt-2" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <Label className="text-[#1B365D]">Password</Label>
              <Input type="password" placeholder="Enter your password" className="mt-2" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Button onClick={handleLogin} className="w-full bg-[#00B4D8] hover:bg-[#0090B0] text-white font-bold py-3 text-lg">
              Login
            </Button>
            <p className="text-md text-gray-600 text-center">
              Don't have an account? <a href="#" className="text-[#D32F2F] font-bold">Sign up</a>
            </p>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

const HeartDiseasePrediction = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return isLoggedIn ? <div>Heart Disease Prediction App UI</div> : <LoginPage onLogin={() => setIsLoggedIn(true)} />;
};

export default HeartDiseasePrediction;
