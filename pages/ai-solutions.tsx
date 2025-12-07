import type { NextPage } from 'next';
import SEOHead from '../components/SEOHead';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useState } from 'react';
import Link from 'next/link';
import { 
  Brain, Bot, Cpu, Sparkles, TrendingUp, Zap, Shield, 
  BarChart3, MessageSquare, Eye, FileText, Settings,
  Cloud, Database, Code, Users, CheckCircle, ArrowRight,
  Lightbulb, Target, Rocket, Award, Clock, Globe,
  Layers, GitBranch, Workflow, LineChart, PieChart,
  Building2, ShoppingCart, Stethoscope, GraduationCap,
  Factory, Landmark, Car, Plane, Home, Smartphone,
  Search, Image, Mic, Video, FileCode, Lock,
  RefreshCw, Activity, Gauge, MonitorPlay
} from 'lucide-react';

const AISolutions: NextPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  const aiSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Solutions by DEV SEC IT',
    description: 'Comprehensive AI and Machine Learning solutions including custom AI development, NLP, computer vision, predictive analytics, and intelligent automation for businesses across India.',
    provider: {
      '@type': 'Organization',
      name: 'DEV SEC IT'
    },
    areaServed: 'India',
    serviceType: 'Artificial Intelligence Solutions'
  };

  const aiServices = [
    {
      category: 'Natural Language Processing',
      Icon: MessageSquare,
      services: [
        { name: 'Chatbot Development', desc: 'Intelligent conversational AI for customer support and engagement' },
        { name: 'Sentiment Analysis', desc: 'Real-time analysis of customer feedback and social media' },
        { name: 'Text Classification', desc: 'Automated document categorization and content tagging' },
        { name: 'Language Translation', desc: 'Multi-language translation systems for global businesses' }
      ]
    },
    {
      category: 'Computer Vision',
      Icon: Eye,
      services: [
        { name: 'Object Detection', desc: 'Real-time object identification and tracking systems' },
        { name: 'Facial Recognition', desc: 'Secure authentication and identity verification' },
        { name: 'Image Classification', desc: 'Automated image categorization and analysis' },
        { name: 'OCR Solutions', desc: 'Document digitization and text extraction' }
      ]
    },
    {
      category: 'Predictive Analytics',
      Icon: TrendingUp,
      services: [
        { name: 'Sales Forecasting', desc: 'Accurate revenue and demand predictions' },
        { name: 'Risk Assessment', desc: 'Financial and operational risk modeling' },
        { name: 'Customer Churn Prediction', desc: 'Identify at-risk customers before they leave' },
        { name: 'Market Analysis', desc: 'Data-driven market trends and opportunities' }
      ]
    },
    {
      category: 'Intelligent Automation',
      Icon: Bot,
      services: [
        { name: 'RPA Integration', desc: 'Robotic process automation for repetitive tasks' },
        { name: 'Workflow Automation', desc: 'Smart workflows that adapt and learn' },
        { name: 'Document Processing', desc: 'Automated extraction and processing of documents' },
        { name: 'Quality Control', desc: 'AI-powered defect detection and quality assurance' }
      ]
    }
  ];

  const industries = [
    { name: 'Healthcare', Icon: Stethoscope, examples: 'Diagnosis assistance, patient monitoring, drug discovery' },
    { name: 'Finance', Icon: Landmark, examples: 'Fraud detection, algorithmic trading, credit scoring' },
    { name: 'E-Commerce', Icon: ShoppingCart, examples: 'Product recommendations, price optimization, inventory management' },
    { name: 'Manufacturing', Icon: Factory, examples: 'Predictive maintenance, quality control, supply chain optimization' },
    { name: 'Education', Icon: GraduationCap, examples: 'Personalized learning, automated grading, student analytics' },
    { name: 'Real Estate', Icon: Home, examples: 'Property valuation, lead scoring, market analysis' },
    { name: 'Automotive', Icon: Car, examples: 'Autonomous driving, predictive maintenance, voice assistants' },
    { name: 'Travel', Icon: Plane, examples: 'Dynamic pricing, personalized recommendations, chatbots' }
  ];

  const techStack = [
    { name: 'TensorFlow', category: 'Framework' },
    { name: 'PyTorch', category: 'Framework' },
    { name: 'Scikit-learn', category: 'ML Library' },
    { name: 'OpenAI GPT', category: 'LLM' },
    { name: 'Hugging Face', category: 'NLP' },
    { name: 'OpenCV', category: 'Computer Vision' },
    { name: 'AWS SageMaker', category: 'Cloud ML' },
    { name: 'Google Cloud AI', category: 'Cloud ML' },
    { name: 'Azure ML', category: 'Cloud ML' },
    { name: 'Keras', category: 'Deep Learning' },
    { name: 'NLTK', category: 'NLP' },
    { name: 'spaCy', category: 'NLP' }
  ];

  const processSteps = [
    { step: 1, title: 'Discovery & Assessment', desc: 'We analyze your business challenges and identify AI opportunities', Icon: Search },
    { step: 2, title: 'Data Strategy', desc: 'Design data pipelines and ensure data quality for AI training', Icon: Database },
    { step: 3, title: 'Model Development', desc: 'Build and train custom AI models tailored to your needs', Icon: Code },
    { step: 4, title: 'Testing & Validation', desc: 'Rigorous testing to ensure accuracy and reliability', Icon: CheckCircle },
    { step: 5, title: 'Deployment', desc: 'Seamless integration with your existing systems', Icon: Rocket },
    { step: 6, title: 'Monitoring & Optimization', desc: 'Continuous improvement and performance monitoring', Icon: Activity }
  ];

  const caseStudies = [
    {
      title: 'AI-Powered Customer Support',
      client: 'Leading E-Commerce Platform',
      challenge: 'High volume of customer queries leading to delayed response times',
      solution: 'Implemented NLP-based chatbot with 24/7 availability',
      results: ['80% query resolution rate', '60% reduction in response time', '40% cost savings'],
      tech: ['GPT-4', 'Python', 'AWS Lambda', 'DialogFlow']
    },
    {
      title: 'Predictive Maintenance System',
      client: 'Manufacturing Enterprise',
      challenge: 'Unexpected equipment failures causing production delays',
      solution: 'Deployed IoT sensors with ML-based predictive models',
      results: ['90% accuracy in failure prediction', '35% reduction in downtime', '25% maintenance cost savings'],
      tech: ['TensorFlow', 'IoT Sensors', 'Azure IoT Hub', 'Power BI']
    },
    {
      title: 'Fraud Detection Platform',
      client: 'FinTech Startup',
      challenge: 'Rising fraudulent transactions affecting customer trust',
      solution: 'Built real-time fraud detection with anomaly detection algorithms',
      results: ['99.5% fraud detection rate', 'Real-time alerts', 'Reduced false positives by 60%'],
      tech: ['Scikit-learn', 'Kafka', 'PostgreSQL', 'Grafana']
    }
  ];

  return (
    <div suppressHydrationWarning className="min-h-screen dark:bg-dark-900 light:bg-white">
      <SEOHead
        title="AI Solutions & Machine Learning Services - DEV SEC IT | India's Top AI Development Company"
        description="Transform your business with cutting-edge AI solutions from DEV SEC IT. Custom AI development, machine learning, NLP, computer vision, predictive analytics, and intelligent automation services across all major Indian cities including Mumbai, Delhi, Bangalore, Hyderabad, Chennai, and Kolkata."
        keywords="AI solutions India, machine learning services, artificial intelligence development, NLP chatbot development, computer vision solutions, predictive analytics India, AI consulting, deep learning, neural networks, AI automation, custom AI development Mumbai, AI services Delhi, machine learning Bangalore, AI company Hyderabad, AI development Chennai, ML solutions Kolkata, best AI company India, top AI services, enterprise AI solutions, AI for business"
        canonicalUrl="https://devsecit.com/ai-solutions"
        schemas={[aiSchema]}
      />

      <Header activePage="ai-solutions" />

      {/* Hero Section */}
          <section className="relative pt-32 pb-20 overflow-hidden dark:bg-dark-900 light:bg-white">
            <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-purple-900/20 dark:via-dark-900 dark:to-blue-900/20 light:bg-gradient-to-br light:from-purple-50 light:via-white light:to-blue-50"></div>
            <div className="absolute top-20 left-10 w-72 h-72 dark:bg-purple-500/10 light:bg-purple-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 dark:bg-blue-500/10 light:bg-blue-400/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center animate-fade-in">
                <div className="inline-block mb-4 px-4 py-2 dark:bg-purple-500/10 light:bg-purple-50 rounded-full border dark:border-purple-500/30 light:border-purple-200">
                  <span className="text-purple-400 dark:text-purple-400 light:text-purple-600 font-semibold text-sm flex items-center gap-2">
                    <Brain className="w-4 h-4" />
                    Artificial Intelligence & Machine Learning
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6 leading-tight dark:text-white light:text-gray-900">
                  AI Solutions That <br />
                  <span className="text-gradient">Transform Business</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl dark:text-gray-400 light:text-gray-600 mb-8 max-w-4xl mx-auto">
                  DEV SEC IT delivers cutting-edge artificial intelligence and machine learning solutions that automate processes, enhance decision-making, and drive innovation. From natural language processing to computer vision, we build AI systems that create real business value across India.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#contact" 
                    className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Brain className="w-5 h-5" />
                    Start Your AI Project
                  </a>
                  <Link 
                    href="#case-studies" 
                    className="px-8 py-4 border-2 dark:border-purple-500/50 light:border-purple-400 rounded-lg font-bold dark:text-gray-100 light:text-gray-900 hover:shadow-lg transition flex items-center justify-center gap-2"
                  >
                    <FileText className="w-5 h-5" />
                    View Case Studies
                  </Link>
                </div>
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                  {[
                    { value: '100+', label: 'AI Projects' },
                    { value: '95%', label: 'Accuracy Rate' },
                    { value: '50+', label: 'AI Experts' },
                    { value: '24/7', label: 'AI Support' }
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

          {/* Introduction to AI - SEO Rich Content */}
          <section className="py-20 dark:bg-dark-800/50 light:bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 dark:text-white light:text-gray-900">
                  Comprehensive AI & Machine Learning Solutions for <span className="text-gradient">Modern Businesses</span>
                </h2>
                
                <p className="dark:text-gray-300 light:text-gray-700 text-lg leading-relaxed mb-6">
                  In today's rapidly evolving digital landscape, artificial intelligence (AI) and machine learning (ML) have emerged as transformative technologies that are reshaping how businesses operate, compete, and deliver value to their customers. At DEV SEC IT, we specialize in developing custom AI solutions that address real business challenges and create measurable outcomes for organizations across India.
                </p>

                <p className="dark:text-gray-300 light:text-gray-700 text-lg leading-relaxed mb-6">
                  Our comprehensive AI services span the entire spectrum of artificial intelligence technologies, from natural language processing (NLP) and computer vision to predictive analytics and intelligent automation. Whether you're a startup looking to incorporate AI into your product, an enterprise seeking to optimize operations, or a business wanting to enhance customer experience, our team of experienced AI engineers and data scientists can help you achieve your goals.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 dark:text-white light:text-gray-900">
                  Why Choose DEV SEC IT for AI Development?
                </h3>

                <p className="dark:text-gray-300 light:text-gray-700 text-lg leading-relaxed mb-6">
                  DEV SEC IT has established itself as India's leading AI development company with a proven track record of delivering successful AI projects across diverse industries. Our expertise extends across all major AI domains including deep learning, neural networks, reinforcement learning, and generative AI. We combine technical excellence with deep domain knowledge to create AI solutions that are not just technically sophisticated but also practically valuable for your business.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="dark:bg-dark-900 light:bg-white p-6 rounded-xl dark:border dark:border-dark-700 light:border light:border-gray-200">
                    <h4 className="text-xl font-bold mb-3 dark:text-white light:text-gray-900 flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary-400" />
                      Industry Expertise
                    </h4>
                    <p className="dark:text-gray-400 light:text-gray-600">
                      With over 10 years of experience in software development and AI implementation, we bring unmatched expertise to every project. Our team has successfully delivered AI solutions for healthcare, finance, e-commerce, manufacturing, and more.
                    </p>
                  </div>
                  <div className="dark:bg-dark-900 light:bg-white p-6 rounded-xl dark:border dark:border-dark-700 light:border light:border-gray-200">
                    <h4 className="text-xl font-bold mb-3 dark:text-white light:text-gray-900 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary-400" />
                      Security-First Approach
                    </h4>
                    <p className="dark:text-gray-400 light:text-gray-600">
                      As a company with deep roots in cybersecurity, we build AI solutions with security and privacy at their core. Our AI systems comply with data protection regulations and incorporate robust security measures.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-4 dark:text-white light:text-gray-900">
                  The Power of Artificial Intelligence in Business
                </h3>

                <p className="dark:text-gray-300 light:text-gray-700 text-lg leading-relaxed mb-6">
                  Artificial intelligence is no longer a futuristic concept—it's a present reality that's driving competitive advantage across industries. Organizations that embrace AI technologies are seeing significant improvements in operational efficiency, customer satisfaction, and revenue growth. From automating repetitive tasks to providing deep insights from data, AI enables businesses to do more with less while making better decisions.
                </p>

                <p className="dark:text-gray-300 light:text-gray-700 text-lg leading-relaxed mb-6">
                  Machine learning, a subset of AI, allows systems to learn from data and improve their performance over time without being explicitly programmed. This capability is particularly valuable in scenarios where patterns in data are complex or constantly changing. Our machine learning solutions help businesses predict customer behavior, optimize pricing, detect fraud, and much more.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 dark:text-white light:text-gray-900">
                  Natural Language Processing (NLP) Solutions
                </h3>

                <p className="dark:text-gray-300 light:text-gray-700 text-lg leading-relaxed mb-6">
                  Natural Language Processing enables machines to understand, interpret, and generate human language. At DEV SEC IT, we develop sophisticated NLP solutions that transform how businesses interact with customers and process textual data. Our NLP capabilities include:
                </p>

                <ul className="list-disc list-inside dark:text-gray-300 light:text-gray-700 space-y-2 mb-6">
                  <li><strong>Intelligent Chatbots:</strong> We build conversational AI systems that can handle customer queries, provide support, and facilitate transactions around the clock. Our chatbots understand context, handle complex conversations, and seamlessly escalate to human agents when needed.</li>
                  <li><strong>Sentiment Analysis:</strong> Understand customer opinions and emotions by analyzing reviews, social media posts, and feedback. Our sentiment analysis tools help businesses gauge customer satisfaction and respond proactively to concerns.</li>
                  <li><strong>Text Classification:</strong> Automatically categorize documents, emails, and content based on their subject matter. This technology is invaluable for content management, email routing, and document organization.</li>
                  <li><strong>Named Entity Recognition:</strong> Extract important information like names, dates, locations, and organizations from unstructured text. This capability is essential for data extraction and knowledge management systems.</li>
                  <li><strong>Language Translation:</strong> Break language barriers with AI-powered translation systems that accurately translate content across multiple languages while preserving meaning and context.</li>
                </ul>

                <h3 className="text-2xl font-bold mt-10 mb-4 dark:text-white light:text-gray-900">
                  Computer Vision Applications
                </h3>

                <p className="dark:text-gray-300 light:text-gray-700 text-lg leading-relaxed mb-6">
                  Computer vision enables machines to interpret and understand visual information from the world. This technology has applications ranging from security and surveillance to quality control and autonomous vehicles. DEV SEC IT's computer vision solutions include:
                </p>

                <ul className="list-disc list-inside dark:text-gray-300 light:text-gray-700 space-y-2 mb-6">
                  <li><strong>Object Detection and Recognition:</strong> Identify and track objects in images and videos in real-time. Applications include inventory management, security monitoring, and autonomous systems.</li>
                  <li><strong>Facial Recognition:</strong> Secure authentication systems, attendance tracking, and identity verification using advanced facial recognition technology with industry-leading accuracy.</li>
                  <li><strong>Image Classification:</strong> Automatically categorize images based on their content. This technology is used in medical imaging, quality control, and content moderation.</li>
                  <li><strong>Optical Character Recognition (OCR):</strong> Convert printed or handwritten text into digital format. Essential for document digitization, automated data entry, and archival systems.</li>
                  <li><strong>Video Analytics:</strong> Extract meaningful insights from video footage including people counting, behavior analysis, and anomaly detection.</li>
                </ul>

                <h3 className="text-2xl font-bold mt-10 mb-4 dark:text-white light:text-gray-900">
                  Predictive Analytics and Business Intelligence
                </h3>

                <p className="dark:text-gray-300 light:text-gray-700 text-lg leading-relaxed mb-6">
                  Predictive analytics uses historical data, statistical algorithms, and machine learning techniques to predict future outcomes. Our predictive analytics solutions help businesses anticipate trends, identify risks, and make data-driven decisions. Key applications include:
                </p>

                <ul className="list-disc list-inside dark:text-gray-300 light:text-gray-700 space-y-2 mb-6">
                  <li><strong>Sales Forecasting:</strong> Predict future sales with high accuracy to optimize inventory, staffing, and marketing spend. Our models consider seasonality, market trends, and external factors.</li>
                  <li><strong>Customer Churn Prediction:</strong> Identify customers at risk of leaving before they do. Take proactive measures to retain valuable customers and reduce churn rates.</li>
                  <li><strong>Demand Forecasting:</strong> Anticipate demand fluctuations to optimize supply chain operations, reduce waste, and improve customer satisfaction.</li>
                  <li><strong>Risk Assessment:</strong> Evaluate credit risk, fraud risk, and operational risk using advanced machine learning models that consider multiple factors and patterns.</li>
                  <li><strong>Recommendation Systems:</strong> Provide personalized product and content recommendations that increase engagement and sales conversion rates.</li>
                </ul>

                <h3 className="text-2xl font-bold mt-10 mb-4 dark:text-white light:text-gray-900">
                  Intelligent Automation and RPA
                </h3>

                <p className="dark:text-gray-300 light:text-gray-700 text-lg leading-relaxed mb-6">
                  Intelligent automation combines artificial intelligence with robotic process automation (RPA) to create systems that can handle complex tasks that previously required human intervention. This technology dramatically improves efficiency, reduces errors, and frees up human workers for higher-value activities. Our intelligent automation solutions include:
                </p>

                <ul className="list-disc list-inside dark:text-gray-300 light:text-gray-700 space-y-2 mb-6">
                  <li><strong>Process Automation:</strong> Automate repetitive business processes including data entry, form processing, and report generation with AI-powered bots that learn and adapt.</li>
                  <li><strong>Document Processing:</strong> Extract data from invoices, contracts, and other documents automatically. Our intelligent document processing systems handle various formats and layouts.</li>
                  <li><strong>Workflow Automation:</strong> Design and implement smart workflows that route tasks, make decisions, and trigger actions based on AI-driven logic.</li>
                  <li><strong>Quality Assurance:</strong> Use AI to detect defects, verify compliance, and ensure quality standards are met consistently across manufacturing and service delivery.</li>
                </ul>

                <h3 className="text-2xl font-bold mt-10 mb-4 dark:text-white light:text-gray-900">
                  Generative AI and Large Language Models
                </h3>

                <p className="dark:text-gray-300 light:text-gray-700 text-lg leading-relaxed mb-6">
                  The advent of generative AI and large language models (LLMs) has opened new possibilities for businesses to create content, generate code, and automate creative tasks. DEV SEC IT helps organizations leverage these cutting-edge technologies while maintaining control and ensuring quality. Our generative AI services include:
                </p>

                <ul className="list-disc list-inside dark:text-gray-300 light:text-gray-700 space-y-2 mb-6">
                  <li><strong>Custom LLM Development:</strong> Fine-tune large language models on your specific data to create AI assistants that understand your business domain and terminology.</li>
                  <li><strong>Content Generation:</strong> Automate the creation of marketing content, product descriptions, reports, and documentation while maintaining brand voice and quality.</li>
                  <li><strong>Code Generation:</strong> Accelerate software development with AI-powered code generation and completion tools that understand your codebase and coding standards.</li>
                  <li><strong>Knowledge Management:</strong> Build intelligent knowledge bases that can answer questions, provide insights, and assist employees in finding information quickly.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* AI Services Grid */}
          <section className="py-20 dark:bg-dark-900 light:bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 dark:text-white light:text-gray-900">
                  Our AI <span className="text-gradient">Services</span>
                </h2>
                <p className="text-lg dark:text-gray-400 light:text-gray-600 max-w-3xl mx-auto">
                  Comprehensive artificial intelligence solutions designed to address your specific business challenges and drive measurable results
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {aiServices.map((category, i) => (
                  <div key={i} className="dark:bg-dark-800/50 light:bg-gray-50 p-8 rounded-xl dark:border dark:border-dark-700 light:border light:border-gray-200">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                        <category.Icon className="w-7 h-7 text-purple-400" />
                      </div>
                      <h3 className="text-2xl font-bold dark:text-white light:text-gray-900">{category.category}</h3>
                    </div>
                    <div className="space-y-4">
                      {category.services.map((service, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold dark:text-gray-200 light:text-gray-800">{service.name}</div>
                            <div className="text-sm dark:text-gray-400 light:text-gray-600">{service.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Development Process */}
          <section className="py-20 dark:bg-dark-800/50 light:bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 dark:text-white light:text-gray-900">
                  Our AI Development <span className="text-gradient">Process</span>
                </h2>
                <p className="text-lg dark:text-gray-400 light:text-gray-600">A proven methodology that ensures successful AI implementation</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {processSteps.map((step, i) => (
                  <div key={i} className="dark:bg-dark-900 light:bg-white p-6 rounded-xl dark:border dark:border-dark-700 light:border light:border-gray-200 group hover:shadow-lg transition">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                        {step.step}
                      </div>
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <step.Icon className="w-6 h-6 text-purple-400" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 dark:text-white light:text-gray-900">{step.title}</h3>
                    <p className="dark:text-gray-400 light:text-gray-600 text-sm">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Industries We Serve */}
          <section className="py-20 dark:bg-dark-900 light:bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 dark:text-white light:text-gray-900">
                  Industries We <span className="text-gradient">Serve</span>
                </h2>
                <p className="text-lg dark:text-gray-400 light:text-gray-600">AI solutions tailored for your industry's unique challenges</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {industries.map((industry, i) => (
                  <div key={i} className="dark:bg-dark-800/50 light:bg-gray-50 p-6 rounded-xl dark:border dark:border-dark-700 light:border light:border-gray-200 hover:shadow-lg hover:border-purple-500/50 transition group">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <industry.Icon className="w-7 h-7 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 dark:text-white light:text-gray-900">{industry.name}</h3>
                    <p className="dark:text-gray-400 light:text-gray-600 text-sm">{industry.examples}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Case Studies */}
          <section id="case-studies" className="py-20 dark:bg-dark-800/50 light:bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 dark:text-white light:text-gray-900">
                  AI Success <span className="text-gradient">Stories</span>
                </h2>
                <p className="text-lg dark:text-gray-400 light:text-gray-600">Real results from real AI implementations</p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {caseStudies.map((study, i) => (
                  <div key={i} className="dark:bg-dark-900 light:bg-white p-8 rounded-xl dark:border dark:border-dark-700 light:border light:border-gray-200">
                    <div className="inline-block px-3 py-1 dark:bg-purple-500/20 light:bg-purple-50 rounded-full mb-4 border dark:border-purple-500/30 light:border-purple-200">
                      <span className="text-sm font-semibold text-purple-400">{study.client}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 dark:text-white light:text-gray-900">{study.title}</h3>
                    <p className="dark:text-gray-400 light:text-gray-600 text-sm mb-4"><strong>Challenge:</strong> {study.challenge}</p>
                    <p className="dark:text-gray-400 light:text-gray-600 text-sm mb-4"><strong>Solution:</strong> {study.solution}</p>
                    <div className="mb-4">
                      <p className="text-sm font-semibold dark:text-gray-300 light:text-gray-700 mb-2">Results:</p>
                      <ul className="space-y-1">
                        {study.results.map((result, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm dark:text-gray-400 light:text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {study.tech.map((tech, j) => (
                        <span key={j} className="px-2 py-1 text-xs dark:bg-dark-800 light:bg-gray-100 rounded-full dark:text-gray-400 light:text-gray-600">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Technology Stack */}
          <section className="py-20 dark:bg-dark-900 light:bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 dark:text-white light:text-gray-900">
                  AI Technology <span className="text-gradient">Stack</span>
                </h2>
                <p className="text-lg dark:text-gray-400 light:text-gray-600">Industry-leading tools and frameworks we use</p>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                {techStack.map((tech, i) => (
                  <div key={i} className="px-6 py-3 dark:bg-dark-800 light:bg-gray-100 rounded-lg dark:border dark:border-dark-700 light:border light:border-gray-200 hover:border-purple-500/50 transition">
                    <div className="font-semibold dark:text-white light:text-gray-900">{tech.name}</div>
                    <div className="text-xs dark:text-gray-400 light:text-gray-600">{tech.category}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* More SEO Content */}
          <section className="py-20 dark:bg-dark-800/50 light:bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 dark:text-white light:text-gray-900">
                  AI Solutions Across <span className="text-gradient">Indian Cities</span>
                </h2>

                <p className="dark:text-gray-300 light:text-gray-700 text-lg leading-relaxed mb-6">
                  DEV SEC IT provides AI and machine learning services across all major Indian cities. Our team of AI experts works with businesses in Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad, Jaipur, and 100+ other cities to implement AI solutions that drive business growth and operational efficiency.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 dark:text-white light:text-gray-900">
                  AI Development Services in Mumbai
                </h3>
                <p className="dark:text-gray-300 light:text-gray-700 text-lg leading-relaxed mb-6">
                  As India's financial capital, Mumbai's businesses require sophisticated AI solutions for financial services, e-commerce, media, and entertainment. DEV SEC IT has successfully implemented AI projects for leading Mumbai-based organizations, helping them achieve digital transformation and competitive advantage.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 dark:text-white light:text-gray-900">
                  Machine Learning Services in Bangalore
                </h3>
                <p className="dark:text-gray-300 light:text-gray-700 text-lg leading-relaxed mb-6">
                  Bangalore, India's Silicon Valley, is home to countless technology companies and startups. Our team works closely with Bangalore's tech ecosystem to deliver cutting-edge machine learning solutions, from recommendation engines to predictive analytics platforms.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 dark:text-white light:text-gray-900">
                  AI Consulting in Delhi NCR
                </h3>
                <p className="dark:text-gray-300 light:text-gray-700 text-lg leading-relaxed mb-6">
                  The Delhi NCR region, including Noida and Gurgaon, hosts numerous enterprises seeking AI transformation. DEV SEC IT provides comprehensive AI consulting and implementation services to help these organizations navigate their AI journey and achieve measurable business outcomes.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4 dark:text-white light:text-gray-900">
                  Why Partner with DEV SEC IT for AI?
                </h3>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="dark:bg-dark-900 light:bg-white p-6 rounded-xl dark:border dark:border-dark-700 light:border light:border-gray-200">
                    <h4 className="text-xl font-bold mb-3 dark:text-white light:text-gray-900 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary-400" />
                      Rapid Delivery
                    </h4>
                    <p className="dark:text-gray-400 light:text-gray-600">
                      Our agile methodology and experienced team enable rapid AI development cycles. We deliver MVP AI solutions in as little as 4-6 weeks, allowing you to start seeing results quickly.
                    </p>
                  </div>
                  <div className="dark:bg-dark-900 light:bg-white p-6 rounded-xl dark:border dark:border-dark-700 light:border light:border-gray-200">
                    <h4 className="text-xl font-bold mb-3 dark:text-white light:text-gray-900 flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary-400" />
                      Business-First Approach
                    </h4>
                    <p className="dark:text-gray-400 light:text-gray-600">
                      We focus on solving business problems, not just building AI for the sake of it. Every AI solution we develop is tied to measurable business objectives and ROI.
                    </p>
                  </div>
                  <div className="dark:bg-dark-900 light:bg-white p-6 rounded-xl dark:border dark:border-dark-700 light:border light:border-gray-200">
                    <h4 className="text-xl font-bold mb-3 dark:text-white light:text-gray-900 flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary-400" />
                      Expert Team
                    </h4>
                    <p className="dark:text-gray-400 light:text-gray-600">
                      Our team includes data scientists, ML engineers, and domain experts with experience across various industries. We bring the right expertise to every project.
                    </p>
                  </div>
                  <div className="dark:bg-dark-900 light:bg-white p-6 rounded-xl dark:border dark:border-dark-700 light:border light:border-gray-200">
                    <h4 className="text-xl font-bold mb-3 dark:text-white light:text-gray-900 flex items-center gap-2">
                      <RefreshCw className="w-5 h-5 text-primary-400" />
                      Continuous Support
                    </h4>
                    <p className="dark:text-gray-400 light:text-gray-600">
                      AI models need ongoing monitoring and optimization. We provide comprehensive support to ensure your AI solutions continue to deliver value over time.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-4 dark:text-white light:text-gray-900">
                  Getting Started with AI
                </h3>

                <p className="dark:text-gray-300 light:text-gray-700 text-lg leading-relaxed mb-6">
                  Beginning your AI journey doesn't have to be overwhelming. At DEV SEC IT, we start every engagement with a comprehensive discovery phase to understand your business challenges, data assets, and goals. This allows us to identify the most impactful AI opportunities and create a roadmap for implementation.
                </p>

                <p className="dark:text-gray-300 light:text-gray-700 text-lg leading-relaxed mb-6">
                  Whether you're looking to implement your first AI project or scale existing AI capabilities, our team is here to help. Contact us today to schedule a consultation and discover how AI can transform your business.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section id="contact" className="py-20 dark:bg-dark-900 light:bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 dark:text-white light:text-gray-900">
                Ready to Transform Your Business with <span className="text-gradient">AI?</span>
              </h2>
              <p className="text-lg dark:text-gray-400 light:text-gray-600 mb-8">
                Let's discuss how AI can solve your specific challenges and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/918101979855?text=Hi%20DEV%20SEC%20IT,%20I'm%20interested%20in%20AI%20solutions" 
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Brain className="w-5 h-5" />
                  Discuss Your AI Project
                </a>
                <Link 
                  href="/portfolio" 
                  className="px-8 py-4 border-2 dark:border-purple-500/50 light:border-purple-400 rounded-lg font-bold dark:text-gray-100 light:text-gray-900 hover:shadow-lg transition flex items-center justify-center gap-2"
                >
                  <FileText className="w-5 h-5" />
                  View AI Portfolio
                </Link>
              </div>
            </div>
          </section>

      <Footer />
    </div>
  );
};

export default AISolutions;
