import type { NextPage } from 'next';
import SEOHead from '../components/SEOHead';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useState } from 'react';
import Link from 'next/link';
import { 
  Briefcase, Building2, Code, Globe, Shield, Brain,
  ShoppingCart, Stethoscope, GraduationCap, Factory,
  Landmark, Car, Plane, Home, Smartphone, Database,
  Cloud, Bot, BarChart3, Users, CheckCircle, ArrowRight,
  DollarSign, Clock, Award, Layers, Filter, Search
} from 'lucide-react';

const Portfolio: NextPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const portfolioSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'DEV SEC IT Portfolio',
    description: '500+ successful software development projects with budgets above 5 Lakhs. Enterprise solutions, AI/ML, cybersecurity, and custom software development across India.'
  };

  const categories = [
    { id: 'all', name: 'All Projects', count: 50 },
    { id: 'web', name: 'Web Development', count: 12 },
    { id: 'mobile', name: 'Mobile Apps', count: 8 },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 10 },
    { id: 'enterprise', name: 'Enterprise Solutions', count: 8 },
    { id: 'ecommerce', name: 'E-Commerce', count: 6 },
    { id: 'fintech', name: 'FinTech', count: 6 }
  ];

  const projects = [
    {
      id: 1,
      title: 'Enterprise E-Commerce Platform',
      client: 'XX Retail Group',
      category: 'ecommerce',
      budget: '52 Lakhs',
      duration: '8 months',
      description: 'Multi-vendor e-commerce platform handling 50,000+ daily transactions with advanced inventory management, payment gateway integration, and real-time analytics dashboard.',
      techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Stripe'],
      results: ['300% revenue increase', '99.9% uptime', '50K+ daily users']
    },
    {
      id: 2,
      title: 'AI-Powered Healthcare Diagnostics',
      client: 'XX Healthcare Solutions',
      category: 'ai-ml',
      budget: '78 Lakhs',
      duration: '12 months',
      description: 'Machine learning platform for medical image analysis and disease prediction with 95% accuracy. Integrated with hospital management systems across 50+ facilities.',
      techStack: ['Python', 'TensorFlow', 'OpenCV', 'FastAPI', 'MongoDB', 'Docker'],
      results: ['95% diagnostic accuracy', '50+ hospital integrations', '1M+ scans processed']
    },
    {
      id: 3,
      title: 'Banking Mobile Application',
      client: 'XX Finance Bank',
      category: 'fintech',
      budget: '65 Lakhs',
      duration: '10 months',
      description: 'Secure mobile banking application with biometric authentication, UPI integration, loan management, and investment tracking for 2 million+ users.',
      techStack: ['React Native', 'Java', 'Spring Boot', 'Oracle', 'AWS', 'Firebase'],
      results: ['2M+ downloads', '4.7 app store rating', 'RBI compliant']
    },
    {
      id: 4,
      title: 'Supply Chain Management System',
      client: 'XX Manufacturing Ltd',
      category: 'enterprise',
      budget: '45 Lakhs',
      duration: '6 months',
      description: 'End-to-end supply chain visibility platform with IoT sensor integration, predictive analytics for demand forecasting, and automated inventory replenishment.',
      techStack: ['Angular', 'Python', 'Django', 'PostgreSQL', 'IoT Hub', 'Power BI'],
      results: ['40% inventory cost reduction', 'Real-time tracking', '25% faster delivery']
    },
    {
      id: 5,
      title: 'EdTech Learning Platform',
      client: 'XX Education Group',
      category: 'web',
      budget: '38 Lakhs',
      duration: '5 months',
      description: 'Comprehensive online learning platform with live classes, video courses, quizzes, and certification tracking for 100,000+ students.',
      techStack: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'AWS', 'Stripe'],
      results: ['100K+ students', '500+ courses', '95% completion rate']
    },
    {
      id: 6,
      title: 'Insurance Claims Processing AI',
      client: 'XX Insurance Co',
      category: 'ai-ml',
      budget: '55 Lakhs',
      duration: '7 months',
      description: 'Automated insurance claims processing using NLP and computer vision for document analysis, reducing processing time from days to minutes.',
      techStack: ['Python', 'PyTorch', 'OCR', 'NLP', 'Azure', 'PostgreSQL'],
      results: ['85% automation rate', '90% faster processing', '35% cost reduction']
    },
    {
      id: 7,
      title: 'Real Estate Marketplace',
      client: 'XX Properties',
      category: 'web',
      budget: '42 Lakhs',
      duration: '6 months',
      description: 'Property listing and management platform with virtual tours, mortgage calculator, and AI-powered property recommendations.',
      techStack: ['Vue.js', 'Laravel', 'MySQL', 'Elasticsearch', 'AWS S3', 'Mapbox'],
      results: ['10K+ listings', '5K+ monthly transactions', '40% lead increase']
    },
    {
      id: 8,
      title: 'Fleet Management System',
      client: 'XX Logistics',
      category: 'enterprise',
      budget: '48 Lakhs',
      duration: '7 months',
      description: 'GPS-enabled fleet tracking with route optimization, driver behavior monitoring, fuel management, and maintenance scheduling.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Google Maps API', 'IoT', 'AWS'],
      results: ['30% fuel savings', '5000+ vehicles tracked', 'Real-time monitoring']
    },
    {
      id: 9,
      title: 'Cryptocurrency Trading Platform',
      client: 'XX Crypto Exchange',
      category: 'fintech',
      budget: '85 Lakhs',
      duration: '10 months',
      description: 'High-frequency cryptocurrency trading platform with real-time market data, advanced charting, and secure wallet integration.',
      techStack: ['React', 'Go', 'PostgreSQL', 'Redis', 'WebSocket', 'Blockchain'],
      results: ['$10M+ daily volume', '99.99% uptime', 'Sub-second execution']
    },
    {
      id: 10,
      title: 'HR Management Suite',
      client: 'XX Corporate Services',
      category: 'enterprise',
      budget: '35 Lakhs',
      duration: '5 months',
      description: 'Complete HR management system with payroll, attendance, leave management, performance tracking, and employee self-service portal.',
      techStack: ['Angular', 'Java', 'Spring Boot', 'MySQL', 'Azure', 'Power BI'],
      results: ['50K+ employees managed', '60% HR efficiency gain', 'Paperless operations']
    },
    {
      id: 11,
      title: 'Food Delivery Application',
      client: 'XX Foods',
      category: 'mobile',
      budget: '58 Lakhs',
      duration: '8 months',
      description: 'Multi-city food delivery app with restaurant management, real-time order tracking, driver allocation, and customer loyalty program.',
      techStack: ['Flutter', 'Node.js', 'MongoDB', 'Redis', 'Firebase', 'Razorpay'],
      results: ['500K+ downloads', '10K+ restaurants', '15 cities covered']
    },
    {
      id: 12,
      title: 'Telemedicine Platform',
      client: 'XX Health Services',
      category: 'web',
      budget: '62 Lakhs',
      duration: '9 months',
      description: 'Video consultation platform with appointment scheduling, prescription management, lab integration, and health record management.',
      techStack: ['React', 'Python', 'Django', 'PostgreSQL', 'WebRTC', 'AWS'],
      results: ['50K+ consultations/month', '1000+ doctors', 'HIPAA compliant']
    },
    {
      id: 13,
      title: 'Inventory Prediction AI',
      client: 'XX Retail Chain',
      category: 'ai-ml',
      budget: '40 Lakhs',
      duration: '5 months',
      description: 'Machine learning system for inventory demand prediction across 200+ stores with automated reordering and stock optimization.',
      techStack: ['Python', 'Scikit-learn', 'Pandas', 'FastAPI', 'PostgreSQL', 'AWS'],
      results: ['35% stock reduction', '92% prediction accuracy', '20% sales increase']
    },
    {
      id: 14,
      title: 'Travel Booking Platform',
      client: 'XX Travel Agency',
      category: 'ecommerce',
      budget: '55 Lakhs',
      duration: '7 months',
      description: 'Complete travel booking system with flights, hotels, packages, and travel insurance integration with dynamic pricing engine.',
      techStack: ['Next.js', 'Node.js', 'MongoDB', 'Redis', 'Amadeus API', 'Stripe'],
      results: ['1M+ bookings/year', '500+ hotel partners', '20% conversion increase']
    },
    {
      id: 15,
      title: 'Smart Parking Solution',
      client: 'XX City Services',
      category: 'mobile',
      budget: '32 Lakhs',
      duration: '4 months',
      description: 'IoT-based smart parking app with real-time slot availability, reservation system, and automated payment processing.',
      techStack: ['React Native', 'Node.js', 'MongoDB', 'IoT Sensors', 'AWS IoT', 'Stripe'],
      results: ['50+ parking lots', '100K+ users', '40% time savings']
    },
    {
      id: 16,
      title: 'Legal Document Automation',
      client: 'XX Law Associates',
      category: 'ai-ml',
      budget: '28 Lakhs',
      duration: '4 months',
      description: 'NLP-powered legal document analysis, contract review, and automated document generation system for law firms.',
      techStack: ['Python', 'spaCy', 'Transformers', 'FastAPI', 'PostgreSQL', 'Docker'],
      results: ['70% faster document review', '200+ templates', '95% accuracy']
    },
    {
      id: 17,
      title: 'Fitness & Wellness App',
      client: 'XX Fitness',
      category: 'mobile',
      budget: '36 Lakhs',
      duration: '5 months',
      description: 'Comprehensive fitness app with workout tracking, nutrition planning, trainer connections, and wearable device integration.',
      techStack: ['Flutter', 'Firebase', 'Node.js', 'MongoDB', 'HealthKit', 'Google Fit'],
      results: ['250K+ active users', '4.8 app rating', '60% retention rate']
    },
    {
      id: 18,
      title: 'Manufacturing ERP System',
      client: 'XX Industries',
      category: 'enterprise',
      budget: '72 Lakhs',
      duration: '12 months',
      description: 'Complete ERP solution with production planning, quality control, inventory, procurement, and financial management modules.',
      techStack: ['Angular', 'Java', 'Spring Boot', 'Oracle', 'Kubernetes', 'Power BI'],
      results: ['30% production efficiency', '5 factories integrated', 'Real-time visibility']
    },
    {
      id: 19,
      title: 'Customer Support Chatbot',
      client: 'XX Telecom',
      category: 'ai-ml',
      budget: '25 Lakhs',
      duration: '3 months',
      description: 'AI-powered customer support chatbot handling 80% of queries automatically with seamless human agent escalation.',
      techStack: ['Python', 'Rasa', 'NLP', 'PostgreSQL', 'React', 'AWS Lambda'],
      results: ['80% query automation', '60% cost reduction', '24/7 availability']
    },
    {
      id: 20,
      title: 'Auction Marketplace',
      client: 'XX Auction House',
      category: 'ecommerce',
      budget: '45 Lakhs',
      duration: '6 months',
      description: 'Real-time bidding platform for art, antiques, and collectibles with live streaming, authentication, and secure payments.',
      techStack: ['Next.js', 'Node.js', 'MongoDB', 'WebSocket', 'Stripe', 'AWS'],
      results: ['$5M+ in transactions', '10K+ items sold', 'Global reach']
    },
    {
      id: 21,
      title: 'Loan Origination System',
      client: 'XX NBFC',
      category: 'fintech',
      budget: '58 Lakhs',
      duration: '8 months',
      description: 'End-to-end loan management system with credit scoring, document verification, disbursement, and collection management.',
      techStack: ['React', 'Java', 'Spring Boot', 'PostgreSQL', 'AWS', 'Aadhaar API'],
      results: ['50K+ loans processed', '70% faster approval', 'RBI compliant']
    },
    {
      id: 22,
      title: 'Restaurant POS System',
      client: 'XX Restaurant Chain',
      category: 'enterprise',
      budget: '28 Lakhs',
      duration: '4 months',
      description: 'Cloud-based POS system with table management, kitchen display, inventory tracking, and multi-outlet analytics.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Redis', 'Stripe', 'AWS'],
      results: ['100+ outlets', '25% faster service', 'Real-time reporting']
    },
    {
      id: 23,
      title: 'Video Streaming Platform',
      client: 'XX Media',
      category: 'web',
      budget: '68 Lakhs',
      duration: '9 months',
      description: 'OTT video streaming platform with content management, DRM protection, adaptive streaming, and subscription management.',
      techStack: ['React', 'Node.js', 'MongoDB', 'AWS MediaConvert', 'CloudFront', 'Stripe'],
      results: ['500K+ subscribers', '10K+ hours content', '4K streaming']
    },
    {
      id: 24,
      title: 'Agriculture Monitoring System',
      client: 'XX Agritech',
      category: 'ai-ml',
      budget: '35 Lakhs',
      duration: '5 months',
      description: 'IoT and AI-based crop monitoring system with weather prediction, pest detection, and irrigation optimization.',
      techStack: ['Python', 'TensorFlow', 'IoT', 'React Native', 'AWS IoT', 'MongoDB'],
      results: ['30% water savings', '20% yield increase', '5K+ farms covered']
    },
    {
      id: 25,
      title: 'Pharmacy Management System',
      client: 'XX Pharma Retail',
      category: 'enterprise',
      budget: '32 Lakhs',
      duration: '5 months',
      description: 'Complete pharmacy management with prescription handling, inventory tracking, expiry alerts, and compliance reporting.',
      techStack: ['Angular', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Razorpay'],
      results: ['500+ pharmacies', 'Zero stockouts', 'Drug license compliant']
    },
    {
      id: 26,
      title: 'Social Commerce Platform',
      client: 'XX Social Selling',
      category: 'ecommerce',
      budget: '48 Lakhs',
      duration: '6 months',
      description: 'Social selling platform enabling influencers to create storefronts with commission tracking and affiliate management.',
      techStack: ['Next.js', 'Node.js', 'MongoDB', 'Redis', 'Stripe', 'AWS'],
      results: ['10K+ sellers', '$2M+ GMV', '50% influencer growth']
    },
    {
      id: 27,
      title: 'Ride Sharing Application',
      client: 'XX Mobility',
      category: 'mobile',
      budget: '72 Lakhs',
      duration: '10 months',
      description: 'Complete ride-sharing platform with driver onboarding, real-time matching, fare estimation, and safety features.',
      techStack: ['React Native', 'Go', 'PostgreSQL', 'Redis', 'Google Maps', 'Firebase'],
      results: ['100K+ rides/month', '5 cities', '4.5 app rating']
    },
    {
      id: 28,
      title: 'Expense Management System',
      client: 'XX Corporate',
      category: 'enterprise',
      budget: '22 Lakhs',
      duration: '3 months',
      description: 'Employee expense tracking with receipt scanning, approval workflows, policy compliance, and accounting integration.',
      techStack: ['React', 'Node.js', 'MongoDB', 'OCR', 'AWS', 'QuickBooks API'],
      results: ['80% faster approvals', '30K+ employees', 'Audit compliant']
    },
    {
      id: 29,
      title: 'Sentiment Analysis Dashboard',
      client: 'XX Brand Agency',
      category: 'ai-ml',
      budget: '18 Lakhs',
      duration: '3 months',
      description: 'Real-time social media sentiment analysis with brand monitoring, competitor analysis, and trend detection.',
      techStack: ['Python', 'BERT', 'FastAPI', 'React', 'MongoDB', 'AWS'],
      results: ['50+ brands tracked', 'Real-time alerts', '90% accuracy']
    },
    {
      id: 30,
      title: 'Event Management Platform',
      client: 'XX Events Co',
      category: 'web',
      budget: '38 Lakhs',
      duration: '5 months',
      description: 'End-to-end event management with ticketing, venue booking, vendor management, and attendee engagement tools.',
      techStack: ['Vue.js', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'Twilio'],
      results: ['1000+ events/year', '500K+ tickets sold', '40% organizer growth']
    },
    {
      id: 31,
      title: 'Wealth Management Portal',
      client: 'XX Wealth Advisors',
      category: 'fintech',
      budget: '62 Lakhs',
      duration: '8 months',
      description: 'Comprehensive wealth management platform with portfolio tracking, robo-advisory, tax optimization, and goal planning.',
      techStack: ['React', 'Python', 'Django', 'PostgreSQL', 'AWS', 'NSE/BSE APIs'],
      results: ['$100M+ AUM', '5K+ investors', 'SEBI compliant']
    },
    {
      id: 32,
      title: 'Document Management System',
      client: 'XX Legal Services',
      category: 'web',
      budget: '26 Lakhs',
      duration: '4 months',
      description: 'Secure document management with version control, e-signatures, workflow automation, and compliance tracking.',
      techStack: ['React', 'Node.js', 'MongoDB', 'AWS S3', 'DocuSign API', 'Elasticsearch'],
      results: ['1M+ documents', '100+ organizations', 'ISO 27001 compliant']
    },
    {
      id: 33,
      title: 'Quality Inspection AI',
      client: 'XX Auto Parts',
      category: 'ai-ml',
      budget: '42 Lakhs',
      duration: '6 months',
      description: 'Computer vision-based quality inspection system detecting manufacturing defects with 99% accuracy on production lines.',
      techStack: ['Python', 'OpenCV', 'TensorFlow', 'FastAPI', 'PostgreSQL', 'Edge Computing'],
      results: ['99% defect detection', '50% QC cost reduction', '3 production lines']
    },
    {
      id: 34,
      title: 'Property Management System',
      client: 'XX Property Group',
      category: 'web',
      budget: '35 Lakhs',
      duration: '5 months',
      description: 'Complete property management with tenant portal, rent collection, maintenance requests, and financial reporting.',
      techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS', 'Twilio'],
      results: ['5K+ properties', '20K+ tenants', '90% rent collection rate']
    },
    {
      id: 35,
      title: 'Grocery Delivery App',
      client: 'XX Fresh Mart',
      category: 'mobile',
      budget: '52 Lakhs',
      duration: '7 months',
      description: 'Hyperlocal grocery delivery app with inventory sync, slot management, subscription services, and loyalty program.',
      techStack: ['Flutter', 'Node.js', 'MongoDB', 'Redis', 'Firebase', 'Razorpay'],
      results: ['200K+ users', '10-min delivery', '8 cities']
    },
    {
      id: 36,
      title: 'Digital Lending Platform',
      client: 'XX Finserv',
      category: 'fintech',
      budget: '75 Lakhs',
      duration: '10 months',
      description: 'End-to-end digital lending with AI-based credit scoring, instant decisioning, and automated disbursement.',
      techStack: ['React', 'Python', 'Django', 'PostgreSQL', 'ML Models', 'AWS'],
      results: ['$50M+ disbursed', '2-min approval', 'Low NPA ratio']
    },
    {
      id: 37,
      title: 'Appointment Booking System',
      client: 'XX Clinics',
      category: 'web',
      budget: '22 Lakhs',
      duration: '3 months',
      description: 'Multi-location appointment scheduling with doctor management, reminders, waitlist, and patient feedback.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Twilio', 'Google Calendar', 'AWS'],
      results: ['100+ clinics', '50K+ appointments/month', '30% no-show reduction']
    },
    {
      id: 38,
      title: 'Fraud Detection System',
      client: 'XX Payment Gateway',
      category: 'ai-ml',
      budget: '55 Lakhs',
      duration: '7 months',
      description: 'Real-time transaction fraud detection using ensemble ML models with adaptive learning and instant blocking.',
      techStack: ['Python', 'XGBoost', 'Kafka', 'PostgreSQL', 'Redis', 'AWS'],
      results: ['99.5% fraud detection', '0.1% false positives', '$10M+ saved']
    },
    {
      id: 39,
      title: 'Sports Betting Platform',
      client: 'XX Gaming',
      category: 'web',
      budget: '82 Lakhs',
      duration: '11 months',
      description: 'Real-time sports betting platform with live odds, in-play betting, fantasy sports, and responsible gaming features.',
      techStack: ['React', 'Go', 'PostgreSQL', 'Redis', 'WebSocket', 'AWS'],
      results: ['100K+ users', 'Sub-second updates', 'Gaming license compliant']
    },
    {
      id: 40,
      title: 'Job Portal Platform',
      client: 'XX Careers',
      category: 'web',
      budget: '38 Lakhs',
      duration: '5 months',
      description: 'Job marketplace with AI-powered matching, resume parsing, video interviews, and applicant tracking system.',
      techStack: ['Next.js', 'Node.js', 'Elasticsearch', 'MongoDB', 'AWS', 'Stripe'],
      results: ['500K+ job seekers', '10K+ companies', '80% match accuracy']
    },
    {
      id: 41,
      title: 'Field Service Management',
      client: 'XX Services',
      category: 'mobile',
      budget: '42 Lakhs',
      duration: '6 months',
      description: 'Field technician management with job scheduling, route optimization, inventory tracking, and digital signatures.',
      techStack: ['React Native', 'Node.js', 'MongoDB', 'Google Maps', 'Firebase', 'AWS'],
      results: ['5K+ technicians', '30% efficiency gain', 'Real-time tracking']
    },
    {
      id: 42,
      title: 'Customer Data Platform',
      client: 'XX Marketing Tech',
      category: 'enterprise',
      budget: '65 Lakhs',
      duration: '9 months',
      description: 'Unified customer data platform with identity resolution, segmentation, journey orchestration, and analytics.',
      techStack: ['React', 'Python', 'Spark', 'PostgreSQL', 'Kafka', 'AWS'],
      results: ['10M+ customer profiles', '360-degree view', '40% campaign ROI increase']
    },
    {
      id: 43,
      title: 'Subscription Box Platform',
      client: 'XX Subscription Co',
      category: 'ecommerce',
      budget: '32 Lakhs',
      duration: '4 months',
      description: 'Subscription box management with customizable preferences, recurring billing, and churn prediction.',
      techStack: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'ML', 'AWS'],
      results: ['50K+ subscribers', '15% churn reduction', 'Automated renewals']
    },
    {
      id: 44,
      title: 'Home Automation Platform',
      client: 'XX Smart Home',
      category: 'mobile',
      budget: '48 Lakhs',
      duration: '7 months',
      description: 'IoT-based home automation with device control, energy monitoring, voice commands, and security integration.',
      techStack: ['React Native', 'Node.js', 'MQTT', 'MongoDB', 'AWS IoT', 'Alexa Skills'],
      results: ['20K+ homes', '100+ device types', '30% energy savings']
    },
    {
      id: 45,
      title: 'Invoice Processing AI',
      client: 'XX Accounting Services',
      category: 'ai-ml',
      budget: '28 Lakhs',
      duration: '4 months',
      description: 'Automated invoice processing with OCR, data extraction, validation, and accounting system integration.',
      techStack: ['Python', 'Tesseract', 'NLP', 'FastAPI', 'PostgreSQL', 'AWS'],
      results: ['90% automation rate', '5K+ invoices/day', '99% accuracy']
    },
    {
      id: 46,
      title: 'Learning Management System',
      client: 'XX Corporate Training',
      category: 'web',
      budget: '35 Lakhs',
      duration: '5 months',
      description: 'Enterprise LMS with SCORM compliance, skill assessments, learning paths, and certification management.',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'SCORM', 'Stripe'],
      results: ['100K+ learners', '1K+ courses', '85% completion rate']
    },
    {
      id: 47,
      title: 'Payment Reconciliation System',
      client: 'XX Financial Services',
      category: 'fintech',
      budget: '38 Lakhs',
      duration: '5 months',
      description: 'Automated payment reconciliation across multiple payment gateways with exception handling and reporting.',
      techStack: ['Python', 'Pandas', 'PostgreSQL', 'Airflow', 'React', 'AWS'],
      results: ['$100M+ reconciled daily', '99.9% accuracy', '70% time savings']
    },
    {
      id: 48,
      title: 'Influencer Marketing Platform',
      client: 'XX Digital Agency',
      category: 'web',
      budget: '42 Lakhs',
      duration: '6 months',
      description: 'Influencer discovery and campaign management with performance analytics, contract management, and ROI tracking.',
      techStack: ['Next.js', 'Node.js', 'MongoDB', 'Python', 'Social APIs', 'AWS'],
      results: ['50K+ influencers', '1K+ campaigns', '3x ROI average']
    },
    {
      id: 49,
      title: 'Warehouse Management System',
      client: 'XX Logistics Hub',
      category: 'enterprise',
      budget: '52 Lakhs',
      duration: '7 months',
      description: 'Complete WMS with barcode/RFID integration, pick-pack-ship, space optimization, and workforce management.',
      techStack: ['Angular', 'Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'AWS'],
      results: ['5 warehouses', '99.9% accuracy', '40% faster fulfillment']
    },
    {
      id: 50,
      title: 'Voice Assistant Integration',
      client: 'XX Banking Corp',
      category: 'ai-ml',
      budget: '45 Lakhs',
      duration: '6 months',
      description: 'Voice-enabled banking assistant with account inquiries, transactions, and customer service automation.',
      techStack: ['Python', 'ASR', 'NLU', 'Text-to-Speech', 'AWS Lex', 'Twilio'],
      results: ['1M+ voice interactions', '75% query resolution', 'Multi-language support']
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.techStack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div suppressHydrationWarning className="min-h-screen dark:bg-dark-900 light:bg-white">
      <SEOHead
        title="Portfolio - DEV SEC IT | 500+ Successful Projects | Custom Software Development"
        description="Explore DEV SEC IT's portfolio of 500+ successful software development projects. Enterprise solutions, AI/ML, mobile apps, e-commerce platforms with budgets above 5 Lakhs. View our work across India."
        keywords="software development portfolio, IT projects India, custom software projects, enterprise solutions, AI ML projects, mobile app development, e-commerce development, web development portfolio, best IT company projects"
        canonicalUrl="https://devsecit.com/portfolio"
        schemas={[portfolioSchema]}
      />

      <Header activePage="portfolio" />

      {/* Hero Section */}
          <section className="relative pt-32 pb-20 overflow-hidden dark:bg-dark-900 light:bg-white">
            <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-primary-900/20 dark:via-dark-900 dark:to-blue-900/20 light:bg-gradient-to-br light:from-primary-50 light:via-white light:to-blue-50"></div>
            <div className="absolute top-20 left-10 w-72 h-72 dark:bg-primary-500/10 light:bg-primary-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-block mb-4 px-4 py-2 dark:bg-primary-500/10 light:bg-primary-50 rounded-full border dark:border-primary-500/30 light:border-primary-200">
                <span className="text-primary-400 dark:text-primary-400 light:text-primary-600 font-semibold text-sm flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  500+ Successful Projects
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6 leading-tight dark:text-white light:text-gray-900">
                Our <span className="text-gradient">Portfolio</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl dark:text-gray-400 light:text-gray-600 mb-8 max-w-3xl mx-auto">
                From startups to enterprises, we've delivered transformative software solutions across industries. All projects with budgets above 5 Lakhs.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {[
                  { value: '500+', label: 'Projects Delivered' },
                  { value: '100+', label: 'Enterprise Clients' },
                  { value: '12+', label: 'Industries' },
                  { value: '5L+', label: 'Min Budget' }
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
                    <div className="dark:text-gray-400 light:text-gray-600 mt-1 text-xs sm:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Filter Section */}
          <section className="py-8 dark:bg-dark-800/50 light:bg-gray-50 sticky top-16 z-40 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex flex-wrap justify-center gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-4 py-2 rounded-lg font-medium text-sm transition ${
                        selectedCategory === cat.id
                          ? 'bg-gradient-to-r from-primary-500 to-blue-600 text-white'
                          : 'dark:bg-dark-700 light:bg-gray-200 dark:text-gray-300 light:text-gray-700 hover:bg-primary-500/20'
                      }`}
                    >
                      {cat.name} ({cat.count})
                    </button>
                  ))}
                </div>
                <div className="relative w-full md:w-64">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 dark:text-gray-400 light:text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search projects or tech..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-lg dark:bg-dark-700 light:bg-white dark:text-white light:text-gray-900 dark:border-dark-600 light:border-gray-300 border focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Projects Grid */}
          <section className="py-16 dark:bg-dark-900 light:bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-8">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="dark:bg-dark-800/50 light:bg-gray-50 p-6 rounded-xl border dark:border-dark-700 light:border-gray-200 hover:border-primary-500/50 transition-all hover:shadow-lg group"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full dark:bg-primary-500/20 light:bg-primary-50 text-primary-400 mb-2">
                          {categories.find(c => c.id === project.category)?.name}
                        </span>
                        <h3 className="text-xl font-bold dark:text-white light:text-gray-900">{project.title}</h3>
                        <p className="text-sm dark:text-gray-500 light:text-gray-500 flex items-center gap-1 mt-1">
                          <Building2 className="w-4 h-4" />
                          {project.client}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary-400 flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          {project.budget}
                        </div>
                        <div className="text-xs dark:text-gray-400 light:text-gray-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {project.duration}
                        </div>
                      </div>
                    </div>

                    <p className="dark:text-gray-400 light:text-gray-600 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <p className="text-xs font-semibold dark:text-gray-300 light:text-gray-700 mb-2">Tech Stack:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, j) => (
                          <span key={j} className="px-2 py-1 text-xs dark:bg-dark-700 light:bg-gray-200 rounded-full dark:text-gray-400 light:text-gray-600">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-t dark:border-dark-700 light:border-gray-200 pt-4">
                      <p className="text-xs font-semibold dark:text-gray-300 light:text-gray-700 mb-2">Key Results:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.results.map((result, j) => (
                          <span key={j} className="flex items-center gap-1 text-xs dark:text-green-400 light:text-green-600">
                            <CheckCircle className="w-3 h-3" />
                            {result}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredProjects.length === 0 && (
                <div className="text-center py-12">
                  <p className="dark:text-gray-400 light:text-gray-600">No projects found matching your criteria.</p>
                </div>
              )}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 dark:bg-dark-800/50 light:bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 dark:text-white light:text-gray-900">
                Ready to Start Your <span className="text-gradient">Project?</span>
              </h2>
              <p className="text-lg dark:text-gray-400 light:text-gray-600 mb-8">
                Let's discuss your requirements and create something amazing together.
              </p>
              <Link 
                href="/#contact" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <Briefcase className="w-5 h-5" />
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
