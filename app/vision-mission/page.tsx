"use client";

import { Section, SectionHeader, FadeIn } from "@/components/ui/section";
import { CTASection } from "@/components/sections/cta-section";
import {
  Target,
  Eye,
  Heart,
  BookOpen,
  Users,
  Globe,
  Sparkles,
  Compass,
  Award,
  Smile,
  Laptop,
  ShieldCheck,
} from "lucide-react";
import siteData from "@/content/site.json";

// Bilingual configuration matrix for localized UI text segments
const contentLabels = {
  en: {
    badge: "Our Core Identity",
    title: "Vision & Mission",
    subtitle:
      "Discover the foundational purpose, guiding philosophies, and operational parameters that make life and learning at Shoonya Shikhar uniquely transformative.",
    estabBadge: "Establishment Background",
    estabHeading: "Where Ancient Roots Feed Modern Minds",
    visionTitle: "Our Vision",
    visionSubtitle:
      "To nurture individuals who embody the wisdom of ancient Indian traditions while being equipped to contribute meaningfully to the modern world.",
    visionDesc:
      "We envision a world where the timeless values of Indian culture—compassion, wisdom, discipline, and service—guide individuals in creating a harmonious society. Our graduates carry forward this vision as teachers, leaders, and practitioners who illuminate the path for others. We seek to build a lineage of thinkers who are intellectually sound yet completely grounded in absolute consciousness.",
    visionFooter: "Shaping Enlightened Human Frameworks",
    missionTitle: "Our Mission",
    missionSubtitle:
      "To provide a holistic education that integrates spiritual growth, physical discipline, intellectual development, and moral values in a serene and nurturing environment.",
    missionDesc:
      "We accomplish this through the authentic Gurukul system where students live and learn with their teachers, following a structured daily routine that balances Yoga, meditation, academic studies, and practical skills. Our mission extends beyond conventional parameters: we actively strive to nurture deep character, unshakable confidence, leadership clarity, patriotism, and social responsibility in every student.",
    missionFooter: "Commitment to Complete Human Growth",
    philosophyBadge: "Philosophy",
    philosophyTitle: "Shifting Focus: From Percentages to Better People",
    philosophySubtitle:
      "Education should never be reduced to a mechanical card score. We prioritize the cultivation of life over the collection of certificates.",
    foundationBadge: "Foundation",
    foundationTitle: "Our Eternal Core Values",
    foundationSubtitle:
      "The four pillar axioms directing behavioral culture inside our digital and spiritual walls.",
    objectivesBadge: "Objectives",
    objectivesTitle: "Our Strategic Goals",
    objectivesSubtitle:
      "The absolute parameters we commit to realizing daily inside the student lifecycle layout loops.",
    quoteTranslation: "That is knowledge which liberates",
    quoteSource: "— Vishnu Purana",
    campusMetric: "Serene Foothill Campus",
    founderMetric: "By Shri Pushpendra Singh Ji",
  },
  hi: {
    badge: "हमारा उद्देश्य",
    title: "दृष्टिकोण और संकल्प",
    subtitle:
      "शून्य शिखर गुरुकुलम् के मूलभूत उद्देश्यों, मार्गदर्शक दर्शन और व्यावहारिक मानदंडों का अन्वेषण करें जो जीवन को समग्र रूप से परिवर्तित करते हैं।",
    estabBadge: "स्थापना पृष्ठभूमि",
    estabHeading: "जहाँ प्राचीन जड़ें आधुनिक मस्तिष्क को पोषित करती हैं",
    visionTitle: "हमारा दृष्टिकोण (Vision)",
    visionSubtitle:
      "ऐसे व्यक्तियों का निर्माण करना जो आधुनिक विश्व में सार्थक योगदान देने के साथ-साथ प्राचीन भारतीय परंपराओं के दिव्य ज्ञान को आत्मसात करें।",
    visionDesc:
      "हम एक ऐसे विश्व की कल्पना करते हैं जहाँ भारतीय संस्कृति के शाश्वत मूल्य—करुणा, ज्ञान, अनुशासन और सेवा—एक सामंजस्यपूर्ण समाज के निर्माण में मार्गदर्शन करें। हमारे स्नातक शिक्षक, नेता और साधक के रूप में इस दृष्टिकोण को आगे बढ़ाते हैं। हम ऐसे विचारकों की एक पीढ़ी तैयार करना चाहते हैं जो बौद्धिक रूप से सुदृढ़ होने के साथ-साथ पूर्ण चेतना में स्थापित हों।",
    visionFooter: "प्रबुद्ध मानव संरचना का निर्माण",
    missionTitle: "हमारा मिशन (Mission)",
    missionSubtitle:
      "एक शांत और पावन वातावरण में आध्यात्मिक विकास, शारीरिक अनुशासन, बौद्धिक उन्नति और नैतिक मूल्यों को एकीकृत करने वाली समग्र शिक्षा प्रदान करना।",
    missionDesc:
      "हम इसे प्रामाणिक गुरुकुल प्रणाली के माध्यम से पूरा करते हैं जहाँ विद्यार्थी अपने आचार्यों के साथ रहते हैं और सीखते हैं। हम एक ऐसी दैनिक दिनचर्या का पालन करते हैं जो योग, ध्यान, शैक्षणिक अध्ययन और व्यावहारिक कौशल को संतुलित करती है। हमारा उद्देश्य पारंपरिक शिक्षा से परे है: हम प्रत्येक छात्र में चरित्र निर्माण, आत्मविश्वास, नेतृत्व क्षमता, राष्ट्रप्रेम और सामाजिक जिम्मेदारी को विकसित करने के लिए प्रतिबद्ध हैं।",
    missionFooter: "पूर्ण मानव विकास के प्रति प्रतिबद्धता",
    philosophyBadge: "दर्शनशास्त्र",
    philosophyTitle: "बदलता दृष्टिकोण: अंकों से बेहतर इंसानों की ओर",
    philosophySubtitle:
      "शिक्षा को कभी भी एक यंत्रवत अंक तालिका तक सीमित नहीं किया जाना चाहिए। हम प्रमाणपत्रों के संग्रह से अधिक जीवन के संवर्धन को प्राथमिकता देते हैं।",
    foundationBadge: "नींव",
    foundationTitle: "हमारे शाश्वत मूल मूल्य",
    foundationSubtitle:
      "हमारे डिजिटल और आध्यात्मिक परिसरों के भीतर व्यावहारिक संस्कृति को निर्देशित करने वाले चार प्रमुख सिद्धांत।",
    objectivesBadge: "उद्देश्य",
    objectivesTitle: "हमारे रणनीतिक लक्ष्य",
    objectivesSubtitle:
      "विद्यार्थी के जीवन चक्र में हम जिन परम मानदंडों को प्रतिदिन प्राप्त करने का संकल्प लेते हैं।",
    quoteTranslation:
      "सा विद्या या विमुक्तये (वही विद्या है जो विमुक्त करती है)",
    quoteSource: "— विष्णु पुराण",
    campusMetric: "शांत तलहटी परिसर (3 एकड़)",
    founderMetric: "श्री पुष्पेंद्र सिंह जी द्वारा स्थापित",
  },
};

