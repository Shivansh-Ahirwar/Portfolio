import { useEffect, useState } from "react";
import "./App.css";
import { profile, projects, skills } from "./data";
import aboutPageArt from "./assets/tech-logos-banner-about-page.svg";
import bgiCertificate from "./assets/certificate-bgi-hackathon.jpeg";
import googleCloudCertificate from "./assets/certificate-google-cloud.jpeg";
import saylorCertificate from "./assets/certificate-saylor-cpp.jpeg";
import projectOneView1 from "./assets/project-one-view-1.jpeg";
import projectOneView2 from "./assets/project-one-view-2.jpeg";
import projectTwoPhoto1 from "./assets/project-two-photo-1.jpeg";
import projectTwoPhoto2 from "./assets/project-two-photo-2.jpeg";

const Arrow = ({ diagonal = false }) => <svg aria-hidden="true" className="arrow" viewBox="0 0 24 24" fill="none"><path d={diagonal ? "M4 12h15M13 5l7 7-7 7" : "M12 4v16M5 13l7 7 7-7"} /></svg>;
const GithubIcon = () => <svg aria-hidden="true" className="project-link-icon project-github-icon" viewBox="0 0 24 24"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.75-.24.75-.53v-1.86c-3.06.67-3.71-1.3-3.71-1.3-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.08-.66.08-.66 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.56 1.19 3.18.91.1-.71.38-1.19.69-1.46-2.44-.28-5.01-1.22-5.01-5.44 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.39.11-2.9 0 0 .92-.29 3.05 1.13a10.6 10.6 0 0 1 5.55 0c2.12-1.42 3.04-1.13 3.04-1.13.61 1.51.23 2.62.12 2.9.7.77 1.12 1.75 1.12 2.95 0 4.23-2.57 5.15-5.02 5.43.4.35.75 1.01.75 2.04V22c0 .29.2.63.76.53A11.1 11.1 0 0 0 12 .9Z" /></svg>;
const DemoIcon = () => <svg aria-hidden="true" className="project-link-icon project-demo-icon" viewBox="0 0 24 24" fill="none"><path d="M14 3h7v7M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>;
const projectScreenshots = {
  1: [projectOneView1, projectOneView2],
  2: [projectTwoPhoto1, projectTwoPhoto2],
};
const experienceCards = [
  { period: "MAY 2026", title: "Team Leader", subtitle: "BGI NATIONAL HACKATHON 2026", highlights: ["Led a team among 600+ teams and 2,800+ candidates nationwide.", "Directed technical strategy, task delegation, presentation flow, and milestone delivery.", "Built around the theme of direct farmer to consumer marketplace platform."], focus: ["Team Leadership", "Product Strategy", "HTML", "CSS", "JavaScript"] },
  { period: "SEP 2026", title: "Team Leader", subtitle: "BCE PROJECT COMPETITION 2026", highlights: ["Designed and developed TypeQuest from scratch, building a gamified platform to improve typing speed and accuracy.", "Developed interactive frontend experiences and backend functionality using React and Python, with SQLite for data management.", "Built typing practice, structured lessons, interactive games, and user progress tracking to create an engaging learning experience."], focus: ["Team Leadership", "Full-Stack Development", "React", "Python", "SQLite", "Gamification"] },
  { period: "SEP 2026", title: "Frontend Developer & Core Team Member", subtitle: "SMART INDIA HACKATHON 2026", highlights: ["Served as a core team member in developing BIS-Sahayak AI for Smart India Hackathon (SIH) 2026.", "Independently handled 100% of the frontend development, translating project requirements into an interactive user interface.", "Collaborated with team members to bring the complete solution together through frontend development and technical coordination."], focus: ["Frontend Development", "React.js", "CSS", "Team Collaboration", "SIH 2026"] },
  { period: "ONGOING", title: "Problem Solver", subtitle: "COMPETITIVE PROGRAMMING & DSA", highlights: ["Coming Soon", "Coming Soon", "Coming Soon"], focus: ["DSA", "Algorithms", "Java", "Problem Solving"] },
];

