"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  Loader2, 
  Sparkles,
  Heart,
  Target,
  Zap,
  MapPin,
  Globe,
  Clock,
  Trophy
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface FormData {
  emotionalHook: string;
  confidence: number;
  energy: number;
  bodySatisfaction: number;
  obstacle: string;
  story: string;
  firstName: string;
  contactMethod: 'email' | 'whatsapp';
  contact: string;
  location: string;
  commitment: string;
}

const steps = [
  { id: 1, title: "Your Why", icon: "💭" },
  { id: 2, title: "Your Vision", icon: "🎯" },
  { id: 3, title: "Your Obstacles", icon: "🚧" },
  { id: 4, title: "Your Story", icon: "📖" },
  { id: 5, title: "Your Contact", icon: "📞" },
  { id: 6, title: "Your Commitment", icon: "⚡" }
];

const emotionalOptions = [
  { value: "restart", icon: "🔄", text: "tired_restart" },
  { value: "ready", icon: "⚡", text: "ready_change" },
  { value: "lost", icon: "🗺️", text: "lost_direction" },
  { value: "failed", icon: "💔", text: "nothing_worked" }
];

const obstacles = [
  "🧠 Motivation dies quickly",
  "🤷 Don't know where to start", 
  "⏰ Too busy, no time",
  "😰 Mental barriers",
  "🏥 Physical limitations",
  "💸 Tried expensive programs"
];

const commitmentOptions = [
  { value: "curious", icon: "🤔", title: "Just Curious", desc: "Maybe someday" },
  { value: "soon", icon: "📅", title: "Ready Soon", desc: "Within 1 month" },
  { value: "now", icon: "🚀", title: "Ready Now", desc: "Let's start immediately", popular: true },
  { value: "urgent", icon: "🎯", title: "Last Attempt", desc: "I need this to work", urgent: true }
];