const values = [
  {
    icon: Heart,
    title: { en: "Dharma", hi: "धर्म" },
    description: {
      en: "Living in accordance with cosmic order, moral duties, and ethical principles that ensure profound harmony within and without.",
      hi: "ब्रह्मांडीय व्यवस्था, नैतिक कर्तव्यों और सदाचार के नियमों के अनुसार जीवन जीना जो आंतरिक और बाहरी सद्भाव सुनिश्चित करते हैं।",
    },
  },
  {
    icon: BookOpen,
    title: { en: "Vidya", hi: "विद्या" },
    description: {
      en: "A balanced pursuit of both para vidya (higher spiritual truth) and apara vidya (worldly, modern sciences) for complete self-realization.",
      hi: "पूर्ण आत्म-साक्षात्कार के लिए परा विद्या (उच्चतर आध्यात्मिक सत्य) और अपरा विद्या (लौकिक, आधुनिक विज्ञान) दोनों का संतुलित समावेश।",
    },
  },
  {
    icon: Users,
    title: { en: "Seva", hi: "सेवा" },
    description: {
      en: "Selfless service to the Guru, community, and nation as a powerful path to dissolving ego, building character, and expanding awareness.",
      hi: "गुरु, समुदाय और राष्ट्र की निस्वार्थ सेवा, जो अहंकार को मिटाने, चरित्र का निर्माण करने और चेतना का विस्तार करने का एक सशक्त मार्ग है।",
    },
  },
  {
    icon: Globe,
    title: { en: "Vasudhaiva Kutumbakam", hi: "वसुधैव कुटुम्बकम्" },
    description: {
      en: "The firm conviction that the world is one family—fostering universal brotherhood, mutual respect, and empathy for all living beings.",
      hi: "यह दृढ़ विश्वास कि संपूर्ण विश्व एक परिवार है—सभी जीवित प्राणियों के लिए सार्वभौमिक भाईचारा, पारस्परिक सम्मान और सहानुभूति को बढ़ावा देना।",
    },
  },
];

