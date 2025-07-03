import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Calendar, User, ExternalLink, Clock, Share2 } from "lucide-react";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

  const newsArticles = [
    {
      id: 1,
      title: "Protecting Wheat from climate change",
      summary: "Scientists develop resistant wheat varieties to combat changing weather patterns and ensure food security.",
      content: `Climate change poses significant challenges to wheat production worldwide. Rising temperatures, unpredictable rainfall patterns, and extreme weather events are threatening one of the world's most important food crops.

Recent research by agricultural scientists has led to the development of new wheat varieties that are more resistant to climate-related stresses. These varieties can withstand higher temperatures, require less water, and are more resistant to diseases that thrive in changing climatic conditions.

Key developments include:

• Heat-tolerant varieties that can maintain yield even at temperatures 2-3°C above normal
• Drought-resistant strains that require 30% less water than traditional varieties
• Disease-resistant cultivars that can fight off fungal infections common in humid conditions
• Early-maturing varieties that can escape late-season heat stress

Farmers are encouraged to adopt these new varieties and implement climate-smart agricultural practices such as:

- Conservation tillage to retain soil moisture
- Crop rotation to maintain soil health
- Precision irrigation systems
- Weather-based decision support systems

The adoption of these technologies and practices can help maintain wheat productivity while adapting to our changing climate.`,
      author: "Dr. Sarah Johnson",
      source: "KrishiAI News",
      date: "4/20/2025",
      category: "Climate Change",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      title: "Sustainable Rice farming practices",
      summary: "Learn how organic methods can improve your rice cultivation while protecting the environment and increasing profits.",
      content: `Sustainable rice farming is becoming increasingly important as farmers seek to balance productivity with environmental stewardship. Organic and sustainable practices not only protect the environment but can also lead to higher profits through premium pricing and reduced input costs.

Key sustainable practices for rice farming:

**Water Management:**
• Alternate Wetting and Drying (AWD) technique reduces water usage by 30%
• System of Rice Intensification (SRI) improves yield with less water
• Proper drainage systems prevent waterlogging

**Soil Health:**
• Use of organic compost and green manures
• Crop rotation with legumes to fix nitrogen
• Minimal tillage to preserve soil structure
• Bio-fertilizers to enhance nutrient availability

**Pest Management:**
• Integrated Pest Management (IPM) strategies
• Use of beneficial insects and natural predators
• Organic pesticides from neem and other plants
• Resistant varieties to reduce pesticide dependency

**Economic Benefits:**
• Premium prices for organic rice (20-30% higher)
• Reduced input costs for synthetic fertilizers and pesticides
• Government subsidies for organic farming
• Export opportunities for certified organic produce

**Environmental Impact:**
• Reduced greenhouse gas emissions
• Improved biodiversity in rice fields
• Better water quality protection
• Enhanced soil carbon sequestration

Farmers transitioning to sustainable practices should start gradually, focusing on one or two techniques initially and expanding as they gain experience and confidence.`,
      author: "Prof. Rajesh Patel",
      source: "KrishiAI News",
      date: "4/20/2025",
      category: "Sustainable Farming",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      title: "Digital Agriculture Revolution in India",
      summary: "How technology is transforming farming practices across rural India with AI, IoT, and mobile applications.",
      content: `India's agricultural sector is experiencing a digital transformation that is revolutionizing how farmers approach cultivation, marketing, and farm management. This digital revolution is making farming more efficient, profitable, and sustainable.

**Key Technologies Driving Change:**

**Artificial Intelligence (AI):**
• Crop disease identification through image recognition
• Weather prediction and advisory services
• Yield prediction and optimization
• Personalized farming recommendations

**Internet of Things (IoT):**
• Soil moisture sensors for precision irrigation
• Weather monitoring stations
• Livestock tracking and health monitoring
• Smart greenhouse automation

**Mobile Applications:**
• Market price information and trading platforms
• Government scheme applications and tracking
• Expert advisory services
• Financial services and credit access

**Satellite Technology:**
• Crop monitoring and health assessment
• Precision agriculture mapping
• Disaster assessment and insurance claims
• Land records and documentation

**Success Stories:**

1. **Maharashtra Farmer Increases Yield by 40%:** Using soil sensors and AI recommendations, a cotton farmer optimized irrigation and fertilizer application.

2. **Punjab Wheat Farmers Save 25% on Inputs:** Precision agriculture techniques helped reduce fertilizer and pesticide usage while maintaining yields.

3. **Karnataka Vegetable Growers Access Better Markets:** Mobile apps connected farmers directly to urban buyers, eliminating middlemen.

**Challenges and Solutions:**
• Digital literacy programs for farmers
• Affordable technology solutions
• Reliable internet connectivity in rural areas
• Local language support for applications

The government's Digital India initiative and various agri-tech startups are working together to make these technologies accessible to smallholder farmers across the country.`,
      author: "Tech Correspondent",
      source: "KrishiAI News",
      date: "4/19/2025",
      category: "Technology",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      title: "Government Announces New Farmer Support Package",
      summary: "₹50,000 crore package includes subsidies, insurance coverage, and direct benefit transfers for small farmers.",
      content: `The Government of India has announced a comprehensive ₹50,000 crore support package for farmers, focusing on small and marginal farmers who constitute 86% of the farming community. This package aims to provide immediate relief and long-term support for agricultural development.

**Key Components of the Package:**

**Direct Benefit Transfers:**
• Enhanced PM-KISAN payments: ₹8,000 per year (increased from ₹6,000)
• Special support for women farmers: Additional ₹2,000 per year
• Young farmer incentive: ₹5,000 for farmers under 35 years

**Subsidies and Support:**
• 50% subsidy on farm equipment and machinery
• Free soil health cards and testing
• Subsidized seeds and fertilizers
• Drip irrigation system support (75% subsidy)

**Insurance and Risk Management:**
• Enhanced crop insurance coverage
• Livestock insurance at nominal premiums
• Weather-based insurance for horticulture crops
• Quick settlement of insurance claims (within 30 days)

**Infrastructure Development:**
• Rural road connectivity improvement
• Cold storage and warehouse facilities
• Market yard modernization
• Processing unit establishment support

**Credit and Financial Support:**
• Interest-free loans up to ₹3 lakh for small farmers
• Simplified KCC (Kisan Credit Card) procedures
• Digital payment incentives
• Financial literacy programs

**Implementation Timeline:**
• Phase 1 (Immediate): Direct transfers and insurance enrollment
• Phase 2 (3 months): Infrastructure projects initiation
• Phase 3 (6 months): Technology adoption programs
• Phase 4 (1 year): Impact assessment and course correction

**How to Apply:**
Farmers can apply through:
• Common Service Centers (CSCs)
• Bank branches
• Online portal: farmer.gov.in
• Mobile app: PM-Kisan Mobile App

The package is expected to benefit over 12 crore farmers across the country and boost agricultural GDP by 2-3% in the coming fiscal year.`,
      author: "Policy Reporter",
      source: "KrishiAI News",
      date: "4/18/2025",
      category: "Government Policy",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 5,
      title: "Organic Farming Market Reaches New Heights",
      summary: "India's organic food market grows 25% annually, creating new opportunities for farmers to increase income.",
      content: `India's organic farming sector is experiencing unprecedented growth, with the market expanding at 25% annually and reaching a value of ₹75,000 crores. This growth is driven by increasing health consciousness among consumers and growing export demand.

**Market Growth Drivers:**

**Consumer Demand:**
• Health awareness leading to preference for chemical-free food
• Premium pricing willingness (20-40% higher than conventional)
• Urban population driving demand growth
• E-commerce platforms expanding organic food access

**Export Opportunities:**
• India ranks 9th globally in organic food exports
• Key export markets: USA, Europe, Canada, Australia
• Organic spices, tea, and rice in high demand
• Government support for organic export promotion

**Farmer Benefits:**
• Higher profit margins (30-50% more than conventional)
• Reduced input costs after transition period
• Premium market access through certification
• Government subsidies and support schemes

**Success Stories:**

**Sikkim - 100% Organic State:**
• Complete transition to organic farming
• 25% increase in farmer incomes
• Boost in tourism and brand value
• Model for other states

**Maharashtra Organic Clusters:**
• Farmer Producer Organizations (FPOs) success
• Direct market linkages
• Collective certification reducing costs
• Technology adoption for organic practices

**Challenges and Solutions:**

**Transition Period:**
• 3-year conversion period with yield reduction
• Government support during transition
• Organic input availability improvement
• Training and capacity building programs

**Certification Costs:**
• Group certification to reduce individual costs
• Participatory Guarantee System (PGS) promotion
• Digital certification processes
• Government subsidy for certification

**Market Access:**
• FPO formation for collective marketing
• Online platform development
• Direct farmer-consumer connections
• Organic retail chain partnerships

**Future Outlook:**
The organic farming sector is projected to reach ₹2,00,000 crores by 2030, with government targets of:
• 2 million hectares under organic cultivation
• 1 million certified organic farmers
• ₹25,000 crore organic exports annually

Farmers interested in organic transition should start with small plots, get proper training, and connect with local organic farmer groups for support and market access.`,
      author: "Market Analyst",
      source: "KrishiAI News",
      date: "4/17/2025",
      category: "Market Trends",
      readTime: "9 min read",
      image: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const recentActivity = [
    { id: 1, action: "Listed 50kg Rice", time: "2 hours ago", status: "active" },
    { id: 2, action: "Applied for PM-KISAN", time: "1 day ago", status: "pending" },
    { id: 3, action: "Booked Transportation", time: "2 days ago", status: "completed" },
  ];

  const stats = [
    { label: "Active Listings", value: "12", change: "+2" },
    { label: "Total Sales", value: "₹45,000", change: "+₹5,000" },
    { label: "Applications", value: "3", change: "0" },
  ];

  const filteredArticles = newsArticles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getCategoryColor = (category: string) => {
    const colors = {
      "Climate Change": "bg-red-100 text-red-700 border-red-200",
      "Sustainable Farming": "bg-green-100 text-green-700 border-green-200",
      "Technology": "bg-blue-100 text-blue-700 border-blue-200",
      "Government Policy": "bg-purple-100 text-purple-700 border-purple-200",
      "Market Trends": "bg-orange-100 text-orange-700 border-orange-200"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-700 border-gray-200";
  };

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Article View */}
        <div className="bg-white">
          <div className="p-4 border-b">
            <Button 
              onClick={() => setSelectedArticle(null)}
              variant="ghost" 
              className="flex items-center gap-2 text-gray-600"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to News
            </Button>
          </div>
          
          <div className="p-6 max-w-4xl mx-auto">
            <article className="space-y-6">
              {/* Article Header */}
              <div className="space-y-4">
                <div className="w-full h-48 md:h-64 rounded-lg overflow-hidden bg-gray-100">
                  <img 
                    src={selectedArticle.image} 
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="space-y-3">
                  <Badge 
                    variant="outline" 
                    className={`w-fit ${getCategoryColor(selectedArticle.category)}`}
                  >
                    {selectedArticle.category}
                  </Badge>
                  
                  <h1 className="text-2xl md:text-3xl font-bold leading-tight text-gray-900">
                    {selectedArticle.title}
                  </h1>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {selectedArticle.summary}
                  </p>
                  
                  {/* Article Meta */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 border-b pb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{selectedArticle.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{selectedArticle.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{selectedArticle.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ExternalLink className="h-4 w-4" />
                      <span className="text-green-600 font-medium">{selectedArticle.source}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div className="whitespace-pre-line text-gray-700 leading-relaxed text-base">
                  {selectedArticle.content}
                </div>
              </div>
              
              {/* Article Footer */}
              <div className="border-t pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    Published by <span className="text-green-600 font-medium">{selectedArticle.source}</span>
                  </div>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Share2 className="h-4 w-4" />
                    Share Article
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-r from-green-600 to-green-800">
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
          <h1 className="text-3xl font-bold mb-2 text-center">
            Welcome to AgroConnect
          </h1>
          <p className="text-lg text-center opacity-90">
            Your complete agricultural marketplace
          </p>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Search Bar */}
        <div className="w-full">
          <Input
            placeholder="Search news articles, topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-12 text-lg bg-white border-gray-200"
          />
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center bg-white border-gray-200">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
                <Badge variant="secondary" className="mt-1">
                  {stat.change}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Latest News Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 px-2">
            <h2 className="text-xl font-bold text-gray-900">📰 Latest News</h2>
          </div>
          
          <div className="space-y-4">
            {filteredArticles.map((article) => (
              <Card 
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="bg-white border-gray-200 hover:shadow-lg transition-all cursor-pointer hover:border-green-300 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="flex">
                    {/* Image */}
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-100 flex-shrink-0">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 p-4 space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-gray-900 leading-tight hover:text-green-600 transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                        {article.summary}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <span className="text-green-600 font-medium">{article.source}</span>
                          <span>{article.date}</span>
                        </div>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${getCategoryColor(article.category)}`}
                        >
                          {article.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <Card className="bg-white border-gray-200">
          <CardHeader>
            <CardTitle className="text-gray-900">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
                <Badge 
                  variant={
                    activity.status === "completed" ? "default" :
                    activity.status === "pending" ? "secondary" : "outline"
                  }
                >
                  {activity.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Button className="h-14 text-lg bg-green-600 hover:bg-green-700">
            🌱 List Product
          </Button>
          <Button variant="outline" className="h-14 text-lg border-gray-300 text-gray-700 hover:bg-gray-50">
            📞 Get Support
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;