function ExperienceCards() {
  return <div className="experience-list">
    {experienceCards.map((experience, index) => <article className="experience-card experience-list-card reveal" key={`${experience.title}-${index}`}>
      <div className="experience-meta"><span>{experience.period}</span><span>EXPERIENCE</span></div>
      <h3>{experience.title}</h3>{experience.subtitle && <h4>{experience.subtitle}</h4>}
      {experience.highlights.length > 0 && <div className="experience-highlights"><span>HIGHLIGHTS:</span><ul>{experience.highlights.map((highlight, highlightIndex) => <li key={`${index}-${highlightIndex}`}>{highlight}</li>)}</ul></div>}
      <div className="experience-focus"><span>FOCUS AREAS:</span><div>{experience.focus.map((item) => <span key={item}>{item}</span>)}</div></div>
    </article>)}
  </div>;
}

function SocialRail() {
  return <aside className="social-rail" aria-label="Social links">
    <a href={profile.github} aria-label="GitHub" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5" /></svg></a>
    <a href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13M7.12 20.45H3.56V9h3.56zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.21 0 22.23 0" /></svg></a>
    <a href={profile.leetcode} aria-label="LeetCode" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 6-6 6 6 6M16 6l6 6-6 6" /></svg></a>
  </aside>;
}

function SectionHeading({ eyebrow, eyebrowClass = "", children, light = false, centered = false, line = true }) {
  return <div className={`section-heading ${light ? "light" : ""} ${centered ? "centered" : ""}`}>
    {eyebrow && <span className={`eyebrow ${eyebrowClass}`}>{eyebrow}</span>}
    <h2>{children}</h2>
    {line && <span className="heading-line" />}
  </div>;
}

function ProjectCard({ project, number }) {
  const [screenshotIndex, setScreenshotIndex] = useState(0);
  const screenshots = projectScreenshots[number];
  const showScreenshot = (offset) => setScreenshotIndex((current) => (current + offset + screenshots.length) % screenshots.length);
  return <article className="project-card reveal">
    <div className={`project-art project-art-${number}`} aria-label={`Screenshot preview for ${project.title}`}>
      {screenshots && <>
        <button className="project-screenshot-next" type="button" onClick={() => showScreenshot(1)} aria-label={`Show next ${project.title} photo`}>
          <img src={screenshots[screenshotIndex]} alt={`${project.title} screenshot ${screenshotIndex + 1}`} />
        </button>
        <div className="browser-bar"><i /><i /><i /><span>PROJECT PREVIEW</span></div>
        <div className="project-screenshot-controls" aria-label="Choose project photo">
          <button type="button" onClick={() => showScreenshot(-1)} aria-label="Previous photo">‹</button>
          {screenshots.map((screenshot, index) => <button className={screenshotIndex === index ? "is-active" : ""} type="button" key={screenshot} onClick={() => setScreenshotIndex(index)} aria-label={`Show photo ${index + 1}`} aria-current={screenshotIndex === index ? "true" : undefined} />)}
          <button type="button" onClick={() => showScreenshot(1)} aria-label="Next photo">›</button>
        </div>
      </>}
      {!screenshots && <>
      <div className="browser-bar"><i /><i /><i /><span>PROJECT PREVIEW</span></div>
      <div className="art-copy"><strong>{project.title}</strong><span className="art-button">VIEW PROJECT <Arrow diagonal /></span></div>
      <span className="art-orbit orbit-one" /><span className="art-orbit orbit-two" />
      </>}
    </div>
    <div className="project-info">
      <div className="project-kicker"><span>0{number}</span></div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-tags">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
      <div className="project-links">
        {project.github ? <a href={project.github} target="_blank" rel="noreferrer"><GithubIcon />GitHub</a> : <span aria-disabled="true"><GithubIcon />GitHub</span>}
        {project.live ? <a href={project.live} target="_blank" rel="noreferrer"><DemoIcon />Live Demo</a> : <span aria-disabled="true"><DemoIcon />{project.liveComingSoon ? "Live Demo Coming Soon" : "Live Demo"}</span>}
      </div>
    </div>
  </article>;
}

