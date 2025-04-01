import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeartPulse, BarChart, Upload, Settings, User } from "lucide-react";
import { LineChart, PieChart } from "recharts";
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9FAFC] to-[#E3EAF2] flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-white shadow-md rounded-b-lg">
        <h1 className="text-3xl font-bold text-[#1B365D]">Heart Disease Dashboard</h1>
        <nav className="flex gap-6">
          <Button variant="ghost" className="text-[#1B365D]">Home</Button>
          <Button variant="ghost" className="text-[#1B365D]">Dashboard</Button>
          <Button variant="ghost" className="text-[#1B365D]">Profile</Button>
          <Button variant="ghost" className="text-[#1B365D]">Test</Button>
        </nav>
        <div className="flex gap-4">
          <Button variant="ghost"><User className="text-[#1B365D]" /></Button>
          <Button variant="ghost"><Settings className="text-[#1B365D]" /></Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 p-6 gap-6">
        {/* Sidebar */}
        <aside className="w-72 bg-white p-6 shadow-lg rounded-lg space-y-6">
          <Button className="w-full flex items-center gap-2 p-4 text-lg font-semibold text-[#1B365D] bg-[#E3EAF2] hover:bg-[#D4E0F0] rounded-lg"><HeartPulse /> Dashboard</Button>
          <Button className="w-full flex items-center gap-2 p-4 text-lg font-semibold text-[#1B365D] hover:bg-[#E3EAF2] rounded-lg"><BarChart /> Predictions</Button>
          <Button className="w-full flex items-center gap-2 p-4 text-lg font-semibold text-[#1B365D] hover:bg-[#E3EAF2] rounded-lg"><Upload /> Upload Reports</Button>
        </aside>

        {/* Main Section */}
        <main className="flex-1 grid grid-cols-3 gap-6">
          {/* Key Stats */}
          <Card className="col-span-1 bg-white p-6 shadow-lg rounded-lg">
            <CardContent className="text-center">
              <h3 className="text-xl font-semibold text-[#1B365D]">Heart Disease Risk</h3>
              <p className="text-4xl text-[#D32F2F] font-bold">72%</p>
            </CardContent>
          </Card>
          <Card className="col-span-1 bg-white p-6 shadow-lg rounded-lg">
            <CardContent className="text-center">
              <h3 className="text-xl font-semibold text-[#1B365D]">Average Heart Rate</h3>
              <p className="text-4xl font-bold text-[#00B4D8]">82 BPM</p>
            </CardContent>
          </Card>
          <Card className="col-span-1 bg-white p-6 shadow-lg rounded-lg">
            <CardContent className="text-center">
              <h3 className="text-xl font-semibold text-[#1B365D]">Blood Pressure</h3>
              <p className="text-4xl font-bold text-[#FF9800]">130/85 mmHg</p>
            </CardContent>
          </Card>

          {/* Charts Section */}
          <Card className="col-span-2 bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-[#1B365D] mb-4">Heart Rate & BP Trends</h3>
            <LineChart width={400} height={200} data={[]} />
          </Card>
          <Card className="col-span-1 bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-[#1B365D] mb-4">Risk Distribution</h3>
            <PieChart width={200} height={200} data={[]} />
          </Card>

          {/* Upload Reports Section */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="col-span-3 bg-white p-8 shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-semibold text-[#1B365D]">Upload Medical Reports</h3>
            <Button className="mt-4 bg-[#D32F2F] text-white hover:bg-[#B71C1C] p-4 rounded-lg"><Upload className="mr-2" /> Upload PDF/Image</Button>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
