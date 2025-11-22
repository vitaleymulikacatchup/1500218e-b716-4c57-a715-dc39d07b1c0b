"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import AboutMetric from '@/components/sections/about/AboutMetric';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { BarChart3, Shield, Zap, Headphones, Sparkles, TrendingUp, Users, Globe, Award, DollarSign, Rocket, Crown, HelpCircle, Mail, Twitter, Linkedin, Github, Facebook } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="large"
      sizing="small"
      background="animatedGrid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="SaaS"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829846827-gdsfum86.jpg"
          logoAlt="SaaS Logo"
          navItems={[
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Get Started",
            href: "https://example.com/signup"
          }}
          className="rounded-full"
          navItemClassName="text-sm font-medium"
          buttonClassName="px-6 py-2"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="SAAS"
          description="Powerful tools to grow your business faster. Real-time analytics, seamless integrations, and 24/7 support."
          buttons={[
            { text: "Start Free Trial", href: "https://example.com/trial" },
            { text: "Watch Demo", href: "#" }
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829847865-hng34twc.jpg",
              imageAlt: "Modern technology workspace"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829848509-vn7mdj3n.jpg",
              imageAlt: "Digital business dashboard"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829849272-mq2twcuu.jpg",
              imageAlt: "Cloud infrastructure"
            }
          ]}
          autoplayDelay={5000}
          showDimOverlay={true}
          ariaLabel="SaaS hero section"
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="Trusted by leading companies worldwide. Join thousands of teams that use our platform to scale their business."
          metrics={[
            { icon: TrendingUp, label: "Revenue Growth", value: "250%+" },
            { icon: Users, label: "Active Users", value: "50K+" },
            { icon: Globe, label: "Countries Served", value: "150+" },
            { icon: Award, label: "Customer Satisfaction", value: "98%" }
          ]}
          ariaLabel="Key metrics section"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFive
          title="Powerful Features Built For Your Success"
          description="Everything you need to manage, analyze, and grow your business in one platform"
          tag="Features"
          tagIcon={Sparkles}
          features={[
            { title: "Advanced Analytics", icon: BarChart3 },
            { title: "Enterprise Security", icon: Shield },
            { title: "API Integration", icon: Zap },
            { title: "24/7 Support", icon: Headphones }
          ]}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          showIconBoxBackground={true}
          ariaLabel="Features section"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Simple, Transparent Pricing"
          description="Choose the perfect plan for your business. No hidden fees, cancel anytime."
          tag="Pricing"
          tagIcon={DollarSign}
          plans={[
            {
              id: "starter",
              badge: "Great for startups",
              badgeIcon: Rocket,
              price: "$49/mo",
              subtitle: "Perfect for small teams just getting started",
              features: [
                "Up to 5 team members",
                "Basic analytics",
                "Standard support",
                "5GB storage"
              ]
            },
            {
              id: "pro",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$149/mo",
              subtitle: "Best for growing businesses",
              features: [
                "Unlimited team members",
                "Advanced analytics",
                "Priority support",
                "100GB storage",
                "Custom integrations",
                "API access"
              ]
            },
            {
              id: "enterprise",
              badge: "For scale",
              badgeIcon: Crown,
              price: "Custom",
              subtitle: "Tailored for enterprise needs",
              features: [
                "Everything in Pro",
                "Dedicated account manager",
                "Custom security",
                "SLA guarantee",
                "White-label options"
              ]
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          ariaLabel="Pricing plans section"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="Loved by customers worldwide"
          description="See why thousands of companies trust our platform to drive their growth"
          tag="Testimonials"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              handle: "@sarahjohnson",
              testimonial: "This platform has completely transformed how we manage our operations. The analytics alone have paid for itself multiple times over.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829852949-7fl2vnqs.png",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              handle: "@mchen_tech",
              testimonial: "Best investment we made. The integration capabilities saved us weeks of development time. Highly recommend!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829853745-g2dkgprk.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              handle: "@emily_ro",
              testimonial: "The support team is incredible. They helped us implement the system in just days. Professional and responsive.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829854334-gwgbjmyx.jpg",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              handle: "@davidkim",
              testimonial: "Scalability without complexity. Our team grew 10x and the platform handled it effortlessly.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829855030-1eunjvxv.jpg",
              imageAlt: "David Kim"
            },
            {
              id: "5",
              name: "Lisa Williams",
              handle: "@lisaw",
              testimonial: "Finally, a SaaS tool that actually works intuitively. Our team adopted it in one day.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829855614-juh4du6t.jpg",
              imageAlt: "Lisa Williams"
            },
            {
              id: "6",
              name: "James Martinez",
              handle: "@jamesmartinez",
              testimonial: "The ROI has been phenomenal. We recovered our investment within the first month.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829856545-h57udpko.jpg",
              imageAlt: "James Martinez"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          carouselMode="buttons"
          ariaLabel="Customer testimonials section"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofTwo
          title="Trusted by Industry Leaders"
          description="Join the world's top companies that rely on our platform"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829858803-ebuemgx1.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829859309-nb35xnrn.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829859835-2ocnil6c.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829860357-bh5hz1xt.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829860953-j5gxl06d.jpg"
          ]}
          textboxLayout="default"
          ariaLabel="Partner logos section"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about our platform, pricing, and support"
          tag="FAQ"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "How do I get started with the platform?",
              content: "Getting started is easy. Sign up for a free trial, connect your data sources, and start analyzing within minutes. Our onboarding team will guide you through every step."
            },
            {
              id: "2",
              title: "What payment methods do you accept?",
              content: "We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients. Billing is handled securely through Stripe."
            },
            {
              id: "3",
              title: "Can I cancel my subscription anytime?",
              content: "Absolutely. You can cancel your subscription at any time with no questions asked. No long-term contracts or hidden cancellation fees."
            },
            {
              id: "4",
              title: "Do you offer API access?",
              content: "Yes, API access is available on Pro and Enterprise plans. Full documentation is provided, and our team is available to help with integration."
            },
            {
              id: "5",
              title: "How secure is my data?",
              content: "We employ enterprise-grade security including AES-256 encryption, regular security audits, GDPR compliance, and SOC 2 Type II certification."
            },
            {
              id: "6",
              title: "What kind of support do you offer?",
              content: "We provide email support for all plans, priority support for Pro, and dedicated account managers for Enterprise. Average response time is under 2 hours."
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829857235-9t4wpg0c.jpg"
          imageAlt="FAQ illustration"
          mediaPosition="right"
          textboxLayout="default"
          animationType="smooth"
          showCard={true}
          ariaLabel="FAQ section"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          tagIcon={Mail}
          title="Stay updated with product news"
          description="Get the latest features, tips, and industry insights delivered to your inbox every week. No spam, just good content."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829858026-4yhxvj8g.jpg"
          imageAlt="Newsletter signup"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime."
          onSubmit={(email) => console.log('Subscribed:', email)}
          ariaLabel="Newsletter signup section"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="SaaS"
          logoWidth={120}
          logoHeight={40}
          columns={[
            {
              title: "Product",
              items: [
                { label: "Features", href: "features" },
                { label: "Pricing", href: "pricing" },
                { label: "Security", href: "#" },
                { label: "Roadmap", href: "#" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Press", href: "#" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Documentation", href: "#" },
                { label: "API Reference", href: "#" },
                { label: "Guides", href: "#" },
                { label: "Support", href: "contact" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" },
            { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn" },
            { icon: Github, href: "https://github.com", ariaLabel: "GitHub" },
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Facebook" }
          ]}
          copyrightText="© SaaS, Inc. 2025. All rights reserved."
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}