
import { Experience, Education, Project, Certificate, Skill } from "./types";

export const experiences: Experience[] = [
  {
    title: "AutoCAD ENGINEER",
    company: "Emerson",
    location: "Petaling Jaya, Selangor",
    period: "Feb 2025 - Present",
    type: "Freelance",
    description: [
      "Created detailed electrical loop drawings using AutoCAD under the guidance of a Senior Drafter to ensure accurate documentation and minimize wiring errors.",
      "Developed and updated wiring diagrams by interpreting engineering specifications to improve system assembly and troubleshooting efficiency.",
      "Reviewed and revised electrical loop drawings to ensure compliance with industry standards, reducing potential field errors.",
      "Collaborated with the Senior Drafter to optimize design processes and enhance the clarity of electrical diagrams for stakeholders.",
      "Prepared final project documentation by consolidating drawings and revisions to ensure ease of future system maintenance.",
      "Assisted in resolving design issues during project execution to minimize delays through quick design adjustments.",
      "Managed drawing version control and organization to ensure easy access to updated diagrams and enhance project traceability."
    ]
  },
  {
    title: "PART TIME BARISTA",
    company: "Starbucks",
    location: "Petaling Jaya, Selangor",
    period: "Dec 2021 - Present",
    description: [
      "Educated customers on coffee brewing and products through personalized service, leading to increased upselling success and customer loyalty.",
      "Managed inventory by monitoring and restocking supplies, ensuring product availability and smooth operations.",
      "Delivered exceptional service by promptly addressing customer needs and managing orders, enhancing customer satisfaction.",
      "Demonstrated time management by completing all daily tasks efficiently, contributing to overall operational success."
    ]
  },
  {
    title: "SOFTWARE ENGINEER & TESTING",
    company: "Petronas Digital",
    location: "Wilayah Persekutuan, Kuala Lumpur",
    period: "July 2023 - April 2024",
    type: "Internship",
    description: [
      "Created detailed test plans and cases for user acceptance testing by collaborating with coworker and business analyst, ensuring software met customer requirements and improved reliability.",
      "Documented best practices and streamlined procedures for software testing, leading to greater accuracy and defect reduction.",
      "Developed backend services using Node.js and built frontend interfaces with Angular, accelerating production deployment.",
      "Supported the development and testing of new software applications by coordinating with cross-functional teams, ensuring a smooth transition to production."
    ]
  },
  {
    title: "PART TIME DESSERT CREW",
    company: "Snowflakes Sunway Pyramid",
    location: "Petaling Jaya, Selangor",
    period: "Jan 2019 - Dec 2021",
    description: [
      "Prepared and served desserts by following SOPs, ensuring consistent quality and timely service.",
      "Assisted in training new team members by demonstrating best practices, promoting efficiency and teamwork.",
      "Boosted sales by applying upselling techniques and engaging with customers, leading to higher revenue.",
      "Maintained dining area cleanliness by adhering to 70-second rules, ensuring a positive dining experience.",
      "Supported the team leader by creating work schedules, optimizing staff coordination and coverage."
    ]
  },
  {
    title: "IT TECHNICIAN SUPPORT",
    company: "Serveconnect",
    location: "Cheras, Kuala Lumpur",
    period: "April 2021 - Oct 2021",
    description: [
      "Assembled PCs from scratch, partitioned storage based on standards, and updated BIOS configurations to enhance system performance and readiness.",
      "Installed the latest drivers and loaded specified software packages, ensuring all systems met operational requirements.",
      "Conducted quality control tests by running diagnostics and resolving hardware or software issues, ensuring proper functionality.",
      "Provided hands-on user training on equipment and software usage, increasing user confidence and reducing IT support needs.",
      "Maintained servers, firewalls, and CCTV systems through routine monitoring, ensuring system stability and data security.",
      "Troubleshot and resolved user-reported IT issues quickly, minimizing system downtimes and improving overall user satisfaction."
    ]
  },
  {
    title: "ELECTRICAL TECHNICIAN",
    company: "Lanefour",
    location: "Shah Alam, Selangor",
    period: "Dec 2020 - March 2021",
    description: [
      "Conducted wiring and soldering for mechanical and electrical assemblies by following technical diagrams, ensuring high-quality RTU box construction for TNB.",
      "Performed functional tests to identify potential issues early, enhancing the overall reliability of the final product.",
      "Followed strict safety protocols during assembly, mitigating risks and ensuring compliance with industry standards.",
      "Supported the team by troubleshooting assembly issues, reducing delays and optimizing production time."
    ]
  },
  {
    title: "ELECTRICAL TECHNICIAN",
    company: "Lanefour",
    location: "Shah Alam, Selangor",
    period: "July 2020 - Nov 2020",
    type: "INTERNSHIP",
    description: [
      "Conducted wiring and soldering for mechanical and electrical assemblies by following technical diagrams, ensuring high-quality RTU box construction for TNB.",
      "Performed functional tests to identify potential issues early, enhancing the overall reliability of the final product.",
      "Followed strict safety protocols during assembly, mitigating risks and ensuring compliance with industry standards.",
      "Supported the team by troubleshooting assembly issues, reducing delays and optimizing production time."
    ]
  }
];

