
import type { NextPage } from 'next';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FAQ } from '../components/FAQ';
import { Testimonials } from '../components/Testimonials';
import {
  Rocket, GraduationCap, Briefcase, Globe, RefreshCw, Shield, Brain,
  Cloud, Bot, Zap, Lightbulb, Building2, BookOpen, Clock, Search,
  DollarSign, Target, TrendingUp, Sparkles, Smartphone, Phone,
  MessageCircle, Award, Users, HeadphonesIcon, ChevronLeft, ChevronRight, Check
} from 'lucide-react';
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateServiceSchema,
  generateAggregateOfferSchema
} from '../lib/seoSchema';

const Home: NextPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi DEV SEC IT!\n\n*Project Inquiry*\n\nName: ${formData.name}\nEmail: ${formData.email}\n${formData.company ? `Company: ${formData.company}\n` : ''}Project Details:\n${formData.message}`;
    const whatsappLink = `https://wa.me/918101979855?text=${encodeURIComponent(whatsappMessage)}`;
    window.location.href = whatsappLink;
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const seoKeywords = "professional IT courses, web development course, cybersecurity training, DevOps certification, cloud computing courses, AI machine learning training, custom software development, IT services India";

  const schemas = [
    generateOrganizationSchema(),
    generateLocalBusinessSchema(),
    generateServiceSchema("Custom Software Development", "Professional custom software development and cybersecurity solutions in West Bengal, India with expertise in full-stack development, API integration, mobile applications, AI/ML, and enterprise-grade solutions"),
    generateAggregateOfferSchema()
  ];

  const featuredCourses = [
    {
      title: 'Full-Stack Web Development',
      price: '₹24,999',
      duration: '4–6 Months',
      Icon: Globe,
      slug: 'full-stack-web-development',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop',
      description: 'Master React, Node.js, databases, and deployment. Build production-ready web applications from scratch.',
      highlights: ['Live Projects', 'React & Node.js', 'Database Design', 'Job Support']
    },
    {
      title: 'DevSecOps',
      price: '₹29,999',
      duration: '3 Months',
      Icon: RefreshCw,
      slug: 'devsecops',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
      description: 'Learn CI/CD pipelines, containerization with Docker & Kubernetes, and security automation.',
      highlights: ['Docker & K8s', 'CI/CD Pipelines', 'Security Automation', 'Cloud Deployment']
    },
    {
      title: 'Cyber Security & Ethical Hacking',
      price: '₹34,999',
      duration: '4–6 Months',
      Icon: Shield,
      slug: 'cyber-security-ethical-hacking',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
      description: 'Become a certified ethical hacker. Master penetration testing, vulnerability assessment, and security tools.',
      highlights: ['Penetration Testing', 'OWASP Top 10', 'Certification', 'Real-world Labs']
    },
    {
      title: 'AI & Machine Learning',
      price: '₹34,999',
      duration: '4–6 Months',
      Icon: Brain,
      slug: 'ai-machine-learning',
      image: 'https://images.unsplash.com/photo-1677442135136-760c813028c0?w=600&h=400&fit=crop',
      description: 'Build intelligent applications with Python, TensorFlow, and PyTorch. From basics to advanced deep learning.',
      highlights: ['Python & TensorFlow', 'Deep Learning', 'NLP & Computer Vision', 'Portfolio Projects']
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredCourses.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredCourses.length) % featuredCourses.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredCourses.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredCourses.length]);

  const serviceCategories = [
    { title: 'Custom Software Development', desc: 'Web, mobile, enterprise solutions', Icon: Rocket, link: '/services' },
    { title: 'Cybersecurity & Compliance', desc: 'Secure-by-design approach', Icon: Shield, link: '/services' },
    { title: 'Cloud Solutions & DevOps', desc: 'AWS, Azure, GCP & CI/CD', Icon: Cloud, link: '/services' },
    { title: 'AI & Automation', desc: 'ML models & process automation', Icon: Bot, link: '/services' },
    { title: 'API Development', desc: '7-day MVP delivery', Icon: Zap, link: '/services' },
    { title: 'IT Consulting', desc: 'Strategy & digital transformation', Icon: Lightbulb, link: '/services' }
  ];

  const pricingPlans = [
    {
      name: 'Startup MVP',
      price: '₹99,999',
      Icon: Rocket,
      description: 'Perfect for startups and small projects',
      features: ['Basic Web/Mobile App', 'Up to 5 Core Features', '2-4 Week Delivery', 'Basic Support', '1 Revision Round']
    },
    {
      name: 'Professional',
      price: '₹299,999',
      Icon: Briefcase,
      highlight: true,
      description: 'Ideal for growing businesses',
      features: ['Full-Stack Application', 'Up to 15 Features', '4-8 Week Delivery', 'Priority Support', '3 Revision Rounds', 'CI/CD Pipeline', 'Security Audit']
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      Icon: Building2,
      description: 'For large-scale enterprise solutions',
      features: ['Unlimited Features', 'Dedicated Team', '24/7 Premium Support', 'Unlimited Revisions', 'Full DevOps Setup', 'Penetration Testing', 'SLA Guarantee']
    }
  ];

  return (
    <div suppressHydrationWarning className="min-h-screen dark:bg-dark-900 light:bg-white">
      <SEOHead
        title="DEV SEC IT - India's Top IT & Software Development Company | Custom Software Development"
        description="DEV SEC IT is India's leading custom software development company. Top IT services across Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Kolkata. AI solutions, cybersecurity, professional IT training. Best CTC up to 36 LPA. 500+ projects delivered."
        keywords={seoKeywords}
        canonicalUrl="https://devsecit.com"
        schemas={schemas}
      />

      <Header activePage="home" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden dark:bg-dark-900 light:bg-white">
        <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-primary-900/20 dark:via-dark-900 dark:to-blue-900/20 light:bg-gradient-to-br light:from-primary-50 light:via-white light:to-blue-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 dark:bg-primary-500/10 light:bg-primary-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 dark:bg-blue-500/10 light:bg-blue-400/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 dark:bg-primary-500/10 light:bg-primary-50 rounded-full border dark:border-primary-500/30 light:border-primary-200">
              <span className="text-primary-400 dark:text-primary-400 light:text-primary-600 font-semibold text-sm">Elite Development & Training Platform</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6 leading-tight dark:text-white light:text-gray-900">
              Custom Software Development <br />
              <span className="text-gradient">& Professional IT Training</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl dark:text-gray-400 light:text-gray-600 mb-8 max-w-3xl mx-auto">
              Master cutting-edge technologies with 10 professional courses or build enterprise-grade applications. Everything you need to succeed in one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center flex-wrap">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-2xl transition-all transform hover:scale-105 text-center flex items-center justify-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                Start Your Project
              </a>
              <Link
                href="/courses"
                className="w-full sm:w-auto px-8 py-4 border-2 dark:border-primary-500/50 light:border-primary-400 rounded-lg font-bold dark:text-gray-100 light:text-gray-900 hover:shadow-lg transition text-center flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-5 h-5" />
                Explore Courses
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto px-8 py-4 border-2 dark:border-blue-500/50 light:border-blue-400 rounded-lg font-bold dark:text-blue-300 light:text-blue-600 hover:shadow-lg transition text-center flex items-center justify-center gap-2"
              >
                <Briefcase className="w-5 h-5" />
                Browse Services
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { value: '500+', label: 'Projects' },
                { value: '10+', label: 'Years' },
                { value: '7 Days', label: 'MVP' },
                { value: '99.9%', label: 'Uptime' }
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

      {/* Featured Courses Section */}
      <section className="py-20 dark:bg-dark-800/50 light:bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 dark:text-white light:text-gray-900">
              Featured <span className="text-gradient">Courses</span>
            </h2>
            <p className="text-lg dark:text-gray-400 light:text-gray-600">Start your journey to mastery with industry-leading training</p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-blue-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all -translate-x-4 md:translate-x-0"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-blue-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all translate-x-4 md:translate-x-0"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Carousel Track */}
            <div className="overflow-hidden mx-8 md:mx-16">
              <div
                className="flex transition-transform duration-500 ease-out gap-4 md:gap-6"
                style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
              >
                {featuredCourses.map((course, i) => (
                  <div key={i} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0">
                    {/* Premium Card with Gradient Border */}
                    <div className="relative group h-full">
                      {/* Gradient Border Effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 via-blue-500 to-purple-600 rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-300"></div>

                      {/* Card Content */}
                      <div className="relative h-full dark:bg-dark-900 light:bg-white backdrop-blur-xl rounded-2xl overflow-hidden">
                        {/* Image Section */}
                        <div className="relative h-40 md:h-48 overflow-hidden">
                          <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent"></div>
                          {/* Icon Badge */}
                          <div className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/90 to-blue-600/90 backdrop-blur flex items-center justify-center">
                            <course.Icon className="w-5 h-5 text-white" />
                          </div>
                          {/* Price Badge */}
                          <div className="absolute bottom-3 left-3">
                            <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-primary-500 to-blue-600 text-white font-bold text-sm">
                              {course.price}
                            </span>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-4 md:p-5">
                          <h3 className="text-lg font-bold mb-2 dark:text-white light:text-gray-900 line-clamp-1">
                            {course.title}
                          </h3>
                          <p className="dark:text-gray-400 light:text-gray-600 mb-4 text-sm line-clamp-2">
                            {course.description}
                          </p>

                          {/* Highlights - Compact */}
                          <div className="grid grid-cols-2 gap-2 mb-4">
                            {course.highlights.slice(0, 4).map((highlight, j) => (
                              <div key={j} className="flex items-center gap-1.5 text-xs">
                                <Check className="w-3 h-3 text-primary-400 flex-shrink-0" />
                                <span className="dark:text-gray-300 light:text-gray-700 truncate">{highlight}</span>
                              </div>
                            ))}
                          </div>

                          {/* Footer */}
                          <div className="flex items-center justify-between pt-3 border-t dark:border-dark-700 light:border-gray-200">
                            <div className="flex items-center gap-1.5 text-xs dark:text-gray-400 light:text-gray-600">
                              <Clock className="w-3.5 h-3.5" />
                              <span>{course.duration}</span>
                            </div>
                            <Link
                              href={`/courses/${course.slug}`}
                              className="px-4 py-1.5 bg-gradient-to-r from-primary-500 to-blue-600 text-white font-semibold rounded-lg text-sm hover:shadow-lg hover:shadow-primary-500/50 transition-all hover:scale-105"
                            >
                              Enroll →
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {featuredCourses.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentSlide
                    ? 'bg-gradient-to-r from-primary-500 to-blue-600 w-8'
                    : 'dark:bg-dark-600 light:bg-gray-300 hover:bg-primary-400'
                    }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center space-y-3 mt-12">
            <Link href="/courses" className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-lg transition">
              <BookOpen className="w-5 h-5" />
              View All 10 Courses
            </Link>
            <p className="text-sm dark:text-gray-400 light:text-gray-600 flex items-center justify-center gap-2 flex-wrap">
              <span className="flex items-center gap-1"><Award className="w-4 h-4" /> 100% Practical</span> •
              <span className="flex items-center gap-1"><Users className="w-4 h-4" /> Job Support</span> •
              <span className="flex items-center gap-1"><Award className="w-4 h-4" /> Certifications</span>
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 dark:bg-dark-900 light:bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 dark:text-white light:text-gray-900">
              IT <span className="text-gradient">Services</span>
            </h2>
            <p className="text-lg dark:text-gray-400 light:text-gray-600">22+ comprehensive services for every technology need</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {serviceCategories.map((service, i) => (
              <Link key={i} href={service.link} className="dark:bg-dark-800/50 light:bg-gray-50 p-6 rounded-lg dark:border dark:border-dark-700 light:border light:border-gray-200 hover:shadow-lg hover:border-primary-500/50 transition group">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.Icon className="w-7 h-7 text-primary-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 dark:text-white light:text-gray-900">{service.title}</h3>
                <p className="text-sm dark:text-gray-400 light:text-gray-600 mb-3">{service.desc}</p>
                <div className="text-primary-400 font-semibold text-sm hover:text-primary-300 flex items-center gap-1">
                  Explore <span>→</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services" className="inline-flex items-center gap-2 px-8 py-3 dark:bg-dark-700 light:bg-gray-100 rounded-lg font-bold dark:text-white light:text-gray-900 hover:shadow-lg transition">
              <Search className="w-5 h-5" />
              Browse All 22 Services
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 dark:bg-dark-800/50 light:bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 dark:text-white light:text-gray-900">
              Flexible <span className="text-gradient">Pricing</span>
            </h2>
            <p className="text-lg dark:text-gray-400 light:text-gray-600 max-w-2xl mx-auto">
              Transparent pricing for every project size. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {pricingPlans.map((plan, i) => (
              <div key={i} className="relative group">
                {/* Popular Badge */}
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <span className="px-6 py-2 bg-gradient-to-r from-primary-500 to-blue-600 text-white text-sm font-bold rounded-full shadow-lg shadow-primary-500/50 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Gradient Border Effect */}
                <div className={`absolute -inset-0.5 rounded-2xl transition duration-300 ${plan.highlight
                  ? 'bg-gradient-to-r from-primary-500 via-blue-500 to-purple-600 opacity-100'
                  : 'bg-gradient-to-r from-primary-500/50 to-blue-500/50 opacity-0 group-hover:opacity-75'
                  } blur`}></div>

                {/* Card Content */}
                <div className={`relative h-full rounded-2xl overflow-hidden ${plan.highlight
                    ? 'dark:bg-dark-800 light:bg-white'
                    : 'dark:bg-dark-900 light:bg-white border dark:border-dark-700 light:border-gray-200'
                  }`}>

                  {/* Header */}
                  <div className={`p-8 text-center ${plan.highlight
                      ? 'bg-gradient-to-br from-primary-600/20 via-blue-600/20 to-purple-600/20 dark:border-b dark:border-primary-500/30'
                      : ''
                    }`}>
                    {/* Icon */}
                    <div className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 ${plan.highlight
                      ? 'bg-gradient-to-br from-primary-500 to-blue-600 shadow-lg shadow-primary-500/50'
                      : 'bg-gradient-to-br from-primary-500/20 to-blue-500/20'
                      } group-hover:scale-110 transition-transform duration-300`}>
                      <plan.Icon className={`w-10 h-10 ${plan.highlight ? 'text-white' : 'text-primary-400'}`} />
                    </div>

                    {/* Plan Name */}
                    <h3 className="text-2xl font-bold mb-2 dark:text-white light:text-gray-900">
                      {plan.name}
                    </h3>
                    <p className="text-sm dark:text-gray-400 light:text-gray-600 mb-6">
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="mb-6">
                      <span className={`text-4xl md:text-5xl font-bold ${plan.highlight ? 'text-gradient' : 'dark:text-white light:text-gray-900'
                        }`}>
                        {plan.price}
                      </span>
                      {plan.price !== 'Custom' && (
                        <span className="text-sm dark:text-gray-500 light:text-gray-500 ml-1">starting</span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="px-8 pb-8">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-3">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlight
                            ? 'bg-gradient-to-r from-primary-500 to-blue-600'
                            : 'bg-gradient-to-r from-primary-500/20 to-blue-500/20'
                            }`}>
                            <Check className={`w-4 h-4 ${plan.highlight ? 'text-white' : 'text-primary-400'}`} />
                          </div>
                          <span className="dark:text-gray-300 light:text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link
                      href="/pricing"
                      className={`block w-full py-4 rounded-xl font-bold text-center transition-all duration-300 ${plan.highlight
                        ? 'bg-gradient-to-r from-primary-500 to-blue-600 text-white shadow-lg shadow-primary-500/50 hover:shadow-xl hover:shadow-primary-500/75 hover:scale-105'
                        : 'border-2 dark:border-primary-500/50 light:border-primary-400 dark:text-white light:text-gray-900 hover:bg-gradient-to-r hover:from-primary-500 hover:to-blue-600 hover:text-white hover:border-transparent'
                        }`}
                    >
                      {plan.price === 'Custom' ? 'Contact Us' : 'Get Started'} →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm dark:text-gray-400 light:text-gray-600 mb-4">
              Need a custom solution? We offer flexible payment plans and dedicated support.
            </p>
            <Link href="/pricing" className="inline-flex items-center gap-2 px-8 py-3 dark:bg-dark-700 light:bg-gray-100 rounded-lg font-bold dark:text-white light:text-gray-900 hover:shadow-lg transition">
              <DollarSign className="w-5 h-5" />
              View Complete Pricing & Details
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 dark:bg-dark-900 light:bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 dark:text-white light:text-gray-900">
              Why Choose <span className="text-gradient">DEV SEC IT?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { Icon: Target, title: 'Industry Expert Team', desc: 'Vetted professionals with 10+ years of experience' },
              { Icon: Zap, title: 'Rapid Delivery', desc: '2-4 week MVPs, 7-day API development' },
              { Icon: Shield, title: 'Security First', desc: 'OWASP compliance, penetration testing built-in' },
              { Icon: TrendingUp, title: 'Scalable Solutions', desc: 'Handle millions of users without breaking' },
              { Icon: HeadphonesIcon, title: '24/7 Support', desc: 'Round-the-clock assistance & maintenance' },
              { Icon: Sparkles, title: 'Quality Guaranteed', desc: '100% test coverage, zero critical vulnerabilities' }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 mx-auto rounded-lg bg-gradient-to-br from-primary-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.Icon className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white light:text-gray-900">{item.title}</h3>
                <p className="dark:text-gray-400 light:text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 dark:bg-dark-800/50 light:bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 dark:text-white light:text-gray-900">
              Ready to <span className="text-gradient">Get Started?</span>
            </h2>
            <p className="text-lg dark:text-gray-400 light:text-gray-600">
              Tell us about your project or learning goals. We&apos;ll respond within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="dark:bg-dark-900 light:bg-white p-8 rounded-xl dark:border dark:border-dark-700 light:border light:border-gray-200 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Company (Optional)"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <textarea
              placeholder="Describe your project or learning goal"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full px-4 py-3 rounded-lg dark:bg-dark-800 light:bg-gray-50 dark:text-white light:text-gray-900 dark:border dark:border-dark-700 light:border light:border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
            <button
              type="submit"
              className="w-full px-8 py-3 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Smartphone className="w-5 h-5" />
              Send via WhatsApp
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm dark:text-gray-400 light:text-gray-600 mb-4">Or reach out directly:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+918101979855" className="px-6 py-2 dark:text-primary-400 light:text-primary-600 font-semibold hover:underline flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                +91 8101 979855
              </a>
              <a href="https://wa.me/918101979855" className="px-6 py-2 dark:text-green-400 light:text-green-600 font-semibold hover:underline flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <Testimonials />

      <Footer />
    </div>
  );
};

export default Home;
