/*
This is the full HTML/CSS portfolio ready to upload to GitHub Pages.

Folder structure inside the zip:
portfolio_zip/
├─ index.html
├─ style.css
└─ images/
    └─ placeholder.png

After downloading, unzip and upload all files to your repo HamzaB12.github.io
*/

// ------------------- index.html -------------------
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Hamza Bukhari | Portfolio</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<header>
  <h1>Hamza Bukhari</h1>
  <h2>Tech Consultant & Data Analyst</h2>
  <p>Passionate about digital innovation, analytics, and AI-driven solutions.</p>
  <p>
    <a href="https://github.com/HamzaB12" target="_blank">GitHub</a> | 
    <a href="https://www.linkedin.com/in/hamza-bukhari" target="_blank">LinkedIn</a> | 
    <a href="Hamza_CV.pdf" target="_blank">CV</a>
  </p>
</header>

<section id="projects">
  <h2>Projects</h2>
  <div class="card">
    <img src="images/placeholder.png" alt="Project" />
    <h3>Secure Payment Web App</h3>
    <p>Full-stack Django payment simulation</p>
    <p><strong>Tools:</strong> Django, Python, MySQL, HTML/CSS</p>
    <p><strong>Outcome:</strong> Designed UI & authentication; improved workflow by 25%</p>
  </div>

  <div class="card">
    <img src="images/placeholder.png" alt="Project" />
    <h3>Data Analytics Capstone</h3>
    <p>End-to-end data analysis and visualization</p>
    <p><strong>Tools:</strong> Excel, Tableau, Python (Pandas)</p>
    <p><strong>Outcome:</strong> Cleaned business data; created dashboards</p>
  </div>

  <div class="card">
    <img src="images/placeholder.png" alt="Project" />
    <h3>Face Alignment System</h3>
    <p>Facial landmark detection using CNNs</p>
    <p><strong>Tools:</strong> Python, OpenCV, CNN, SIFT</p>
    <p><strong>Outcome:</strong> Optimized feature extraction & model precision</p>
  </div>
</section>

<section id="experience">
  <h2>Experience</h2>
  <div class="card">
    <h3>Digital & Data Intern | Jacobs</h3>
    <p><strong>2025–Present</strong></p>
    <p>Geospatial innovation, data insights, workflow digitisation</p>
  </div>
  <div class="card">
    <h3>Operations & Tech Intern | Jasara</h3>
    <p><strong>2024</strong></p>
    <p>Applied AI tools for data management and reporting</p>
  </div>
  <div class="card">
    <h3>Volunteer | St. Catherine’s Hospice</h3>
    <p>Community engagement support</p>
  </div>
</section>

<section id="certifications">
  <h2>Certifications</h2>
  <ul>
    <li>Microsoft Excel – Coursera</li>
    <li>Data Analytics – Simplilearn</li>
    <li>Tableau Fundamentals – Simplilearn</li>
    <li>BCG Virtual Consulting Experience</li>
  </ul>
</section>

<section id="contact">
  <h2>Contact</h2>
  <p>Email: <a href="mailto:hamzab1302@gmail.com">hamzab1302@gmail.com</a></p>
  <p>LinkedIn: <a href="https://www.linkedin.com/in/hamza-bukhari" target="_blank">https://www.linkedin.com/in/hamza-bukhari</a></p>
</section>

</body>
</html>

// ------------------- style.css -------------------
body {
  font-family: Arial, sans-serif;
  margin: 0;
  background: #f9f9f9;
  color: #1a1a1a;
}
header {
  text-align: center;
  padding: 50px 20px;
  background: #ffffff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
h1, h2, h3 { color: #1a1a1a; }
.card {
  background: white;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  max-width: 800px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
img { width: 100%; border-radius: 8px; }
section { padding: 40px 20px; max-width: 1000px; margin: auto; }
a { color: #1a73e8; text-decoration: none; }