import './App.css'

const impact = [
  { metric: '2', label: 'Enterprise Applications Led Technically' },
  { metric: 'Multi-team', label: 'Cross-Functional Delivery Collaboration' },
  { metric: '100%', label: 'Annual DR Recovery Validation' },
  { metric: 'Continuous', label: 'Infrastructure Cost Optimization' },
]

const competencies = [
  {
    title: 'Cloud & Platform Engineering',
    body: 'Built and operated enterprise applications on AWS and PCF/Linux with modern architecture and infrastructure patterns.',
  },
  {
    title: 'Application Security',
    body: 'Implemented WAF controls and remediated 10+ vulnerabilities while strengthening secure coding and hardening practices.',
  },
  {
    title: 'Disaster Recovery & Reliability',
    body: 'Designed and executed annual disaster recovery exercises with 100% recovery validation and zero-downtime release support.',
  },
  {
    title: 'Leadership & Collaboration',
    body: 'Delivered across cross-functional teams, ownership boundaries, and community initiatives with strong communication discipline.',
  },
]

const timeline = [
  {
    date: 'Jul 2023 - Present',
    title: 'Professional II - Software Development Engineering',
    org: 'Fiserv India Pvt. Ltd.',
    body: 'Leading technical delivery for 2 enterprise applications across cloud modernization, production operations, security remediation, and stakeholder execution.',
  },
  {
    date: '2023 - 2024',
    title: 'First Anniversary at Fiserv',
    org: 'Fiserv India Pvt. Ltd.',
    body: 'Delivered full-stack outcomes across React, GraphQL, Node.js, AWS, Jenkins, and Splunk while leading disaster recovery implementation and security improvements.',
  },
  {
    date: '2025 - 2026',
    title: 'Continuing Growth & Delivery',
    org: 'Fiserv',
    body: 'Modernized a serverless workload into a private AWS VPC architecture with ALB, EC2, NGINX, private AppSync/Lambda, and Route 53 for stronger security and isolation.',
  },
  {
    date: 'Jan 2023 - Jul 2023',
    title: 'Technology Intern',
    org: 'NatWest',
    body: 'Collaborated on banking systems and cloud infrastructure with hands-on fintech operations and platform exposure.',
  },
  {
    date: 'Jul 2022 - Sep 2022',
    title: 'Summer Intern - Java Development',
    org: 'Fiserv',
    body: 'Built foundational enterprise Java skills while learning financial systems and internal architecture principles.',
  },
]

const techStack = [
  { category: 'Languages', items: ['Java', 'JavaScript', 'SQL'] },
  { category: 'Frontend', items: ['React.js', 'Redux', 'React Router'] },
  { category: 'Backend', items: ['Node.js', 'Spring Boot', 'GraphQL', 'REST APIs'] },
  {
    category: 'AWS',
    items: ['EC2', 'Lambda', 'VPC', 'ALB', 'AppSync', 'Amplify', 'CloudWatch', 'Route 53', 'CloudFormation', 'WAF'],
  },
  { category: 'Security', items: ['OWASP Top 10', 'Vulnerability Remediation', 'WAF Controls', 'Secure Coding'] },
  { category: 'Tools', items: ['Git', 'GitLab', 'Jenkins', 'Splunk', 'Linux', 'RHEL'] },
]

const certifications = [
  'AWS Certified Solutions Architect - Associate (SAA-C03)',
  'AWS Certified Cloud Practitioner (CLF-C02)',
  'Microsoft Azure Fundamentals (AZ-900)',
  'Microsoft Azure AI Fundamentals (AI-900)',
]

const certificationVisuals = [
  { title: 'AWS SAA Certification', src: 'aws-saa.png' },
  { title: 'AWS Cloud Practitioner', src: 'AWS.PNG' },
  { title: 'Azure Fundamentals', src: 'AzureFundamentals.png' },
  { title: 'Azure AI Fundamentals', src: 'AzureAI.png' },
]

