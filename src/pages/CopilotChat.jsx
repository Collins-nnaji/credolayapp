import React, { useState, useEffect } from 'react';
import { 
  HelpCircle, 
  X, 
  MessageSquare, 
  Briefcase, 
  Award, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  Target,
  Zap,
  CheckCircle
} from 'lucide-react';

const CopilotChat = () => {
  // ----------------------------------------
  // 1. States
  // ----------------------------------------
  // Country selection
  const [showCountrySelection, setShowCountrySelection] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState('');

  // Intro/chat/tutorial
  const [showIntro, setShowIntro] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [currentTip, setCurrentTip] = useState(0);

  // Notification
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  // Copied statuses
  const [copiedStatuses, setCopiedStatuses] = useState({});

  // Mobile detection state
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // ----------------------------------------
  // 2. Mobile Viewport & Orientation Handling
  // ----------------------------------------
  // Add meta viewport control for mobile
  useEffect(() => {
    // Prevent zooming on mobile devices
    const metaViewport = document.createElement('meta');
    metaViewport.name = 'viewport';
    metaViewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
    document.head.appendChild(metaViewport);

    return () => {
      document.head.removeChild(metaViewport);
    };
  }, []);

  // Enhanced viewport height calculation
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Initial set
    setVh();

    // Update on resize and orientation change
    window.addEventListener('resize', setVh);
    window.addEventListener('orientationchange', () => {
      setTimeout(setVh, 100);
    });

    return () => {
      window.removeEventListener('resize', setVh);
      window.removeEventListener('orientationchange', setVh);
    };
  }, []);

  // Update mobile state on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ----------------------------------------
  // 3. Data
  // ----------------------------------------
  const features = [
    {
      icon: <Target className="w-8 h-8 text-blue-400" />,
      title: "Intelligent Job Matching",
      description: "Get personalized job recommendations based on your skills and preferences.",
      gradient: "from-blue-500/20 to-blue-600/20"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-purple-400" />,
      title: "AI-Powered Insights",
      description: "Receive data-driven career advice and industry insights.",
      gradient: "from-purple-500/20 to-purple-600/20"
    },
    {
      icon: <Zap className="w-8 h-8 text-amber-400" />,
      title: "Interview Success",
      description: "Practice with AI for better interview performance.",
      gradient: "from-amber-500/20 to-amber-600/20"
    }
  ];

  const promptTips = [
    {
      category: "Job Search",
      icon: <Briefcase className="w-6 h-6" />,
      examples: [
        "Find remote software developer jobs in Europe paying above $80,000",
        "Show me entry-level marketing positions in Lagos that offer training",
        "What are the highest paying tech jobs in Nigeria with growth potential?"
      ]
    },
    {
      category: "Career Development",
      icon: <Award className="w-6 h-6" />,
      examples: [
        "Create a 6-month learning path for becoming a data scientist",
        "What skills should I focus on for a UX design career in 2025?",
        "Compare the career prospects of product management vs. project management"
      ]
    },
    {
      category: "Interview Preparation",
      icon: <MessageSquare className="w-6 h-6" />,
      examples: [
        "Prepare me for a senior frontend developer interview at a fintech company",
        "What are the top behavioral questions for product managers and how to answer them?",
        "Practice technical interview questions for a Python backend role"
      ]
    }
  ];

  // ----------------------------------------
  // 4. Intro Timing
  // ----------------------------------------
  useEffect(() => {
    if (!showCountrySelection) {
      setShowIntro(true);
      const introTimer = setTimeout(() => {
        setShowIntro(false);
        setShowChat(true);
      }, 2000);
      return () => clearTimeout(introTimer);
    }
  }, [showCountrySelection]);

  // ----------------------------------------
  // 5. Handlers
  // ----------------------------------------
  const handleCopyPrompt = async (text, promptIndex) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStatuses((prev) => ({
        ...prev,
        [currentTip]: {
          ...(prev[currentTip] || {}),
          [promptIndex]: true,
        },
      }));
      showNotificationMessage("Prompt copied to clipboard!");
    } catch (error) {
      showNotificationMessage("Failed to copy prompt");
    }
  };

  const showNotificationMessage = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const openTutorialFresh = () => {
    setCopiedStatuses({});
    setCurrentTip(0);
    setShowTutorial(true);
  };

  // ----------------------------------------
  // 6. Components
  // ----------------------------------------
  const Notification = () => {
    if (!showNotification) return null;
    return (
      <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 flex items-center space-x-2">
        <CheckCircle className="w-5 h-5" />
        <span>{notificationMessage}</span>
      </div>
    );
  };

  const TutorialOverlay = () => {
    if (!showTutorial) return null;
    const tipData = promptTips[currentTip];
    const goToPrevious = () => {
      setCurrentTip((prev) => (prev === 0 ? promptTips.length - 1 : prev - 1));
    };
    const goToNext = () => {
      if (currentTip === promptTips.length - 1) {
        setShowTutorial(false);
      } else {
        setCurrentTip((prev) => prev + 1);
      }
    };

    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
        <div className="bg-white rounded-xl p-6 max-w-2xl mx-4 shadow-2xl w-full">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-3">
              {tipData.icon}
              <h3 className="text-2xl font-bold text-gray-800">{tipData.category}</h3>
            </div>
            <button 
              onClick={() => setShowTutorial(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <p className="text-gray-600 text-lg mb-2">Try these example prompts:</p>
          <div className="space-y-3">
            {tipData.examples.map((example, index) => {
              const isCopied = copiedStatuses[currentTip]?.[index] === true;
              return (
                <div
                  key={index}
                  className="p-4 bg-blue-50 rounded-lg text-blue-700 cursor-pointer"
                  onClick={() => handleCopyPrompt(example, index)}
                >
                  <div className="flex items-center justify-between">
                    <span>{example}</span>
                    {isCopied ? (
                      <span className="inline-flex items-center space-x-1 text-sm text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span>Copied!</span>
                      </span>
                    ) : (
                      <span className="text-sm text-blue-500">Click to copy</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={goToPrevious}
              className="flex items-center space-x-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Previous</span>
            </button>
            <div className="flex space-x-2">
              {promptTips.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentTip === i ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={goToNext}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <span>{currentTip === promptTips.length - 1 ? 'Got it' : 'Next'}</span>
              {currentTip !== promptTips.length - 1 && <ChevronRight className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const CountrySelectionOverlay = () => {
    if (!showCountrySelection) return null;
    const countries = [
      {
        name: 'Nigeria',
        image: '/flags/nigeria.jpg',
        gradient: 'from-green-700 via-green-500 to-green-400',
      },
      {
        name: 'United Kingdom',
        image: '/flags/uk.jpg',
        gradient: 'from-blue-700 via-blue-500 to-blue-400',
      },
    ];

    const handleCountryClick = (country) => {
      setSelectedCountry(country);
      setShowCountrySelection(false);
    };

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
        <div className="relative bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl p-8 max-w-3xl w-full">
          <h2 className="text-4xl font-extrabold mb-4 text-white text-center tracking-wide">
            Where Are You Based?
          </h2>
          <p className="text-center text-white/90 mb-8">
            This helps us tailor jobs and advice to your region.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {countries.map((item, idx) => (
              <div
                key={idx}
                className="relative rounded-xl overflow-hidden cursor-pointer shadow-xl group"
                onClick={() => handleCountryClick(item.name)}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div 
                  className={`absolute inset-0 bg-gradient-to-tr ${item.gradient} opacity-50`} 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
                <div className="relative z-10 flex items-center justify-center h-40 text-white font-semibold text-2xl">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // ----------------------------------------
  // 7. Main Render
  // ----------------------------------------
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">
      {/* Video / background overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-purple-900/60 backdrop-blur-sm z-10" />
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/credolay2.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlays */}
      <CountrySelectionOverlay />

      {/* Intro screen */}
      {showIntro && !showCountrySelection && (
        <div className="relative z-20 h-screen flex flex-col items-center justify-center px-4">
          <div className="mb-8">
            <img 
              src="/credolay.png" 
              alt="Credolay Logo" 
              className="h-48 md:h-64 w-auto brightness-110 filter drop-shadow-2xl"
            />
          </div>
          <div className="text-3xl md:text-4xl text-gray-200 text-center max-w-4xl leading-relaxed">
            Your AI-Powered Career Partner
          </div>
          <div className="mt-12 text-2xl text-blue-200 animate-pulse">
            Loading your personalized career journey...
          </div>
        </div>
      )}

      {/* Main chat + features */}
      {showChat && !showCountrySelection && (
        <div className="relative z-20 w-full md:container md:mx-auto md:px-4 pb-8 md:pb-0">
          {/* Features grid (hidden on mobile) */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-xl bg-gradient-to-br ${feature.gradient}`}
              >
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-base text-gray-200">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Enhanced Mobile-Optimized Chat Interface */}
          <div 
            className={`
              ${isMobile ? 'fixed bottom-0 left-0 right-0 w-full z-30' : 'static w-full md:rounded-3xl md:shadow-2xl md:h-[75vh] md:mb-8'}
              bg-white overflow-hidden
            `}
            style={isMobile ? {
              height: 'calc(var(--vh, 1vh) * 80)',
              maxHeight: 'calc(var(--vh, 1vh) * 80)'
            } : {}}
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 sticky top-0 z-10">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white">Credolay Assistant</h2>
                  <p className="text-sm text-blue-100">Your AI-powered guide to career success</p>
                </div>
                <button
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  onClick={openTutorialFresh}
                >
                  <HelpCircle className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            {/* Chat IFrame Container */}
            <div className="w-full h-[calc(100%-4rem)] bg-white flex flex-col pb-4">
              <iframe
                src={`https://copilotstudio.microsoft.com/environments/Default-a1bbe8af-2736-4afa-b45e-385e122031a2/bots/cr0d9_credolay/webchat?__version__=2&country=${encodeURIComponent(selectedCountry)}`}
                className="w-full h-full"
                frameBorder="0"
                allow="microphone; camera"
                title="Copilot Chat"
                style={{ 
                  minHeight: isMobile ? 'calc(var(--vh, 1vh) * 70)' : '100%',
                  overflowY: 'hidden'
                }}
              />
            </div>
          </div>
        </div>
      )}

      <TutorialOverlay />
      <Notification />
    </div>
  );
};

export default CopilotChat;