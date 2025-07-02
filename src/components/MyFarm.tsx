import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Leaf, Droplets, Zap, TrendingUp, MapPin, Users, Upload, Bell, Map } from "lucide-react";

const MyFarm = () => {
  const [selectedFeature, setSelectedFeature] = useState("kisan-circle");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [reportForm, setReportForm] = useState({
    cropType: "",
    problemDescription: "",
    location: ""
  });

  const coreFeatures = [
    {
      id: "kisan-circle",
      title: "Kisan Circle",
      icon: Users,
      description: "Community-driven issue reporting and live mapping system",
      color: "bg-orange-100 text-orange-700",
      status: "Firebase & Maps Active",
      badge: "Community Network"
    },
    {
      id: "crop-suggestions",
      title: "Crop Suggestions",
      icon: Leaf,
      description: "Data-driven crop recommendations based on soil and climate",
      color: "bg-blue-100 text-blue-700",
      status: "Tabular Model Active",
      badge: "ML Recommendations"
    },
    {
      id: "fertilizer-recommendation",
      title: "Fertilizer Recommendation",
      icon: Zap,
      description: "Optimize fertilizer usage based on soil analysis",
      color: "bg-yellow-100 text-yellow-700",
      status: "ICAR Data Integrated",
      badge: "Soil Analysis"
    },
    {
      id: "irrigation-planning",
      title: "Irrigation Planning",
      icon: Droplets,
      description: "Smart water management based on weather and soil data",
      color: "bg-cyan-100 text-cyan-700",
      status: "Weather API Connected",
      badge: "Water Management"
    },
    {
      id: "forecasting",
      title: "Market Price Forecasting",
      icon: TrendingUp,
      description: "Predict crop prices using real-time market data",
      color: "bg-purple-100 text-purple-700",
      status: "Forecast Model Active",
      badge: "Price Prediction"
    }
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFormChange = (field: string, value: string) => {
    setReportForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const renderFeatureContent = () => {
    switch (selectedFeature) {
      case "kisan-circle":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="h-6 w-6 text-orange-600" />
                  <h3 className="text-xl font-semibold">Report Issue</h3>
                </div>
                <p className="text-muted-foreground">Report crop issues to the farming community</p>
              </div>
              
              <div className="space-y-4 border rounded-lg p-4">
                <div>
                  <Label htmlFor="crop-type">Type of crop grown</Label>
                  <Input 
                    id="crop-type" 
                    placeholder="e.g., Rice, Wheat, Cotton"
                    value={reportForm.cropType}
                    onChange={(e) => handleFormChange('cropType', e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="problem-desc">Describe problem</Label>
                  <Textarea 
                    id="problem-desc" 
                    placeholder="Describe the issue you're facing..."
                    value={reportForm.problemDescription}
                    onChange={(e) => handleFormChange('problemDescription', e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="photo-upload">Upload photo of issue</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    {uploadedImage ? (
                      <div className="space-y-2">
                        <img src={uploadedImage} alt="Issue photo" className="max-w-full h-32 object-cover mx-auto rounded" />
                        <p className="text-sm text-green-600">Photo uploaded successfully</p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Upload className="h-8 w-8 mx-auto text-gray-400" />
                        <Label htmlFor="photo-upload" className="cursor-pointer block">
                          <Button variant="outline" className="w-full" asChild>
                            <span>Upload Photo</span>
                          </Button>
                        </Label>
                        <Input
                          id="photo-upload"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleImageUpload}
                        />
                      </div>
                    )}
                  </div>
                </div>
                
                <Button className="w-full">Submit Report</Button>
              </div>
            </div>
            
            <div className="space-y-4">
              {/* Live Map Section */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Map className="h-5 w-5 text-blue-500" />
                    Live Map
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 border-2 border-dashed border-blue-200 rounded-lg p-6 text-center">
                    <MapPin className="h-12 w-12 mx-auto text-blue-400 mb-2" />
                    <p className="text-sm text-blue-600">Interactive map showing nearby issues</p>
                    <p className="text-xs text-blue-500 mt-1">GPS Permission Required</p>
                  </div>
                  <Button variant="outline" className="w-full mt-3">
                    <MapPin className="h-4 w-4 mr-2" />
                    Enable Location Access
                  </Button>
                </CardContent>
              </Card>
              
              {/* Community Alerts Section */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Bell className="h-5 w-5 text-red-500" />
                    Community Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="bg-red-50 p-3 rounded border-l-4 border-red-400">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-red-800">Pest Alert - 2km away</p>
                          <p className="text-sm text-red-600">Cotton bollworm detected</p>
                        </div>
                        <Badge variant="destructive" className="text-xs">High</Badge>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-yellow-800">Weather Warning - 5km</p>
                          <p className="text-sm text-yellow-600">Heavy rainfall expected</p>
                        </div>
                        <Badge variant="outline" className="text-xs">Medium</Badge>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-green-800">Success Story - 1km</p>
                          <p className="text-sm text-green-600">Organic method worked</p>
                        </div>
                        <Badge variant="outline" className="text-xs">Info</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full mt-3">
                    <Bell className="h-4 w-4 mr-2" />
                    Enable Push Notifications
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        );
        
      case "crop-suggestions":
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Crop Suggestions</h3>
              <p className="text-muted-foreground">Get personalized crop recommendations</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="soil-type">Soil Type</Label>
                  <Input id="soil-type" placeholder="e.g., Loamy, Clay, Sandy" />
                </div>
                <div>
                  <Label htmlFor="climate">Climate Zone</Label>
                  <Input id="climate" placeholder="e.g., Tropical, Temperate" />
                </div>
                <div>
                  <Label htmlFor="season">Season</Label>
                  <Input id="season" placeholder="e.g., Kharif, Rabi" />
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-3">Recommended Crops</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-green-700">Rice</span>
                    <Badge variant="outline">High Yield</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-700">Wheat</span>
                    <Badge variant="outline">Market Demand</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-700">Sugarcane</span>
                    <Badge variant="outline">Climate Match</Badge>
                  </div>
                </div>
              </div>
            </div>
            
            <Button className="w-full">Get Detailed Analysis</Button>
          </div>
        );
        
      case "fertilizer-recommendation":
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Fertilizer Recommendation</h3>
              <p className="text-muted-foreground">Optimize your fertilizer usage based on soil analysis</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Nitrogen (N)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">45 kg/ha</div>
                  <p className="text-sm text-muted-foreground">Recommended dose</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Phosphorus (P)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">25 kg/ha</div>
                  <p className="text-sm text-muted-foreground">Recommended dose</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Potassium (K)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">30 kg/ha</div>
                  <p className="text-sm text-muted-foreground">Recommended dose</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Application Schedule</h4>
              <ul className="space-y-1 text-yellow-700">
                <li>• Week 1: Apply 50% Nitrogen + Full Phosphorus</li>
                <li>• Week 4: Apply remaining Nitrogen</li>
                <li>• Week 6: Apply Potassium as needed</li>
              </ul>
            </div>
          </div>
        );
        
      case "irrigation-planning":
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Irrigation Planning</h3>
              <p className="text-muted-foreground">Smart water management for optimal crop growth</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Droplets className="h-5 w-5 text-blue-500" />
                      Water Requirements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Daily requirement</span>
                        <span className="font-semibold">25mm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Weekly total</span>
                        <span className="font-semibold">175mm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Next irrigation</span>
                        <span className="font-semibold text-blue-600">Tomorrow</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Weather Forecast</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Today</span>
                        <span>☀️ 28°C - Clear</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tomorrow</span>
                        <span>🌧️ 24°C - Rain (15mm)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Day 3</span>
                        <span>⛅ 26°C - Cloudy</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-cyan-50 p-4 rounded-lg">
                <h4 className="font-semibold text-cyan-800 mb-3">Irrigation Schedule</h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border-l-4 border-green-400">
                    <div className="font-medium">Today - Morning</div>
                    <div className="text-sm text-gray-600">Skip irrigation - sufficient soil moisture</div>
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                    <div className="font-medium">Tomorrow - Evening</div>
                    <div className="text-sm text-gray-600">Light irrigation after expected rain</div>
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-orange-400">
                    <div className="font-medium">Day 3 - Morning</div>
                    <div className="text-sm text-gray-600">Normal irrigation - 20mm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case "forecasting":
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Market Price Forecasting</h3>
              <p className="text-muted-foreground">Predict market prices to optimize selling decisions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold">Current Market Prices</h4>
                <div className="space-y-3">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">Rice</div>
                          <div className="text-sm text-gray-600">Per quintal</div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-green-600">₹2,150</div>
                          <div className="text-sm text-green-600">↑ +5.2%</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">Wheat</div>
                          <div className="text-sm text-gray-600">Per quintal</div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-red-600">₹1,980</div>
                          <div className="text-sm text-red-600">↓ -2.1%</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">Sugarcane</div>
                          <div className="text-sm text-gray-600">Per quintal</div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-blue-600">₹320</div>
                          <div className="text-sm text-blue-600">↑ +1.8%</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-3">30-Day Forecast</h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Rice</span>
                      <div className="text-right">
                        <div className="text-green-600 font-semibold">₹2,280</div>
                        <div className="text-xs text-green-600">Expected +6% rise</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-3 rounded">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Wheat</span>
                      <div className="text-right">
                        <div className="text-orange-600 font-semibold">₹2,050</div>
                        <div className="text-xs text-orange-600">Expected +3.5% rise</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-3 rounded">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Sugarcane</span>
                      <div className="text-right">
                        <div className="text-blue-600 font-semibold">₹335</div>
                        <div className="text-xs text-blue-600">Expected +4.7% rise</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-purple-100 rounded">
                  <div className="text-sm text-purple-800">
                    <strong>Recommendation:</strong> Hold rice inventory for 2-3 weeks for better prices. Consider selling wheat now as forecast shows minimal growth.
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 pb-20">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Agricultural Dashboard</h1>
          <p className="text-muted-foreground">
            AI-powered tools for modern farming
          </p>
        </div>

        {/* Core Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {coreFeatures.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={feature.id} 
                className={`cursor-pointer transition-all hover:shadow-lg border-2 ${
                  selectedFeature === feature.id 
                    ? 'border-primary shadow-md' 
                    : 'border-gray-200 hover:border-primary/50'
                }`}
                onClick={() => setSelectedFeature(feature.id)}
              >
                <CardHeader className="pb-3">
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className={`p-3 rounded-full ${feature.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-sm text-center">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-muted-foreground">
                        {feature.status}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Feature Content */}
        <Card className="min-h-[600px]">
          <CardContent className="p-6">
            {renderFeatureContent()}
          </CardContent>
        </Card>

        {/* Data Sources Footer */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold mb-2 text-center">Powered by Trusted Data Sources</h4>
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground">
            <span>• Firebase Database</span>
            <span>• Google Maps API</span>
            <span>• ICAR Agricultural Data</span>
            <span>• Government Market Data</span>
            <span>• Weather APIs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFarm;
