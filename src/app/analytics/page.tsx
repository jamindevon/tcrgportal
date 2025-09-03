import PasswordProtection from '../components/PasswordProtection';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BarChart3, TrendingUp, TrendingDown, Eye, Users, DollarSign, Calendar, Target, Award } from 'lucide-react';

export default function Analytics() {
  const analyticsData = {
    overview: {
      totalViews: 1247,
      totalLeads: 89,
      conversionRate: 7.1,
      avgTimeOnSite: '3:24',
      totalValue: 12400000
    },
    monthlyStats: [
      { month: 'Jan', views: 1200, leads: 15, conversions: 8 },
      { month: 'Feb', views: 1350, leads: 18, conversions: 12 },
      { month: 'Mar', views: 1180, leads: 14, conversions: 9 },
      { month: 'Apr', views: 1420, leads: 22, conversions: 15 },
      { month: 'May', views: 1380, leads: 20, conversions: 13 },
      { month: 'Jun', views: 1247, leads: 89, conversions: 7 }
    ],
    topProperties: [
      { name: '123 Oak Street', views: 247, leads: 12, status: 'Active' },
      { name: '456 Pine Avenue', views: 189, leads: 8, status: 'Active' },
      { name: '789 Maple Drive', views: 156, leads: 6, status: 'Pending' },
      { name: '321 Elm Street', views: 312, leads: 15, status: 'Active' },
      { name: '654 Cedar Lane', views: 198, leads: 9, status: 'Active' }
    ],
    leadSources: [
      { source: 'Website', leads: 35, percentage: 39.3 },
      { source: 'Social Media', leads: 28, percentage: 31.5 },
      { source: 'Referrals', leads: 15, percentage: 16.9 },
      { source: 'Direct', leads: 11, percentage: 12.4 }
    ],
    recentActivity: [
      { action: 'New lead from 123 Oak Street', time: '2 hours ago', type: 'lead' },
      { action: 'Property view on 456 Pine Avenue', time: '4 hours ago', type: 'view' },
      { action: 'Lead conversion on 789 Maple Drive', time: '6 hours ago', type: 'conversion' },
      { action: 'New listing added: 987 Ocean Drive', time: '1 day ago', type: 'listing' },
      { action: 'Marketing campaign launched', time: '2 days ago', type: 'campaign' }
    ]
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'lead':
        return <Users className="w-4 h-4 text-realtor-blue" />;
      case 'view':
        return <Eye className="w-4 h-4 text-realtor-green" />;
      case 'conversion':
        return <Target className="w-4 h-4 text-realtor-gold" />;
      case 'listing':
        return <Award className="w-4 h-4 text-realtor-slate" />;
      case 'campaign':
        return <TrendingUp className="w-4 h-4 text-realtor-blue" />;
      default:
        return <Calendar className="w-4 h-4 text-realtor-slate" />;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'lead':
        return 'bg-blue-50 border-blue-200';
      case 'view':
        return 'bg-green-50 border-green-200';
      case 'conversion':
        return 'bg-yellow-50 border-yellow-200';
      case 'listing':
        return 'bg-slate-50 border-slate-200';
      case 'campaign':
        return 'bg-blue-50 border-blue-200';
      default:
        return 'bg-realtor-light border-realtor-stone';
    }
  };

  return (
    <PasswordProtection>
      <div className="min-h-screen bg-realtor-light">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-realtor-dark mb-4">Performance Analytics</h1>
            <p className="text-xl text-realtor-slate">
              Track your property performance, lead generation, and marketing campaign results.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-realtor-stone">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-realtor-slate">Total Views</p>
                  <p className="text-2xl font-bold text-realtor-dark">{analyticsData.overview.totalViews.toLocaleString()}</p>
                  <div className="flex items-center text-green-600 text-sm">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span>+12.5%</span>
                  </div>
                </div>
                <Eye className="w-8 h-8 text-realtor-blue" />
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-realtor-stone">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-realtor-slate">Total Leads</p>
                  <p className="text-2xl font-bold text-realtor-dark">{analyticsData.overview.totalLeads}</p>
                  <div className="flex items-center text-green-600 text-sm">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span>+8.3%</span>
                  </div>
                </div>
                <Users className="w-8 h-8 text-realtor-green" />
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-realtor-stone">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-realtor-slate">Conversion Rate</p>
                  <p className="text-2xl font-bold text-realtor-dark">{analyticsData.overview.conversionRate}%</p>
                  <div className="flex items-center text-red-600 text-sm">
                    <TrendingDown className="w-4 h-4 mr-1" />
                    <span>-2.1%</span>
                  </div>
                </div>
                <Target className="w-8 h-8 text-realtor-gold" />
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-realtor-stone">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-realtor-slate">Avg. Time on Site</p>
                  <p className="text-2xl font-bold text-realtor-dark">{analyticsData.overview.avgTimeOnSite}</p>
                  <div className="flex items-center text-green-600 text-sm">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span>+15s</span>
                  </div>
                </div>
                <Calendar className="w-8 h-8 text-realtor-slate" />
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-realtor-stone">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-realtor-slate">Total Value</p>
                  <p className="text-2xl font-bold text-realtor-dark">${(analyticsData.overview.totalValue / 1000000).toFixed(1)}M</p>
                  <div className="flex items-center text-green-600 text-sm">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span>+5.2%</span>
                  </div>
                </div>
                <DollarSign className="w-8 h-8 text-realtor-green" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Monthly Performance Chart */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-realtor-stone">
              <h2 className="text-xl font-bold text-realtor-dark mb-6">Monthly Performance</h2>
              <div className="space-y-4">
                {analyticsData.monthlyStats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 text-center">
                        <p className="text-sm font-medium text-realtor-dark">{stat.month}</p>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-4">
                          <div className="flex-1">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-realtor-slate">Views</span>
                              <span className="text-realtor-dark font-medium">{stat.views}</span>
                            </div>
                            <div className="w-full bg-realtor-stone rounded-full h-2">
                              <div 
                                className="bg-realtor-blue h-2 rounded-full" 
                                style={{ width: `${(stat.views / 1500) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between text-sm mt-2">
                          <span className="text-realtor-slate">Leads: {stat.leads}</span>
                          <span className="text-realtor-slate">Conversions: {stat.conversions}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Properties */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-realtor-stone">
              <h2 className="text-xl font-bold text-realtor-dark mb-6">Top Performing Properties</h2>
              <div className="space-y-4">
                {analyticsData.topProperties.map((property, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-realtor-light rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-realtor-blue text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium text-realtor-dark">{property.name}</p>
                        <p className="text-sm text-realtor-slate">{property.status}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-realtor-dark">{property.views} views</p>
                      <p className="text-sm text-realtor-slate">{property.leads} leads</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Lead Sources */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-realtor-stone">
              <h2 className="text-xl font-bold text-realtor-dark mb-6">Lead Sources</h2>
              <div className="space-y-4">
                {analyticsData.leadSources.map((source, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-realtor-blue"></div>
                      <span className="text-realtor-dark font-medium">{source.source}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-realtor-dark font-medium">{source.leads}</span>
                      <span className="text-realtor-slate text-sm">({source.percentage}%)</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-realtor-stone">
              <h2 className="text-xl font-bold text-realtor-dark mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {analyticsData.recentActivity.map((activity, index) => (
                  <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg border ${getActivityColor(activity.type)}`}>
                    {getActivityIcon(activity.type)}
                    <div className="flex-1">
                      <p className="text-sm font-medium text-realtor-dark">{activity.action}</p>
                      <p className="text-xs text-realtor-slate">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </PasswordProtection>
  );
}
