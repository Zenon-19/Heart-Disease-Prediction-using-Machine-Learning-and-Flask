import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Select, SelectItem, SelectTrigger, SelectContent } from "@/components/ui/select";
import { AlertCircle, HeartPulse, Upload } from "lucide-react";

const HeartDiseasePrediction = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFC] flex flex-col items-center p-6">
      {/* Header */}
      <header className="w-full max-w-3xl text-center py-6">
        <h1 className="text-3xl font-bold text-[#1B365D] flex items-center justify-center gap-2">
          <HeartPulse className="text-[#D32F2F]" size={32} /> Heart Disease Prediction
        </h1>
      </header>

      {/* Input Form */}
      <Card className="w-full max-w-3xl shadow-md p-6">
        <CardContent className="space-y-4">
          <div>
            <Label className="text-[#1B365D]">Age</Label>
            <Input type="number" placeholder="Enter age" className="mt-1" />
          </div>
          <div>
            <Label className="text-[#1B365D]">Blood Pressure</Label>
            <Input type="number" placeholder="Enter BP level" className="mt-1" />
          </div>
          <div>
            <Label className="text-[#1B365D]">Chest Pain Level</Label>
            <Select>
              <SelectTrigger className="mt-1">Select Level</SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5].map((level) => (
                  <SelectItem key={level} value={level.toString()}>
                    Level {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-[#1B365D]">Vessels Fluoroscopy</Label>
            <Input type="number" placeholder="Enter number of vessels" className="mt-1" />
          </div>
          <div>
            <Label className="text-[#1B365D]">Heart Rate</Label>
            <Input type="number" placeholder="Enter heart rate" className="mt-1" />
          </div>
          <div>
            <Label className="text-[#1B365D]">Thallium Stress Test</Label>
            <Select>
              <SelectTrigger className="mt-1">Select Test Type</SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Normal</SelectItem>
                <SelectItem value="2">Fixed Defect</SelectItem>
                <SelectItem value="3">Reversible Defect</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-[#1B365D]">ST Depression</Label>
            <Input type="number" placeholder="Enter ST depression level" className="mt-1" />
          </div>
          <Button className="w-full bg-[#00B4D8] hover:bg-[#0090B0] text-white font-bold">
            Predict Risk
          </Button>
        </CardContent>
      </Card>

      {/* Prediction Result */}
      <Card className="w-full max-w-3xl mt-6 shadow-md p-6 border-l-4 border-[#D32F2F]">
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2 text-[#D32F2F]">
            <AlertCircle size={24} />
            <p className="text-lg font-semibold">High Risk Detected</p>
          </div>
          <Progress value={85} className="bg-[#F9FAFC] h-4 rounded-lg" />
          <p className="text-gray-600">Based on the data, there is an <span className="font-semibold text-[#D32F2F]">85%</span> chance of heart disease. Consult a doctor for further evaluation.</p>
          <Button className="bg-[#2E7D32] hover:bg-[#256528] text-white font-bold w-full">
            Get Health Recommendations
          </Button>
        </CardContent>
      </Card>

      {/* Report Upload Section */}
      <Card className="w-full max-w-3xl mt-6 shadow-md p-6">
        <CardContent className="space-y-4">
          <h2 className="text-xl font-semibold text-[#1B365D]">Upload Medical Reports</h2>
          <p className="text-gray-600">Upload your ECG, blood test, or other medical reports for advanced analysis.</p>
          <Input type="file" className="mt-1" />
          <Button className="w-full bg-[#00B4D8] hover:bg-[#0090B0] text-white font-bold flex items-center gap-2">
            <Upload size={20} /> Upload Report
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default HeartDiseasePrediction;