const pillars = [
  {
    icon: Laptop,
    title: {
      en: "Modern Education & Technology",
      hi: "आधुनिक शिक्षा और तकनीकी",
    },
    description: {
      en: "State-of-the-art computer education, mathematics, and empirical sciences to excel seamlessly in today's competitive global digital landscape.",
      hi: "आज के प्रतिस्पर्धी वैश्विक डिजिटल परिदृश्य में निर्बाध रूप से उत्कृष्टता प्राप्त करने के लिए अत्याधुनिक कंप्यूटर शिक्षा, गणित और व्यावहारिक विज्ञान।",
    },
  },
  {
    icon: Compass,
    title: { en: "Meditation & Consciousness", hi: "ध्यान और आत्म-चेतना" },
    description: {
      en: "Daily transformative internal contemplative practices, silent query spaces, and breathing mechanics to achieve absolute psychological stability and mental clarity.",
      hi: "परम मानसिक स्थिरता और वैचारिक स्पष्टता प्राप्त करने के लिए दैनिक परिवर्तनकारी आंतरिक चिंतन अभ्यास, मौन आत्म-खोज और प्राणायाम।",
    },
  },
  {
    icon: ShieldCheck,
    title: { en: "Classical Martial Arts", hi: "पारंपरिक मार्शल आर्ट" },
    description: {
      en: "Rigorous physical discipline through traditional self-defense systems, reinforcing situational alertness, fast reflex coordination, and physical health.",
      hi: "पारंपरिक आत्म-रक्षा प्रणालियों के माध्यम से कठोर शारीरिक अनुशासन, जो परिस्थिति जन्य सतर्कता, त्वरित रिफ्लेक्स समन्वय और शारीरिक स्वास्थ्य को सुदृढ़ करता है।",
    },
  },
  {
    icon: Smile,
    title: { en: "The Joy of Human Design", hi: "मानव निर्माण का आनंद" },
    description: {
      en: "Moving completely away from toxic exam performance metrics. We prioritize the pure enjoyment of learning, character enrichment, and making life inherently better.",
      hi: "परीक्षा के अंकों की अंधी दौड़ से पूरी तरह दूर होकर, हम सीखने के शुद्ध आनंद, चरित्र संवर्धन और जीवन को स्वाभाविक रूप से बेहतर बनाने को प्राथमिकता देते हैं।",
    },
  },
];

