import type { NextPage } from 'next';
import SEOHead from '../components/SEOHead';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useState } from 'react';
import { 
  Briefcase, Users, TrendingUp, Award, Heart, Coffee,
  GraduationCap, Home, Clock, DollarSign, Globe, Zap,
  Shield, Code, Brain, Cloud, Smartphone, Database,
  CheckCircle, ArrowRight, MapPin, Calendar, Star,
  Building2, Target, Rocket, Gift, Laptop, Wifi
} from 'lucide-react';

const Careers: NextPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const careersSchema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'DEV SEC IT',
      description: 'India\'s top IT & Software Development Company'
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN'
      }
    }
  };

  const benefits = [
    { title: 'Competitive Salary', desc: 'CTC up to 36 LPA for senior roles', Icon: DollarSign },
    { title: 'Remote Friendly', desc: 'Work from anywhere in India', Icon: Home },
    { title: 'Health Insurance', desc: 'Comprehensive coverage for you & family', Icon: Heart },
    { title: 'Learning Budget', desc: 'Annual training & certification allowance', Icon: GraduationCap },
    { title: 'Flexible Hours', desc: 'Work-life balance matters to us', Icon: Clock },
    { title: 'Career Growth', desc: 'Clear paths for advancement', Icon: TrendingUp },
    { title: 'Modern Equipment', desc: 'Latest laptops & tools provided', Icon: Laptop },
    { title: 'Team Events', desc: 'Regular offsites & celebrations', Icon: Gift }
  ];

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'ai-ml', name: 'AI & Machine Learning' },
    { id: 'security', name: 'Cybersecurity' },
    { id: 'design', name: 'Design' },
    { id: 'sales', name: 'Sales & Marketing' },
    { id: 'operations', name: 'Operations' }
  ];

  const openPositions = [
    {
      id: 1,
      title: 'Senior Full-Stack Developer',
      department: 'engineering',
      location: 'Remote / Bangalore / Mumbai',
      type: 'Full-time',
      experience: '5-8 years',
      ctc: '25-36 LPA',
      skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'],
      urgent: true
    },
    {
      id: 2,
      title: 'AI/ML Engineer',
      department: 'ai-ml',
      location: 'Remote / Hyderabad',
      type: 'Full-time',
      experience: '3-6 years',
      ctc: '20-30 LPA',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision'],
      urgent: true
    },
    {
      id: 3,
      title: 'Cybersecurity Analyst',
      department: 'security',
      location: 'Remote / Delhi NCR',
      type: 'Full-time',
      experience: '2-5 years',
      ctc: '15-25 LPA',
      skills: ['Penetration Testing', 'SIEM', 'Network Security', 'OWASP'],
      urgent: false
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      department: 'engineering',
      location: 'Remote / Chennai',
      type: 'Full-time',
      experience: '3-5 years',
      ctc: '18-28 LPA',
      skills: ['Kubernetes', 'Docker', 'CI/CD', 'Terraform', 'AWS/GCP'],
      urgent: true
    },
    {
      id: 5,
      title: 'React Native Developer',
      department: 'engineering',
      location: 'Remote / Pune',
      type: 'Full-time',
      experience: '2-4 years',
      ctc: '12-20 LPA',
      skills: ['React Native', 'TypeScript', 'Redux', 'REST APIs'],
      urgent: false
    },
    {
      id: 6,
      title: 'Data Scientist',
      department: 'ai-ml',
      location: 'Remote / Bangalore',
      type: 'Full-time',
      experience: '3-6 years',
      ctc: '18-30 LPA',
      skills: ['Python', 'SQL', 'Machine Learning', 'Statistics', 'Tableau'],
      urgent: true
    },
    {
      id: 7,
      title: 'UI/UX Designer',
      department: 'design',
      location: 'Remote / Mumbai',
      type: 'Full-time',
      experience: '2-5 years',
      ctc: '10-18 LPA',
      skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
      urgent: false
    },
    {
      id: 8,
      title: 'Backend Developer (Python)',
      department: 'engineering',
      location: 'Remote / Kolkata',
      type: 'Full-time',
      experience: '2-4 years',
      ctc: '12-20 LPA',
      skills: ['Python', 'Django/FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
      urgent: false
    },
    {
      id: 9,
      title: 'Cloud Solutions Architect',
      department: 'engineering',
      location: 'Remote / Bangalore',
      type: 'Full-time',
      experience: '6-10 years',
      ctc: '30-36 LPA',
      skills: ['AWS', 'Azure', 'GCP', 'Microservices', 'System Design'],
      urgent: true
    },
    {
      id: 10,
      title: 'Security Operations Engineer',
      department: 'security',
      location: 'Remote / Hyderabad',
      type: 'Full-time',
      experience: '3-5 years',
      ctc: '15-22 LPA',
      skills: ['SOC', 'Incident Response', 'Splunk', 'Security Automation'],
      urgent: false
    },
    {
      id: 11,
      title: 'NLP Engineer',
      department: 'ai-ml',
      location: 'Remote / Delhi',
      type: 'Full-time',
      experience: '2-5 years',
      ctc: '15-25 LPA',
      skills: ['NLP', 'Transformers', 'BERT', 'GPT', 'Hugging Face'],
      urgent: true
    },
    {
      id: 12,
      title: 'Business Development Manager',
      department: 'sales',
      location: 'Mumbai / Delhi',
      type: 'Full-time',
      experience: '4-7 years',
      ctc: '15-25 LPA',
      skills: ['B2B Sales', 'IT Services', 'Client Relations', 'Negotiation'],
      urgent: true
    },
    {
      id: 13,
      title: 'Technical Project Manager',
      department: 'operations',
      location: 'Remote / Bangalore',
      type: 'Full-time',
      experience: '5-8 years',
      ctc: '20-30 LPA',
      skills: ['Agile', 'Scrum', 'Stakeholder Management', 'Technical Background'],
      urgent: false
    },
    {
      id: 14,
      title: 'QA Automation Engineer',
      department: 'engineering',
      location: 'Remote / Pune',
      type: 'Full-time',
      experience: '2-4 years',
      ctc: '10-16 LPA',
      skills: ['Selenium', 'Cypress', 'API Testing', 'CI/CD', 'Python/JS'],
      urgent: false
    },
    {
      id: 15,
      title: 'Blockchain Developer',
      department: 'engineering',
      location: 'Remote / Bangalore',
      type: 'Full-time',
      experience: '2-5 years',
      ctc: '18-28 LPA',
      skills: ['Solidity', 'Web3.js', 'Smart Contracts', 'Ethereum', 'DeFi'],
      urgent: false
    },
    {
      id: 16,
      title: 'Content Marketing Specialist',
      department: 'sales',
      location: 'Remote / Delhi',
      type: 'Full-time',
      experience: '2-4 years',
      ctc: '8-14 LPA',
      skills: ['Content Strategy', 'SEO', 'Technical Writing', 'Social Media'],
      urgent: false
    },
    {
      id: 17,
      title: 'Computer Vision Engineer',
      department: 'ai-ml',
      location: 'Remote / Hyderabad',
      type: 'Full-time',
      experience: '2-5 years',
      ctc: '18-28 LPA',
      skills: ['OpenCV', 'Deep Learning', 'Object Detection', 'Image Segmentation'],
      urgent: true
    },
    {
      id: 18,
      title: 'HR Manager',
      department: 'operations',
      location: 'Kolkata / Remote',
      type: 'Full-time',
      experience: '5-8 years',
      ctc: '12-18 LPA',
      skills: ['Talent Acquisition', 'Employee Relations', 'HR Policies', 'HRIS'],
      urgent: false
    },
    {
      id: 19,
      title: 'Frontend Developer (Vue.js)',
      department: 'engineering',
      location: 'Remote / Chennai',
      type: 'Full-time',
      experience: '2-4 years',
      ctc: '10-18 LPA',
      skills: ['Vue.js', 'Nuxt.js', 'TypeScript', 'CSS/Tailwind', 'REST APIs'],
      urgent: false
    },
    {
      id: 20,
      title: 'Product Designer',
      department: 'design',
      location: 'Remote / Bangalore',
      type: 'Full-time',
      experience: '3-6 years',
      ctc: '15-24 LPA',
      skills: ['Product Design', 'Design Systems', 'Figma', 'User Testing'],
      urgent: true
    }
  ];

  const filteredPositions = selectedDepartment === 'all' 
    ? openPositions 
    : openPositions.filter(p => p.department === selectedDepartment);

  const whyJoinUs = [
    {
      title: 'Impactful Work',
      desc: 'Work on projects that reach millions of users across India',
      Icon: Target
    },
    {
      title: 'Learning Culture',
      desc: 'Continuous learning with mentorship from industry experts',
      Icon: GraduationCap
    },
    {
      title: 'Innovation First',
      desc: 'Use cutting-edge tech: AI, Cloud, Blockchain, and more',
      Icon: Rocket
    },
    {
      title: 'Diverse Team',
      desc: 'Work with talented people from all over India',
      Icon: Users
    }
  ];

  return (
    <div suppressHydrationWarning className="min-h-screen dark:bg-dark-900 light:bg-white">
      <SEOHead
        title="Careers at DEV SEC IT | Jobs in IT, AI, Software Development | CTC up to 36 LPA"
        description="Join India's top IT company. DEV SEC IT is hiring for Software Development, AI/ML, Cybersecurity, DevOps, and more. Remote jobs available. CTC up to 36 LPA. Apply now!"
        keywords="IT jobs India, software developer jobs, AI engineer jobs, machine learning jobs, cybersecurity jobs, remote jobs India, best IT company jobs, high salary IT jobs, 36 LPA jobs, tech jobs Mumbai, developer jobs Bangalore, IT careers Delhi, software jobs Hyderabad, best CTC jobs India"
        canonicalUrl="https://devsecit.com/careers"
        schemas={[careersSchema]}
      />

      <Header activePage="careers" />

      {/* Hero Section */}
          <section className="relative pt-32 pb-20 overflow-hidden dark:bg-dark-900 light:bg-white">
            <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-green-900/20 dark:via-dark-900 dark:to-blue-900/20 light:bg-gradient-to-br light:from-green-50 light:via-white light:to-blue-50"></div>
            <div className="absolute top-20 left-10 w-72 h-72 dark:bg-green-500/10 light:bg-green-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 dark:bg-blue-500/10 light:bg-blue-400/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center animate-fade-in">
                <div className="inline-block mb-4 px-4 py-2 dark:bg-green-500/10 light:bg-green-50 rounded-full border dark:border-green-500/30 light:border-green-200">
                  <span className="text-green-400 dark:text-green-400 light:text-green-600 font-semibold text-sm flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    We're Hiring! Join India's Top IT Company
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6 leading-tight dark:text-white light:text-gray-900">
                  Build Your Career at <br />
                  <span className="text-gradient">DEV SEC IT</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl dark:text-gray-400 light:text-gray-600 mb-8 max-w-3xl mx-auto">
                  Join 100+ talented professionals working on cutting-edge technology. Remote-friendly, competitive CTC up to 36 LPA, and endless growth opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#openings" 
                    className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Briefcase className="w-5 h-5" />
                    View Open Positions ({openPositions.length})
                  </a>
                  <a 
                    href="#benefits" 
                    className="px-8 py-4 border-2 dark:border-green-500/50 light:border-green-400 rounded-lg font-bold dark:text-gray-100 light:text-gray-900 hover:shadow-lg transition flex items-center justify-center gap-2"
                  >
                    <Gift className="w-5 h-5" />
                    See Benefits
                  </a>
                </div>
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                  {[
                    { value: '36 LPA', label: 'Max CTC' },
                    { value: '100+', label: 'Team Members' },
                    { value: '20+', label: 'Open Roles' },
                    { value: 'Remote', label: 'Work Policy' }
                  ].map((stat, i) => (
                    <div key={i} className="animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
                      <div className="dark:text-gray-400 light:text-gray-600 mt-1 text-xs sm:text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Why Join Us */}
          <section className="py-16 dark:bg-dark-800/50 light:bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 dark:text-white light:text-gray-900">
                  Why Join <span className="text-gradient">DEV SEC IT?</span>
                </h2>
                <p className="text-lg dark:text-gray-400 light:text-gray-600">More than just a job - it's a career transformation</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {whyJoinUs.map((item, i) => (
                  <div key={i} className="dark:bg-dark-900 light:bg-white p-6 rounded-xl dark:border dark:border-dark-700 light:border light:border-gray-200 text-center group hover:shadow-lg transition">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.Icon className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 dark:text-white light:text-gray-900">{item.title}</h3>
                    <p className="dark:text-gray-400 light:text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section id="benefits" className="py-20 dark:bg-dark-900 light:bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 dark:text-white light:text-gray-900">
                  Benefits & <span className="text-gradient">Perks</span>
                </h2>
                <p className="text-lg dark:text-gray-400 light:text-gray-600">We take care of our team so they can take care of our clients</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, i) => (
                  <div key={i} className="dark:bg-dark-800/50 light:bg-gray-50 p-6 rounded-xl dark:border dark:border-dark-700 light:border light:border-gray-200 hover:shadow-lg hover:border-green-500/50 transition group">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <benefit.Icon className="w-6 h-6 text-green-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 dark:text-white light:text-gray-900">{benefit.title}</h3>
                    <p className="dark:text-gray-400 light:text-gray-600 text-sm">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Open Positions */}
          <section id="openings" className="py-20 dark:bg-dark-800/50 light:bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 dark:text-white light:text-gray-900">
                  Open <span className="text-gradient">Positions</span>
                </h2>
                <p className="text-lg dark:text-gray-400 light:text-gray-600">Find your perfect role and apply today</p>
              </div>

              {/* Department Filter */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {departments.map((dept) => (
                  <button
                    key={dept.id}
                    onClick={() => setSelectedDepartment(dept.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition ${
                      selectedDepartment === dept.id
                        ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white'
                        : 'dark:bg-dark-700 light:bg-gray-200 dark:text-gray-300 light:text-gray-700 hover:bg-green-500/20'
                    }`}
                  >
                    {dept.name}
                  </button>
                ))}
              </div>

              {/* Job Listings */}
              <div className="grid md:grid-cols-2 gap-6">
                {filteredPositions.map((position) => (
                  <div 
                    key={position.id} 
                    className={`dark:bg-dark-900 light:bg-white p-6 rounded-xl border transition hover:shadow-lg ${
                      position.urgent 
                        ? 'dark:border-green-500/50 light:border-green-400' 
                        : 'dark:border-dark-700 light:border-gray-200'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold dark:text-white light:text-gray-900">{position.title}</h3>
                        <div className="flex flex-wrap items-center gap-2 mt-2">
                          <span className="flex items-center gap-1 text-sm dark:text-gray-400 light:text-gray-600">
                            <MapPin className="w-4 h-4" />
                            {position.location}
                          </span>
                          <span className="flex items-center gap-1 text-sm dark:text-gray-400 light:text-gray-600">
                            <Clock className="w-4 h-4" />
                            {position.type}
                          </span>
                        </div>
                      </div>
                      {position.urgent && (
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full border border-green-500/30">
                          Urgent
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-xs dark:text-gray-500 light:text-gray-500">Experience</div>
                        <div className="font-semibold dark:text-gray-300 light:text-gray-700">{position.experience}</div>
                      </div>
                      <div>
                        <div className="text-xs dark:text-gray-500 light:text-gray-500">CTC Range</div>
                        <div className="font-semibold text-green-400">{position.ctc}</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {position.skills.map((skill, j) => (
                        <span key={j} className="px-2 py-1 text-xs dark:bg-dark-800 light:bg-gray-100 rounded-full dark:text-gray-400 light:text-gray-600">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <a 
                      href={`https://wa.me/918101979855?text=Hi%20DEV%20SEC%20IT,%20I'm%20interested%20in%20the%20${encodeURIComponent(position.title)}%20position`}
                      className="w-full px-4 py-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg font-semibold text-white hover:shadow-lg transition flex items-center justify-center gap-2"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>

              {filteredPositions.length === 0 && (
                <div className="text-center py-12">
                  <p className="dark:text-gray-400 light:text-gray-600">No positions available in this department right now. Check back soon!</p>
                </div>
              )}
            </div>
          </section>

          {/* Hiring Process */}
          <section className="py-20 dark:bg-dark-900 light:bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 dark:text-white light:text-gray-900">
                  Our Hiring <span className="text-gradient">Process</span>
                </h2>
                <p className="text-lg dark:text-gray-400 light:text-gray-600">Simple, transparent, and respectful of your time</p>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: 1, title: 'Apply', desc: 'Submit your application via WhatsApp or email', Icon: Briefcase },
                  { step: 2, title: 'Screening', desc: 'Quick call to understand your background', Icon: Users },
                  { step: 3, title: 'Technical', desc: 'Skill assessment relevant to the role', Icon: Code },
                  { step: 4, title: 'Offer', desc: 'Receive and accept your offer letter', Icon: Star }
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold mb-2 dark:text-white light:text-gray-900">{item.title}</h3>
                    <p className="dark:text-gray-400 light:text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 dark:bg-dark-800/50 light:bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 dark:text-white light:text-gray-900">
                Didn't Find Your <span className="text-gradient">Role?</span>
              </h2>
              <p className="text-lg dark:text-gray-400 light:text-gray-600 mb-8">
                Send us your resume anyway! We're always looking for talented people.
              </p>
              <a 
                href="mailto:careers@devsecit.com" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <Briefcase className="w-5 h-5" />
                Send Your Resume
              </a>
            </div>
          </section>

      <Footer />
    </div>
  );
};

export default Careers;