export const education: Education[] = [
  {
    degree: "BACHELOR OF ELECTRONIC ENGINEERING",
    institution: "Universiti Tun Hussein Onn",
    location: "Batu Pahat, Johor",
    period: "Oct 2021 - Feb 2025",
    details: "Relevant coursework in electronic engineering and computer science."
  },
  {
    degree: "DIPLOMA IN ELECTRICAL ENGINEERING",
    institution: "Politeknik Merlimau Melaka",
    location: "Merlimau, Melaka",
    period: "Dec 2017 - Jun 2020",
    details: "Graduate with Honors."
  }
];

export const projects: Project[] = [
  {
    title: "Fusionsync: Bridging System For Seamless Data Synchronization And Template Integration",
    year: "2024",
    description: "Final Year Project focused on data synchronization and template integration systems.",
    skills: ["Node.js", "Database Design", "System Architecture", "API Integration"]
  },
  {
    title: "Integrated Internet of Things Water Management and Nutrient Delivery System for Cattle Feeding",
    year: "2024",
    description: "Integrated Design Project implementing IoT solutions for agricultural applications.",
    skills: ["IoT", "Sensors", "Embedded Systems", "Water Management"]
  }
];

export const certificates: Certificate[] = [
  {
    name: "Django Web Framework, Introduction to Databases for Back-End Development, Introduction to Front-End Development, Programming in Python, Version Control",
    issuer: "Meta (Coursera)",
    year: "2024"
  },
  {
    name: "JavaScript Essentials 1",
    issuer: "Cisco",
    year: "2024"
  },
  {
    name: "Global Korea Scholarship",
    issuer: "Korean government",
    year: "2024"
  }
];

export const skills: Skill[] = [
  { name: "Python", level: 8, category: "backend" },
  { name: "C#", level: 7, category: "backend" },
  { name: "JavaScript", level: 9, category: "frontend" },
  { name: "AngularJS", level: 8, category: "frontend" },
  { name: "HTML", level: 9, category: "frontend" },
  { name: "CSS", level: 8, category: "frontend" },
  { name: "Test Plan Creation", level: 9, category: "testing" },
  { name: "Manual Testing", level: 9, category: "testing" },
  { name: "Microsoft Azure", level: 7, category: "tools" },
  { name: "Git", level: 8, category: "tools" },
  { name: "MySQL", level: 8, category: "backend" },
  { name: "Software Troubleshooting", level: 9, category: "other" },
  { name: "Node.js", level: 8, category: "backend" },
  { name: "AutoCAD", level: 9, category: "tools" },
  { name: "C", level: 7, category: "backend" },
  { name: "Hardware Troubleshooting", level: 8, category: "hardware" }
];

export const personalInfo = {
  name: "AHMAD ISSHAHRUL ISSKANDAR BIN MOHD ZAMAN",
  email: "isshahrulisskandar@gmail.com",
  location: "Petaling Jaya, Selangor",
  summary: "Fresh graduate with a Bachelor's degree in Electronic Engineering from Universiti Tun Hussein Onn (UTHM), specializing in software development and quality assurance. Experienced in software testing, front-end and back-end development using Node.js and Angular, and establishing best practices for software reliability during an internship at Petronas Digital. Skilled in C programming, JavaScript, manual testing, data management, hardware troubleshooting, and AutoCAD. Certified from online courses, with hands-on experience in IoT projects and data synchronization systems. Eager to contribute to dynamic IT or engineering environments, focusing on innovation, technical excellence, and customer satisfaction."
};
