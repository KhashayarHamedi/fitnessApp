"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fa' | 'de' | 'es' | 'uk' | 'ru' | 'ar' | 'tr';

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
     
     // Story Content
     'story_paragraph_1': 'At 17, I was just another kid in a dusty Tehran gym, staring at faded posters of bodybuilders I\'d never heard of. No YouTube. No Instagram coaches. Just me, some rusty weights, and a burning question: "What am I actually capable of?"',
     'story_paragraph_2': 'The first year nearly broke me. Injuries that made me question everything. Setbacks that felt like failures. But somewhere in that struggle, I discovered something that would change everything: the real battle wasn\'t in my muscles - it was in my mind.',
     'story_paragraph_3': '90% of transformation happens between your ears. The other 10%? That\'s just showing up.',
     'story_paragraph_4': 'I spent the next decade obsessing over this truth. Gym to parkour to CrossFit - each sport teaching me something new about the psychology of breakthrough. Every injury became a lesson. Every plateau became a puzzle to solve.',
     'story_paragraph_5': 'But the real education came from listening. Friends in Tehran sharing their struggles. Clients in Dubai fighting their demons. People in Berlin, Munich, Hamburg - all wrestling with the same internal enemy: the voice that says "you can\'t."',
     'story_paragraph_6': 'That\'s when it clicked. This wasn\'t about fitness. This was about rewiring the human operating system.',
     'story_paragraph_7': 'Today, I\'m NASM-certified and have guided transformations across 25+ countries. But my credentials don\'t matter as much as this: I\'ve been in your exact position - staring at yourself in the mirror, wondering if real change is even possible.',
     'story_paragraph_8': 'The answer is yes. But not the way you think.',
     'story_paragraph_9': 'I\'ve lost friends to addiction, depression, and the slow suicide of giving up on themselves. I\'ve seen potential crushed by the weight of "I\'m not good enough." That\'s why this became my life\'s work.',
     'story_paragraph_10': 'I don\'t train bodies. I don\'t count reps. I don\'t sell you meal plans.',
     'story_paragraph_11': 'I do something far more powerful: I show you who you really are when the excuses stop talking.',
     'story_paragraph_12': 'From a confused 17-year-old in Tehran to coaching transformations across continents - my journey taught me that geography doesn\'t matter, background doesn\'t matter, starting point doesn\'t matter.',
     'story_paragraph_13': 'What matters is this moment. Right now. When you decide that the person you\'re becoming is more important than the person you\'ve been.',
     'story_paragraph_14': 'This isn\'t just fitness. This isn\'t just coaching.',
     'story_paragraph_15': 'This is about discovering the version of yourself that\'s been waiting your whole life to finally meet you.',
     'story_paragraph_16': 'Ready?',
    
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
     
     // Story Content
     'story_paragraph_1': 'در ۱۷ سالگی، من فقط یک بچه دیگر در یک باشگاه قدیمی تهران بودم، به پوسترهای محو بدنسازانی که هرگز نشنیده بودم خیره شده بودم. نه یوتیوب. نه مربیان اینستاگرام. فقط من، چند وزنه زنگ‌زده، و یک سوال سوزان: "من واقعاً چه کاری از دستم برمی‌آید؟"',
     'story_paragraph_2': 'سال اول تقریباً مرا شکست. آسیب‌هایی که همه چیز را زیر سوال می‌برد. عقب‌گردهایی که مثل شکست احساس می‌شد. اما جایی در آن مبارزه، چیزی کشف کردم که همه چیز را تغییر می‌داد: جنگ واقعی در ماهیچه‌هایم نبود - در ذهنم بود.',
     'story_paragraph_3': '۹۰٪ تحول بین گوش‌های شما اتفاق می‌افتد. ۱۰٪ دیگر؟ فقط حاضر شدن است.',
     'story_paragraph_4': 'دهه بعدی را با وسواس روی این حقیقت گذراندم. از باشگاه تا پارکور تا کراس‌فیت - هر ورزش چیزی جدید درباره روانشناسی پیشرفت به من آموخت. هر آسیب یک درس شد. هر توقف یک معما برای حل کردن.',
     'story_paragraph_5': 'اما آموزش واقعی از گوش دادن آمد. دوستان در تهران که مشکلاتشان را به اشتراک می‌گذاشتند. مشتریان در دبی که با شیاطینشان می‌جنگیدند. مردم در برلین، مونیخ، هامبورگ - همه با همان دشمن درونی دست و پنجه نرم می‌کردند: صدایی که می‌گوید "نمی‌توانی."',
     'story_paragraph_6': 'آن موقع بود که فهمیدم. این درباره تناسب اندام نبود. این درباره بازسازی سیستم عامل انسانی بود.',
     'story_paragraph_7': 'امروز، من گواهی NASM دارم و تحولات را در بیش از ۲۵ کشور هدایت کرده‌ام. اما مدارکم به اندازه این مهم نیست: من در موقعیت دقیق شما بوده‌ام - به خودم در آینه نگاه می‌کردم، تعجب می‌کردم که آیا تغییر واقعی حتی ممکن است.',
     'story_paragraph_8': 'پاسخ بله است. اما نه به روشی که فکر می‌کنید.',
     'story_paragraph_9': 'من دوستانی را به اعتیاد، افسردگی، و خودکشی آهسته تسلیم شدن از دست داده‌ام. پتانسیل خرد شده توسط وزن "من به اندازه کافی خوب نیستم" را دیده‌ام. به همین دلیل این کار زندگی من شد.',
     'story_paragraph_10': 'من بدن‌ها را تمرین نمی‌دهم. تکرارها را نمی‌شمارم. برنامه‌های غذایی نمی‌فروشم.',
     'story_paragraph_11': 'من کاری بسیار قدرتمندتر انجام می‌دهم: به شما نشان می‌دهم که واقعاً چه کسی هستید وقتی بهانه‌ها حرف نمی‌زنند.',
     'story_paragraph_12': 'از یک نوجوان ۱۷ ساله سردرگم در تهران تا مربیگری تحولات در سراسر قاره‌ها - سفر من به من آموخت که جغرافیا مهم نیست، پیشینه مهم نیست، نقطه شروع مهم نیست.',
     'story_paragraph_13': 'آنچه مهم است این لحظه است. همین الان. وقتی تصمیم می‌گیرید که شخصی که در حال تبدیل شدن به آن هستید مهم‌تر از شخصی است که بوده‌اید.',
     'story_paragraph_14': 'این فقط تناسب اندام نیست. این فقط مربیگری نیست.',
     'story_paragraph_15': 'این درباره کشف نسخه‌ای از خودتان است که تمام عمر منتظر ملاقات با شما بوده است.',
     'story_paragraph_16': 'آماده‌اید؟',
    
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
     
     // Story Content
     'story_paragraph_1': 'Mit 17 war ich nur ein weiteres Kind in einem staubigen Teheraner Fitnessstudio und starrte auf verblasste Poster von Bodybuildern, von denen ich noch nie gehört hatte. Kein YouTube. Keine Instagram-Coaches. Nur ich, einige rostige Gewichte und eine brennende Frage: "Wozu bin ich eigentlich fähig?"',
     'story_paragraph_2': 'Das erste Jahr brach mich fast. Verletzungen, die alles in Frage stellten. Rückschläge, die sich wie Niederlagen anfühlten. Aber irgendwo in diesem Kampf entdeckte ich etwas, das alles verändern würde: Der wahre Kampf war nicht in meinen Muskeln - er war in meinem Kopf.',
     'story_paragraph_3': '90% der Transformation passiert zwischen deinen Ohren. Die anderen 10%? Das ist nur das Erscheinen.',
     'story_paragraph_4': 'Ich verbrachte das nächste Jahrzehnt damit, über diese Wahrheit zu obsessieren. Vom Fitnessstudio zum Parkour zum CrossFit - jeder Sport lehrte mich etwas Neues über die Psychologie des Durchbruchs. Jede Verletzung wurde eine Lektion. Jedes Plateau wurde ein Rätsel zum Lösen.',
     'story_paragraph_5': 'Aber die wahre Bildung kam vom Zuhören. Freunde in Teheran teilten ihre Kämpfe. Klienten in Dubai kämpften gegen ihre Dämonen. Menschen in Berlin, München, Hamburg - alle rangen mit dem gleichen inneren Feind: der Stimme, die sagt "du kannst nicht."',
     'story_paragraph_6': 'Da klickte es. Es ging nicht um Fitness. Es ging um die Neuverkabelung des menschlichen Betriebssystems.',
     'story_paragraph_7': 'Heute bin ich NASM-zertifiziert und habe Transformationen in über 25 Ländern geleitet. Aber meine Qualifikationen sind nicht so wichtig wie das: Ich war in deiner exakten Position - starrte mich im Spiegel an und fragte mich, ob echte Veränderung überhaupt möglich ist.',
     'story_paragraph_8': 'Die Antwort ist ja. Aber nicht so, wie du denkst.',
     'story_paragraph_9': 'Ich habe Freunde an Sucht, Depression und den langsamen Selbstmord des Aufgebens verloren. Ich habe Potenzial zerschmettert vom Gewicht von "Ich bin nicht gut genug" gesehen. Deshalb wurde dies meine Lebensarbeit.',
     'story_paragraph_10': 'Ich trainiere keine Körper. Ich zähle keine Wiederholungen. Ich verkaufe dir keine Ernährungspläne.',
     'story_paragraph_11': 'Ich tue etwas viel Mächtigeres: Ich zeige dir, wer du wirklich bist, wenn die Ausreden aufhören zu reden.',
     'story_paragraph_12': 'Von einem verwirrten 17-Jährigen in Teheran zum Coaching von Transformationen über Kontinente hinweg - meine Reise lehrte mich, dass Geographie nicht wichtig ist, Hintergrund nicht wichtig ist, Startpunkt nicht wichtig ist.',
     'story_paragraph_13': 'Was wichtig ist, ist dieser Moment. Jetzt. Wenn du entscheidest, dass die Person, zu der du wirst, wichtiger ist als die Person, die du warst.',
     'story_paragraph_14': 'Das ist nicht nur Fitness. Das ist nicht nur Coaching.',
     'story_paragraph_15': 'Das geht darum, die Version von dir zu entdecken, die dein ganzes Leben darauf gewartet hat, dich endlich zu treffen.',
     'story_paragraph_16': 'Bereit?',
    
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
   },
   
   es: {
     // Header
     'based_in': 'Con sede en Berlín',
     
     // Navigation
     'programs': 'Programas',
     'results': 'Resultados',
     'story': 'Historia',
     
     // Hero Section
     'hero_subtitle': 'Coaching de élite que combina entrenamiento, mentalidad y sistemas de vida. Resultados medidos en cuerpo, mente y vida.',
     'location_text': 'Con sede en Berlín, Alemania, atendiendo clientes internacionalmente',
     'book_consultation': 'Reserva tu Consulta',
     
     // Stats Section
     'clients_transformed': 'Clientes Transformados',
     'countries_reached': 'Países Alcanzados',
     'age_range': 'Rango de Edad',
     'success_rate': 'Tasa de Éxito',
     'yrs': 'años',
     
     // Story Section
     'story_title': 'De un Gimnasio Polvoriento en Teherán a Transformar Vidas en 25 Países',
     'story_subtitle': 'Coaching de élite que combina entrenamiento, mentalidad y sistemas de vida. Resultados medidos en cuerpo, mente y vida.',
     'nasm_certified': 'Certificado NASM',
     'philosophy': '90% es mentalidad',
     
     // Story Content
     'story_paragraph_1': 'A los 17, era solo otro chico en un gimnasio polvoriento de Teherán, mirando pósters descoloridos de culturistas de los que nunca había oído hablar. Sin YouTube. Sin coaches de Instagram. Solo yo, algunas pesas oxidadas, y una pregunta ardiente: "¿De qué soy realmente capaz?"',
     'story_paragraph_2': 'El primer año casi me rompe. Lesiones que me hicieron cuestionar todo. Contratiempos que se sentían como fracasos. Pero en algún lugar de esa lucha, descubrí algo que cambiaría todo: la batalla real no estaba en mis músculos - estaba en mi mente.',
     'story_paragraph_3': '90% de la transformación sucede entre tus oídos. ¿El otro 10%? Eso es solo aparecer.',
     'story_paragraph_4': 'Pasé la siguiente década obsesionándome con esta verdad. Del gimnasio al parkour al CrossFit - cada deporte me enseñó algo nuevo sobre la psicología del avance. Cada lesión se convirtió en una lección. Cada meseta se convirtió en un rompecabezas para resolver.',
     'story_paragraph_5': 'Pero la verdadera educación vino de escuchar. Amigos en Teherán compartiendo sus luchas. Clientes en Dubái luchando contra sus demonios. Gente en Berlín, Múnich, Hamburgo - todos luchando contra el mismo enemigo interno: la voz que dice "no puedes."',
     'story_paragraph_6': 'Ahí fue cuando hizo clic. Esto no era sobre fitness. Esto era sobre reconfigurar el sistema operativo humano.',
     'story_paragraph_7': 'Hoy, estoy certificado por NASM y he guiado transformaciones en más de 25 países. Pero mis credenciales no importan tanto como esto: he estado en tu posición exacta - mirándome en el espejo, preguntándome si el cambio real es siquiera posible.',
     'story_paragraph_8': 'La respuesta es sí. Pero no de la manera que piensas.',
     'story_paragraph_9': 'He perdido amigos por adicción, depresión, y el lento suicidio de rendirse a sí mismos. He visto potencial aplastado por el peso de "no soy lo suficientemente bueno." Por eso esto se convirtió en el trabajo de mi vida.',
     'story_paragraph_10': 'No entreno cuerpos. No cuento repeticiones. No te vendo planes de comidas.',
     'story_paragraph_11': 'Hago algo mucho más poderoso: te muestro quién eres realmente cuando las excusas dejan de hablar.',
     'story_paragraph_12': 'De un confundido adolescente de 17 años en Teherán a entrenar transformaciones a través de continentes - mi viaje me enseñó que la geografía no importa, el trasfondo no importa, el punto de partida no importa.',
     'story_paragraph_13': 'Lo que importa es este momento. Ahora mismo. Cuando decides que la persona en la que te estás convirtiendo es más importante que la persona que has sido.',
     'story_paragraph_14': 'Esto no es solo fitness. Esto no es solo coaching.',
     'story_paragraph_15': 'Esto es sobre descubrir la versión de ti mismo que ha estado esperando toda tu vida para finalmente conocerte.',
     'story_paragraph_16': '¿Listo?',
     
     // Programs Section
     'programs_title': 'Elige tu Camino de Transformación',
     'programs_subtitle': 'Coaching de élite que combina entrenamiento, mentalidad y sistemas de vida. Resultados medidos en cuerpo, mente y vida.',
     'monthly': 'Mensual',
     'life_cycle': 'Ciclo de Vida',
     'premium': 'Premium',
     'most_popular': 'Más Popular',
     'from': 'desde',
     
     // In-Person & Virtual
     'in_person_title': 'Coaching Presencial y Virtual',
     'in_person_subtitle': 'Coaching de élite que combina entrenamiento, mentalidad y sistemas de vida. Resultados medidos en cuerpo, mente y vida.',
     
     // Assessment Section
     'assessment_title': 'Cuéntanos tu historia',
     'assessment_subtitle': 'Coaching de élite que combina entrenamiento, mentalidad y sistemas de vida. Resultados medidos en cuerpo, mente y vida.',
     'sample_questions': 'Preguntas de ejemplo:',
     'question_1': '¿Qué te trajo al fitness?',
     'question_2': '¿Qué obstáculos has enfrentado?',
     'question_3': '¿Cómo se ve el éxito para ti?',
     'cultural_sensitivity': 'Sensibilidad cultural y opciones de apoyo disponibles.',
     
     // Testimonials
     'testimonials_title': 'Resultados Reales, Historias Reales',
     'testimonials_subtitle': 'Coaching de élite que combina entrenamiento, mentalidad y sistemas de vida. Resultados medidos en cuerpo, mente y vida.',
     
     // Consultation Form Steps
     'step_1_title': '¿Qué te trajo aquí hoy?',
     'tired_restart': 'Cansado de empezar de nuevo',
     'ready_change': 'Listo para un cambio real',
     'lost_direction': 'Perdido y necesito dirección',
     'nothing_worked': 'Nada ha funcionado',
     
     'step_2_title': 'Imagina dentro de 6 meses...',
     'confidence_level': 'Nivel de Confianza',
     'energy_level': 'Nivel de Energía',
     'body_satisfaction': 'Satisfacción Corporal',
     'low': 'Bajo',
     'high': 'Alto',
     
     'step_3_title': '¿Cuál es tu mayor obstáculo?',
     'motivation_dies': 'La motivación muere rápido',
     'dont_know_start': 'No sé por dónde empezar',
     'too_busy': 'Demasiado ocupado, sin tiempo',
     'mental_barriers': 'Barreras mentales',
     'physical_limitations': 'Limitaciones físicas',
     'tried_expensive': 'Probé programas caros',
     
     'step_4_title': 'Cuéntame tu historia en una frase:',
     'story_placeholder': 'Estoy listo para cambiar porque...',
     'characters_remaining': 'caracteres restantes',
     'story_matters': 'Tu historia me importa. - Kash',
     
     'step_5_title': 'Pongámonos en contacto',
     'first_name': 'Nombre',
     'name_placeholder': '¿Cómo debo llamarte?',
     'best_way_reach': 'Mejor forma de contactarte:',
     'email': 'Email',
     'whatsapp': 'WhatsApp',
     'location': 'Ubicación',
     'location_placeholder': 'Ciudad, País',
     
     'step_6_title': '¿Qué tan serio eres? (Sé honesto)',
     'just_curious': 'Solo Curioso',
     'maybe_someday': 'Tal vez algún día',
     'ready_soon': 'Listo Pronto',
     'within_month': 'Dentro de 1 mes',
     'ready_now': 'Listo Ahora',
     'start_immediately': 'Empecemos inmediatamente',
     'last_attempt': 'Último Intento',
     'need_work': 'Necesito que esto funcione',
     
     // Navigation
     'previous': 'Anterior',
     'next': 'Siguiente',
     'submit_application': 'Enviar Solicitud',
     'submitting': 'Enviando...',
     
     // Success Screen
     'application_received': '¡Solicitud Recibida!',
     'congratulations': '¡Felicitaciones',
     'journey_begin': 'Tu viaje de transformación está por comenzar. Kash revisará tu solicitud y te responderá pronto.',
     'whats_next': '¿Qué sigue?',
     'review_personally': 'Kash revisará tu solicitud personalmente',
     'personalized_response': 'Recibirás una respuesta personalizada',
     'journey_begins': 'Tu viaje de transformación comienza',
     'back_home': 'Volver al Inicio',
     'welcome_family': '¡Bienvenido a la familia Fit Mit Kash!',
     
     // Social Proof
     'maria_story': 'María de España comenzó aquí y transformó su vida en 6 meses',
     
     // Form Labels
     'interactive_calculator': 'Calculadora interactiva de entrenamiento y rastreador',
     'session_timer': 'Temporizador de Sesión',
     'distance': 'Distancia',
     'drag_kilometers': 'Arrastra para ajustar kilómetros',
     'duration': 'Duración',
     'drag_minutes': 'Arrastra para ajustar minutos',
     'intensity': 'Intensidad',
     'drag_effort': 'Arrastra para ajustar nivel de esfuerzo',
     'profile_settings': 'Configuración de Perfil',
     'weight_kg': 'Peso (kg)',
     'age': 'Edad',
     'gender': 'Género',
     'male': 'Masculino',
     'female': 'Femenino',
     'calories_burned': 'Calorías Quemadas',
     'fat_burned': 'Grasa Quemada',
     'pace': 'Ritmo',
     'heart_rate': 'Frecuencia Cardíaca',
     'steps': 'Pasos',
     'elevation': 'Elevación',
     'weekly_goal': 'Meta Semanal',
     'best_pace': 'Mejor Ritmo',
     'avg_weekly': 'Promedio Semanal',
     'total_time': 'Tiempo Total',
   },
   
   uk: {
     // Header
     'based_in': 'Базується в Берліні',
     
     // Navigation
     'programs': 'Програми',
     'results': 'Результати',
     'story': 'Історія',
     
     // Hero Section
     'hero_subtitle': 'Елітне тренування, що поєднує фізичні вправи, мислення та життєві системи. Результати вимірюються в тілі, розумі та житті.',
     'location_text': 'Базується в Берліні, Німеччина, обслуговує клієнтів міжнародно',
     'book_consultation': 'Забронювати Консультацію',
     
     // Stats Section
     'clients_transformed': 'Клієнтів Трансформовано',
     'countries_reached': 'Країн Охоплено',
     'age_range': 'Віковий Діапазон',
     'success_rate': 'Показник Успіху',
     'yrs': 'років',
     
     // Story Section
     'story_title': 'Від Запиленого Тегеранського Спортзалу до Трансформації Життів у 25 Країнах',
     'story_subtitle': 'Елітне тренування, що поєднує фізичні вправи, мислення та життєві системи. Результати вимірюються в тілі, розумі та житті.',
     'nasm_certified': 'Сертифікований NASM',
     'philosophy': '90% це мислення',
     
     // Story Content
     'story_paragraph_1': 'У 17 років я був просто ще одним хлопчиком у запиленому тегеранському спортзалі, дивлячись на вицвілі плакати бодібілдерів, про яких я ніколи не чув. Немає YouTube. Немає Instagram-тренерів. Тільки я, кілька іржавих гантелей і палаюче питання: "На що я насправді здатний?"',
     'story_paragraph_2': 'Перший рік майже зламав мене. Травми, які змушували все піддавати сумніву. Невдачі, які відчувалися як поразки. Але десь у цій боротьбі я відкрив щось, що змінить все: справжня битва була не в моїх м\'язах - вона була в моєму розумі.',
     'story_paragraph_3': '90% трансформації відбувається між вашими вухами. Інші 10%? Це просто з\'явлення.',
     'story_paragraph_4': 'Я провів наступне десятиліття, одержимий цією правдою. Від спортзалу до паркуру до кросфіту - кожен спорт навчив мене чомусь новому про психологію прориву. Кожна травма стала уроком. Кожне плато стало головоломкою для вирішення.',
     'story_paragraph_5': 'Але справжня освіта прийшла від слухання. Друзі в Тегерані ділилися своїми боротьбами. Клієнти в Дубаї боролися зі своїми демонами. Люди в Берліні, Мюнхені, Гамбурзі - всі боролися з тим самим внутрішнім ворогом: голосом, який каже "ти не можеш."',
     'story_paragraph_6': 'Тоді це зрозуміло. Це було не про фітнес. Це було про перепрограмування людської операційної системи.',
     'story_paragraph_7': 'Сьогодні я сертифікований NASM і керував трансформаціями в понад 25 країнах. Але мої кваліфікації не такі важливі, як це: я був у вашій точній позиції - дивився на себе в дзеркало, дивуючись, чи можлива взагалі реальна зміна.',
     'story_paragraph_8': 'Відповідь так. Але не так, як ви думаєте.',
     'story_paragraph_9': 'Я втратив друзів через залежність, депресію та повільне самогубство здачі. Я бачив потенціал, розчавлений вагою "я недостатньо хороший." Ось чому це стало роботою мого життя.',
     'story_paragraph_10': 'Я не треную тіла. Я не рахую повторення. Я не продаю вам плани харчування.',
     'story_paragraph_11': 'Я роблю щось набагато потужніше: я показую вам, хто ви насправді є, коли виправдання перестають говорити.',
     'story_paragraph_12': 'Від заплутаного 17-річного в Тегерані до тренування трансформацій на континентах - моя подорож навчила мене, що географія не має значення, фон не має значення, початкова точка не має значення.',
     'story_paragraph_13': 'Що має значення, це цей момент. Зараз. Коли ви вирішуєте, що людина, якою ви стаєте, важливіша за людину, якою ви були.',
     'story_paragraph_14': 'Це не просто фітнес. Це не просто тренування.',
     'story_paragraph_15': 'Це про відкриття версії себе, яка чекала все ваше життя, щоб нарешті зустрітися з вами.',
     'story_paragraph_16': 'Готові?',
     
     // Programs Section
     'programs_title': 'Виберіть Свій Шлях Трансформації',
     'programs_subtitle': 'Елітне тренування, що поєднує фізичні вправи, мислення та життєві системи. Результати вимірюються в тілі, розумі та житті.',
     'monthly': 'Щомісячно',
     'life_cycle': 'Життєвий Цикл',
     'premium': 'Преміум',
     'most_popular': 'Найпопулярніший',
     'from': 'від',
     
     // In-Person & Virtual
     'in_person_title': 'Особисте та Віртуальне Тренування',
     'in_person_subtitle': 'Елітне тренування, що поєднує фізичні вправи, мислення та життєві системи. Результати вимірюються в тілі, розумі та житті.',
     
     // Assessment Section
     'assessment_title': 'Розкажіть нам свою історію',
     'assessment_subtitle': 'Елітне тренування, що поєднує фізичні вправи, мислення та життєві системи. Результати вимірюються в тілі, розумі та житті.',
     'sample_questions': 'Приклади питань:',
     'question_1': 'Що привело вас до фітнесу?',
     'question_2': 'Які перешкоди ви зустрічали?',
     'question_3': 'Як виглядає успіх для вас?',
     'cultural_sensitivity': 'Культурна чутливість та варіанти підтримки доступні.',
     
     // Testimonials
     'testimonials_title': 'Реальні Результати, Реальні Історії',
     'testimonials_subtitle': 'Елітне тренування, що поєднує фізичні вправи, мислення та життєві системи. Результати вимірюються в тілі, розумі та житті.',
     
     // Consultation Form Steps
     'step_1_title': 'Що привело вас сюди сьогодні?',
     'tired_restart': 'Втомився від початку спочатку',
     'ready_change': 'Готовий до реальних змін',
     'lost_direction': 'Загубився і потребую напрямку',
     'nothing_worked': 'Нічого не спрацювало',
     
     'step_2_title': 'Уявіть через 6 місяців...',
     'confidence_level': 'Рівень Впевненості',
     'energy_level': 'Рівень Енергії',
     'body_satisfaction': 'Задоволення Тілом',
     'low': 'Низький',
     'high': 'Високий',
     
     'step_3_title': 'Яка ваша найбільша перешкода?',
     'motivation_dies': 'Мотивація швидко згасає',
     'dont_know_start': 'Не знаю, з чого почати',
     'too_busy': 'Занадто зайнятий, немає часу',
     'mental_barriers': 'Психічні бар\'єри',
     'physical_limitations': 'Фізичні обмеження',
     'tried_expensive': 'Спробував дорогі програми',
     
     'step_4_title': 'Розкажіть мені свою історію в одному реченні:',
     'story_placeholder': 'Я готовий змінюватися, тому що...',
     'characters_remaining': 'символів залишилося',
     'story_matters': 'Ваша історія важлива для мене. - Каш',
     
     'step_5_title': 'Давайте зв\'яжемося',
     'first_name': 'Ім\'я',
     'name_placeholder': 'Як мені вас називати?',
     'best_way_reach': 'Найкращий спосіб зв\'язатися з вами:',
     'email': 'Email',
     'whatsapp': 'WhatsApp',
     'location': 'Розташування',
     'location_placeholder': 'Місто, Країна',
     
     'step_6_title': 'Наскільки серйозно ви ставитеся? (Будьте чесні)',
     'just_curious': 'Просто Цікаво',
     'maybe_someday': 'Можливо колись',
     'ready_soon': 'Скоро Готовий',
     'within_month': 'Протягом 1 місяця',
     'ready_now': 'Готовий Зараз',
     'start_immediately': 'Давайте почнемо відразу',
     'last_attempt': 'Остання Спроба',
     'need_work': 'Мені потрібно, щоб це спрацювало',
     
     // Navigation
     'previous': 'Попередній',
     'next': 'Далі',
     'submit_application': 'Подати Заявку',
     'submitting': 'Подається...',
     
     // Success Screen
     'application_received': 'Заявку Отримано!',
     'congratulations': 'Вітаємо',
     'journey_begin': 'Ваша подорож трансформації ось-ось почнеться. Каш перегляне вашу заявку і відповість вам незабаром.',
     'whats_next': 'Що далі?',
     'review_personally': 'Каш особисто перегляне вашу заявку',
     'personalized_response': 'Ви отримаєте персоналізовану відповідь',
     'journey_begins': 'Ваша подорож трансформації починається',
     'back_home': 'Повернутися Додому',
     'welcome_family': 'Ласкаво просимо до сім\'ї Fit Mit Kash!',
     
     // Social Proof
     'maria_story': 'Марія з Іспанії почала звідси і трансформувала своє життя за 6 місяців',
     
     // Form Labels
     'interactive_calculator': 'Інтерактивний калькулятор тренувань та трекер',
     'session_timer': 'Таймер Сесії',
     'distance': 'Відстань',
     'drag_kilometers': 'Перетягніть для налаштування кілометрів',
     'duration': 'Тривалість',
     'drag_minutes': 'Перетягніть для налаштування хвилин',
     'intensity': 'Інтенсивність',
     'drag_effort': 'Перетягніть для налаштування рівня зусиль',
     'profile_settings': 'Налаштування Профілю',
     'weight_kg': 'Вага (кг)',
     'age': 'Вік',
     'gender': 'Стать',
     'male': 'Чоловіча',
     'female': 'Жіноча',
     'calories_burned': 'Спалені Калорії',
     'fat_burned': 'Спалений Жир',
     'pace': 'Темп',
     'heart_rate': 'Частота Серця',
     'steps': 'Кроки',
     'elevation': 'Підйом',
     'weekly_goal': 'Тижнева Мета',
     'best_pace': 'Найкращий Темп',
     'avg_weekly': 'Середній Тижневий',
     'total_time': 'Загальний Час',
   },
   
   ru: {
     // Header
     'based_in': 'Базируется в Берлине',
     
     // Navigation
     'programs': 'Программы',
     'results': 'Результаты',
     'story': 'История',
     
     // Hero Section
     'hero_subtitle': 'Элитный коучинг, сочетающий тренировки, мышление и жизненные системы. Результаты измеряются в теле, разуме и жизни.',
     'location_text': 'Базируется в Берлине, Германия, обслуживает клиентов по всему миру',
     'book_consultation': 'Забронировать Консультацию',
     
     // Stats Section
     'clients_transformed': 'Клиентов Трансформировано',
     'countries_reached': 'Стран Охвачено',
     'age_range': 'Возрастной Диапазон',
     'success_rate': 'Показатель Успеха',
     'yrs': 'лет',
     
     // Story Section
     'story_title': 'От Пыльного Тегеранского Спортзала до Трансформации Жизней в 25 Странах',
     'story_subtitle': 'Элитный коучинг, сочетающий тренировки, мышление и жизненные системы. Результаты измеряются в теле, разуме и жизни.',
     'nasm_certified': 'Сертифицирован NASM',
     'philosophy': '90% это мышление',
     
     // Story Content
     'story_paragraph_1': 'В 17 лет я был просто еще одним парнем в пыльном тегеранском спортзале, смотря на выцветшие плакаты бодибилдеров, о которых я никогда не слышал. Ни YouTube. Ни Instagram-тренеров. Только я, несколько ржавых гантелей и жгучий вопрос: "На что я действительно способен?"',
     'story_paragraph_2': 'Первый год почти сломал меня. Травмы, которые заставляли все подвергать сомнению. Неудачи, которые ощущались как поражения. Но где-то в этой борьбе я обнаружил нечто, что изменит все: настоящая битва была не в моих мышцах - она была в моем уме.',
     'story_paragraph_3': '90% трансформации происходит между вашими ушами. Остальные 10%? Это просто появление.',
     'story_paragraph_4': 'Я провел следующее десятилетие, одержимый этой истиной. От спортзала до паркура до кроссфита - каждый спорт учил меня чему-то новому о психологии прорыва. Каждая травма стала уроком. Каждое плато стало головоломкой для решения.',
     'story_paragraph_5': 'Но настоящее образование пришло от слушания. Друзья в Тегеране делились своими борьбами. Клиенты в Дубае боролись со своими демонами. Люди в Берлине, Мюнхене, Гамбурге - все боролись с тем же внутренним врагом: голосом, который говорит "ты не можешь."',
     'story_paragraph_6': 'Тогда это щелкнуло. Это было не о фитнесе. Это было о перепрограммировании человеческой операционной системы.',
     'story_paragraph_7': 'Сегодня я сертифицирован NASM и руководил трансформациями в более чем 25 странах. Но мои квалификации не так важны, как это: я был в вашей точной позиции - смотрел на себя в зеркало, удивляясь, возможна ли вообще реальная перемена.',
     'story_paragraph_8': 'Ответ да. Но не так, как вы думаете.',
     'story_paragraph_9': 'Я потерял друзей из-за зависимости, депрессии и медленного самоубийства сдачи. Я видел потенциал, раздавленный весом "я недостаточно хорош." Вот почему это стало работой моей жизни.',
     'story_paragraph_10': 'Я не тренирую тела. Я не считаю повторения. Я не продаю вам планы питания.',
     'story_paragraph_11': 'Я делаю нечто гораздо более мощное: я показываю вам, кто вы действительно есть, когда оправдания перестают говорить.',
     'story_paragraph_12': 'От запутанного 17-летнего в Тегеране до тренировки трансформаций на континентах - мое путешествие научило меня, что география не имеет значения, фон не имеет значения, отправная точка не имеет значения.',
     'story_paragraph_13': 'Что имеет значение, так это этот момент. Сейчас. Когда вы решаете, что человек, которым вы становитесь, важнее человека, которым вы были.',
     'story_paragraph_14': 'Это не просто фитнес. Это не просто коучинг.',
     'story_paragraph_15': 'Это об открытии версии себя, которая ждала всю вашу жизнь, чтобы наконец встретиться с вами.',
     'story_paragraph_16': 'Готовы?',
     
     // Programs Section
     'programs_title': 'Выберите Свой Путь Трансформации',
     'programs_subtitle': 'Элитный коучинг, сочетающий тренировки, мышление и жизненные системы. Результаты измеряются в теле, разуме и жизни.',
     'monthly': 'Ежемесячно',
     'life_cycle': 'Жизненный Цикл',
     'premium': 'Премиум',
     'most_popular': 'Самый Популярный',
     'from': 'от',
     
     // In-Person & Virtual
     'in_person_title': 'Личный и Виртуальный Коучинг',
     'in_person_subtitle': 'Элитный коучинг, сочетающий тренировки, мышление и жизненные системы. Результаты измеряются в теле, разуме и жизни.',
     
     // Assessment Section
     'assessment_title': 'Расскажите нам свою историю',
     'assessment_subtitle': 'Элитный коучинг, сочетающий тренировки, мышление и жизненные системы. Результаты измеряются в теле, разуме и жизни.',
     'sample_questions': 'Примеры вопросов:',
     'question_1': 'Что привело вас к фитнесу?',
     'question_2': 'Какие препятствия вы встречали?',
     'question_3': 'Как выглядит успех для вас?',
     'cultural_sensitivity': 'Культурная чувствительность и варианты поддержки доступны.',
     
     // Testimonials
     'testimonials_title': 'Реальные Результаты, Реальные Истории',
     'testimonials_subtitle': 'Элитный коучинг, сочетающий тренировки, мышление и жизненные системы. Результаты измеряются в теле, разуме и жизни.',
     
     // Consultation Form Steps
     'step_1_title': 'Что привело вас сюда сегодня?',
     'tired_restart': 'Устал начинать заново',
     'ready_change': 'Готов к реальным изменениям',
     'lost_direction': 'Потерялся и нуждаюсь в направлении',
     'nothing_worked': 'Ничего не сработало',
     
     'step_2_title': 'Представьте через 6 месяцев...',
     'confidence_level': 'Уровень Уверенности',
     'energy_level': 'Уровень Энергии',
     'body_satisfaction': 'Удовлетворенность Телом',
     'low': 'Низкий',
     'high': 'Высокий',
     
     'step_3_title': 'Какое ваше самое большое препятствие?',
     'motivation_dies': 'Мотивация быстро угасает',
     'dont_know_start': 'Не знаю, с чего начать',
     'too_busy': 'Слишком занят, нет времени',
     'mental_barriers': 'Психические барьеры',
     'physical_limitations': 'Физические ограничения',
     'tried_expensive': 'Пробовал дорогие программы',
     
     'step_4_title': 'Расскажите мне свою историю в одном предложении:',
     'story_placeholder': 'Я готов меняться, потому что...',
     'characters_remaining': 'символов осталось',
     'story_matters': 'Ваша история важна для меня. - Каш',
     
     'step_5_title': 'Давайте свяжемся',
     'first_name': 'Имя',
     'name_placeholder': 'Как мне вас называть?',
     'best_way_reach': 'Лучший способ связаться с вами:',
     'email': 'Email',
     'whatsapp': 'WhatsApp',
     'location': 'Местоположение',
     'location_placeholder': 'Город, Страна',
     
     'step_6_title': 'Насколько серьезно вы относитесь? (Будьте честны)',
     'just_curious': 'Просто Любопытно',
     'maybe_someday': 'Может быть когда-нибудь',
     'ready_soon': 'Скоро Готов',
     'within_month': 'В течение 1 месяца',
     'ready_now': 'Готов Сейчас',
     'start_immediately': 'Давайте начнем сразу',
     'last_attempt': 'Последняя Попытка',
     'need_work': 'Мне нужно, чтобы это сработало',
     
     // Navigation
     'previous': 'Предыдущий',
     'next': 'Далее',
     'submit_application': 'Подать Заявку',
     'submitting': 'Подается...',
     
     // Success Screen
     'application_received': 'Заявку Получено!',
     'congratulations': 'Поздравляем',
     'journey_begin': 'Ваше путешествие трансформации вот-вот начнется. Каш рассмотрит вашу заявку и ответит вам вскоре.',
     'whats_next': 'Что дальше?',
     'review_personally': 'Каш лично рассмотрит вашу заявку',
     'personalized_response': 'Вы получите персонализированный ответ',
     'journey_begins': 'Ваше путешествие трансформации начинается',
     'back_home': 'Вернуться Домой',
     'welcome_family': 'Добро пожаловать в семью Fit Mit Kash!',
     
     // Social Proof
     'maria_story': 'Мария из Испании начала отсюда и трансформировала свою жизнь за 6 месяцев',
     
     // Form Labels
     'interactive_calculator': 'Интерактивный калькулятор тренировок и трекер',
     'session_timer': 'Таймер Сессии',
     'distance': 'Расстояние',
     'drag_kilometers': 'Перетащите для настройки километров',
     'duration': 'Продолжительность',
     'drag_minutes': 'Перетащите для настройки минут',
     'intensity': 'Интенсивность',
     'drag_effort': 'Перетащите для настройки уровня усилий',
     'profile_settings': 'Настройки Профиля',
     'weight_kg': 'Вес (кг)',
     'age': 'Возраст',
     'gender': 'Пол',
     'male': 'Мужской',
     'female': 'Женский',
     'calories_burned': 'Сожженные Калории',
     'fat_burned': 'Сожженный Жир',
     'pace': 'Темп',
     'heart_rate': 'Частота Сердца',
     'steps': 'Шаги',
     'elevation': 'Подъем',
     'weekly_goal': 'Недельная Цель',
     'best_pace': 'Лучший Темп',
     'avg_weekly': 'Средний Недельный',
     'total_time': 'Общее Время',
   },
   
   ar: {
     // Header
     'based_in': 'مقيم في برلين',
     
     // Navigation
     'programs': 'البرامج',
     'results': 'النتائج',
     'story': 'القصة',
     
     // Hero Section
     'hero_subtitle': 'تدريب نخبة يجمع بين التمرين والعقلية وأنظمة الحياة. النتائج تُقاس في الجسد والعقل والحياة.',
     'location_text': 'مقيم في برلين، ألمانيا، يخدم العملاء دولياً',
     'book_consultation': 'احجز استشارتك',
     
     // Stats Section
     'clients_transformed': 'عملاء تم تحويلهم',
     'countries_reached': 'دول تم الوصول إليها',
     'age_range': 'نطاق العمر',
     'success_rate': 'معدل النجاح',
     'yrs': 'سنوات',
     
     // Story Section
     'story_title': 'من صالة رياضية مغبرة في طهران إلى تحويل حياة في 25 دولة',
     'story_subtitle': 'تدريب نخبة يجمع بين التمرين والعقلية وأنظمة الحياة. النتائج تُقاس في الجسد والعقل والحياة.',
     'nasm_certified': 'معتمد من NASM',
     'philosophy': '90% هي العقلية',
     
     // Story Content
     'story_paragraph_1': 'في سن 17، كنت مجرد طفل آخر في صالة رياضية مغبرة في طهران، أحدق في ملصقات باهتة لرياضيين كمال الأجسام لم أسمع بهم من قبل. لا يوتيوب. لا مدربين إنستغرام. فقط أنا، بعض الأوزان الصدئة، وسؤال ملح: "ما الذي أنا قادر عليه حقاً؟"',
     'story_paragraph_2': 'كاد العام الأول أن يكسرني. إصابات جعلتني أشك في كل شيء. نكسات شعرت كأنها فشل. لكن في مكان ما من تلك المعركة، اكتشفت شيئاً سيغير كل شيء: المعركة الحقيقية لم تكن في عضلاتي - بل كانت في عقلي.',
     'story_paragraph_3': '90% من التحول يحدث بين أذنيك. الـ 10% الأخرى؟ هذا مجرد الحضور.',
     'story_paragraph_4': 'قضيت العقد التالي مهووساً بهذه الحقيقة. من الصالة الرياضية إلى الباركور إلى الكروس فيت - كل رياضة علمتني شيئاً جديداً عن نفسية الاختراق. كل إصابة أصبحت درساً. كل هضبة أصبحت لغزاً للحل.',
     'story_paragraph_5': 'لكن التعليم الحقيقي جاء من الاستماع. أصدقاء في طهران يشاركون نضالاتهم. عملاء في دبي يقاتلون شياطينهم. أشخاص في برلين، ميونخ، هامبورغ - جميعهم يتصارعون مع نفس العدو الداخلي: الصوت الذي يقول "لا تستطيع."',
     'story_paragraph_6': 'حينها انتبهت. لم يكن هذا عن اللياقة البدنية. كان هذا عن إعادة برمجة نظام التشغيل البشري.',
     'story_paragraph_7': 'اليوم، أنا معتمد من NASM وقادت تحولات في أكثر من 25 دولة. لكن مؤهلاتي لا تهم بقدر هذا: لقد كنت في موقفك بالضبط - أحدق في نفسي في المرآة، متسائلاً إذا كان التغيير الحقيقي ممكناً أصلاً.',
     'story_paragraph_8': 'الجواب نعم. لكن ليس بالطريقة التي تعتقدها.',
     'story_paragraph_9': 'لقد فقدت أصدقاء بسبب الإدمان، الاكتئاب، والانتحار البطيء للاستسلام. رأيت إمكانيات محطمة تحت وطأة "لست جيداً بما فيه الكفاية." لهذا أصبح هذا عمل حياتي.',
     'story_paragraph_10': 'أنا لا أدرب أجساداً. لا أعد التكرارات. لا أبيع خطط وجبات.',
     'story_paragraph_11': 'أفعل شيئاً أقوى بكثير: أريك من أنت حقاً عندما تتوقف الأعذار عن الكلام.',
     'story_paragraph_12': 'من مراهق مرتبك عمره 17 في طهران إلى تدريب التحولات عبر القارات - رحلتي علمتني أن الجغرافيا لا تهم، الخلفية لا تهم، نقطة البداية لا تهم.',
     'story_paragraph_13': 'ما يهم هو هذه اللحظة. الآن. عندما تقرر أن الشخص الذي تصبحه أهم من الشخص الذي كنت عليه.',
     'story_paragraph_14': 'هذا ليس مجرد لياقة بدنية. هذا ليس مجرد تدريب.',
     'story_paragraph_15': 'هذا عن اكتشاف نسخة من نفسك كانت تنتظر طوال حياتك لتلتقي بك أخيراً.',
     'story_paragraph_16': 'مستعد؟',
     
     // Programs Section
     'programs_title': 'اختر مسار تحولك',
     'programs_subtitle': 'تدريب نخبة يجمع بين التمرين والعقلية وأنظمة الحياة. النتائج تُقاس في الجسد والعقل والحياة.',
     'monthly': 'شهري',
     'life_cycle': 'دورة الحياة',
     'premium': 'بريميوم',
     'most_popular': 'الأكثر شعبية',
     'from': 'من',
     
     // In-Person & Virtual
     'in_person_title': 'التدريب الشخصي والافتراضي',
     'in_person_subtitle': 'تدريب نخبة يجمع بين التمرين والعقلية وأنظمة الحياة. النتائج تُقاس في الجسد والعقل والحياة.',
     
     // Assessment Section
     'assessment_title': 'أخبرنا قصتك',
     'assessment_subtitle': 'تدريب نخبة يجمع بين التمرين والعقلية وأنظمة الحياة. النتائج تُقاس في الجسد والعقل والحياة.',
     'sample_questions': 'أسئلة نموذجية:',
     'question_1': 'ما الذي جلبك إلى اللياقة البدنية؟',
     'question_2': 'ما العقبات التي واجهتها؟',
     'question_3': 'كيف يبدو النجاح بالنسبة لك؟',
     'cultural_sensitivity': 'الحساسية الثقافية وخيارات الدعم متاحة.',
     
     // Testimonials
     'testimonials_title': 'نتائج حقيقية، قصص حقيقية',
     'testimonials_subtitle': 'تدريب نخبة يجمع بين التمرين والعقلية وأنظمة الحياة. النتائج تُقاس في الجسد والعقل والحياة.',
     
     // Consultation Form Steps
     'step_1_title': 'ما الذي جلبك هنا اليوم؟',
     'tired_restart': 'تعبان من البدء من جديد',
     'ready_change': 'مستعد للتغيير الحقيقي',
     'lost_direction': 'ضائع وأحتاج توجيه',
     'nothing_worked': 'لا شيء نجح',
     
     'step_2_title': 'تخيل بعد 6 أشهر...',
     'confidence_level': 'مستوى الثقة',
     'energy_level': 'مستوى الطاقة',
     'body_satisfaction': 'الرضا عن الجسد',
     'low': 'منخفض',
     'high': 'عالي',
     
     'step_3_title': 'ما أكبر عقبة لديك؟',
     'motivation_dies': 'الدافع يموت بسرعة',
     'dont_know_start': 'لا أعرف من أين أبدأ',
     'too_busy': 'مشغول جداً، لا وقت',
     'mental_barriers': 'حواجز عقلية',
     'physical_limitations': 'قيود جسدية',
     'tried_expensive': 'جربت برامج باهظة',
     
     'step_4_title': 'أخبرني قصتك في جملة واحدة:',
     'story_placeholder': 'أنا مستعد للتغيير لأن...',
     'characters_remaining': 'أحرف متبقية',
     'story_matters': 'قصتك مهمة بالنسبة لي. - كاش',
     
     'step_5_title': 'دعنا نتواصل',
     'first_name': 'الاسم الأول',
     'name_placeholder': 'ماذا يجب أن أناديك؟',
     'best_way_reach': 'أفضل طريقة للوصول إليك:',
     'email': 'البريد الإلكتروني',
     'whatsapp': 'واتساب',
     'location': 'الموقع',
     'location_placeholder': 'المدينة، البلد',
     
     'step_6_title': 'ما مدى جديتك؟ (كن صادقاً)',
     'just_curious': 'فقط فضولي',
     'maybe_someday': 'ربما يوماً ما',
     'ready_soon': 'مستعد قريباً',
     'within_month': 'خلال شهر واحد',
     'ready_now': 'مستعد الآن',
     'start_immediately': 'دعنا نبدأ فوراً',
     'last_attempt': 'المحاولة الأخيرة',
     'need_work': 'أحتاج أن يعمل هذا',
     
     // Navigation
     'previous': 'السابق',
     'next': 'التالي',
     'submit_application': 'إرسال الطلب',
     'submitting': 'جاري الإرسال...',
     
     // Success Screen
     'application_received': 'تم استلام الطلب!',
     'congratulations': 'تهانينا',
     'journey_begin': 'رحلة تحولك على وشك البدء. كاش سيراجع طلبك ويجيبك قريباً.',
     'whats_next': 'ماذا بعد؟',
     'review_personally': 'كاش سيراجع طلبك شخصياً',
     'personalized_response': 'ستحصل على رد مخصص',
     'journey_begins': 'رحلة تحولك تبدأ',
     'back_home': 'العودة للرئيسية',
     'welcome_family': 'مرحباً بك في عائلة فيت ميت كاش!',
     
     // Social Proof
     'maria_story': 'ماريا من إسبانيا بدأت من هنا وحولت حياتها في 6 أشهر',
     
     // Form Labels
     'interactive_calculator': 'حاسبة تدريب تفاعلية ومتعقب',
     'session_timer': 'مؤقت الجلسة',
     'distance': 'المسافة',
     'drag_kilometers': 'اسحب لضبط الكيلومترات',
     'duration': 'المدة',
     'drag_minutes': 'اسحب لضبط الدقائق',
     'intensity': 'الشدة',
     'drag_effort': 'اسحب لضبط مستوى الجهد',
     'profile_settings': 'إعدادات الملف الشخصي',
     'weight_kg': 'الوزن (كجم)',
     'age': 'العمر',
     'gender': 'الجنس',
     'male': 'ذكر',
     'female': 'أنثى',
     'calories_burned': 'السعرات المحروقة',
     'fat_burned': 'الدهون المحروقة',
     'pace': 'السرعة',
     'heart_rate': 'معدل ضربات القلب',
     'steps': 'الخطوات',
     'elevation': 'الارتفاع',
     'weekly_goal': 'الهدف الأسبوعي',
     'best_pace': 'أفضل سرعة',
     'avg_weekly': 'المتوسط الأسبوعي',
     'total_time': 'الوقت الإجمالي',
   },
   
   tr: {
     // Header
     'based_in': 'Berlin\'de Merkez',
     
     // Navigation
     'programs': 'Programlar',
     'results': 'Sonuçlar',
     'story': 'Hikaye',
     
     // Hero Section
     'hero_subtitle': 'Antrenman, zihniyet ve yaşam sistemlerini birleştiren elit koçluk. Sonuçlar bedende, zihinde ve yaşamda ölçülür.',
     'location_text': 'Berlin, Almanya\'da merkez, uluslararası müşterilere hizmet veriyor',
     'book_consultation': 'Danışmanlık Rezervasyonu',
     
     // Stats Section
     'clients_transformed': 'Dönüştürülen Müşteriler',
     'countries_reached': 'Ulaşılan Ülkeler',
     'age_range': 'Yaş Aralığı',
     'success_rate': 'Başarı Oranı',
     'yrs': 'yaş',
     
     // Story Section
     'story_title': 'Tozlu Tahran Spor Salonundan 25 Ülkede Yaşamları Dönüştürmeye',
     'story_subtitle': 'Antrenman, zihniyet ve yaşam sistemlerini birleştiren elit koçluk. Sonuçlar bedende, zihinde ve yaşamda ölçülür.',
     'nasm_certified': 'NASM Sertifikalı',
     'philosophy': '90% zihniyet',
     
     // Story Content
     'story_paragraph_1': '17 yaşında, tozlu bir Tahran spor salonunda, hiç duymadığım vücut geliştiricilerin soluk posterlerine bakan başka bir çocuktum. YouTube yok. Instagram antrenörleri yok. Sadece ben, paslı ağırlıklar ve yanan bir soru: "Gerçekte neye yetenekliyim?"',
     'story_paragraph_2': 'İlk yıl neredeyse beni kırdı. Her şeyi sorgulatan yaralanmalar. Başarısızlık gibi hissedilen geri dönüşler. Ama o mücadelenin bir yerinde, her şeyi değiştirecek bir şey keşfettim: gerçek savaş kaslarımda değildi - aklımdaydı.',
     'story_paragraph_3': 'Dönüşümün %90\'ı kulaklarınızın arasında gerçekleşir. Diğer %10? Sadece ortaya çıkmak.',
     'story_paragraph_4': 'Gelecek on yılı bu gerçeğe takıntılı bir şekilde geçirdim. Spor salonundan parkour\'a, CrossFit\'e - her spor bana atılımın psikolojisi hakkında yeni bir şey öğretti. Her yaralanma bir ders oldu. Her plato çözülecek bir bulmaca oldu.',
     'story_paragraph_5': 'Ama gerçek eğitim dinlemekten geldi. Tahran\'daki arkadaşlar mücadelelerini paylaşıyor. Dubai\'deki müşteriler şeytanlarıyla savaşıyor. Berlin, Münih, Hamburg\'daki insanlar - hepsi aynı iç düşmanla güreşiyor: "yapamazsın" diyen ses.',
     'story_paragraph_6': 'İşte o zaman anladım. Bu fitness hakkında değildi. Bu insan işletim sistemini yeniden programlamak hakkındaydı.',
     'story_paragraph_7': 'Bugün, NASM sertifikalıyım ve 25+ ülkede dönüşümlere rehberlik ettim. Ama niteliklerim bunun kadar önemli değil: Tam olarak sizin pozisyonunuzda olmuştum - aynada kendime bakıyordum, gerçek değişimin mümkün olup olmadığını merak ediyordum.',
     'story_paragraph_8': 'Cevap evet. Ama düşündüğünüz gibi değil.',
     'story_paragraph_9': 'Arkadaşlarımı bağımlılık, depresyon ve kendini bırakmanın yavaş intiharına kaybettim. "Yeterince iyi değilim" ağırlığı altında ezilen potansiyeli gördüm. İşte bu yüzden bu hayatımın işi oldu.',
     'story_paragraph_10': 'Vücutları antrenman yaptırmıyorum. Tekrar saymıyorum. Size yemek planları satmıyorum.',
     'story_paragraph_11': 'Çok daha güçlü bir şey yapıyorum: Bahane vermeyi bıraktığında gerçekte kim olduğunuzu gösteriyorum.',
     'story_paragraph_12': 'Tahran\'daki kafası karışık 17 yaşındaki birinden kıtalar arası dönüşüm koçluğuna - yolculuğum bana coğrafyanın önemli olmadığını, geçmişin önemli olmadığını, başlangıç noktasının önemli olmadığını öğretti.',
     'story_paragraph_13': 'Önemli olan bu an. Şimdi. Olmakta olduğunuz kişinin olduğunuz kişiden daha önemli olduğuna karar verdiğinizde.',
     'story_paragraph_14': 'Bu sadece fitness değil. Bu sadece koçluk değil.',
     'story_paragraph_15': 'Bu, tüm hayatınız boyunca sizi nihayet karşılamayı bekleyen kendinizin versiyonunu keşfetmek hakkında.',
     'story_paragraph_16': 'Hazır mısınız?',
     
     // Programs Section
     'programs_title': 'Dönüşüm Yolunuzu Seçin',
     'programs_subtitle': 'Antrenman, zihniyet ve yaşam sistemlerini birleştiren elit koçluk. Sonuçlar bedende, zihinde ve yaşamda ölçülür.',
     'monthly': 'Aylık',
     'life_cycle': 'Yaşam Döngüsü',
     'premium': 'Premium',
     'most_popular': 'En Popüler',
     'from': 'den',
     
     // In-Person & Virtual
     'in_person_title': 'Yüz Yüze ve Sanal Koçluk',
     'in_person_subtitle': 'Antrenman, zihniyet ve yaşam sistemlerini birleştiren elit koçluk. Sonuçlar bedende, zihinde ve yaşamda ölçülür.',
     
     // Assessment Section
     'assessment_title': 'Hikayenizi anlatın',
     'assessment_subtitle': 'Antrenman, zihniyet ve yaşam sistemlerini birleştiren elit koçluk. Sonuçlar bedende, zihinde ve yaşamda ölçülür.',
     'sample_questions': 'Örnek sorular:',
     'question_1': 'Sizi fitness\'a ne getirdi?',
     'question_2': 'Hangi engellerle karşılaştınız?',
     'question_3': 'Başarı sizin için nasıl görünüyor?',
     'cultural_sensitivity': 'Kültürel hassasiyet ve destek seçenekleri mevcuttur.',
     
     // Testimonials
     'testimonials_title': 'Gerçek Sonuçlar, Gerçek Hikayeler',
     'testimonials_subtitle': 'Antrenman, zihniyet ve yaşam sistemlerini birleştiren elit koçluk. Sonuçlar bedende, zihinde ve yaşamda ölçülür.',
     
     // Consultation Form Steps
     'step_1_title': 'Bugün sizi buraya ne getirdi?',
     'tired_restart': 'Yeniden başlamaktan yoruldum',
     'ready_change': 'Gerçek değişim için hazır',
     'lost_direction': 'Kayboldum ve yön bulmaya ihtiyacım var',
     'nothing_worked': 'Hiçbir şey işe yaramadı',
     
     'step_2_title': '6 ay sonrasını hayal edin...',
     'confidence_level': 'Güven Seviyesi',
     'energy_level': 'Enerji Seviyesi',
     'body_satisfaction': 'Vücut Memnuniyeti',
     'low': 'Düşük',
     'high': 'Yüksek',
     
     'step_3_title': 'En büyük engeliniz nedir?',
     'motivation_dies': 'Motivasyon hızla ölüyor',
     'dont_know_start': 'Nereden başlayacağımı bilmiyorum',
     'too_busy': 'Çok meşgul, zaman yok',
     'mental_barriers': 'Zihinsel engeller',
     'physical_limitations': 'Fiziksel sınırlamalar',
     'tried_expensive': 'Pahalı programları denedim',
     
     'step_4_title': 'Hikayenizi tek cümlede anlatın:',
     'story_placeholder': 'Değişmeye hazırım çünkü...',
     'characters_remaining': 'karakter kaldı',
     'story_matters': 'Hikayeniz benim için önemli. - Kash',
     
     'step_5_title': 'İletişime geçelim',
     'first_name': 'Ad',
     'name_placeholder': 'Size nasıl hitap etmeliyim?',
     'best_way_reach': 'Size ulaşmanın en iyi yolu:',
     'email': 'E-posta',
     'whatsapp': 'WhatsApp',
     'location': 'Konum',
     'location_placeholder': 'Şehir, Ülke',
     
     'step_6_title': 'Ne kadar ciddisiniz? (Dürüst olun)',
     'just_curious': 'Sadece Meraklı',
     'maybe_someday': 'Belki bir gün',
     'ready_soon': 'Yakında Hazır',
     'within_month': '1 ay içinde',
     'ready_now': 'Şimdi Hazır',
     'start_immediately': 'Hemen başlayalım',
     'last_attempt': 'Son Deneme',
     'need_work': 'Bunun işe yaraması gerekiyor',
     
     // Navigation
     'previous': 'Önceki',
     'next': 'Sonraki',
     'submit_application': 'Başvuru Gönder',
     'submitting': 'Gönderiliyor...',
     
     // Success Screen
     'application_received': 'Başvuru Alındı!',
     'congratulations': 'Tebrikler',
     'journey_begin': 'Dönüşüm yolculuğunuz başlamak üzere. Kash başvurunuzu inceleyecek ve yakında size yanıt verecek.',
     'whats_next': 'Sırada ne var?',
     'review_personally': 'Kash başvurunuzu kişisel olarak inceleyecek',
     'personalized_response': 'Kişiselleştirilmiş bir yanıt alacaksınız',
     'journey_begins': 'Dönüşüm yolculuğunuz başlıyor',
     'back_home': 'Ana Sayfaya Dön',
     'welcome_family': 'Fit Mit Kash ailesine hoş geldiniz!',
     
     // Social Proof
     'maria_story': 'İspanya\'dan Maria buradan başladı ve 6 ayda hayatını dönüştürdü',
     
     // Form Labels
     'interactive_calculator': 'İnteraktif antrenman hesaplayıcısı ve takipçi',
     'session_timer': 'Seans Zamanlayıcısı',
     'distance': 'Mesafe',
     'drag_kilometers': 'Kilometre ayarlamak için sürükleyin',
     'duration': 'Süre',
     'drag_minutes': 'Dakika ayarlamak için sürükleyin',
     'intensity': 'Yoğunluk',
     'drag_effort': 'Efor seviyesini ayarlamak için sürükleyin',
     'profile_settings': 'Profil Ayarları',
     'weight_kg': 'Kilo (kg)',
     'age': 'Yaş',
     'gender': 'Cinsiyet',
     'male': 'Erkek',
     'female': 'Kadın',
     'calories_burned': 'Yakılan Kaloriler',
     'fat_burned': 'Yakılan Yağ',
     'pace': 'Tempo',
     'heart_rate': 'Kalp Atış Hızı',
     'steps': 'Adımlar',
     'elevation': 'Yükseklik',
     'weekly_goal': 'Haftalık Hedef',
     'best_pace': 'En İyi Tempo',
     'avg_weekly': 'Haftalık Ortalama',
     'total_time': 'Toplam Süre',
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
