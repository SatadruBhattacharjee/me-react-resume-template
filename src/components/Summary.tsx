import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import HyperText from "@/components/ui/hyper-text";

export default function Summary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle><HyperText>Summary</HyperText></CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Specializing in delivering scalable, client-focused solutions and
            consulting on complex technical architectures
          </li>
          <li>
            Technical expertise in managing and delivering complex multitenant,
            themeable, CMS-driven STC TV app
          </li>
          <li>Proactive Stakeholder Manager and Cost Optimization Expert</li>
          <li>
            Scaled and managed in-house and remote dev teams for complex
            multitenant e-commerce trade-in projects
          </li>
          <li>
            Technical expert in developing and delivering Secure OTT Apps for
            different platforms
          </li>
          <li>
            Pioneer in implementing MEAN Stack successfully for the first time
            in Airline Industry (Emirates Airline)
          </li>
          <li>
            Well-versed in Component-based UI using React.js and Angular
            framework
          </li>
          <li>
            Conducted Complex Technology Transformation projects for Dubai Govt.
            organizations
          </li>
          <li>
            Automation expert and well-versed in setting up CI/CD pipelines and
            production monitoring
          </li>
          <li>
            Experienced in working with aggressive Silicon Valley product
            start-ups
          </li>
          <li>Expert in Project Management with startup mindset</li>
          <li>Certified Scrum Product Owner® (CSPO®)</li>
          <li>
            Open source enthusiast with many highly rated projects hosted on
            GitHub
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