const goals = [
  {
    en: "Preserve and propagate authentic ancient Indian culture, traditional values, and values-based wisdom.",
    hi: "प्रामाणिक प्राचीन भारतीय संस्कृति, पारंपरिक मूल्यों और नैतिक मूल्यों पर आधारित ज्ञान का संरक्षण और प्रचार-प्रसार करना।",
  },
  {
    en: "Deliver a holistic environment completely free from the single-track pressure of test percentages.",
    hi: "परीक्षा के प्रतिशत के एकतरफा मानसिक दबाव से पूरी तरह मुक्त एक समग्र शैक्षणिक वातावरण प्रदान करना।",
  },
  {
    en: "Train pupils in dynamic modern subjects alongside deep computer intelligence literacy blocks.",
    hi: "विद्यार्थियों को गहन कंप्यूटर इंटेलिजेंस साक्षरता ब्लॉकों के साथ-साथ गतिशील आधुनिक विषयों में प्रशिक्षित करना।",
  },
  {
    en: "Cultivate deep baseline internal mindfulness metrics through structured, calm daily meditation setups.",
    hi: "सुनियोजित और शांत दैनिक ध्यान सत्रों के माध्यम से गहन आंतरिक जागरूकता और मानसिक शांति विकसित करना।",
  },
  {
    en: "Build unbreakable physical stamina, posture, and protective reflexes using classical martial arts.",
    hi: "पारंपरिक मार्शल आर्ट के उपयोग से अटूट शारीरिक सहनशक्ति, बेहतर शारीरिक मुद्रा और सुरक्षात्मक रिफ्लेक्सिस का निर्माण करना।",
  },
  {
    en: "Nurture complete human beings who measure success through personal peace and social responsibility.",
    hi: "ऐसे संपूर्ण मनुष्यों का पोषण करना जो अपनी सफलता को व्यक्तिगत शांति और सामाजिक जिम्मेदारी के माध्यम से मापते हैं।",
  },
  {
    en: "Keep absolute education spaces easily accessible to passionate, deserving kids across all backgrounds.",
    hi: "सभी पृष्ठभूमि के उत्साही और योग्य बच्चों के लिए उत्कृष्ट शिक्षा के अवसरों को पूरी तरह सुलभ रखना।",
  },
  {
    en: "Shape true leaders capable of solving complex modern industrial challenges using timeless calm methodologies.",
    hi: "कालातीत शांत कार्यप्रणालियों का उपयोग करके जटिल आधुनिक औद्योगिक चुनौतियों को हल करने में सक्षम सच्चे नेताओं को आकार देना।",
  },
];

interface VisionMissionPageProps {
  language: string;
}

