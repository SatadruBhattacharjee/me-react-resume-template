import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn, FadeInStagger } from "./Animations";
import HyperText from "@/components/ui/hyper-text";

export default function Skills() {
  const skillCategories = [
    {
      category: "MERN Stack App Development",
      skills: [
        "Next.js",
        "NestJs",
        "TypeScript",
        "AWS",
        "Node.js",
        "Express",
        "Angular.js",
        "React",
        "Redux",
        "MVVM Framework",
        "MongoDB",
        "PostgreSQL",
      ],
    },
    {
      category: "TV Apps, Set-top box App Development",
      skills: [
        "HLS Streaming",
        "Video Playback",
        "DRM",
        "STB Automation Tester",
        "ARRIS SDK",
      ],
    },
    {
      category: "Mobile App Development",
      skills: ["React Native", "Android", "Ionic Framework", "Core Java"],
    },
    {
      category: "CI/CD and Testing",
      skills: [
        "Docker",
        "Webpack",
        "Git Flow",
        "BitBucket Pipelines",
        "Jenkins",
        "TDD",
        "Jest",
        "Playwright",
        "Python Scripting",
        "Stb Tester",
      ],
    },
    {
      category: "Design and Project Management Tools",
      skills: ["Figma", "Jira", "Excel", "Agile", "Extreme pair programming"],
    },
    {
      category: "Analytics",
      skills: [
        "Hotjar",
        "Kochava",
        "Kameleoon",
        "Datadog",
        "Google Analytics",
        "Google Optimize",
        "Mixpanel",
        "Grafana Dashboard",
        "Youbora Video Analytics",
      ],
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <HyperText startOnView={true}>Skills</HyperText>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <FadeInStagger>
          {skillCategories.map((category, index) => (
            <FadeIn key={index}>
              <div className="mb-4">
                <h3 className="font-semibold mb-2">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </CardContent>
    </Card>
  );
}
