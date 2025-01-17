import { Card, CardContent } from "@/components/ui/card";
import {
  LinkedinIcon,
  GithubIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "./Animations";
import BoxReveal from "@/components/ui/box-reveal";
import { AuroraText } from "@/components/ui/aurora-text";

export default function Header() {
  return (
    <Card>
      <CardContent className="p-6">
        <FadeIn delay={0.1}>
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <p className="text-[3rem] font-semibold">
              Satadru Bhattacharjee<span className="text-[#5046e6]">.</span>
            </p>
          </BoxReveal>
          {/* <h1 className="text-4xl font-bold mb-2">Satadru Bhattacharjee</h1> */}
        </FadeIn>
        {/* <FadeIn delay={0.2}> */}
          <AuroraText>
            <h2 className="text-2xl text-muted-foreground mb-4">
              Technical Senior Engineering Manager | MERN Stack Expert | Team
              Builder & Mentor | (CSPO®)
            </h2>
          </AuroraText>
        {/* </FadeIn> */}
        <FadeIn delay={0.3}>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center">
              <MapPinIcon className="w-5 h-5 mr-2" />
              Dubai, UAE
            </div>
            <div className="flex items-center">
              <MailIcon className="w-5 h-5 mr-2" />
              <a href="mailto:satadru.bhatt@gmail.com">
                satadru.bhatt@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <PhoneIcon className="w-5 h-5 mr-2" />
              +971 - (0) 566375356
            </div>
            <div className="flex items-center">
              <LinkedinIcon className="w-5 h-5 mr-2" />
              <a
                href="https://www.linkedin.com/in/satatwork"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <GithubIcon className="w-5 h-5 mr-2" />
              <a
                href="https://github.com/SatadruBhattacharjee"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </FadeIn>
      </CardContent>
    </Card>
  );
}
