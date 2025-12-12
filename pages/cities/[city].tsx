import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import Head from 'next/head';
import { ThemeToggle } from '../../components/ThemeToggle';
import { getCityBySlug, getAllCitySlugs, City } from '../../lib/cities';
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateServiceSchema,
  generateAggregateOfferSchema
} from '../../lib/seoSchema';

interface CityPageProps {
  city: City;
}

const CityPage: NextPage<CityPageProps> = ({ city }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:sales@devsecit.com?subject=Project Inquiry from ${city.name} - ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nCity: ${city.name}\n\nProject Details:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const schemas = [
    generateOrganizationSchema(),
    generateLocalBusinessSchema(),
    generateServiceSchema(
      `Software Development Services in ${city.name}`,
      `Professional custom software development, cybersecurity, and API integration services in ${city.name}. Serving businesses across ${city.region}.`
    ),
    generateAggregateOfferSchema()
  ];

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://devsecit.com/cities/${city.slug}`,
    name: `DEV SEC IT ${city.name}`,
    description: city.description,
    areaServed: city.state,
    address: {
      '@type': 'PostalAddress',
      addressRegion: city.state,
      addressCountry: 'IN'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What software development services does DEV SEC IT offer in ${city.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `DEV SEC IT offers comprehensive software development services in ${city.name} including custom web applications, mobile app development, API integration, cybersecurity solutions, AI/ML implementation, cloud computing, and enterprise software solutions.`
        }
      },
      {
        '@type': 'Question',
        name: `How long does it take to develop a custom software solution in ${city.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Project timelines vary based on complexity. Simple MVPs can be delivered in 7-14 days, while enterprise solutions typically take 2-6 months. We offer a 90-day launch guarantee for most projects.`
        }
      },
      {
        '@type': 'Question',
        name: `What is the cost of software development services in ${city.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Our pricing is competitive and transparent. API development starts at ₹49,999, web applications from ₹1,49,999, and enterprise solutions are custom-quoted. We offer flexible payment plans for ${city.name} businesses.`
        }
      }
    ]
  };

  // Comprehensive services list
  const services = [
    {
      icon: '💻',
      title: 'Custom Web Application Development',
      desc: `Full-stack web applications tailored for ${city.name} businesses. React, Next.js, Node.js expertise with modern UI/UX.`,
      features: ['Progressive Web Apps', 'Single Page Applications', 'E-commerce Platforms', 'Admin Dashboards']
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      desc: `Native and cross-platform mobile apps for iOS and Android. Flutter and React Native specialists serving ${city.name}.`,
      features: ['iOS & Android Apps', 'Cross-Platform Solutions', 'App Store Optimization', 'Push Notifications']
    },
    {
      icon: '🔌',
      title: 'Custom API Development & Integration',
      desc: `RESTful and GraphQL APIs with 7-day MVP delivery. Connect your systems seamlessly in ${city.name}.`,
      features: ['REST & GraphQL APIs', 'Third-Party Integrations', 'Payment Gateway APIs', 'Real-time APIs']
    },
    {
      icon: '🔒',
      title: 'Cybersecurity Solutions',
      desc: `Enterprise-grade security for ${city.name} businesses. Penetration testing, security audits, and compliance.`,
      features: ['Security Audits', 'Penetration Testing', 'Compliance (GDPR, PCI)', 'Vulnerability Assessment']
    },
    {
      icon: '🤖',
      title: 'AI & Machine Learning',
      desc: `Intelligent automation and ML solutions for ${city.name} enterprises. Chatbots, predictions, and analytics.`,
      features: ['AI Chatbots', 'Predictive Analytics', 'Natural Language Processing', 'Computer Vision']
    },
    {
      icon: '☁️',
      title: 'Cloud Computing & DevOps',
      desc: `AWS, Azure, and GCP solutions for scalable infrastructure. CI/CD pipelines and cloud migration for ${city.name}.`,
      features: ['Cloud Migration', 'AWS/Azure/GCP', 'Kubernetes & Docker', 'CI/CD Automation']
    },
    {
      icon: '🛒',
      title: 'E-Commerce Development',
      desc: `Complete e-commerce solutions for ${city.name} retailers. Shopify, WooCommerce, and custom platforms.`,
      features: ['Custom E-commerce', 'Shopify/WooCommerce', 'Payment Integration', 'Inventory Management']
    },
    {
      icon: '📊',
      title: 'Business Intelligence & Analytics',
      desc: `Data-driven insights for ${city.name} businesses. Dashboards, reporting, and data visualization.`,
      features: ['Custom Dashboards', 'Data Visualization', 'Real-time Analytics', 'KPI Tracking']
    },
    {
      icon: '🏢',
      title: 'Enterprise Software Solutions',
      desc: `ERP, CRM, and HRM systems customized for ${city.name} enterprises. Scalable and secure.`,
      features: ['ERP Systems', 'CRM Solutions', 'HRM Platforms', 'Workflow Automation']
    },
    {
      icon: '🔗',
      title: 'Blockchain Development',
      desc: `Decentralized applications and smart contracts for ${city.name}. Web3 and DeFi solutions.`,
      features: ['Smart Contracts', 'DeFi Applications', 'NFT Platforms', 'Cryptocurrency Integration']
    },
    {
      icon: '🎯',
      title: 'Digital Transformation Consulting',
      desc: `Strategic technology consulting for ${city.name} businesses. Modernize and scale your operations.`,
      features: ['Technology Strategy', 'Process Automation', 'Legacy Modernization', 'Digital Roadmap']
    },
    {
      icon: '🛠️',
      title: 'Maintenance & Support',
      desc: `24/7 support and maintenance for ${city.name} clients. Bug fixes, updates, and performance optimization.`,
      features: ['24/7 Support', 'Bug Fixes', 'Performance Optimization', 'Security Updates']
    }
  ];

  // Tech stack
  const techStack = {
    frontend: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS'],
    backend: ['Node.js', 'Python', 'Java', 'Go', 'PHP', 'Ruby on Rails'],
    mobile: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Ionic'],
    database: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase', 'Supabase'],
    cloud: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean', 'Vercel', 'Netlify'],
    devops: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Terraform', 'Ansible']
  };

  // Process steps
  const processSteps = [
    { step: 1, title: 'Discovery & Planning', desc: `We analyze your ${city.name} business requirements, define project scope, and create a detailed roadmap.`, duration: '1-2 weeks' },
    { step: 2, title: 'Design & Prototyping', desc: 'UI/UX design, wireframes, and interactive prototypes for your approval.', duration: '1-2 weeks' },
    { step: 3, title: 'Development', desc: 'Agile development with sprint-based deliverables and regular updates.', duration: '4-12 weeks' },
    { step: 4, title: 'Testing & QA', desc: 'Comprehensive testing including unit, integration, and user acceptance testing.', duration: '1-2 weeks' },
    { step: 5, title: 'Deployment', desc: 'Seamless deployment to production with zero-downtime strategies.', duration: '1 week' },
    { step: 6, title: 'Support & Maintenance', desc: `Ongoing support and maintenance for ${city.name} clients with SLA guarantees.`, duration: 'Ongoing' }
  ];

  // Industries served
  const industries = [
    { name: 'Healthcare', icon: '🏥', desc: 'HIPAA-compliant healthcare software solutions' },
    { name: 'Finance & Banking', icon: '🏦', desc: 'Secure fintech and banking applications' },
    { name: 'E-Commerce & Retail', icon: '🛍️', desc: 'Online stores and retail management systems' },
    { name: 'Education', icon: '🎓', desc: 'EdTech platforms and learning management systems' },
    { name: 'Real Estate', icon: '🏠', desc: 'Property management and listing platforms' },
    { name: 'Manufacturing', icon: '🏭', desc: 'Industrial automation and ERP solutions' },
    { name: 'Logistics', icon: '🚚', desc: 'Supply chain and fleet management systems' },
    { name: 'Hospitality', icon: '🏨', desc: 'Hotel and restaurant management software' }
  ];

  // FAQs
  const faqs = [
    {
      question: `What software development services does DEV SEC IT offer in ${city.name}?`,
      answer: `DEV SEC IT offers comprehensive software development services in ${city.name} including custom web applications, mobile app development (iOS & Android), API development and integration, cybersecurity solutions, AI/ML implementation, cloud computing, e-commerce development, and enterprise software solutions. We serve businesses of all sizes from startups to large enterprises.`
    },
    {
      question: `How long does it take to develop a custom software solution in ${city.name}?`,
      answer: `Project timelines vary based on complexity and requirements. Simple MVPs and APIs can be delivered in 7-14 days, standard web applications in 4-8 weeks, and complex enterprise solutions in 2-6 months. We offer a 90-day launch guarantee for most projects and use agile methodology to ensure timely delivery.`
    },
    {
      question: `What is the cost of software development services in ${city.name}?`,
      answer: `Our pricing is competitive and transparent. Custom API development starts at ₹49,999, web applications from ₹1,49,999, mobile apps from ₹2,49,999, and enterprise solutions are custom-quoted based on requirements. We offer flexible payment plans and milestone-based billing for ${city.name} businesses.`
    },
    {
      question: `Do you provide ongoing support after project completion?`,
      answer: `Yes, we provide comprehensive post-launch support and maintenance services. Our support packages include 24/7 monitoring, bug fixes, security updates, performance optimization, and feature enhancements. We offer flexible SLA-backed support plans tailored to your needs.`
    },
    {
      question: `Can DEV SEC IT work with existing systems and legacy applications?`,
      answer: `Absolutely! We specialize in legacy system modernization and integration. Our team can integrate new solutions with your existing infrastructure, migrate data from legacy systems, and develop APIs to connect disparate systems. We ensure minimal disruption to your current operations.`
    },
    {
      question: `What technologies does DEV SEC IT specialize in?`,
      answer: `We work with cutting-edge technologies including React, Next.js, Node.js, Python, Flutter, React Native, AWS, Azure, Google Cloud, PostgreSQL, MongoDB, and more. Our team stays updated with the latest technology trends to deliver modern, scalable solutions.`
    }
  ];

  // Stats
  const stats = [
    { value: '500+', label: 'Projects Delivered' },
    { value: '150+', label: 'Happy Clients' },
    { value: '7 Days', label: 'MVP Delivery' },
    { value: '99.9%', label: 'Uptime SLA' }
  ];

  // Why choose us
  const whyChooseUs = [
    { title: 'Local Expertise', desc: `Deep understanding of ${city.name} market dynamics and business requirements.`, icon: '📍' },
    { title: 'Rapid Delivery', desc: '7-day API MVP delivery and 90-day launch guarantee for complex projects.', icon: '⚡' },
    { title: 'Security First', desc: 'Enterprise-grade cybersecurity integrated into every solution we build.', icon: '🛡️' },
    { title: 'Transparent Pricing', desc: 'No hidden costs. Clear milestones and deliverables from day one.', icon: '💰' },
    { title: 'Dedicated Support', desc: '24/7 support with dedicated account managers for all clients.', icon: '🎧' },
    { title: 'Agile Methodology', desc: 'Flexible, iterative development with regular client feedback loops.', icon: '🔄' }
  ];

  return (
    <div className="min-h-screen dark:bg-dark-900 light:bg-white transition-colors duration-300">
      <Head>
        <title>{`Best Software Development Company in ${city.name} | Web & Mobile App Development | DEV SEC IT`}</title>
        <meta name="description" content={`Leading software development company in ${city.name}. Custom web apps, mobile apps, APIs, cybersecurity, AI/ML solutions. 500+ projects delivered. 7-day MVP guarantee. Contact us today!`} />
        <meta name="keywords" content={city.keywords} />
        <link rel="canonical" href={`https://devsecit.com/cities/${city.slug}`} />
        <meta property="og:title" content={`Top Software Development Services in ${city.name} | DEV SEC IT`} />
        <meta property="og:description" content={`Professional software development, web apps, mobile apps, and IT services in ${city.name}. Custom solutions for startups and enterprises. Free consultation!`} />
        <meta property="og:url" content={`https://devsecit.com/cities/${city.slug}`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Software Development in ${city.name} | DEV SEC IT`} />
        <meta name="twitter:description" content={city.metaDescription} />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content={`IN-${city.state}`} />
        <meta name="geo.placename" content={city.name} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        {schemas.map((schema, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 dark:bg-dark-900/95 light:bg-white/95 backdrop-blur-lg dark:border-dark-700 light:border-gray-200 border-b transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-display font-bold text-gradient">DEV SEC IT</Link>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#services" className="dark:text-gray-300 light:text-gray-700 hover:text-primary-400 transition-colors">Services</a>
              <a href="#techstack" className="dark:text-gray-300 light:text-gray-700 hover:text-primary-400 transition-colors">Tech Stack</a>
              <a href="#industries" className="dark:text-gray-300 light:text-gray-700 hover:text-primary-400 transition-colors">Industries</a>
              <a href="#process" className="dark:text-gray-300 light:text-gray-700 hover:text-primary-400 transition-colors">Process</a>
              <a href="#faq" className="dark:text-gray-300 light:text-gray-700 hover:text-primary-400 transition-colors">FAQ</a>
              <a href="#contact" className="dark:text-gray-300 light:text-gray-700 hover:text-primary-400 transition-colors">Contact</a>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <a
                href="#contact"
                className="hidden sm:inline-block bg-gradient-to-r from-primary-500 to-blue-600 px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all text-white"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden dark:bg-dark-900 light:bg-white transition-colors duration-300">
        <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-primary-900/20 dark:via-dark-900 dark:to-blue-900/20 light:bg-gradient-to-br light:from-primary-50 light:via-white light:to-blue-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 dark:bg-primary-500/10 light:bg-primary-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 dark:bg-blue-500/10 light:bg-blue-400/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 dark:bg-primary-500/10 light:bg-primary-50 rounded-full border dark:border-primary-500/30 light:border-primary-200 transition-colors duration-300">
              <span className="text-primary-400 dark:text-primary-400 light:text-primary-600 font-semibold text-sm transition-colors duration-300">🚀 {city.name} • {city.region} • {city.state}</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight dark:text-white light:text-gray-900 transition-colors duration-300">
              Best Software Development<br />
              Company in <span className="text-gradient">{city.name}</span>
            </h1>
            <p className="text-lg md:text-xl dark:text-gray-400 light:text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed transition-colors duration-300">
              {city.description} We deliver custom web applications, mobile apps, APIs, AI solutions, and cybersecurity services with a 7-day MVP guarantee.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
              {stats.map((stat, i) => (
                <div key={i} className="dark:bg-dark-800/50 light:bg-gray-50 rounded-xl p-4 border dark:border-dark-700 light:border-gray-200">
                  <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm dark:text-gray-400 light:text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-lg text-white hover:shadow-2xl hover:shadow-primary-500/50 transition-all transform hover:scale-105"
              >
                Get Free Consultation
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="tel:+918101979855"
                className="px-8 py-4 border-2 dark:border-primary-500/50 light:border-primary-400 rounded-lg font-bold text-lg dark:text-gray-100 light:text-gray-900 dark:hover:bg-primary-500/10 light:hover:bg-primary-50 transition-all"
              >
                📞 Call Now: +91 81019 79855
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Expanded */}
      <section id="services" className="py-20 dark:bg-dark-800/50 light:bg-gray-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 mt-2 dark:text-white light:text-gray-900 transition-colors duration-300">
              Software Development Services in <span className="text-gradient">{city.name}</span>
            </h2>
            <p className="text-xl dark:text-gray-400 light:text-gray-600 max-w-3xl mx-auto transition-colors duration-300">
              Comprehensive technology solutions tailored for {city.name} businesses. From startups to enterprises, we deliver exceptional software that drives growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="group dark:bg-dark-900 light:bg-white p-6 rounded-2xl dark:border dark:border-dark-700 light:border light:border-gray-200 dark:hover:border-primary-500/50 light:hover:border-primary-400 transition-all duration-300 dark:hover:shadow-2xl dark:hover:shadow-primary-500/10 light:hover:shadow-lg">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 dark:text-gray-100 light:text-gray-900 transition-colors duration-300">{service.title}</h3>
                <p className="dark:text-gray-400 light:text-gray-600 text-sm mb-4 transition-colors duration-300">{service.desc}</p>
                <ul className="space-y-1">
                  {service.features.map((feature, j) => (
                    <li key={j} className="text-sm dark:text-gray-500 light:text-gray-500 flex items-center gap-2">
                      <span className="text-primary-400">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 dark:bg-dark-900 light:bg-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">Why DEV SEC IT</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 mt-2 dark:text-white light:text-gray-900 transition-colors duration-300">
              Why Choose DEV SEC IT in <span className="text-gradient">{city.name}</span>?
            </h2>
            <p className="text-xl dark:text-gray-400 light:text-gray-600 max-w-3xl mx-auto transition-colors duration-300">
              We combine technical excellence with local expertise to deliver outstanding results for {city.name} businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 dark:text-gray-100 light:text-gray-900">{item.title}</h3>
                  <p className="dark:text-gray-400 light:text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="techstack" className="py-20 dark:bg-dark-800/50 light:bg-gray-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 mt-2 dark:text-white light:text-gray-900 transition-colors duration-300">
              Technology <span className="text-gradient">Stack</span>
            </h2>
            <p className="text-xl dark:text-gray-400 light:text-gray-600 max-w-3xl mx-auto transition-colors duration-300">
              We use cutting-edge technologies to build scalable, secure, and high-performance solutions for {city.name} clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(techStack).map(([category, techs]) => (
              <div key={category} className="dark:bg-dark-900 light:bg-white p-6 rounded-2xl border dark:border-dark-700 light:border-gray-200">
                <h3 className="text-lg font-bold mb-4 dark:text-gray-100 light:text-gray-900 capitalize">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-sm dark:bg-dark-800 light:bg-gray-100 rounded-full dark:text-gray-300 light:text-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 dark:bg-dark-900 light:bg-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">Who We Serve</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 mt-2 dark:text-white light:text-gray-900 transition-colors duration-300">
              Industries We Serve in <span className="text-gradient">{city.name}</span>
            </h2>
            <p className="text-xl dark:text-gray-400 light:text-gray-600 max-w-3xl mx-auto transition-colors duration-300">
              Domain expertise across multiple industries to deliver solutions that understand your business.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, i) => (
              <div key={i} className="text-center p-6 dark:bg-dark-800 light:bg-gray-50 rounded-2xl border dark:border-dark-700 light:border-gray-200 dark:hover:border-primary-500/50 light:hover:border-primary-400 transition-all">
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="font-bold dark:text-gray-100 light:text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-sm dark:text-gray-400 light:text-gray-600">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 dark:bg-dark-800/50 light:bg-gray-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">How We Work</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 mt-2 dark:text-white light:text-gray-900 transition-colors duration-300">
              Our Development <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl dark:text-gray-400 light:text-gray-600 max-w-3xl mx-auto transition-colors duration-300">
              A proven methodology that ensures quality delivery and client satisfaction for every {city.name} project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="relative dark:bg-dark-900 light:bg-white p-6 rounded-2xl border dark:border-dark-700 light:border-gray-200">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-r from-primary-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-2 mt-2 dark:text-gray-100 light:text-gray-900">{step.title}</h3>
                <p className="dark:text-gray-400 light:text-gray-600 text-sm mb-3">{step.desc}</p>
                <span className="text-xs text-primary-400 font-semibold">{step.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 dark:bg-dark-900 light:bg-white transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">Got Questions?</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 mt-2 dark:text-white light:text-gray-900 transition-colors duration-300">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl dark:text-gray-400 light:text-gray-600 transition-colors duration-300">
              Common questions about our software development services in {city.name}.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="dark:bg-dark-800 light:bg-gray-50 rounded-xl border dark:border-dark-700 light:border-gray-200 overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center"
                >
                  <h3 className="font-bold dark:text-gray-100 light:text-gray-900 pr-4">{faq.question}</h3>
                  <span className={`text-primary-400 text-2xl transition-transform ${activeFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="dark:text-gray-400 light:text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 dark:bg-gradient-to-r dark:from-primary-900/30 dark:to-blue-900/30 light:bg-gradient-to-r light:from-primary-50 light:to-blue-50 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 dark:text-white light:text-gray-900">
            Ready to Build Your Next Project in {city.name}?
          </h2>
          <p className="text-xl dark:text-gray-400 light:text-gray-600 mb-8">
            Let&apos;s discuss your requirements and create a custom solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-2xl hover:shadow-primary-500/50 transition-all"
            >
              Schedule Free Consultation
            </a>
            <a
              href={`https://wa.me/918101979855?text=Hi DEV SEC IT, I'm from ${city.name} and interested in software development services`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 dark:border-green-500 light:border-green-600 rounded-lg font-bold dark:text-green-400 light:text-green-600 hover:bg-green-500/10 transition-all"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 dark:bg-dark-900 light:bg-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 mt-2 dark:text-white light:text-gray-900 transition-colors duration-300">
              Contact DEV SEC IT in <span className="text-gradient">{city.name}</span>
            </h2>
            <p className="text-xl dark:text-gray-400 light:text-gray-600 max-w-3xl mx-auto transition-colors duration-300">
              Ready to transform your business with custom software? Get in touch for a free consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold mb-6 dark:text-white light:text-gray-900">Contact Information</h3>
              <div className="space-y-4">
                <a href={`mailto:${city.managerEmail}`} className="block p-4 dark:bg-primary-900/20 light:bg-primary-50 rounded-lg border dark:border-primary-500/30 light:border-primary-200 dark:hover:border-primary-500/50 light:hover:border-primary-300 transition-colors">
                  <div className="text-primary-400 font-bold text-lg mb-1">📧 {city.name} Office</div>
                  <div className="dark:text-gray-300 light:text-gray-800 font-semibold">{city.managerEmail}</div>
                  <div className="dark:text-gray-400 light:text-gray-600 text-sm mt-1">Dedicated contact for {city.name}</div>
                </a>
                <a href="tel:+918101979855" className="block p-4 dark:bg-dark-800 light:bg-gray-100 rounded-lg dark:hover:bg-dark-700 light:hover:bg-gray-200 transition-colors">
                  <div className="text-primary-400 font-bold">📞 Phone</div>
                  <div className="dark:text-gray-300 light:text-gray-800 font-semibold">+91 81019 79855</div>
                </a>
                <a href={`https://wa.me/918101979855?text=Hi DEV SEC IT, I'm from ${city.name} and interested in software development services`} target="_blank" rel="noopener noreferrer" className="block p-4 dark:bg-dark-800 light:bg-gray-100 rounded-lg dark:hover:bg-dark-700 light:hover:bg-gray-200 transition-colors">
                  <div className="text-green-400 font-bold">💬 WhatsApp</div>
                  <div className="dark:text-gray-400 light:text-gray-600 text-sm">Chat with us directly</div>
                </a>
                <a href="mailto:sales@devsecit.com" className="block p-4 dark:bg-dark-800 light:bg-gray-100 rounded-lg dark:hover:bg-dark-700 light:hover:bg-gray-200 transition-colors">
                  <div className="text-primary-400 font-bold">📧 General Sales</div>
                  <div className="dark:text-gray-300 light:text-gray-800">sales@devsecit.com</div>
                </a>
              </div>

              <div className="mt-8 p-6 dark:bg-dark-800 light:bg-gray-100 rounded-xl">
                <h4 className="font-bold dark:text-gray-100 light:text-gray-900 mb-4">Serving {city.name} & {city.region}</h4>
                <p className="dark:text-gray-400 light:text-gray-600 text-sm">
                  DEV SEC IT is a leading software development company serving businesses across {city.name}, {city.state}, and the entire {city.region} region. With a population of {city.population} and growing tech ecosystem, we&apos;re committed to delivering world-class software solutions to local businesses.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="dark:bg-dark-800 light:bg-gray-50 p-8 rounded-2xl border dark:border-dark-700 light:border-gray-200 transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-6 dark:text-white light:text-gray-900 transition-colors duration-300">Request a Free Quote</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 dark:bg-dark-700 light:bg-white border dark:border-dark-600 light:border-gray-300 rounded-lg dark:text-white light:text-gray-900 dark:placeholder-gray-500 light:placeholder-gray-400 transition-colors duration-300"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 dark:bg-dark-700 light:bg-white border dark:border-dark-600 light:border-gray-300 rounded-lg dark:text-white light:text-gray-900 dark:placeholder-gray-500 light:placeholder-gray-400 transition-colors duration-300"
                  required
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 dark:bg-dark-700 light:bg-white border dark:border-dark-600 light:border-gray-300 rounded-lg dark:text-white light:text-gray-900 dark:placeholder-gray-500 light:placeholder-gray-400 transition-colors duration-300"
                />
                <textarea
                  placeholder="Tell us about your project requirements *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 dark:bg-dark-700 light:bg-white border dark:border-dark-600 light:border-gray-300 rounded-lg dark:text-white light:text-gray-900 dark:placeholder-gray-500 light:placeholder-gray-400 transition-colors duration-300"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-2xl hover:shadow-primary-500/50 transition-all text-lg"
                >
                  Submit Inquiry →
                </button>
                <p className="text-xs dark:text-gray-500 light:text-gray-500 text-center">
                  By submitting, you agree to our Privacy Policy. We&apos;ll respond within 24 hours.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Local SEO Content Section */}
      <section className="py-16 dark:bg-dark-800/50 light:bg-gray-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-3xl font-display font-bold mb-6 dark:text-white light:text-gray-900">
              About Software Development Services in {city.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 dark:text-gray-400 light:text-gray-600">
              <div>
                <p className="mb-4">
                  DEV SEC IT is the leading software development company in {city.name}, {city.state}. We specialize in building custom web applications, mobile apps, APIs, and enterprise software solutions for businesses across {city.region}. Our team of experienced developers, designers, and security experts work together to deliver high-quality solutions that meet your specific needs.
                </p>
                <p className="mb-4">
                  With over 500 successful projects delivered and 150+ satisfied clients, we have established ourselves as a trusted technology partner for startups, SMEs, and large enterprises in {city.name}. Our commitment to quality, security, and timely delivery has made us the preferred choice for businesses looking for reliable software development services.
                </p>
              </div>
              <div>
                <p className="mb-4">
                  Our {city.name} office provides dedicated support and ensures that local businesses receive personalized attention. Whether you need a simple website, a complex enterprise application, or cutting-edge AI solutions, DEV SEC IT has the expertise to bring your vision to life.
                </p>
                <p className="mb-4">
                  We follow international best practices in software development, including Agile methodology, DevSecOps, and continuous integration/deployment. Our security-first approach ensures that every solution we build is protected against cyber threats, giving you peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="dark:bg-dark-900 light:bg-gray-100 py-12 border-t dark:border-dark-700 light:border-gray-200 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/" className="text-2xl font-display font-bold text-gradient">DEV SEC IT</Link>
              <p className="mt-4 dark:text-gray-400 light:text-gray-600 text-sm">
                Premium software development services in {city.name}. Building the future, one line of code at a time.
              </p>
            </div>
            <div>
              <h4 className="font-bold dark:text-gray-100 light:text-gray-900 mb-4">Services</h4>
              <ul className="space-y-2 text-sm dark:text-gray-400 light:text-gray-600">
                <li><Link href="/services" className="hover:text-primary-400">Web Development</Link></li>
                <li><Link href="/services" className="hover:text-primary-400">Mobile Apps</Link></li>
                <li><Link href="/services" className="hover:text-primary-400">API Development</Link></li>
                <li><Link href="/services" className="hover:text-primary-400">Cybersecurity</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold dark:text-gray-100 light:text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm dark:text-gray-400 light:text-gray-600">
                <li><Link href="/about" className="hover:text-primary-400">About Us</Link></li>
                <li><Link href="/courses" className="hover:text-primary-400">Courses</Link></li>
                <li><Link href="/careers" className="hover:text-primary-400">Careers</Link></li>
                <li><Link href="/portfolio" className="hover:text-primary-400">Portfolio</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold dark:text-gray-100 light:text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm dark:text-gray-400 light:text-gray-600">
                <li><Link href="/privacy" className="hover:text-primary-400">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-primary-400">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t dark:border-dark-700 light:border-gray-200 pt-8 text-center">
            <p className="dark:text-gray-400 light:text-gray-600 text-sm">
              © 2025 DEV SEC IT. All rights reserved. Proudly serving {city.name}, {city.state}, and across India.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllCitySlugs();
  return {
    paths: slugs.map(slug => ({
      params: { city: slug }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<CityPageProps> = async ({ params }) => {
  const city = getCityBySlug(params?.city as string);

  if (!city) {
    return { notFound: true };
  }

  return {
    props: { city }
  };
};

export default CityPage;