export default function VisionMissionPage({
  language,
}: VisionMissionPageProps) {
  const langKey = (language === "hi" ? "hi" : "en") as "en" | "hi";
  const ui = contentLabels[langKey];

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 bg-card border-b border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 w-full max-w-7xl relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
                <Compass className="w-3.5 h-3.5 animate-spin-slow" />
                {ui.badge}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
                {ui.title}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto">
                {ui.subtitle}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Founders Context Statement & Historical Placement */}
      <Section>
        <div className="max-w-5xl mx-auto bg-card rounded-[32px] border border-border/60 p-8 md:p-12 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold tracking-widest text-primary uppercase block">
                  {ui.estabBadge}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                  {ui.estabHeading}
                </h2>
              </div>

              {/* Toggled Prose Copy - Displays ONLY the mapped runtime translation node */}
              {langKey === "hi" ? (
                <p className="text-sm md:text-base text-foreground/90 font-medium leading-relaxed border-l-2 border-primary/30 pl-4 italic">
                  वर्ष 2025 में श्री पुष्पेंद्र सिंह जी द्वारा स्थापित शून्य
                  शिखर गुरुकुलम् आधुनिक शिक्षा और भारतीय गुरुकुल परंपरा के
                  समन्वय का एक प्ररेणादायी केंद्र है। करौली के प्राकृतिक सौंदर्य
                  से परिपूर्ण पाचना बांध की शांत तलहटी में स्थित हमारा 3 एकड़ का
                  विस्तृत परिसर विद्यार्थियों के सर्वांगीण विकास हेतु एक आदर्श
                  वातावरण प्रदान करता है।
                </p>
              ) : (
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed border-l-2 border-primary/30 pl-4">
                  Established in 2025 by Shri Pushpendra Singh Ji, Shunya
                  Shikhar Gurukulam stands as a unique blend of modern education
                  and the timeless wisdom of the Indian Gurukul tradition.
                  Nestled in the serene foothills near Pachna Dam, Karauli, our
                  3-acre campus offers an ideal environment for both academic
                  excellence and holistic personal growth.
                </p>
              )}
            </div>

            <div className="md:col-span-4 bg-muted/40 rounded-2xl p-6 border border-border/60 space-y-4 text-center md:text-left flex flex-col justify-center h-full">
              <div className="space-y-1">
                <p className="text-3xl font-black text-primary tracking-tight">
                  Current Campus
                </p>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  3 storied building
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-black text-primary tracking-tight">
                  Upcoming
                </p>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  9000+ sq. yard
                </p>
              </div>
              <div className="h-px bg-border/60" />
              <div className="space-y-1">
                <p className="text-3xl font-black text-foreground tracking-tight">
                  2025
                </p>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {ui.founderMetric}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Vision Blocks Grid */}
      <Section className="bg-card/40 border-y border-border/40">
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-stretch">
          {/* OUR VISION PANEL */}
          <FadeIn className="h-full">
            <div className="bg-background border border-border/60 rounded-[32px] p-8 md:p-10 flex flex-col justify-between h-full hover:shadow-md transition-shadow duration-300">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/5">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                  {ui.visionTitle}
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed font-medium">
                  {ui.visionSubtitle}
                </p>
                <p className="text-sm text-muted-foreground/90 leading-relaxed text-pretty">
                  {ui.visionDesc}
                </p>
              </div>
              <div className="pt-6 border-t border-border/40 mt-6 flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                {ui.visionFooter}
              </div>
            </div>
          </FadeIn>

          {/* OUR MISSION PANEL */}
          <FadeIn delay={0.1} className="h-full">
            <div className="bg-background border border-border/60 rounded-[32px] p-8 md:p-10 flex flex-col justify-between h-full hover:shadow-md transition-shadow duration-300">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/5">
                  <Target className="w-7 h-7 text-accent" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                  {ui.missionTitle}
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed font-medium">
                  {ui.missionSubtitle}
                </p>
                <p className="text-sm text-muted-foreground/90 leading-relaxed text-pretty">
                  {ui.missionDesc}
                </p>
              </div>
              <div className="pt-6 border-t border-border/40 mt-6 flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-wider">
                <Award className="w-4 h-4 text-accent" />
                {ui.missionFooter}
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Core Pedagogical Strategy Pillars (The Human Blueprint Transformation) */}
      <Section>
        <SectionHeader
          badge={ui.philosophyBadge}
          title={ui.philosophyTitle}
          subtitle={ui.philosophySubtitle}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto w-full">
          {pillars.map((pillar, idx) => (
            <FadeIn key={idx} delay={idx * 0.05}>
              <div className="h-full p-6 bg-card rounded-2xl border border-border/60 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between shadow-2xs group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/5 group-hover:scale-105 transition-transform">
                    <pillar.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-foreground text-base md:text-lg tracking-tight group-hover:text-primary transition-colors">
                    {pillar.title[langKey]}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                    {pillar.description[langKey]}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Dynamic Manifesto Statement Block */}
        <div className="max-w-4xl mx-auto mt-12 bg-primary/5 rounded-2xl border border-primary/10 p-6 md:p-8 text-center text-sm md:text-base text-muted-foreground leading-relaxed">
          <p className="font-medium text-foreground">
            {langKey === "hi"
              ? "गुरुकुलम् का उद्देश्य केवल शैक्षणिक उत्कृष्टता प्राप्त करना नहीं, बल्कि विद्यार्थियों में चरित्र निर्माण, अनुशासन, आत्मविश्वास, नेतृत्व क्षमता, राष्ट्रप्रेम, सेवा-भाव और आध्यात्मिक जागरूकता का विकास करना भी है। यहाँ आधुनिक विज्ञान, गणित एवं तकनीकी शिक्षा के साथ-साथ भारतीय संस्कृति, योग, ध्यान, मार्शल आर्ट, नैतिक शिक्षा और जीवन-मूल्यों का समुचित प्रशिक्षण प्रदान किया जाता है।"
              : "Our mission extends beyond conventional education. We strive to nurture character, discipline, confidence, leadership, patriotism, service-mindedness, and spiritual awareness in every student. Alongside modern subjects such as science, mathematics, and technology, students receive training in Indian culture, yoga, meditation, martial arts, ethical values, and life skills."}
          </p>
        </div>
      </Section>

      {/* Foundation Matrix (Core Spiritual Values) */}
      <Section className="bg-card/30 border-t border-border/40">
        <SectionHeader
          badge={ui.foundationBadge}
          title={ui.foundationTitle}
          subtitle={ui.foundationSubtitle}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto w-full">
          {values.map((value, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="h-full p-6 md:p-8 bg-background rounded-2xl border border-border/60 hover:border-primary/20 transition-all duration-300 hover:shadow-md text-center flex flex-col items-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center border border-primary/10">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground tracking-tight">
                  {value.title[langKey]}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {value.description[langKey]}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Specific Goals Action Steps Section */}
      <Section className="bg-card border-t border-border/40">
        <SectionHeader
          badge={ui.objectivesBadge}
          title={ui.objectivesTitle}
          subtitle={ui.objectivesSubtitle}
        />

        <div className="max-w-5xl mx-auto w-full">
          <div className="grid sm:grid-cols-2 gap-4">
            {goals.map((goal, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <div className="flex items-start gap-4 p-4 bg-background rounded-2xl border border-border/60 hover:border-primary/20 transition-colors h-full shadow-2xs">
                  <div className="w-8 h-8 rounded-xl bg-primary/15 text-primary text-xs font-bold flex items-center justify-center shrink-0 border border-primary/10 select-none">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="text-foreground text-sm leading-relaxed pt-0.5">
                    {goal[langKey]}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs md:text-sm font-semibold text-primary tracking-wide">
              {langKey === "hi"
                ? "शून्य शिखर गुरुकुलम् में हम ऐसी पीढ़ी के निर्माण के लिए प्रतिबद्ध हैं जो ज्ञान में प्रखर, विचारों में स्वतंत्र, संस्कारों में समृद्ध और कर्म में उत्कृष्ट हो।"
                : "At Shunya Shikhar Gurukulam, we are committed to shaping a generation that is intellectually capable, morally grounded, culturally enriched, and socially responsible."}
            </p>
          </div>
        </div>
      </Section>

      {/* Scriptural Core Quote Block Banner */}
      <Section>
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center p-12 bg-primary/5 rounded-[32px] border border-primary/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
            <div className="space-y-4">
              <p className="text-3xl md:text-4xl font-bold text-primary tracking-wide">
                "सा विद्या या विमुक्तये"
              </p>
              <div className="space-y-1">
                <p className="text-lg text-muted-foreground italic font-medium">
                  "{ui.quoteTranslation}"
                </p>
                <p className="text-xs font-bold text-muted-foreground/70 tracking-widest uppercase">
                  {ui.quoteSource}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      <CTASection language={language} />
    </>
  );
}
