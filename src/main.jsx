import React, {useEffect, useState} from "react";
import {createRoot} from "react-dom/client";
import {
  ArrowRight, Banknote, Smartphone, FileText, Printer, Camera, CreditCard,
  ShieldCheck, MapPin, Phone, Mail, Clock, Menu, X, ChevronDown, CheckCircle2
} from "lucide-react";
import "./styles.css";
import logo from "./logo.jpg";

const phone = "9766592316";
const whatsapp = `https://wa.me/91${phone}`;
const maps = "https://www.google.com/maps/dir/?api=1&destination=19.3008207,73.0560904";

const serviceTabs = [
  { id: "banking", label: "Banking & Payments", icon: Banknote },
  { id: "mobile", label: "Mobile Services", icon: Smartphone },
  { id: "printing", label: "Printing", icon: Printer },
  { id: "online", label: "Online Work", icon: FileText }
];

const groups = [
  {
    icon: Banknote,
    id: "banking",
    title: "Banking & Payments",
    items: [
      ["Bank Account Opening", "Get convenient assistance with opening your bank account and completing the required online formalities."],
      ["Money Transfer", "Send money conveniently with helpful assistance for everyday domestic transfer requirements."],
      ["Bill Payments", "Pay your essential bills with quick and convenient digital payment assistance."],
      ["Mobile Recharge", "Recharge your mobile quickly and conveniently whenever you need it."]
    ]
  },
  {
    icon: Smartphone,
    id: "mobile",
    title: "Mobile Services",
    items: [
      ["Mobile Repairing", "Get your phone checked and serviced for common mobile problems with convenient local assistance."],
      ["New SIM Card", "Get assistance with new SIM requirements and the documentation involved."],
      ["MNP / Porting", "Want to switch your network? Get guidance with mobile number portability and related formalities."],
      ["HSRP Services", "Get assistance with HSRP-related online requirements and application formalities."]
    ]
  },
  {
    icon: Printer,
    id: "printing",
    title: "Printing & Digital",
    items: [
      ["Xerox", "Quick and convenient photocopying for documents, forms and everyday requirements."],
      ["Print-outs", "Get clean, convenient document printing for applications, work, study and personal needs."],
      ["Lamination", "Protect important documents with neat and durable lamination service."],
      ["Spiral Binding", "Keep reports, projects and documents organized with professional spiral binding."],
      ["Smart Card Printing", "Get assistance with smart card printing for eligible document requirements."],
      ["Passport Size Photos", "Quick passport-size photo service for forms, IDs, applications and official documents."]
    ]
  },
  {
    icon: FileText,
    id: "online",
    title: "Online Work",
    items: [
      ["Passport Application", "Get step-by-step assistance with online passport application and related documentation."],
      ["PAN Card", "Get help with PAN card applications and related online documentation requirements."],
      ["Gazette Services", "Convenient assistance for Gazette-related applications and document formalities."],
      ["Udyam Registration", "Get assistance with Udyam Registration and the online formalities for eligible businesses."],
      ["Gumasta Licence", "Get help with shop and establishment licence-related online application formalities."],
      ["Election Card", "Get assistance with voter and election card-related online services."],
      ["Aadhaar Card", "Get convenient guidance for eligible Aadhaar-related online services and requirements."],
      ["E-Shram Card", "Get assistance with eligible E-Shram registration and online formalities."],
      ["Ayushman Card", "Get help with eligible Ayushman Card-related online services and application assistance."],
      ["RTE Application", "Get assistance with online RTE application requirements and documentation."],
      ["FSSAI Food Licence", "Get assistance with FSSAI registration and food-business licence application formalities."],
      ["EPF Services", "Get convenient assistance with common EPF-related online service requirements."]
    ]
  }
];

