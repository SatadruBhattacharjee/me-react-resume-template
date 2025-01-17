import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import HyperText from "@/components/ui/hyper-text";

export default function Highlights() {
  return (
    <Card>
      <CardHeader>
        <CardTitle><HyperText>Highlights</HyperText></CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Over 18 years of hands-on experience in senior technical roles
          </li>
          <li>
            Deep understanding of large-scale Frontend, Mobile, and Backend
            application development
          </li>
          <li>
            Expertise in building, leading, and mentoring high-performing teams
          </li>
          <li>
            Skilled in delivering scalable, client-facing solutions across
            various industries
          </li>
          <li>
            Proficient in driving innovation and efficiency in web, native,
            RESTful, real-time, and cloud-based products
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
