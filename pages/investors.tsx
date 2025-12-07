import type { NextPage } from 'next';
import SEOHead from '../components/SEOHead';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { 
  TrendingUp, Users, Building2, Globe, DollarSign, Target, 
  Award, BarChart3, Briefcase, Shield, Zap, ArrowRight,
  CheckCircle, PieChart, Rocket, LineChart, Mail, Phone,
  Calendar, FileText, Handshake, Star, Clock, MapPin
} from 'lucide-react';

const Investors: NextPage = () => {
  const investorSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DEV SEC IT',
    description: 'India\'s leading IT & Software Development Company seeking strategic investors for expansion across 100+ Indian cities.',
    foundingDate: '2014',
    numberOfEmployees: '100-500',
    areaServed: 'India'
  };

  const keyMetrics = [
    { value: '500+', label: 'Projects Delivered', Icon: Briefcase },
    { value: '10+', label: 'Years Experience', Icon: Clock },
    { value: '100+', label: 'Enterprise Clients', Icon: Building2 },
    { value: '99.9%', label: 'Client Retention', Icon: Star },
    { value: '36 LPA', label: 'Highest CTC Offered', Icon: DollarSign },
    { value: '100+', label: 'Cities Covered', Icon: MapPin }
  ];

  const investmentHighlights = [
    {
      title: 'Proven Business Model',
      description: 'Diversified revenue streams from custom software development, IT training, and managed services with consistent YoY growth.',
      Icon: BarChart3
    },
    {
      title: 'Strong Market Position',
      description: 'Established as a top IT company across major Indian cities including Mumbai, Delhi, Bangalore, Hyderabad, Chennai, and Kolkata.',
      Icon: Target
    },
    {
      title: 'Scalable Technology Platform',
      description: 'Proprietary tools and methodologies enabling rapid project delivery with 7-day MVP guarantee.',
      Icon: Zap
    },
    {
      title: 'Expert Leadership Team',
      description: 'Experienced founders and management with 10+ years in enterprise software, cybersecurity, and AI/ML.',
      Icon: Users
    },
    {
      title: 'Growing Talent Pool',
      description: 'In-house training academy producing skilled developers with 95% placement rate in the industry.',
      Icon: Award
    },
    {
      title: 'Expansion Ready',
      description: 'Infrastructure and processes optimized for scaling to new markets and service verticals.',
      Icon: Globe
    }
  ];

  const servicePortfolio = [
    { name: 'Custom Software Development', percentage: 40 },
    { name: 'AI & Machine Learning Solutions', percentage: 25 },
    { name: 'Cybersecurity Services', percentage: 15 },
    { name: 'IT Training & Certifications', percentage: 12 },
    { name: 'Cloud & DevOps', percentage: 8 }
  ];

  const milestones = [
    { year: '2014', event: 'Company Founded in West Bengal' },
    { year: '2016', event: 'Expanded to 10 Major Indian Cities' },
    { year: '2018', event: '100+ Enterprise Clients Milestone' },
    { year: '2020', event: 'Launched AI & ML Division' },
    { year: '2022', event: 'Training Academy with 500+ Alumni' },
    { year: '2024', event: 'Expansion to 100+ Cities' },
    { year: '2025', event: 'Seeking Strategic Investment for Global Expansion' }
  ];

  return (
    <div suppressHydrationWarning className="min-h-screen dark:bg-dark-900 light:bg-white">
      <SEOHead
        title="Investor Relations - DEV SEC IT | Strategic Investment Opportunity"
        description="Invest in India's top IT & Software Development Company. DEV SEC IT offers strategic investment opportunities with proven growth, 500+ projects, and expansion across 100+ Indian cities."
        keywords="invest in IT company, software company investment, IT startup investment India, technology investment opportunity, DEV SEC IT investors"
        canonicalUrl="https://devsecit.com/investors"
        schemas={[investorSchema]}
      />

      <Header activePage="investors" />

      {/* Hero Section */}
          <section className="relative pt-32 pb-20 overflow-hidden dark:bg-dark-900 light:bg-white">
            <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-primary-900/20 dark:via-dark-900 dark:to-blue-900/20 light:bg-gradient-to-br light:from-primary-50 light:via-white light:to-blue-50"></div>
            <div className="absolute top-20 left-10 w-72 h-72 dark:bg-primary-500/10 light:bg-primary-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 dark:bg-blue-500/10 light:bg-blue-400/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center animate-fade-in">
                <div className="inline-block mb-4 px-4 py-2 dark:bg-primary-500/10 light:bg-primary-50 rounded-full border dark:border-primary-500/30 light:border-primary-200">
                  <span className="text-primary-400 dark:text-primary-400 light:text-primary-600 font-semibold text-sm flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Investment Opportunity
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6 leading-tight dark:text-white light:text-gray-900">
                  Invest in India's <br />
                  <span className="text-gradient">Top IT Company</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl dark:text-gray-400 light:text-gray-600 mb-8 max-w-3xl mx-auto">
                  DEV SEC IT is seeking strategic investors to fuel our expansion across India and global markets. Join us in building the future of technology solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#contact-investor" 
                    className="px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Handshake className="w-5 h-5" />
                    Schedule Investor Meeting
                  </a>
                  <a 
                    href="#pitch-deck" 
                    className="px-8 py-4 border-2 dark:border-primary-500/50 light:border-primary-400 rounded-lg font-bold dark:text-gray-100 light:text-gray-900 hover:shadow-lg transition flex items-center justify-center gap-2"
                  >
                    <FileText className="w-5 h-5" />
                    Download Pitch Deck
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Key Metrics */}
          <section className="py-16 dark:bg-dark-800/50 light:bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 dark:text-white light:text-gray-900">
                  Key <span className="text-gradient">Metrics</span>
                </h2>
                <p className="text-lg dark:text-gray-400 light:text-gray-600">Numbers that demonstrate our growth and market position</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {keyMetrics.map((metric, i) => (
                  <div key={i} className="dark:bg-dark-900 light:bg-white p-6 rounded-xl dark:border dark:border-dark-700 light:border light:border-gray-200 text-center group hover:shadow-lg transition">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-primary-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <metric.Icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <div className="text-2xl font-bold text-gradient mb-1">{metric.value}</div>
                    <div className="text-sm dark:text-gray-400 light:text-gray-600">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Investment Highlights */}
          <section className="py-20 dark:bg-dark-900 light:bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 dark:text-white light:text-gray-900">
                  Investment <span className="text-gradient">Highlights</span>
                </h2>
                <p className="text-lg dark:text-gray-400 light:text-gray-600">Why DEV SEC IT is a compelling investment opportunity</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {investmentHighlights.map((item, i) => (
                  <div key={i} className="dark:bg-dark-800/50 light:bg-gray-50 p-8 rounded-xl dark:border dark:border-dark-700 light:border light:border-gray-200 hover:shadow-lg hover:border-primary-500/50 transition group">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary-500/20 to-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <item.Icon className="w-8 h-8 text-primary-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 dark:text-white light:text-gray-900">{item.title}</h3>
                    <p className="dark:text-gray-400 light:text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Service Portfolio */}
          <section className="py-20 dark:bg-dark-800/50 light:bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 dark:text-white light:text-gray-900">
                    Revenue <span className="text-gradient">Breakdown</span>
                  </h2>
                  <p className="text-lg dark:text-gray-400 light:text-gray-600 mb-8">
                    Our diversified service portfolio ensures stable revenue streams and growth potential across multiple technology sectors.
                  </p>
                  <div className="space-y-4">
                    {servicePortfolio.map((service, i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-2">
                          <span className="dark:text-gray-300 light:text-gray-700 font-medium">{service.name}</span>
                          <span className="text-primary-400 font-bold">{service.percentage}%</span>
                        </div>
                        <div className="w-full h-3 dark:bg-dark-700 light:bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary-500 to-blue-600 rounded-full transition-all duration-1000"
                            style={{ width: `${service.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="dark:bg-dark-900 light:bg-white p-8 rounded-xl dark:border dark:border-dark-700 light:border light:border-gray-200">
                  <h3 className="text-2xl font-bold mb-6 dark:text-white light:text-gray-900 flex items-center gap-2">
                    <PieChart className="w-6 h-6 text-primary-400" />
                    Growth Trajectory
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center">
                        <TrendingUp className="w-8 h-8 text-green-400" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-400">35%</div>
                        <div className="dark:text-gray-400 light:text-gray-600">YoY Revenue Growth</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center">
                        <Users className="w-8 h-8 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-400">50%</div>
                        <div className="dark:text-gray-400 light:text-gray-600">Team Growth Rate</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center">
                        <Globe className="w-8 h-8 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-400">3x</div>
                        <div className="dark:text-gray-400 light:text-gray-600">Market Expansion</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Company Timeline */}
          <section className="py-20 dark:bg-dark-900 light:bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 dark:text-white light:text-gray-900">
                  Our <span className="text-gradient">Journey</span>
                </h2>
                <p className="text-lg dark:text-gray-400 light:text-gray-600">Key milestones in our growth story</p>
              </div>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full dark:bg-dark-700 light:bg-gray-200"></div>
                {milestones.map((milestone, i) => (
                  <div key={i} className={`relative flex items-center mb-8 ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-5/12 ${i % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="dark:bg-dark-800 light:bg-gray-50 p-4 rounded-lg dark:border dark:border-dark-700 light:border light:border-gray-200">
                        <div className="text-primary-400 font-bold text-lg">{milestone.year}</div>
                        <div className="dark:text-gray-300 light:text-gray-700">{milestone.event}</div>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-blue-600 border-4 dark:border-dark-900 light:border-white"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Investor Section */}
          <section id="contact-investor" className="py-20 dark:bg-dark-800/50 light:bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 dark:text-white light:text-gray-900">
                  Connect With <span className="text-gradient">Our Team</span>
                </h2>
                <p className="text-lg dark:text-gray-400 light:text-gray-600">
                  Interested in learning more about investment opportunities? Our leadership team is ready to discuss.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="dark:bg-dark-900 light:bg-white p-8 rounded-xl dark:border dark:border-dark-700 light:border light:border-gray-200">
                  <h3 className="text-xl font-bold mb-6 dark:text-white light:text-gray-900 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary-400" />
                    Investor Relations
                  </h3>
                  <div className="space-y-4">
                    <a href="mailto:investors@devsecit.com" className="flex items-center gap-3 dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition">
                      <Mail className="w-5 h-5" />
                      investors@devsecit.com
                    </a>
                    <a href="tel:+918101979855" className="flex items-center gap-3 dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition">
                      <Phone className="w-5 h-5" />
                      +91 8101 979855
                    </a>
                    <div className="flex items-center gap-3 dark:text-gray-400 light:text-gray-600">
                      <Calendar className="w-5 h-5" />
                      Schedule a call at your convenience
                    </div>
                  </div>
                </div>

                <div className="dark:bg-dark-900 light:bg-white p-8 rounded-xl dark:border dark:border-dark-700 light:border light:border-gray-200">
                  <h3 className="text-xl font-bold mb-6 dark:text-white light:text-gray-900 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary-400" />
                    Available Documents
                  </h3>
                  <ul className="space-y-3">
                    {['Investor Pitch Deck', 'Company Overview', 'Financial Summary', 'Growth Projections', 'Market Analysis'].map((doc, i) => (
                      <li key={i} className="flex items-center gap-3 dark:text-gray-400 light:text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-lg transition flex items-center justify-center gap-2">
                    <FileText className="w-5 h-5" />
                    Request Documents
                  </button>
                </div>
              </div>
            </div>
          </section>

      <Footer />
    </div>
  );
};

export default Investors;