export default function App() {
  const [contactStatus, setContactStatus] = useState("");
  const [isContactSending, setIsContactSending] = useState(false);
  const [isIntroVisible, setIsIntroVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typedRole, setTypedRole] = useState("");

  useEffect(() => {
    document.body.classList.add("app-ready");
    const timeoutId = window.setTimeout(() => setIsIntroVisible(false), 1750);
    return () => {
      window.clearTimeout(timeoutId);
      document.body.classList.remove("app-ready");
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isIntroVisible) return;
    const role = profile.role;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setTypedRole(role);
      return;
    }
    let index = 0;
    let timeoutId;
    const typeNext = () => {
      if (index < role.length) {
        index += 1;
        setTypedRole(role.slice(0, index));
        timeoutId = window.setTimeout(typeNext, 75);
        return;
      }
      timeoutId = window.setTimeout(() => {
        index = 0;
        setTypedRole("");
        timeoutId = window.setTimeout(typeNext, 180);
      }, 3000);
    };
    timeoutId = window.setTimeout(typeNext, 75);
    return () => window.clearTimeout(timeoutId);
  }, [isIntroVisible]);

  useEffect(() => {
    if (contactStatus !== "Thanks! Your message was submitted successfully.") return;
    const timeoutId = window.setTimeout(() => setContactStatus(""), 15000);
    return () => window.clearTimeout(timeoutId);
  }, [contactStatus]);

  useEffect(() => {
    const navigation = performance.getEntriesByType("navigation")[0];
    if (navigation?.type !== "reload") return;
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    window.scrollTo(0, 0);
    return () => { window.history.scrollRestoration = previousScrollRestoration; };
  }, []);

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.querySelector(":invalid")?.focus();
      setContactStatus("Please complete all required fields and check the permission box.");
      return;
    }
    const formData = new FormData(form);
    const firstName = String(formData.get("firstName") || "").trim();
    const lastName = String(formData.get("lastName") || "").trim();
    const senderEmail = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    setIsContactSending(true);
    setContactStatus("Sending your message…");
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email: senderEmail,
          _replyto: senderEmail,
          message,
          _subject: `Portfolio message from ${firstName} ${lastName}`,
          _template: "table",
        }),
      });
      const result = await response.json();
      if (!response.ok || !(result.success === true || result.success === "true")) {
        if (String(result.message || "").toLowerCase().includes("needs activation")) {
          throw new Error(`This contact form is still being activated. Please check ${profile.email} for FormSubmit's latest “Activate Form” email, click the link, and try again.`);
        }
        throw new Error(result.message || "Your message could not be sent. Please try again.");
      }
      form.reset();
      setContactStatus("Thanks! Your message was submitted successfully.");
    } catch (error) {
      setContactStatus(error.message || "Your message could not be sent. Please try again.");
    } finally {
      setIsContactSending(false);
    }
  };

  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) { target.classList.add("is-visible"); observer.unobserve(target); }
    }), { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(".process-reveal");
    let frame = 0;
    const updateCards = () => {
      const start = window.innerHeight * .95;
      const end = window.innerHeight * .45;
      cards.forEach((card) => {
        const top = card.getBoundingClientRect().top;
        const progress = Math.max(0, Math.min(1, (start - top) / (start - end)));
        card.style.setProperty("--scroll-card-scale", (.35 + .65 * progress).toFixed(3));
        card.style.setProperty("--scroll-card-opacity", (.18 + .82 * progress).toFixed(3));
        card.style.setProperty("--scroll-card-offset", `${((1 - progress) * 40).toFixed(1)}px`);
      });
    };
    const scheduleUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => { frame = 0; updateCards(); });
    };
    updateCards();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const section = document.querySelector("#contact");
    const heading = section?.querySelector(".contact-giant");
    if (!section || !heading) return undefined;
    let frame = 0;
    const updateHeading = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const progress = Math.max(0, Math.min(1, (window.innerHeight - section.getBoundingClientRect().top) / (window.innerHeight * 1.5)));
        heading.style.top = `calc(${progress * 50}% + 1cm)`;
      });
    };
    updateHeading();
    window.addEventListener("scroll", updateHeading, { passive: true });
    window.addEventListener("resize", updateHeading);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", updateHeading); window.removeEventListener("resize", updateHeading); };
  }, []);

  return <>
    {isIntroVisible && <div className="intro-screen" role="status" aria-label="Welcome to my portfolio">
      <h1 className="intro-screen-name" aria-label={`</> ${profile.name}.`}>
        <span className="intro-screen-code" aria-hidden="true">&lt;/&gt;</span>
        <span className="intro-screen-letters" aria-hidden="true">{Array.from(profile.name).map((letter, index) => <span className="intro-screen-letter" key={`${letter}-${index}`} style={{ animationDelay: `${0.15 + index * 0.035}s` }}>{letter === " " ? "\u00a0" : letter}</span>)}<span className="intro-screen-period">.</span></span>
      </h1>
    </div>}
    <header className="site-header">
      <a className="wordmark" href="#home"><span className="wordmark-code">&lt;/&gt;</span> {profile.name.split(" ")[0]}<span>.</span></a>
      <div className="header-actions"><a className="hire-link" href="#contact">Hire Me</a><button className={`menu-toggle ${isMenuOpen ? "is-open" : ""}`} type="button" aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isMenuOpen} aria-controls="site-menu" onClick={() => setIsMenuOpen((open) => !open)}><span /><span /><span /></button></div>
    </header>
    <div className={`menu-overlay ${isMenuOpen ? "is-open" : ""}`} id="site-menu" aria-hidden={!isMenuOpen} inert={!isMenuOpen}>
      <div className="menu-backdrop" onClick={() => setIsMenuOpen(false)} />
      <div className="menu-panel" onClick={(event) => event.stopPropagation()}>
        <button className="menu-close" type="button" aria-label="Close navigation menu" onClick={() => setIsMenuOpen(false)}><span aria-hidden="true">×</span></button>
        <div className="menu-panel-content">
          <span className="menu-kicker">EXPLORE</span>
          <nav aria-label="Main navigation">
            {[ ["Home", "home"], ["About", "about"], ["Skills", "skills"], ["Projects", "projects"], ["Experience", "experience"], ["Education", "education"], ["Certificates", "certificates"], ["Contact", "contact"] ].map(([label, target]) => <a href={`#${target}`} key={target} onClick={() => setIsMenuOpen(false)}><span>{label}</span></a>)}
          </nav>
        </div>
        <div className="menu-contact"><div><span className="menu-kicker">LET’S TALK</span><a className="menu-email" href={`mailto:${profile.email}`}>{profile.email}</a></div><div className="menu-socials"><div className="footer-socials">
          <a href={profile.github} aria-label="GitHub" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5" /></svg></a>
          <a href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13M7.12 20.45H3.56V9h3.56zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.21 0 22.23 0" /></svg></a>
          <a href={profile.leetcode} aria-label="LeetCode" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 6-6 6 6 6M16 6l6 6-6 6" /></svg></a>
        </div></div></div>
        <div className="menu-availability-spacer" aria-hidden="true" />
      </div>
    </div>
    <SocialRail />

    <main>
      <section className="original-hero" id="home">
        <div className="hero-text">
          <h1>Hi, I'm {profile.name},</h1>
          <h2 className="outline typing-heading" aria-label={profile.role}><span className="typing-text" aria-hidden="true">{Array.from(typedRole).map((letter, index) => letter.toLowerCase() === "e" ? <span className="outline-e" key={index}>{letter}</span> : letter)}<span className="typing-cursor" /></span></h2>
          <p className="tagline">{profile.tagline}</p>
          <div className="buttons">
            <a className="btn solid" href="#projects">View My Work</a>
            <a className="btn outline-btn" href="#contact">Contact Me</a>
            <a className="btn outline-btn" href="/resume.pdf" download="Shivansh Ahirwar-Resume.pdf"><svg className="pdf-icon" viewBox="0 0 20 22" aria-hidden="true"><path d="M4 1.5h8l4 4v15H4zM12 1.5v4h4M10 8v8m-3-3 3 3 3-3" /></svg>Download Resume</a>
          </div>
        </div>
        <a href="#about" className="scroll-down" aria-label="Scroll down">↓</a>
      </section>

      <section className="about-section section-rose" id="about">
        <div className="about-image-wrap reveal"><div className="about-photo" aria-hidden="true"><div className="avatar-shape"><i /><b /><span /></div><span className="photo-label">A LITTLE ABOUT ME</span></div></div>
        <div className="about-copy reveal"><h2>Hello<span>!</span></h2><p>I'm <strong>{profile.name}</strong>, a developer who enjoys turning ambitious ideas into useful, welcoming digital products. I care about the small details, clear communication, and making technology feel a little more human.</p><p className="about-note">Curious by nature. Always building. Currently exploring what’s next.</p>
          <object className="about-logos" data={aboutPageArt} type="image/svg+xml" aria-label="Technology logos">Technology logos</object>
        </div><div className="wave wave-rose-to-cream" />
      </section>

      <section className="skills-section section-cream" id="skills">
        <SectionHeading centered>My skillset</SectionHeading>
        <p className="skills-subheading">A snapshot of the technologies and tools I use to build reliable, full-stack applications.</p>
        <div className="skills-grid">
          {[
            { title: "Languages", skills: [["JavaScript", 92], ["Java", 88], ["SQL", 86], ["HTML5", 95], ["CSS3", 92]] },
            { title: "Frontend & Mobile", skills: [["React.js", 92], ["React Native", 88], ["Expo SDK", 86], ["Bootstrap", 84]] },
            { title: "Backend", skills: [["Node.js", 90], ["Express", 88], ["Spring Boot", 86], ["REST APIs", 91]] },
            { title: "Databases", skills: [["MongoDB", 88], ["PostgreSQL", 86], ["MySQL", 84], ["Redis", 78]] },
            { title: "Tools & Platforms", skills: [["Git & GitHub", 92], ["Vercel", 90], ["Render", 86], ["Supabase", 84], ["Postman", 88]] },
            { title: "Core Fundamentals", skills: [["Data Structures", 92], ["Algorithms", 90], ["OOP", 91], ["DBMS", 88]] },
          ].map((group) => <article className="skill-card skill-bars-card reveal" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="skill-list">{group.skills.map(([name]) => <li className="skill-item" key={name}>
              <div className="skill-item-label"><span>{name}</span><span>0%</span></div>
              <div className="skill-track" role="meter" aria-label={`${name} proficiency`} aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span style={{ width: "0%" }} /></div>
            </li>)}</ul>
          </article>)}
        </div>
      </section>

      <section className="process-section section-peach" id="process">
        <div className="process-intro reveal"><span className="eyebrow process-label">My Process</span><h2>Here is how I<br />turn ideas into<br /><em>production-<br />ready software</em><span>.</span></h2><p>I move from problem understanding to clean architecture, fast iteration, testing, deployment, and measurable polish.</p></div>
        <div className="process-path" aria-label="Research, design, development, and deployment process"><svg className="path-line" viewBox="0 0 1000 1800" preserveAspectRatio="none" aria-hidden="true"><path className="process-zigzag path-line-desktop" d="M700 280 C700 380 330 420 330 520 C330 650 650 900 650 1040 C650 1180 350 1370 350 1560" /><path className="process-zigzag path-line-mobile" d="M590 298 C900 350 100 402 410 455 C410 610 900 680 590 754 C590 810 100 856 410 912 C410 1060 900 1142 590 1209 C900 1264 100 1316 410 1368" /></svg>
          <article className="process-card process-research process-reveal"><div className="process-card-top"><span>01</span><i className="process-pin" /></div><h3>Research</h3><p>I begin by understanding the users, project goals, constraints, security needs, and product scope before touching the architecture.</p></article>
          <article className="process-card process-design process-reveal"><div className="process-card-top"><span>02</span><i className="process-pin" /></div><h3>Design</h3><p>I shape responsive interfaces, database models, API contracts, and user flows that can scale beyond a prototype.</p></article>
          <article className="process-card process-develop process-reveal"><div className="process-card-top"><span>03</span><i className="process-pin" /></div><h3>Develop</h3><p>I build with care, test the details, deploy confidently, and keep improving from real feedback.</p></article>
          <article className="process-card process-deploy process-reveal"><div className="process-card-top"><span>04</span><i className="process-pin" /></div><h3>Deploy</h3><p>I test, optimize, and deploy applications using platforms like Vercel, Render, Railway, Supabase, AWS, Docker, and Neon.</p></article>
          <span className="process-finish">Ready to ship!</span>
        </div><div className="wave wave-peach-to-wine" />
      </section>

      <section className="projects-section section-wine" id="projects">
        <div className="projects-top"><SectionHeading light>Work that speaks<br />for itself<span>.</span></SectionHeading><p>A selection of projects shaped by curiosity, thoughtful design, and a love of making things work beautifully.</p></div>
        <div className="project-list">{projects.map((project, index) => <ProjectCard key={project.title} project={project} number={index + 1} />)}</div>
        <a className="pill outline-pill projects-more" href="#contact">Have a project in mind? <Arrow diagonal /></a><div className="wave wave-wine-to-rose" />
      </section>

      <section className="experience-section section-rose" id="experience">
        <SectionHeading centered>Experience</SectionHeading><p className="section-deck">The people, places, and projects that have helped me grow.</p>
        <ExperienceCards /><div className="wave wave-rose-to-wine" />
      </section>

      <section className="education-section section-wine" id="education">
        <SectionHeading eyebrow="EDUCATION" eyebrowClass="education-eyebrow" light centered>Academic journey</SectionHeading><p className="section-deck light-deck">The foundations, milestones, and lessons that keep me moving forward.</p>
        <div className="education-grid">{[
          { period: "AUG 2025 - JUNE 2029", title: "Bachelor of Technology in Computer Science Engineering", institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya", result: "CGPA: 8.31/10" },
          { period: "JULY 2024 - APRIL 2025", title: "Senior Secondary (XII)", institution: "M.P. Board", result: "86.6%" },
          { period: "JULY 2022 - APRIL 2023", title: "Secondary (X)", institution: "M.P. Board", result: "95%" },
        ].map((education, index) => <article className="education-card reveal" key={education.title}><span className="edu-number">0{index + 1}</span><span className="edu-year">{education.period}</span><h3>{education.title}</h3><p>{education.institution}</p><span className="edu-result">{education.result}</span></article>)}</div><div className="wave wave-wine-to-rose" />
      </section>

      <section className="cert-section section-rose" id="certificates">
        <SectionHeading centered>Certifications</SectionHeading><p className="section-deck">A record of the skills, commitment, and curiosity I bring to every challenge.</p>
        <div className="cert-grid">{[
          { title: "BGI Hackathon 2026", issuer: "Bansal Group of Institutes · May 2026", image: bgiCertificate },
          { title: "Introduction to Digital Transformation with Google Cloud", issuer: "Google Cloud · Simplilearn SkillUp · December 2025", image: googleCloudCertificate },
          { title: "CS107: C++ Programming", issuer: "Saylor University · April 2026", image: saylorCertificate },
        ].map((certificate, index) => <article className="cert-card reveal" key={certificate.title}>
          <a className="cert-image" href={certificate.image} target="_blank" rel="noreferrer" aria-label={`Open ${certificate.title} certificate`}><img src={certificate.image} alt={`${certificate.title} certificate`} /></a>
          <div className="cert-caption"><div><h3>{certificate.title}</h3><p>{certificate.issuer}</p></div></div>
        </article>)}</div>
        <a className="cert-resume-link" href="/resume.pdf" target="_blank" rel="noreferrer"><svg className="pdf-icon" viewBox="0 0 20 22" aria-hidden="true"><path d="M4 1.5h8l4 4v15H4zM12 1.5v4h4M10 8v8m-3-3 3 3 3-3" /></svg>View Resume <Arrow diagonal /></a>
        <div className="wave wave-rose-to-wine" />
      </section>

      <section className="contact-section section-wine" id="contact">
        <div className="contact-giant" aria-hidden="true">CONTACT</div>
        <form className="contact-form-card" onSubmit={handleContactSubmit} noValidate>
          <span className="eyebrow">REACH ME</span>
          <div className="contact-grid">
            <div className="contact-fields">
              <label htmlFor="contact-first-name"><span className="visually-hidden">First Name</span><input id="contact-first-name" name="firstName" placeholder="First Name" autoComplete="given-name" required /></label>
              <label htmlFor="contact-last-name"><span className="visually-hidden">Last Name</span><input id="contact-last-name" name="lastName" placeholder="Last Name" autoComplete="family-name" required /></label>
              <label htmlFor="contact-email"><span className="visually-hidden">Email</span><input id="contact-email" name="email" type="email" placeholder="Email" autoComplete="email" required /></label>
              <label className="contact-consent"><input type="checkbox" name="consent" required /><span>I give permission to contact me at this email address.</span></label>
            </div>
            <div className="contact-message">
              <label htmlFor="contact-message"><span className="visually-hidden">Your Message</span><textarea id="contact-message" name="message" placeholder="Type your message here" rows="4" required /></label>
              <p>Your message will be sent directly to my inbox. I typically respond within 24–48 hours.</p>
              <div className="contact-support"><span>For urgent inquiries, reach me at<br /><a href={`mailto:${profile.email}`}>{profile.email}</a></span><button className="contact-send" type="submit" disabled={isContactSending}>{isContactSending ? "Sending…" : <>Send Message <Arrow diagonal /></>}</button></div>
              <p className={`contact-status ${contactStatus.startsWith("Thanks!") ? "is-success" : contactStatus === "Sending your message…" ? "is-sending" : "is-error"}`} role="status" aria-live="polite">{contactStatus}</p>
            </div>
          </div>
        </form>
      </section>
    </main>

    <footer className="site-footer section-wine">
      <div className="footer-top">
        <div className="footer-profile"><strong>{profile.role}</strong><span>React|React Native|Java|Spring Boot|Python|FastAPI</span><span>Production-ready Web &amp; Mobile Applications</span></div>
        <div className="footer-details"><span>B.Tech CSE · CGPA 8.31</span><a href="#projects">View My Work</a></div>
        <div className="footer-status"><span>Available for opportunities</span><span className="footer-year">{new Date().getFullYear()}</span></div>
      </div>
      <a className="footer-name" href="#home">{profile.name.split(" ")[0]}<span>.</span></a>
      <div className="footer-bottom">
        <div className="footer-contact"><a href={`mailto:${profile.email}`}>Contact</a><span><span className="copyright-mark">©</span> 2026 [Shivansh Ahirwar] | Built with React</span></div>
        <div className="footer-social-group">
          <a className="footer-email" href={`mailto:${profile.email}`}>{profile.email}</a>
          <div className="footer-socials">
            <a href={profile.github} aria-label="GitHub" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5" /></svg></a>
            <a href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13M7.12 20.45H3.56V9h3.56zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.21 0 22.23 0" /></svg></a>
            <a href={profile.leetcode} aria-label="LeetCode" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 6-6 6 6 6M16 6l6 6-6 6" /></svg></a>
          </div>
        </div>
        <a className="footer-github" href={profile.github} target="_blank" rel="noreferrer">Explore My GitHub</a>
      </div>
    </footer>
  </>;
}