const articles = [
  {
    title: 'How To Design Flat Shading Graphics Using P5.js',
    url: 'https://www.geeksforgeeks.org/how-to-design-flat-shading-graphics-using-p5-js/',
    image: 'gfg.jpg',
  },
  {
    title: 'How To Design Phong Shading Graphics Using P5.js',
    url: 'https://www.geeksforgeeks.org/how-to-design-phong-shading-graphics-using-p5-js/',
    image: 'gfg.jpg',
  },
  {
    title: "Open Source Journey With GSSOC'21",
    url: 'https://cmelakkia.medium.com/my-opensource-contribution-journey-with-gssoc-d3f09f73b7a1',
    image: 'medium.jpg',
  },
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <a href="#home" className="brand">CM ELAKKIA</a>
        <nav>
          <a href="#about">About</a>
          <a href="#stack">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Cloud Software Engineer</p>
          <h1>Building secure full-stack cloud applications for fintech.</h1>
          <p>
            Software Engineer with 3 years of experience delivering enterprise fintech applications
            on AWS, with strength in React, Node.js, Java, GraphQL, and application security.
          </p>
          <div className="chip-row">
            <span>AWS</span>
            <span>React</span>
            <span>Node.js</span>
            <span>GraphQL</span>
            <span>Java</span>
            <span>Spring Boot</span>
            <span>OWASP</span>
          </div>
          <div className="cta-row">
            <a className="btn primary" href="#contact">Contact Me</a>
            <a className="btn ghost" href="#experience">View Experience</a>
          </div>
        </div>
        <div className="hero-card">
          <div className="orb orb-a"></div>
          <div className="orb orb-b"></div>
          <div className="portrait-wrap">
            <img
              src="elakkia_pic.jpg"
              alt="CM Elakkia profile"
              className="hero-portrait"
            />
          </div>
          <div className="id-tile">
            <h3>CM Elakkia</h3>
            <p>Enterprise Fintech Engineering</p>
          </div>
        </div>
      </section>

      <section id="about" className="about-grid section">
        <article className="panel">
          <p className="eyebrow">About Me</p>
          <h2>Professional Summary</h2>
          <p>
            Software Engineer with 3 years of experience building enterprise fintech applications on AWS.
            Proven ownership across full-stack cloud application delivery using React.js, Node.js, Java,
            Spring Boot, and GraphQL, while improving reliability, security, and cost efficiency.
          </p>
          <p>
            I lead end-to-end lifecycle execution including zero-downtime production deployments,
            infrastructure changes, certificate renewals, and annual disaster recovery exercises.
          </p>
          <p>
            Education: B.Tech Computer Science & Engineering, VIT-AP
            <br />
            CGPA: 8.7/10
          </p>
        </article>
      </section>

      <section className="section">
        <div className="section-title">
          <p className="eyebrow">Business Impact</p>
          <h2>Measurable Outcomes</h2>
        </div>
        <div className="impact-grid">
          {impact.map((item) => (
            <article key={item.label} className="card impact-card">
              <h3>{item.metric}</h3>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <p className="eyebrow">Professional Focus</p>
          <h2>Core Competencies</h2>
        </div>
        <div className="competency-grid">
          {competencies.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="stack" className="section">
        <div className="section-title">
          <p className="eyebrow">Technical Capabilities</p>
          <h2>Stack & Certifications</h2>
        </div>
        <div className="stack-grid">
          {techStack.map((group) => (
            <article key={group.category} className="card">
              <h3>{group.category}</h3>
              <div className="tag-wrap">
                {group.items.map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="cert-row">
          {certifications.map((cert) => (
            <span key={cert} className="cert-pill">{cert}</span>
          ))}
        </div>
        <div className="cert-gallery" aria-label="Certification visuals">
          {certificationVisuals.map((cert) => (
            <article key={cert.title} className="cert-card">
              <img src={cert.src} alt={cert.title} className="cert-image" />
              <h3>{cert.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section">
        <div className="section-title">
          <p className="eyebrow">Professional Experience</p>
          <h2>Career Highlights</h2>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <article key={item.title} className="timeline-item">
              <p className="date">{item.date}</p>
              <h3>{item.title}</h3>
              <h4>{item.org}</h4>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="blog" className="section">
        <div className="section-title">
          <p className="eyebrow">From Blog</p>
          <h2>Latest Articles</h2>
        </div>
        <div className="blog-grid">
          {articles.map((article) => (
            <article key={article.title} className="card blog-card">
              <img src={article.image} alt={article.title} className="blog-thumb" />
              <h3>{article.title}</h3>
              <a href={article.url} target="_blank" rel="noreferrer">Read More</a>
            </article>
          ))}
        </div>
      </section>

      <footer id="contact" className="footer">
        <h2>CM Elakkia</h2>
        <p>Chennai, India</p>
        <p>
          <a href="mailto:cmelakkia@gmail.com">cmelakkia@gmail.com</a>
          {' · '}
          <a href="tel:+916379228089">+91 6379228089</a>
        </p>
        <div className="socials">
          <a href="https://github.com/CMELAKKIA" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/elakkia-cm-972994201/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/cmelakkia/" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </footer>
    </div>
  )
}

export default App