export function InteractiveConsultation() {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    emotionalHook: '',
    confidence: 5,
    energy: 5,
    bodySatisfaction: 5,
    obstacle: '',
    story: '',
    firstName: '',
    contactMethod: 'email',
    contact: '',
    location: '',
    commitment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return formData.emotionalHook;
      case 2: return formData.confidence > 0 && formData.energy > 0 && formData.bodySatisfaction > 0;
      case 3: return formData.obstacle;
      case 4: return formData.story.trim().length > 10;
      case 5: return formData.firstName && formData.contact && formData.location;
      case 6: return formData.commitment;
      default: return false;
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.firstName,
          age: 0, // Not collected in this version
          location: formData.location,
          email: formData.contactMethod === 'email' ? formData.contact : '',
          phone: formData.contactMethod === 'whatsapp' ? formData.contact : '',
          background: `Emotional Hook: ${formData.emotionalHook}\nConfidence: ${formData.confidence}/10\nEnergy: ${formData.energy}/10\nBody Satisfaction: ${formData.bodySatisfaction}/10\nObstacle: ${formData.obstacle}\nCommitment: ${formData.commitment}`,
          message: formData.story
        })
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getEmojiFeedback = (value: number, type: string) => {
    if (type === 'confidence') {
      if (value <= 3) return '😔';
      if (value <= 6) return '😐';
      if (value <= 8) return '😊';
      return '😎';
    }
    if (type === 'energy') {
      if (value <= 3) return '🔋';
      if (value <= 6) return '🔋🔋';
      if (value <= 8) return '🔋🔋🔋';
      return '🔋🔋🔋🔋';
    }
    if (type === 'body') {
      if (value <= 3) return '📉';
      if (value <= 6) return '➡️';
      if (value <= 8) return '📈';
      return '🚀';
    }
    return '';
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
      >
        {/* Celebration Background Effects */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: window.innerHeight + 100,
                opacity: 0 
              }}
              animate={{ 
                y: -100,
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                delay: Math.random() * 2,
                repeat: Infinity,
                repeatDelay: Math.random() * 3
              }}
              className="absolute text-2xl"
              style={{ left: `${Math.random() * 100}%` }}
            >
              {['🎉', '✨', '🚀', '💪', '🔥', '⭐', '🎯', '🏆'][Math.floor(Math.random() * 8)]}
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="max-w-lg w-full text-center"
          >
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="relative mb-8"
            >
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-6xl"
                >
                  🎉
                </motion.div>
              </div>
              
              {/* Ring Animation */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ delay: 0.8, duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                className="absolute inset-0 border-4 border-green-400 rounded-full"
              />
            </motion.div>

            {/* Success Message */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h1 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Application Received!
              </h1>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-xl text-white/80 mb-6"
              >
                Congratulations {formData.firstName}! 🎊
              </motion.p>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-white/70 mb-8 leading-relaxed"
              >
                Your transformation journey is about to begin. Kash will review your application and respond to you soon.
              </motion.p>
            </motion.div>

            {/* Next Steps */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6 mb-8 backdrop-blur-sm"
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <Sparkles className="h-5 w-5 text-blue-400" />
                <h3 className="text-white font-semibold">What's Next?</h3>
                <Sparkles className="h-5 w-5 text-blue-400" />
              </div>
              <ul className="text-white/70 text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Kash will review your application personally
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  You'll receive a personalized response
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Your transformation journey begins
                </li>
              </ul>
            </motion.div>

            {/* Action Button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              <a
                href="/"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                <ChevronLeft className="h-5 w-5" />
                Back to Home
              </a>
            </motion.div>

            {/* Celebration Message */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-white/50 text-sm mt-8 italic"
            >
              Welcome to the Fit Mit Kash family! 💪
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                    step.id < currentStep 
                      ? 'bg-green-500 text-white' 
                      : step.id === currentStep 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-white/10 text-white/60'
                  }`}>
                    {step.id < currentStep ? <Check className="h-4 w-4" /> : step.icon}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-8 h-0.5 transition-all ${
                      step.id < currentStep ? 'bg-green-500' : 'bg-white/10'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="text-white/60 text-sm">
              Step {currentStep} of 6
            </div>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-orange-500 to-green-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / 6) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-32 pb-8 px-4">
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Step 1: Emotional Hook */}
              {currentStep === 1 && (
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white mb-8">{t('step_1_title')}</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {emotionalOptions.map((option) => (
                      <motion.div
                        key={option.value}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => updateFormData('emotionalHook', option.value)}
                        className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                          formData.emotionalHook === option.value
                            ? 'border-blue-500 bg-blue-500/10'
                            : 'border-white/10 bg-white/5 hover:border-white/20'
                        }`}
                      >
                        <div className="text-4xl mb-3">{option.icon}</div>
                        <p className="text-white font-medium">{t(option.text)}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Vision Builder */}
              {currentStep === 2 && (
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-white text-center mb-8">Imagine 6 months from now...</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                      <label className="block text-white font-medium mb-4">Confidence Level</label>
                      <div className="relative">
                        <input
                          type="range"
                          min="1"
                          max="10"
                          value={formData.confidence}
                          onChange={(e) => updateFormData('confidence', parseInt(e.target.value))}
                          className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider relative z-10"
                        />
                        <div className="absolute inset-0 h-2 bg-white/10 rounded-lg pointer-events-none"></div>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-white/60 text-sm">Low</span>
                        <span className="text-2xl">{getEmojiFeedback(formData.confidence, 'confidence')}</span>
                        <span className="text-white/60 text-sm">High</span>
                      </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                      <label className="block text-white font-medium mb-4">Energy Level</label>
                      <div className="relative">
                        <input
                          type="range"
                          min="1"
                          max="10"
                          value={formData.energy}
                          onChange={(e) => updateFormData('energy', parseInt(e.target.value))}
                          className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider relative z-10"
                        />
                        <div className="absolute inset-0 h-2 bg-white/10 rounded-lg pointer-events-none"></div>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-white/60 text-sm">Low</span>
                        <span className="text-2xl">{getEmojiFeedback(formData.energy, 'energy')}</span>
                        <span className="text-white/60 text-sm">High</span>
                      </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                      <label className="block text-white font-medium mb-4">Body Satisfaction</label>
                      <div className="relative">
                        <input
                          type="range"
                          min="1"
                          max="10"
                          value={formData.bodySatisfaction}
                          onChange={(e) => updateFormData('bodySatisfaction', parseInt(e.target.value))}
                          className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider relative z-10"
                        />
                        <div className="absolute inset-0 h-2 bg-white/10 rounded-lg pointer-events-none"></div>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-white/60 text-sm">Low</span>
                        <span className="text-2xl">{getEmojiFeedback(formData.bodySatisfaction, 'body')}</span>
                        <span className="text-white/60 text-sm">High</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Obstacles */}
              {currentStep === 3 && (
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white mb-8">What's your biggest obstacle?</h2>
                  <div className="grid grid-cols-1 gap-3">
                    {obstacles.map((obstacle) => (
                      <motion.button
                        key={obstacle}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => updateFormData('obstacle', obstacle)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          formData.obstacle === obstacle
                            ? 'border-blue-500 bg-blue-500/10'
                            : 'border-white/10 bg-white/5 hover:border-white/20'
                        }`}
                      >
                        <span className="text-white font-medium">{obstacle}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Personal Story */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-white text-center">Tell me your story in one sentence:</h2>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <textarea
                      value={formData.story}
                      onChange={(e) => updateFormData('story', e.target.value)}
                      placeholder="I'm ready to change because..."
                      maxLength={200}
                      className="w-full h-32 bg-transparent border-none text-white placeholder-white/50 resize-none focus:outline-none"
                    />
                    <div className="flex justify-between items-center mt-4">
                      <div className="text-white/60 text-sm">
                        {200 - formData.story.length} characters remaining
                      </div>
                      <div className="text-white/60 text-sm italic">
                        Your story matters to me. - Kash
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Contact Info */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-white text-center mb-8">Let's get in touch</h2>
                  
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <label className="block text-white font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => updateFormData('firstName', e.target.value)}
                      placeholder="What should I call you?"
                      className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <label className="block text-white font-medium mb-4">Best way to reach you:</label>
                    <div className="flex gap-2 mb-4">
                      {[
                        { value: 'email', icon: '📧', label: 'Email' },
                        { value: 'whatsapp', icon: '📱', label: 'WhatsApp' }
                      ].map((method) => (
                        <button
                          key={method.value}
                          onClick={() => updateFormData('contactMethod', method.value as 'email' | 'whatsapp')}
                          className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border-2 transition-all ${
                            formData.contactMethod === method.value
                              ? 'border-blue-500 bg-blue-500/10'
                              : 'border-white/10 bg-white/5 hover:border-white/20'
                          }`}
                        >
                          <span>{method.icon}</span>
                          <span className="text-white font-medium">{method.label}</span>
                        </button>
                      ))}
                    </div>
                    <input
                      type={formData.contactMethod === 'email' ? 'email' : 'tel'}
                      value={formData.contact}
                      onChange={(e) => updateFormData('contact', e.target.value)}
                      placeholder={formData.contactMethod === 'email' ? 'your@email.com' : '+1234567890'}
                      className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <label className="block text-white font-medium mb-2">Location</label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => updateFormData('location', e.target.value)}
                      placeholder="City, Country"
                      className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                    />
                  </div>


                </div>
              )}

              {/* Step 6: Commitment Level */}
              {currentStep === 6 && (
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white mb-8">How serious are you? (Be honest)</h2>
                  <div className="grid grid-cols-1 gap-4">
                    {commitmentOptions.map((option) => (
                      <motion.div
                        key={option.value}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => updateFormData('commitment', option.value)}
                        className={`p-6 rounded-xl border-2 cursor-pointer transition-all relative ${
                          formData.commitment === option.value
                            ? 'border-blue-500 bg-blue-500/10'
                            : 'border-white/10 bg-white/5 hover:border-white/20'
                        } ${option.popular ? 'border-orange-500 bg-orange-500/10' : ''} ${option.urgent ? 'border-red-500 bg-red-500/10' : ''}`}
                      >
                        {option.popular && (
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                            Most Popular
                          </div>
                        )}
                        {option.urgent && (
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                            High Priority
                          </div>
                        )}
                        <div className="text-4xl mb-3">{option.icon}</div>
                        <h3 className="text-white font-bold text-lg mb-2">{option.title}</h3>
                        <p className="text-white/70">{option.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </button>

            {currentStep < 6 ? (
              <button
                onClick={nextStep}
                disabled={!canProceed()}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canProceed() || isSubmitting}
                className="flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4" />
                    Submit Application
                  </>
                )}
              </button>
            )}
          </div>

          {/* Social Proof */}
          {currentStep > 1 && currentStep < 6 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mt-8"
            >
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-white/60 text-sm">
                  <Heart className="inline h-4 w-4 mr-2" />
                  Maria from Spain started here and transformed her life in 6 months
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
