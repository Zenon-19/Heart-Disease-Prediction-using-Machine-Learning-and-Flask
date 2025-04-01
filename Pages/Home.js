import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeartPulse, MapPin, News, Clipboard, BarChart } from "lucide-react";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9FAFC] to-[#E3EAF2] flex flex-col relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-[rgba(255,255,255,0.1)]"
        animate={{ backgroundPosition: "100% 100%" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ backgroundImage: "linear-gradient(45deg, #ff9a8b 0%, #ff6a88 50%, #ff8a97 100%)" }}
      />
      
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-white shadow-md rounded-b-lg z-10">
        <h1 className="text-3xl font-bold text-[#1B365D]">Cardio Health Portal</h1>
        <div className="flex gap-4">
          <Button variant="ghost" className="text-[#1B365D]">Home</Button>
          <Button variant="ghost" className="text-[#1B365D]">Dashboard</Button>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="flex flex-1 p-6 gap-6 relative z-10">
        {/* Left Section - News & Hospitals */}
        <div className="w-2/3 space-y-6">
          {/* Latest News */}
          <Card className="bg-white p-6 shadow-lg rounded-lg">
            <CardContent>
              <h3 className="text-xl font-semibold text-[#1B365D] mb-4">Latest Cardiovascular News</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-[#D32F2F] hover:underline">How Regular Exercise Reduces Heart Disease Risk</a>
                  <p className="text-sm text-[#555]">March 2025 - Cardiologists reveal the latest findings...</p>
                </li>
                <li>
                  <a href="#" className="text-[#D32F2F] hover:underline">Signs and Symptoms of Heart Disease</a>
                  <p className="text-sm text-[#555]">March 2025 - Learn how to detect early signs of heart issues...</p>
                </li>
                <li>
                  <a href="#" className="text-[#D32F2F] hover:underline">Dietary Changes for Heart Health</a>
                  <p className="text-sm text-[#555]">February 2025 - Experts share how food affects your heart health...</p>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Nearest Heart Specialist Hospitals */}
          <Card className="bg-white p-6 shadow-lg rounded-lg">
            <CardContent>
              <h3 className="text-xl font-semibold text-[#1B365D] mb-4">Nearest Heart Specialist Hospitals</h3>
              <div className="flex items-center gap-2">
                <MapPin className="text-[#D32F2F]" />
                <span className="font-semibold">Heart Institute - Sarojini Nagar, New Delhi</span>
              </div>
              <div className="text-sm text-[#555]">
                <p>Address: Plot No. 15, Sarojini Nagar, New Delhi, India</p>
                <p>Contact: +91 11 1234 5678</p>
                <Button variant="outline" className="mt-4 text-[#D32F2F] hover:bg-[#F5F5F5]">Get Directions</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Section - Dashboard & Tools */}
        <div className="w-1/3 space-y-6">
          <Card className="bg-white p-6 shadow-lg rounded-lg">
            <CardContent>
              <h3 className="text-xl font-semibold text-[#1B365D] mb-4">Quick Access</h3>
              <Button className="w-full flex items-center gap-2 p-4 text-lg font-semibold text-[#1B365D] bg-[#E3EAF2] hover:bg-[#D4E0F0] rounded-lg">
                <BarChart /> Go to Dashboard
              </Button>
              <Button className="w-full flex items-center gap-2 p-4 text-lg font-semibold text-[#1B365D] hover:bg-[#E3EAF2] rounded-lg mt-4">
                <Clipboard /> Heart Risk Test
              </Button>
            </CardContent>
          </Card>

          {/* Tools Section */}
          <Card className="bg-white p-6 shadow-lg rounded-lg">
            <CardContent>
              <h3 className="text-xl font-semibold text-[#1B365D] mb-4">Heart Health Tools</h3>
              <ul className="space-y-4">
                <li>
                  <Button variant="outline" className="w-full p-4 text-[#1B365D] hover:bg-[#E3EAF2]">
                    <HeartPulse className="mr-2" /> Heart Risk Calculator
                  </Button>
                </li>
                <li>
                  <Button variant="outline" className="w-full p-4 text-[#1B365D] hover:bg-[#E3EAF2]">
                    <BarChart className="mr-2" /> Blood Pressure Tracker
                  </Button>
                </li>
                <li>
                  <Button variant="outline" className="w-full p-4 text-[#1B365D] hover:bg-[#E3EAF2]">
                    <Upload className="mr-2" /> Upload Health Reports
                  </Button>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