function App(){
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [serviceTab, setServiceTab] = useState("banking");

  useEffect(() => {
    const onScroll = () => {
      const ids = ["home","services","contact"];
      let current = "home";
      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 150) current = id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({behavior:"smooth"});
    setOpen(false);
  };

  return (
    <div className="site">
      <header className="header">
        <div className="container nav">
          <button className="brand" onClick={() => go("home")} aria-label="FULL STOP home">
            <img src={logo} alt="FULL STOP logo" />
            <div>
              <strong>FULL STOP</strong>
              <span>Mobile & Digital Services</span>
            </div>
          </button>
          <nav className={open ? "navlinks open" : "navlinks"}>
            {["home","services","contact"].map(id =>
              <button key={id} className={active===id ? "active" : ""} onClick={()=>go(id)}>
                {id[0].toUpperCase()+id.slice(1)}
              </button>
            )}
            <a className="nav-cta" href={`tel:+91${phone}`}><Phone size={16}/> Call Now</a>
          </nav>
          <button className="menu" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-glow one"></div><div className="hero-glow two"></div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span></span> Your trusted local service center</div>
              <h1>Everything you need.<br/><em>One FULL STOP.</em></h1>
              <p className="lead">Mobile services, online applications, government services, printing, documentation and everyday digital assistance — all under one roof in the heart of Bhiwandi.</p>
              <div className="hero-actions">
                <a className="btn primary" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp Us <ArrowRight size={18}/></a>
                <a className="btn secondary" href={maps} target="_blank" rel="noreferrer"><MapPin size={18}/> Get Directions</a>
              </div>
              <div className="trust-row">
                <div><CheckCircle2/> Local Bhiwandi Service</div>
                <div><CheckCircle2/> Quick Assistance</div>
                <div><CheckCircle2/> Many Services, One Place</div>
              </div>
            </div>
            <div className="hero-card">
              <div className="card-top">
                <span className="live-dot"></span> Open today
              </div>
              <div className="big-card-title">FULL STOP</div>
              <p>Digital • Mobile • Documentation</p>
              <div className="quick-services">
                {["Mobile Repair","PAN / Aadhaar","Printing","SIM / MNP","Passport","Banking"].map((x,i)=>
                  <div key={x}><span>{[Smartphone,FileText,Printer,Smartphone,FileText,Banknote][i] && React.createElement([Smartphone,FileText,Printer,Smartphone,FileText,Banknote][i],{size:18})}</span>{x}</div>
                )}
              </div>
              <a href={`tel:+91${phone}`} className="call-card"><Phone size={18}/> 97665 92316</a>
            </div>
          </div>
          <div className="scroll-hint"><ChevronDown size={18}/> Explore our services</div>
        </section>

        <div className="marquee" aria-label="FULL STOP services">
          <div className="marquee-track">
            {["BANK ACCOUNT OPENING","MONEY TRANSFER","MOBILE REPAIR","PAN CARD","AADHAAR SERVICES","PASSPORT APPLICATION","XEROX & PRINTING","FSSAI LICENCE","UDYAM REGISTRATION","GUMASTA LICENCE","SIM & MNP","LAMINATION","EPF SERVICES","AND MUCH MORE"].map((x,i)=><React.Fragment key={i}><strong>{x}</strong><span>•</span></React.Fragment>)}
            {["BANK ACCOUNT OPENING","MONEY TRANSFER","MOBILE REPAIR","PAN CARD","AADHAAR SERVICES","PASSPORT APPLICATION","XEROX & PRINTING","FSSAI LICENCE","UDYAM REGISTRATION","GUMASTA LICENCE","SIM & MNP","LAMINATION","EPF SERVICES","AND MUCH MORE"].map((x,i)=><React.Fragment key={"b"+i}><strong>{x}</strong><span>•</span></React.Fragment>)}
          </div>
        </div>

        <section className="welcome">
          <div className="container welcome-inner">
            <div className="eyebrow dark"><span></span> Welcome to FULL STOP</div>
            <h2>Your convenient <em>one-stop destination</em> in Bhiwandi.</h2>
            <p>Whether you need help with a government application, document printing, mobile service, SIM/MNP, banking assistance or business registration, FULL STOP is here to make everyday digital and documentation tasks simple, convenient and hassle-free.</p>
            <a className="text-link" href="#services">Explore Our Services <ArrowRight size={16}/></a>
          </div>
        </section>

        <section className="intro-strip">
          <div className="container strip-grid">
            <div><span className="strip-number">01</span><strong>Simple</strong><small>Everyday services made easy</small></div>
            <div><span className="strip-number">02</span><strong>Convenient</strong><small>Many services at one location</small></div>
            <div><span className="strip-number">03</span><strong>Local</strong><small>Conveniently located at Mandai</small></div>
          </div>
        </section>

        <section id="services" className="section services">
          <div className="container">
            <div className="section-head">
              <div><div className="eyebrow dark"><span></span> What we do</div><h2>Services for your <em>everyday needs.</em></h2></div>
              <p>From a quick print to important government applications, FULL STOP helps you get everyday tasks done without the hassle.</p>
            </div>
            <div className="service-tabs" role="tablist" aria-label="Service categories">
              {serviceTabs.map(tab => {
                const TabIcon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    className={serviceTab === tab.id ? "service-tab active" : "service-tab"}
                    onClick={() => setServiceTab(tab.id)}
                    role="tab"
                    aria-selected={serviceTab === tab.id}
                  >
                    <TabIcon size={18}/>
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="service-panel">
              {groups.filter(g => g.id === serviceTab).map((g,idx)=>{
                const Icon=g.icon;
                return <article className="service-card service-card-wide" key={g.title}>
                  <div className="service-icon"><Icon/></div>
                  <span className="service-index">0{idx+1}</span>
                  <h3>{g.title}</h3>
                  <p className="category-intro">
                    {g.id === "banking" && "Convenient everyday banking, payment and recharge assistance from one trusted local service center."}
                    {g.id === "mobile" && "Practical mobile and SIM services with convenient assistance for your everyday phone needs."}
                    {g.id === "printing" && "Quick, neat and convenient document printing and finishing services for personal, business and application needs."}
                    {g.id === "online" && "Assistance with online applications, registrations and documentation for a wide range of everyday requirements."}
                  </p>
                  <div className="service-items">
                    {g.items.map(([name,desc])=>
                      <div className="service-item" key={name}>
                        <h4><CheckCircle2 size={15}/>{name}</h4>
                        <p>{desc}</p>
                      </div>
                    )}
                  </div>
                  <a href={whatsapp} target="_blank" rel="noreferrer">Enquire on WhatsApp <ArrowRight size={15}/></a>
                </article>
              })}
            </div>
            <div className="more-services"><span>PLUS MUCH MORE</span><div>Need something not listed? <a href={whatsapp} target="_blank" rel="noreferrer">Ask us on WhatsApp →</a></div></div>
          </div>
        </section>

        <section className="cta">
          <div className="container cta-inner">
            <div><div className="eyebrow"><span></span> Need a service?</div><h2>Just walk in. <em>We’ll help.</em></h2><p>Visit FULL STOP at Mandai, Bhiwandi or call us before you come.</p></div>
            <div className="cta-actions"><a className="btn white" href={`tel:+91${phone}`}><Phone size={18}/> Call 97665 92316</a><a className="btn outline-white" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp <ArrowRight size={18}/></a></div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container">
            <div className="section-head contact-head">
              <div><div className="eyebrow dark"><span></span> Find us</div><h2>Visit <em>FULL STOP.</em></h2></div>
              <p>Located next to Ganpati Mandir in Prabhu Alley, Mandai — easy to find when you’re in central Bhiwandi.</p>
            </div>
            <div className="contact-grid">
              <div className="contact-info">
                <a className="info-item" href={`tel:+91${phone}`}><div className="info-icon"><Phone/></div><div><small>Call us</small><strong>+91 97665 92316</strong></div></a>
                <a className="info-item" href="mailto:FULLSTOPMOBILESHOP@GMAIL.COM"><div className="info-icon"><Mail/></div><div><small>Email</small><strong>FULLSTOPMOBILESHOP@GMAIL.COM</strong></div></a>
                <div className="info-item"><div className="info-icon"><MapPin/></div><div><small>Address</small><strong>182 Prabhu Alley, Mandai,<br/>Next to Ganpati Mandir,<br/>Bhiwandi – 421308</strong></div></div>
                <div className="hours">
                  <div className="hours-title"><Clock size={18}/> Opening Hours</div>
                  <div><span>Monday – Friday</span><b>11:00 AM – 8:00 PM</b></div>
                  <div><span>Saturday</span><b>11:00 AM – 4:00 PM</b></div>
                  <div><span>Sunday</span><b className="closed">Closed</b></div>
                </div>
              </div>
              <div className="map-card">
                <div className="map-overlay">
                  <div className="pin"><MapPin/></div>
                  <span>FULL STOP</span>
                  <small>182 Prabhu Alley, Mandai</small>
                  <a href={maps} target="_blank" rel="noreferrer">Open in Google Maps <ArrowRight size={15}/></a>
                </div>
                <iframe title="FULL STOP location" src="https://www.google.com/maps?q=19.3008207,73.0560904&z=17&output=embed" loading="lazy"></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <div className="footer-brand"><img src={logo} alt="FULL STOP"/><div><strong>FULL STOP</strong><span>Mobile & Digital Services</span></div></div>
          <p>© {new Date().getFullYear()} FULL STOP. All rights reserved.</p>
          <div className="creator-credit">
            Website created by <strong>Sumit Agarwal</strong>
            <a href="tel:+917666911191">76669 11191</a>
          </div>
          <div className="footer-links"><a href={`tel:+91${phone}`}>Call</a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></div>
        </div>
      </footer>
      <a className="floating-wa" href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp FULL STOP">WA</a>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App/>);
