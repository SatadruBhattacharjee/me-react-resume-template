import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import HyperText from "@/components/ui/hyper-text";


export default function Education() {
  const education = [
    {
      degree: "Master of Computer Application (MCA)",
      institution: "SSN Engineering College, Anna University",
      location: "India",
      period: "2002 - 2005",
    },
    {
      degree: "BSC Electronics",
      institution: "Hindustan College, Madras University",
      location: "India",
      period: "1999 - 2002",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle><HyperText>Education</HyperText></CardTitle>
      </CardHeader>
      <CardContent>
        {education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold">{edu.degree}</h3>
            <p>{edu.institution}</p>
            <p className="text-sm text-muted-foreground">
              {edu.location}, {edu.period}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
