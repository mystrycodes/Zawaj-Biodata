"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { GalleryCarousel } from "@/components/gallery-carousel";
import { profile } from "@/data/profile";

const SunIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.5s' }}>
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const MoonIconToggle = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.5s' }}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
); export default function HomePage() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Auto-detect based on system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    }

    // Scroll animation observer
    let observer: IntersectionObserver;
    setTimeout(() => {
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    }, 100);

    return () => observer && observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="gold-top-bg"></div>

      <main id="main-content" className="main-content">
        <img src="/bismillah.png" alt="Bismillah Calligraphy" className="bismillah-img animate-on-scroll" aria-hidden="true" />

        <div className="profile-photo-wrapper">
          <div className="profile-photo-inner">
            <Image
              src={profile.hero.image}
              alt="Profile Photo"
              fill
              sizes="280px"
              priority
            />
          </div>
        </div>

        <h1 className="hero-name">{profile.hero.name}</h1>

        <div className="tags-row">
          <span className="tag-badge">Software Eng.</span>
          <span className="tag-badge">AI Enthusiast</span>
          <span className="tag-badge">IT Professional</span>
        </div>

        <p className="hero-lead">
          {profile.career.find(c => c.label === "Career Goals")?.value || profile.hero.tagline}
        </p>

        {/* Following Content */}
        <div className="sections-grid">
          <section className="info-section animate-on-scroll" id="personal-info">
            <h2>Personal Information</h2>
            {profile.personalInfo.map((item) => (
              <div className="info-row" key={`${item.label}-${item.value}`}>
                <strong>{item.label}</strong>
                <span>{item.value}</span>
              </div>
            ))}
          </section>

          <section className="info-section animate-on-scroll" id="education">
            <h2>Educational Background</h2>
            {profile.education.map((item) => (
              <div key={item.title} className="list-block">
                <div className="info-row">
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                </div>
              </div>
            ))}
          </section>

          <section className="info-section animate-on-scroll" id="career">
            <h2>Professional Information</h2>
            {profile.career.map((item) => (
              <div className="info-row" key={`${item.label}-${item.value}`}>
                <strong>{item.label}</strong>
                <p>{item.value}</p>
              </div>
            ))}
          </section>

          <section className="info-section animate-on-scroll" id="family">
            <h2>Family Details</h2>
            {profile.family.details.map((item) => (
              <div className="info-row" key={`${item.label}-${item.value}`}>
                <strong>{item.label}</strong>
                <span>{item.value}</span>
              </div>
            ))}

            <h3>Siblings</h3>
            <ul className="bullet-list">
              {profile.family.siblings.map((sibling) => (
                <li key={sibling}>{sibling}</li>
              ))}
            </ul>

            <h3>{profile.family.backgroundTitle}</h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.5', margin: '0.5rem 0' }}>
              {profile.family.backgroundText}
            </p>
          </section>

          <section className="info-section animate-on-scroll" id="partner-preferences">
            <h2>Partner Preferences</h2>
            {profile.partnerPreferences.map((item) => (
              <div className="info-row" key={`${item.label}-${item.value}`}>
                <strong>{item.label}</strong>
                <p>{item.value}</p>
              </div>
            ))}
          </section>

          <section className="info-section animate-on-scroll" id="gallery">
            <h2>Gallery</h2>
            <GalleryCarousel images={profile.gallery} />
          </section>

          <section className="info-section animate-on-scroll" id="contact">
            <h2>Contact Information</h2>
            {profile.contact.map((item) => (
              <div className="info-row" key={`${item.label}-${item.value}`}>
                <strong>{item.label}</strong>
                <span>{item.value}</span>
              </div>
            ))}
          </section>
        </div>

        <footer className="site-footer animate-on-scroll">
          <div style={{ padding: '0 0 2rem', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '60px', height: '1px', backgroundColor: 'var(--gold-primary)', opacity: 0.5 }}></div>
          </div>
          <p style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '1.2rem', color: 'var(--gold-dark)', margin: '0', fontStyle: 'italic' }}>BarakAllah Feekum</p>
        </footer>
      </main>

      {mounted && (
        <button className="theme-btn-floating animate-on-scroll is-visible" onClick={toggleTheme} aria-label="Toggle Theme">
          {theme === "light" ? <MoonIconToggle /> : <SunIcon />}
        </button>
      )}
    </>
  );
}
