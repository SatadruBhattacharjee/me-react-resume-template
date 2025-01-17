import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function WorkExperience() {
  const experiences = [
    {
      title: "Web Development Manager",
      company: "STC - Saudi Telecom Company",
      location: "Riyad, KSA",
      period: "Nov 2022 - Current",
      responsibilities: [
        "Scaled a global team of 23 developers across multiple countries",
        "Technical domain expert in building highly scalable, modular user subscription flows",
        "Architected a Backend for Frontend (BFF) middleware",
        "Managing CMS-Driven STC TV Apps Across 8 Platforms",
      ],
    },
    {
      title: "Senior Engineering Manager, Tech Leadership",
      company: "Northladder",
      location: "Dubai, UAE",
      period: "Sep 2021 - Oct 2022",
      responsibilities: [
        "Released CMS-driven drag & drop react page builder",
        "End-2-End customer journey optimization",
        "Managing Microservice based API development team",
        "Hire, mentor, listen, grow and motivate dev teams across different technology domains",
        "Project planning, Feature prioritizations and Roadmap estimations with JIRA",
      ],
    },
    {
      title: "MERN Stack Development Manager",
      company: "Intigral Middle East (STC subsidiary Company)",
      location: "Dubai, UAE",
      period: "Sep 2018 - Sep 2021",
      responsibilities: [
        "Developed Jawwy TV Single Page Set-top Box App (SPA)",
        "Solution architect for an in-house Multitenant/Multiapps Layout and Carousel management platform",
        "Developed Angular.js Modular UI components",
        "Developed & Benchmarked Single code base multiplatform OTT App",
        "Developed Canvas-Based Angular and React Component",
        "Structuring, refactoring, prototyping, and profiling using Browser DevTools",
      ],
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Work Experience</CardTitle>
      </CardHeader>
      <CardContent>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-semibold">{exp.title}</h3>
            <p className="text-muted-foreground">
              {exp.company} - {exp.location}
            </p>
            <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
            <ul className="list-disc pl-5 space-y-1">
              {exp.responsibilities.map((resp, respIndex) => (
                <li key={respIndex}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
