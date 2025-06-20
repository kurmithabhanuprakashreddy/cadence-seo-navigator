
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { Search, TrendingUp, Youtube, Target, BarChart3, Settings, Plus, Eye, Click, DollarSign, Users } from 'lucide-react';

const Index = () => {
  const [selectedKeyword, setSelectedKeyword] = useState('');

  // Sample data for demonstrations
  const seoData = [
    { month: 'Jan', organic: 12500, paid: 8500 },
    { month: 'Feb', organic: 14200, paid: 9200 },
    { month: 'Mar', organic: 16800, paid: 10100 },
    { month: 'Apr', organic: 18500, paid: 11300 },
    { month: 'May', organic: 21200, paid: 12800 },
    { month: 'Jun', organic: 23400, paid: 14200 }
  ];

  const keywordData = [
    { keyword: 'digital marketing', volume: 49500, difficulty: 85, rank: 3, trend: '+12%' },
    { keyword: 'SEO optimization', volume: 22100, difficulty: 72, rank: 7, trend: '+8%' },
    { keyword: 'paid advertising', volume: 18200, difficulty: 68, rank: 5, trend: '+15%' },
    { keyword: 'content marketing', volume: 33600, difficulty: 79, rank: 2, trend: '+22%' },
    { keyword: 'social media marketing', volume: 27400, difficulty: 71, rank: 9, trend: '+5%' }
  ];

  const campaignData = [
    { name: 'Search Ads', spent: 2340, clicks: 1250, conversions: 89, ctr: 3.2 },
    { name: 'Display Ads', spent: 1890, clicks: 890, conversions: 45, ctr: 2.1 },
    { name: 'Video Ads', spent: 3200, clicks: 1580, conversions: 156, ctr: 4.8 },
    { name: 'Shopping Ads', spent: 2750, clicks: 1340, conversions: 187, ctr: 5.2 }
  ];

  const pieData = [
    { name: 'Search', value: 45, color: '#3b82f6' },
    { name: 'Social', value: 30, color: '#10b981' },
    { name: 'Direct', value: 15, color: '#f59e0b' },
    { name: 'Email', value: 10, color: '#ef4444' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Digital Marketing Dashboard</h1>
          <p className="text-gray-600 text-lg">SEO & Paid Media Analytics Hub</p>
        </div>

        {/* Key Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Organic Traffic</p>
                  <p className="text-3xl font-bold text-green-600">23.4K</p>
                  <p className="text-sm text-green-500 flex items-center mt-1">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +18% vs last month
                  </p>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <Search className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Paid Clicks</p>
                  <p className="text-3xl font-bold text-blue-600">14.2K</p>
                  <p className="text-sm text-blue-500 flex items-center mt-1">
                    <Click className="w-4 h-4 mr-1" />
                    +11% vs last month
                  </p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Ad Spend</p>
                  <p className="text-3xl font-bold text-purple-600">$10.2K</p>
                  <p className="text-sm text-purple-500 flex items-center mt-1">
                    <DollarSign className="w-4 h-4 mr-1" />
                    ROI: 284%
                  </p>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Conversions</p>
                  <p className="text-3xl font-bold text-orange-600">477</p>
                  <p className="text-sm text-orange-500 flex items-center mt-1">
                    <Users className="w-4 h-4 mr-1" />
                    +25% vs last month
                  </p>
                </div>
                <div className="bg-orange-100 p-3 rounded-full">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white shadow-sm">
            <TabsTrigger value="overview" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="keywords" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              Keywords
            </TabsTrigger>
            <TabsTrigger value="youtube" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              YouTube
            </TabsTrigger>
            <TabsTrigger value="serp" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              SERP Tracking
            </TabsTrigger>
            <TabsTrigger value="campaigns" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              Campaigns
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                    Traffic Growth Trends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={seoData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="organic" stroke="#10b981" strokeWidth={3} />
                      <Line type="monotone" dataKey="paid" stroke="#3b82f6" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="w-5 h-5 mr-2 text-purple-600" />
                    Traffic Sources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Keywords Tab */}
          <TabsContent value="keywords" className="space-y-6">
            <Card className="bg-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Search className="w-5 h-5 mr-2 text-green-600" />
                    Keyword Research & Analysis
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Keyword
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <Input 
                    placeholder="Search for keywords..."
                    value={selectedKeyword}
                    onChange={(e) => setSelectedKeyword(e.target.value)}
                    className="max-w-md"
                  />
                </div>
                <div className="space-y-4">
                  {keywordData.map((keyword, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{keyword.keyword}</h3>
                          <div className="flex items-center space-x-4 mt-2">
                            <Badge variant="secondary">Vol: {keyword.volume.toLocaleString()}/mo</Badge>
                            <Badge variant={keyword.difficulty > 75 ? "destructive" : keyword.difficulty > 50 ? "default" : "secondary"}>
                              Difficulty: {keyword.difficulty}
                            </Badge>
                            <Badge variant="outline">Rank: #{keyword.rank}</Badge>
                            <span className="text-green-600 font-medium">{keyword.trend}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-1" />
                            Analyze
                          </Button>
                          <Button variant="outline" size="sm">
                            <Settings className="w-4 h-4 mr-1" />
                            Optimize
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* YouTube Tab */}
          <TabsContent value="youtube" className="space-y-6">
            <Card className="bg-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Youtube className="w-5 h-5 mr-2 text-red-600" />
                  YouTube Optimization Hub
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">Video Optimization</h3>
                    <div className="space-y-3">
                      <Input placeholder="Video Title" />
                      <textarea 
                        className="w-full p-3 border border-gray-300 rounded-md"
                        rows={4}
                        placeholder="Video Description..."
                      />
                      <Input placeholder="Tags (comma separated)" />
                    </div>
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      <Youtube className="w-4 h-4 mr-2" />
                      Optimize Video
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">Performance Metrics</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span>SEO Score</span>
                        <span className="font-bold text-green-600">87%</span>
                      </div>
                      <Progress value={87} className="h-2" />
                      <div className="flex justify-between items-center">
                        <span>Tag Optimization</span>
                        <span className="font-bold text-blue-600">92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                      <div className="flex justify-between items-center">
                        <span>Description Quality</span>
                        <span className="font-bold text-orange-600">78%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SERP Tracking Tab */}
          <TabsContent value="serp" className="space-y-6">
            <Card className="bg-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-indigo-600" />
                  SERP Ranking Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {keywordData.map((keyword, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900">{keyword.keyword}</h3>
                          <p className="text-sm text-gray-600">Current Rank: #{keyword.rank}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Badge variant={keyword.rank <= 3 ? "default" : keyword.rank <= 10 ? "secondary" : "destructive"}>
                            Page {Math.ceil(keyword.rank / 10)}
                          </Badge>
                          <span className="text-green-600 font-medium">{keyword.trend}</span>
                          <Button variant="outline" size="sm">
                            Track
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Campaigns Tab */}
          <TabsContent value="campaigns" className="space-y-6">
            <Card className="bg-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-purple-600" />
                  Paid Campaign Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={campaignData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="conversions" fill="#10b981" />
                    <Bar dataKey="clicks" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
                <div className="mt-6 space-y-4">
                  {campaignData.map((campaign, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900">{campaign.name}</h3>
                          <div className="flex items-center space-x-4 mt-2">
                            <span className="text-sm text-gray-600">Spent: ${campaign.spent}</span>
                            <span className="text-sm text-gray-600">Clicks: {campaign.clicks}</span>
                            <span className="text-sm text-gray-600">CTR: {campaign.ctr}%</span>
                            <Badge variant="secondary">
                              {campaign.conversions} conversions
                            </Badge>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Settings className="w-4 h-4 mr-1" />
                          Optimize
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
