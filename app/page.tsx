"use client";
import {useState} from "react";
import Link from "next/link";
import {ArrowUpRight, ArrowRight, Github, Linkedin, Mail, Menu, X, Download, ExternalLink, CheckCircle2, Moon, Sun} from "lucide-react";
import {site} from "@/content/site";

export default function Home(){
const [menu,setMenu]=useState(false);
const [dark,setDark]=useState(true);
const nav=[["About","#about"],["Expertise","#expertise"],["Experience","#experience"],["Projects","#projects"],["Writing","#writing"],["Contact","#contact"]];
return <div className={dark?"theme-dark":"theme-light"}>
<header className="topbar"><div className="container nav-inner">
<a href="#home" className="brand"><span className="brand-icon">✳</span> ATLAS<span className="brand-dot">.</span></a>
<nav className={menu?"nav-links open":"nav-links"}>{nav.map(([name,href])=><a onClick={()=>setMenu(false)} href={href} key={name}>{name}</a>)}</nav>
<div className="nav-actions"><button className="icon-button" onClick={()=>setDark(!dark)} aria-label="Toggle color mode">{dark?<Sun size={19}/>:<Moon size={19}/>}</button><a className="small-cta" href="#contact">Let's connect <ArrowUpRight size={15}/></a><button className="icon-button mobile-menu" onClick={()=>setMenu(!menu)} aria-label="Toggle menu">{menu?<X/>:<Menu/>}</button></div>
</div></header>
<main>
<section id="home" className="hero section"><div className="container hero-grid"><div className="hero-copy">
<div className="eyebrow"><span className="pulse"/> OPEN TO COLLABORATION</div>
<p className="hello">Hello, I'm <strong>{site.name}</strong> <span>✳</span></p>
<h1>Ideas into <em>impact.</em><br/>Technology with <em>purpose.</em></h1>
<p className="lead">{site.intro}</p>
<div className="hero-buttons"><a href="#projects" className="button button-primary">Explore my work <ArrowUpRight size={18}/></a><a href="#about" className="button button-outline">Get to know me <ArrowRight size={18}/></a></div>
<div className="hero-social"><span>CONNECT</span><a href={site.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19}/></a><a href={site.links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19}/></a><a href={`mailto:${site.email}`} aria-label="Email"><Mail size={19}/></a></div>
</div><div className="hero-art"><div className="orb orb-one"/><div className="orb orb-two"/><div className="orb orb-three"/><div className="orb-center"><span>✳</span><strong>CREATE<br/>IMPACT</strong></div><span className="float-label label-one">STRATEGY ↗</span><span className="float-label label-two">ENGINEERING ✦</span><span className="float-label label-three">LEADERSHIP ↗</span><span className="art-note">BUILDING WHAT'S NEXT / 01</span></div></div>
<div className="container hero-foot"><span>{site.location}</span><span>SCROLL TO EXPLORE ↓</span></div></section>

<section className="ribbon"><div className="container ribbon-inner"><span>ARCHITECTURE</span><span>✳</span><span>ENGINEERING</span><span>✳</span><span>LEADERSHIP</span><span>✳</span><span>AI TRANSFORMATION</span></div></section>
<section id="about" className="section"><div className="container two-col"><div><div className="section-label"><span>01</span> ABOUT ME</div><h2>Technical depth.<br/><em>Human perspective.</em></h2><div className="asterisk">✳</div></div><div className="about-copy"><p>{site.about}</p><div className="info-line"><span>MY FOCUS</span><strong>{site.role}</strong></div><div className="info-line"><span>BASED IN</span><strong>{site.location}</strong></div><a href="#contact" className="inline-link">Let's start a conversation <ArrowUpRight size={17}/></a></div></div></section>

<section id="expertise" className="section muted"><div className="container"><div className="section-label"><span>02</span> WHAT I DO</div><div className="heading-row"><h2>Building for<br/><em>what comes next.</em></h2><p>My approach combines sound technical foundations with curiosity, collaboration, and an eye for meaningful outcomes.</p></div><div className="focus-grid">{site.focus.map((x,i)=><article className="focus-card" key={x.title}><div className="focus-top"><span className="circle-icon">{["⌘","◇","✳"][i]}</span><span>0{i+1}</span></div><h3>{x.title}</h3><p>{x.description}</p></article>)}</div><div className="skills"><span className="section-label">TOOLS & DISCIPLINES</span><div className="chips">{site.skills.map(s=><span className="chip" key={s}>{s}</span>)}</div></div></div></section>

<section id="experience" className="section"><div className="container"><div className="section-label"><span>03</span> EXPERIENCE</div><div className="heading-row"><h2>A path shaped<br/>by <em>curiosity.</em></h2><p>Representative roles and experiences. Update this section with verified employment history and accomplishments.</p></div><div className="timeline">{site.experience.map((x,i)=><article key={x.title} className="timeline-item"><span className="timeline-time">{x.period}</span><span className="timeline-marker"/><div><span className="overline">{x.company}</span><h3>{x.title}</h3><p>{x.description}</p></div><span className="timeline-number">0{i+1}</span></article>)}</div></div></section>

<section id="projects" className="section muted"><div className="container"><div className="section-label"><span>04</span> SELECTED WORK</div><div className="heading-row"><h2>Thinking made<br/><em>tangible.</em></h2><p>Example case studies—replace these with your projects, ideally with measurable results and clear ownership.</p></div><div className="projects">{site.projects.map((p,i)=><Link href={`/projects/${p.slug}`} className="project" key={p.slug}><div className={`project-visual project-visual-${i}`}><span className="visual-sign">{["⌘","✳","◈"][i]}</span><span className="visual-caption">PROJECT / 0{i+1}</span></div><div className="project-text"><span className="overline">{p.category}</span><h3>{p.title}</h3><p>{p.summary}</p><div className="chips">{p.tags.map(t=><span className="chip" key={t}>{t}</span>)}</div><span className="inline-link">View case study <ArrowUpRight size={17}/></span></div></Link>)}</div></div></section>

<section id="certifications" className="section"><div className="container two-col"><div><div className="section-label"><span>05</span> LEARNING</div><h2>Always growing.<br/><em>Always exploring.</em></h2><p className="supporting">A commitment to staying current and growing with the field.</p></div><div className="certs">{site.certifications.map((x,i)=><div className="cert" key={i}><span className="cert-symbol"><CheckCircle2/></span><div><h3>{x.name}</h3><p>{x.issuer} · {x.date}</p></div></div>)}</div></div></section>

<section id="writing" className="section muted"><div className="container"><div className="section-label"><span>06</span> IDEAS & WRITING</div><div className="heading-row"><h2>Thoughts along<br/><em>the way.</em></h2><p>Notes on building systems, growing teams and embracing change.</p></div><div className="writing-grid">{site.posts.map((p,i)=><Link href={`/blog/${p.slug}`} className="writing-card" key={p.slug}><div className={`post-art post-art-${i}`}><span>0{i+1}</span><span>↗</span></div><span className="overline">{p.category} · {p.date}</span><h3>{p.title}</h3><p>{p.excerpt}</p><span className="inline-link">Read article <ArrowUpRight size={17}/></span></Link>)}</div></div></section>

<section id="contact" className="section contact"><div className="container two-col"><div><div className="section-label"><span>07</span> CONTACT</div><h2>Let's create<br/><em>something great.</em></h2><p className="supporting">Have a challenge, an interesting idea, or just want to connect? I'd love to hear from you.</p><a className="email-link" href={`mailto:${site.email}`}>{site.email} <ExternalLink size={20}/></a></div><div className="contact-panel"><span>START A CONVERSATION</span><h3>Every great idea starts with a conversation.</h3><p>Use the email link below to open your email app and send a message directly.</p><a href={`mailto:${site.email}?subject=Let's%20connect`} className="button button-primary">Send a message <Mail size={18}/></a><div className="contact-links"><a href={site.links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={site.links.github} target="_blank" rel="noreferrer">GitHub ↗</a></div></div></div></section>
</main><footer><div className="container footer-inner"><a href="#home" className="brand"><span className="brand-icon">✳</span> ATLAS<span className="brand-dot">.</span></a><span>© {new Date().getFullYear()} {site.name}. Crafted with intention.</span><a href="#home">BACK TO TOP ↑</a></div></footer>
</div>}
