"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fa' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'based_in': 'Based in Berlin',
    
    // Navigation
    'programs': 'Programs',
    'results': 'Results', 
    'story': 'Story',
    
    // Hero Section
    'hero_subtitle': 'Elite coaching that combines training, mindset and life systems. Results measured in body, mind and life.',
    'location_text': 'Based in Berlin, Germany, serving clients internationally',
    'book_consultation': 'Book Your Consultation',
    
    // Stats Section
    'clients_transformed': 'Clients Transformed',
    'countries_reached': 'Countries Reached',
    'age_range': 'Age Range',
    'success_rate': 'Success Rate',
    'yrs': 'yrs',
    
    // Story Section
    'story_title': 'From a Dusty Tehran Gym to Transforming Lives Across 25 Countries',
    'story_subtitle': 'Elite coaching that combines training, mindset and life systems. Results measured in body, mind and life.',
    'nasm_certified': 'NASM Certified',
    'philosophy': '90% is mindset',
    
    // Programs Section
    'programs_title': 'Choose Your Transformation Path',
    'programs_subtitle': 'Elite coaching that combines training, mindset and life systems. Results measured in body, mind and life.',
    'monthly': 'Monthly',
    'life_cycle': 'Life Cycle',
    'premium': 'Premium',
    'most_popular': 'Most Popular',
    'from': 'from',
    
    // In-Person & Virtual
    'in_person_title': 'In-Person & Virtual Coaching',
    'in_person_subtitle': 'Elite coaching that combines training, mindset and life systems. Results measured in body, mind and life.',
    
    // Assessment Section
    'assessment_title': 'Tell us your story',
    'assessment_subtitle': 'Elite coaching that combines training, mindset and life systems. Results measured in body, mind and life.',
    'sample_questions': 'Sample questions:',
    'question_1': 'What brought you to fitness?',
    'question_2': 'What obstacles have you faced?',
    'question_3': 'What does success look like to you?',
    'cultural_sensitivity': 'Cultural sensitivity and support options available.',
    
    // Testimonials
    'testimonials_title': 'Real Results, Real Stories',
    'testimonials_subtitle': 'Elite coaching that combines training, mindset and life systems. Results measured in body, mind and life.',
    
    // Consultation Form Steps
    'step_1_title': 'What brought you here today?',
    'tired_restart': 'Tired of starting over',
    'ready_change': 'Ready for real change',
    'lost_direction': 'Lost and need direction',
    'nothing_worked': 'Nothing has worked',
    
    'step_2_title': 'Imagine 6 months from now...',
    'confidence_level': 'Confidence Level',
    'energy_level': 'Energy Level',
    'body_satisfaction': 'Body Satisfaction',
    'low': 'Low',
    'high': 'High',
    
    'step_3_title': "What's your biggest obstacle?",
    'motivation_dies': 'Motivation dies quickly',
    'dont_know_start': "Don't know where to start",
    'too_busy': 'Too busy, no time',
    'mental_barriers': 'Mental barriers',
    'physical_limitations': 'Physical limitations',
    'tried_expensive': 'Tried expensive programs',
    
    'step_4_title': 'Tell me your story in one sentence:',
    'story_placeholder': "I'm ready to change because...",
    'characters_remaining': 'characters remaining',
    'story_matters': 'Your story matters to me. - Kash',
    
    'step_5_title': "Let's get in touch",
    'first_name': 'First Name',
    'name_placeholder': 'What should I call you?',
    'best_way_reach': 'Best way to reach you:',
    'email': 'Email',
    'whatsapp': 'WhatsApp',
    'location': 'Location',
    'location_placeholder': 'City, Country',
    
    'step_6_title': 'How serious are you? (Be honest)',
    'just_curious': 'Just Curious',
    'maybe_someday': 'Maybe someday',
    'ready_soon': 'Ready Soon',
    'within_month': 'Within 1 month',
    'ready_now': 'Ready Now',
    'start_immediately': "Let's start immediately",
    'last_attempt': 'Last Attempt',
    'need_work': 'I need this to work',
    
    // Navigation
    'previous': 'Previous',
    'next': 'Next',
    'submit_application': 'Submit Application',
    'submitting': 'Submitting...',
    
    // Success Screen
    'application_received': 'Application Received!',
    'congratulations': 'Congratulations',
    'journey_begin': 'Your transformation journey is about to begin. Kash will review your application and respond to you soon.',
    'whats_next': "What's Next?",
    'review_personally': 'Kash will review your application personally',
    'personalized_response': "You'll receive a personalized response",
    'journey_begins': 'Your transformation journey begins',
    'back_home': 'Back to Home',
    'welcome_family': 'Welcome to the Fit Mit Kash family!',
    
    // Social Proof
    'maria_story': 'Maria from Spain started here and transformed her life in 6 months',
    
    // Form Labels
    'interactive_calculator': 'Interactive training calculator & tracker',
    'session_timer': 'Session Timer',
    'distance': 'Distance',
    'drag_kilometers': 'Drag to adjust kilometers',
    'duration': 'Duration',
    'drag_minutes': 'Drag to adjust minutes',
    'intensity': 'Intensity',
    'drag_effort': 'Drag to adjust effort level',
    'profile_settings': 'Profile Settings',
    'weight_kg': 'Weight (kg)',
    'age': 'Age',
    'gender': 'Gender',
    'male': 'Male',
    'female': 'Female',
    'calories_burned': 'Calories Burned',
    'fat_burned': 'Fat Burned',
    'pace': 'Pace',
    'heart_rate': 'Heart Rate',
    'steps': 'Steps',
    'elevation': 'Elevation',
    'weekly_goal': 'Weekly Goal',
    'best_pace': 'Best Pace',
    'avg_weekly': 'Avg Weekly',
    'total_time': 'Total Time',
  },
  
  fa: {
    // Header
    'based_in': 'مستقر در برلین',
    
    // Navigation
    'programs': 'برنامه‌ها',
    'results': 'نتایج',
    'story': 'داستان',
    
    // Hero Section
    'hero_subtitle': 'کوچینگ نخبه که تمرین، ذهنیت و سیستم‌های زندگی را ترکیب می‌کند. نتایج در بدن، ذهن و زندگی اندازه‌گیری می‌شود.',
    'location_text': 'مستقر در برلین، آلمان، خدمت‌رسانی به مشتریان بین‌المللی',
    'book_consultation': 'رزرو مشاوره',
    
    // Stats Section
    'clients_transformed': 'مشتریان متحول شده',
    'countries_reached': 'کشورهای تحت پوشش',
    'age_range': 'محدوده سنی',
    'success_rate': 'نرخ موفقیت',
    'yrs': 'سال',
    
    // Story Section
    'story_title': 'از یک باشگاه قدیمی در تهران تا متحول کردن زندگی‌ها در ۲۵ کشور',
    'story_subtitle': 'کوچینگ نخبه که تمرین، ذهنیت و سیستم‌های زندگی را ترکیب می‌کند. نتایج در بدن، ذهن و زندگی اندازه‌گیری می‌شود.',
    'nasm_certified': 'گواهی NASM',
    'philosophy': '۹۰٪ ذهنیت است',
    
    // Programs Section
    'programs_title': 'مسیر تحول خود را انتخاب کنید',
    'programs_subtitle': 'کوچینگ نخبه که تمرین، ذهنیت و سیستم‌های زندگی را ترکیب می‌کند. نتایج در بدن، ذهن و زندگی اندازه‌گیری می‌شود.',
    'monthly': 'ماهانه',
    'life_cycle': 'چرخه زندگی',
    'premium': 'پریمیوم',
    'most_popular': 'محبوب‌ترین',
    'from': 'از',
    
    // In-Person & Virtual
    'in_person_title': 'کوچینگ حضوری و مجازی',
    'in_person_subtitle': 'کوچینگ نخبه که تمرین، ذهنیت و سیستم‌های زندگی را ترکیب می‌کند. نتایج در بدن، ذهن و زندگی اندازه‌گیری می‌شود.',
    
    // Assessment Section
    'assessment_title': 'داستان خود را به ما بگویید',
    'assessment_subtitle': 'کوچینگ نخبه که تمرین، ذهنیت و سیستم‌های زندگی را ترکیب می‌کند. نتایج در بدن، ذهن و زندگی اندازه‌گیری می‌شود.',
    'sample_questions': 'نمونه سوالات:',
    'question_1': 'چه چیزی شما را به تناسب اندام کشاند؟',
    'question_2': 'با چه موانعی مواجه شده‌اید؟',
    'question_3': 'موفقیت برای شما چه شکلی است؟',
    'cultural_sensitivity': 'حساسیت فرهنگی و گزینه‌های پشتیبانی موجود است.',
    
    // Testimonials
    'testimonials_title': 'نتایج واقعی، داستان‌های واقعی',
    'testimonials_subtitle': 'کوچینگ نخبه که تمرین، ذهنیت و سیستم‌های زندگی را ترکیب می‌کند. نتایج در بدن، ذهن و زندگی اندازه‌گیری می‌شود.',
    
    // Consultation Form Steps
    'step_1_title': 'چه چیزی شما را امروز به اینجا کشاند؟',
    'tired_restart': 'خسته از شروع مجدد',
    'ready_change': 'آماده برای تغییر واقعی',
    'lost_direction': 'گم شده و نیاز به راهنمایی',
    'nothing_worked': 'هیچ چیزی کار نکرد',
    
    'step_2_title': '۶ ماه دیگر را تصور کنید...',
    'confidence_level': 'سطح اعتماد به نفس',
    'energy_level': 'سطح انرژی',
    'body_satisfaction': 'رضایت از بدن',
    'low': 'کم',
    'high': 'زیاد',
    
    'step_3_title': 'بزرگترین مانع شما چیست؟',
    'motivation_dies': 'انگیزه سریع از بین می‌رود',
    'dont_know_start': 'نمی‌دانم از کجا شروع کنم',
    'too_busy': 'خیلی مشغول، وقت ندارم',
    'mental_barriers': 'موانع ذهنی',
    'physical_limitations': 'محدودیت‌های جسمانی',
    'tried_expensive': 'برنامه‌های گران را امتحان کرده‌ام',
    
    'step_4_title': 'داستان خود را در یک جمله به من بگویید:',
    'story_placeholder': 'من آماده تغییر هستم چون...',
    'characters_remaining': 'کاراکتر باقی‌مانده',
    'story_matters': 'داستان شما برای من مهم است. - کاش',
    
    'step_5_title': 'بیایید در تماس باشیم',
    'first_name': 'نام',
    'name_placeholder': 'چه اسمی صدایتان کنم؟',
    'best_way_reach': 'بهترین راه برای تماس با شما:',
    'email': 'ایمیل',
    'whatsapp': 'واتساپ',
    'location': 'موقعیت',
    'location_placeholder': 'شهر، کشور',
    
    'step_6_title': 'چقدر جدی هستید؟ (صادق باشید)',
    'just_curious': 'فقط کنجکاو',
    'maybe_someday': 'شاید روزی',
    'ready_soon': 'به زودی آماده',
    'within_month': 'ظرف ۱ ماه',
    'ready_now': 'الان آماده',
    'start_immediately': 'بیایید فوراً شروع کنیم',
    'last_attempt': 'آخرین تلاش',
    'need_work': 'این باید کار کند',
    
    // Navigation
    'previous': 'قبلی',
    'next': 'بعدی',
    'submit_application': 'ارسال درخواست',
    'submitting': 'در حال ارسال...',
    
    // Success Screen
    'application_received': 'درخواست دریافت شد!',
    'congratulations': 'تبریک',
    'journey_begin': 'سفر تحول شما در حال شروع است. کاش درخواست شما را بررسی کرده و به زودی پاسخ خواهد داد.',
    'whats_next': 'بعد چه؟',
    'review_personally': 'کاش شخصاً درخواست شما را بررسی خواهد کرد',
    'personalized_response': 'پاسخ شخصی‌سازی شده دریافت خواهید کرد',
    'journey_begins': 'سفر تحول شما شروع می‌شود',
    'back_home': 'بازگشت به خانه',
    'welcome_family': 'به خانواده فیت میت کاش خوش آمدید!',
    
    // Social Proof
    'maria_story': 'ماریا از اسپانیا از اینجا شروع کرد و زندگی خود را در ۶ ماه متحول کرد',
    
    // Form Labels
    'interactive_calculator': 'ماشین حساب تعاملی تمرین و ردیاب',
    'session_timer': 'تایمر جلسه',
    'distance': 'مسافت',
    'drag_kilometers': 'برای تنظیم کیلومتر بکشید',
    'duration': 'مدت زمان',
    'drag_minutes': 'برای تنظیم دقیقه بکشید',
    'intensity': 'شدت',
    'drag_effort': 'برای تنظیم سطح تلاش بکشید',
    'profile_settings': 'تنظیمات پروفایل',
    'weight_kg': 'وزن (کیلوگرم)',
    'age': 'سن',
    'gender': 'جنسیت',
    'male': 'مرد',
    'female': 'زن',
    'calories_burned': 'کالری سوزانده شده',
    'fat_burned': 'چربی سوزانده شده',
    'pace': 'سرعت',
    'heart_rate': 'ضربان قلب',
    'steps': 'قدم‌ها',
    'elevation': 'ارتفاع',
    'weekly_goal': 'هدف هفتگی',
    'best_pace': 'بهترین سرعت',
    'avg_weekly': 'میانگین هفتگی',
    'total_time': 'کل زمان',
  },
  
  de: {
    // Header
    'based_in': 'Sitz in Berlin',
    
    // Navigation
    'programs': 'Programme',
    'results': 'Ergebnisse',
    'story': 'Geschichte',
    
    // Hero Section
    'hero_subtitle': 'Elite-Coaching, das Training, Mindset und Lebenssysteme kombiniert. Ergebnisse werden in Körper, Geist und Leben gemessen.',
    'location_text': 'Sitz in Berlin, Deutschland, internationale Kundenbetreuung',
    'book_consultation': 'Beratung buchen',
    
    // Stats Section
    'clients_transformed': 'Transformierte Kunden',
    'countries_reached': 'Erreichte Länder',
    'age_range': 'Altersbereich',
    'success_rate': 'Erfolgsrate',
    'yrs': 'Jahre',
    
    // Story Section
    'story_title': 'Von einem staubigen Teheraner Fitnessstudio zur Transformation von Leben in 25 Ländern',
    'story_subtitle': 'Elite-Coaching, das Training, Mindset und Lebenssysteme kombiniert. Ergebnisse werden in Körper, Geist und Leben gemessen.',
    'nasm_certified': 'NASM zertifiziert',
    'philosophy': '90% ist Mindset',
    
    // Programs Section
    'programs_title': 'Wähle deinen Transformationsweg',
    'programs_subtitle': 'Elite-Coaching, das Training, Mindset und Lebenssysteme kombiniert. Ergebnisse werden in Körper, Geist und Leben gemessen.',
    'monthly': 'Monatlich',
    'life_cycle': 'Lebenszyklus',
    'premium': 'Premium',
    'most_popular': 'Am beliebtesten',
    'from': 'ab',
    
    // In-Person & Virtual
    'in_person_title': 'Persönliches & virtuelles Coaching',
    'in_person_subtitle': 'Elite-Coaching, das Training, Mindset und Lebenssysteme kombiniert. Ergebnisse werden in Körper, Geist und Leben gemessen.',
    
    // Assessment Section
    'assessment_title': 'Erzähle uns deine Geschichte',
    'assessment_subtitle': 'Elite-Coaching, das Training, Mindset und Lebenssysteme kombiniert. Ergebnisse werden in Körper, Geist und Leben gemessen.',
    'sample_questions': 'Beispielfragen:',
    'question_1': 'Was hat dich zum Fitness gebracht?',
    'question_2': 'Welche Hindernisse hast du erlebt?',
    'question_3': 'Wie sieht Erfolg für dich aus?',
    'cultural_sensitivity': 'Kulturelle Sensibilität und Unterstützungsoptionen verfügbar.',
    
    // Testimonials
    'testimonials_title': 'Echte Ergebnisse, echte Geschichten',
    'testimonials_subtitle': 'Elite-Coaching, das Training, Mindset und Lebenssysteme kombiniert. Ergebnisse werden in Körper, Geist und Leben gemessen.',
    
    // Consultation Form Steps
    'step_1_title': 'Was hat dich heute hierher gebracht?',
    'tired_restart': 'Müde vom Neustart',
    'ready_change': 'Bereit für echte Veränderung',
    'lost_direction': 'Verloren und brauche Richtung',
    'nothing_worked': 'Nichts hat funktioniert',
    
    'step_2_title': 'Stelle dir vor, in 6 Monaten...',
    'confidence_level': 'Selbstvertrauen',
    'energy_level': 'Energieniveau',
    'body_satisfaction': 'Körperzufriedenheit',
    'low': 'Niedrig',
    'high': 'Hoch',
    
    'step_3_title': 'Was ist dein größtes Hindernis?',
    'motivation_dies': 'Motivation stirbt schnell',
    'dont_know_start': 'Weiß nicht, wo anfangen',
    'too_busy': 'Zu beschäftigt, keine Zeit',
    'mental_barriers': 'Mentale Barrieren',
    'physical_limitations': 'Körperliche Einschränkungen',
    'tried_expensive': 'Teure Programme probiert',
    
    'step_4_title': 'Erzähle mir deine Geschichte in einem Satz:',
    'story_placeholder': 'Ich bin bereit für Veränderung, weil...',
    'characters_remaining': 'Zeichen übrig',
    'story_matters': 'Deine Geschichte ist mir wichtig. - Kash',
    
    'step_5_title': 'Lass uns in Kontakt bleiben',
    'first_name': 'Vorname',
    'name_placeholder': 'Wie soll ich dich nennen?',
    'best_way_reach': 'Beste Art, dich zu erreichen:',
    'email': 'E-Mail',
    'whatsapp': 'WhatsApp',
    'location': 'Standort',
    'location_placeholder': 'Stadt, Land',
    
    'step_6_title': 'Wie ernst ist es dir? (Sei ehrlich)',
    'just_curious': 'Nur neugierig',
    'maybe_someday': 'Vielleicht eines Tages',
    'ready_soon': 'Bald bereit',
    'within_month': 'Innerhalb 1 Monat',
    'ready_now': 'Jetzt bereit',
    'start_immediately': 'Lass uns sofort beginnen',
    'last_attempt': 'Letzter Versuch',
    'need_work': 'Das muss funktionieren',
    
    // Navigation
    'previous': 'Zurück',
    'next': 'Weiter',
    'submit_application': 'Bewerbung einreichen',
    'submitting': 'Wird eingereicht...',
    
    // Success Screen
    'application_received': 'Bewerbung erhalten!',
    'congratulations': 'Glückwunsch',
    'journey_begin': 'Deine Transformationsreise beginnt. Kash wird deine Bewerbung prüfen und sich bald bei dir melden.',
    'whats_next': 'Was kommt als nächstes?',
    'review_personally': 'Kash wird deine Bewerbung persönlich prüfen',
    'personalized_response': 'Du erhältst eine personalisierte Antwort',
    'journey_begins': 'Deine Transformationsreise beginnt',
    'back_home': 'Zurück zur Startseite',
    'welcome_family': 'Willkommen in der Fit Mit Kash Familie!',
    
    // Social Proof
    'maria_story': 'Maria aus Spanien hat hier angefangen und ihr Leben in 6 Monaten transformiert',
    
    // Form Labels
    'interactive_calculator': 'Interaktiver Trainingsrechner & Tracker',
    'session_timer': 'Session-Timer',
    'distance': 'Distanz',
    'drag_kilometers': 'Ziehen, um Kilometer anzupassen',
    'duration': 'Dauer',
    'drag_minutes': 'Ziehen, um Minuten anzupassen',
    'intensity': 'Intensität',
    'drag_effort': 'Ziehen, um Anstrengungslevel anzupassen',
    'profile_settings': 'Profil-Einstellungen',
    'weight_kg': 'Gewicht (kg)',
    'age': 'Alter',
    'gender': 'Geschlecht',
    'male': 'Männlich',
    'female': 'Weiblich',
    'calories_burned': 'Verbrannte Kalorien',
    'fat_burned': 'Verbranntes Fett',
    'pace': 'Tempo',
    'heart_rate': 'Herzfrequenz',
    'steps': 'Schritte',
    'elevation': 'Höhenlage',
    'weekly_goal': 'Wöchentliches Ziel',
    'best_pace': 'Bestes Tempo',
    'avg_weekly': 'Durchschnitt wöchentlich',
    'total_time': 'Gesamtzeit',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
