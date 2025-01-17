import { useState } from "react";
import Header from "./components/Header";
import Highlights from "./components/Highlights";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import { Button } from "@/components/ui/button";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { motion } from "framer-motion";
import { FadeIn, FadeInStagger } from "./components/Animations";
import { Dock, DockItem } from "./components/Dock";
import {
  Home,
  Pencil,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Sun,
} from "lucide-react";

export default function ResumePage() {
  const [activeTheme, setActiveTheme] = useState("light");
  const [visibleSections, setVisibleSections] = useState({
    highlights: true,
    summary: true,
    skills: true,
    workExperience: true,
    education: true,
  });


  const downloadPDF = () => {
    const input = document.getElementById("resume-content");
    if (input) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(imgData, "PNG", 0, 0);
        pdf.save("satadru-bhattacharjee-resume.pdf");
      });
    }
  };

  return (
      <div className="min-h-screen w-full bg-gradient-to-br from-gray-500/20 to-indigo-500/20 relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-repeat-pattern" />
        <Dock>
          <DockItem>
            <Button variant="ghost" size="icon" className="h-12 w-12">
              <Home className="h-6 w-6" />
            </Button>
          </DockItem>
          <DockItem>
            <Button variant="ghost" size="icon" className="h-12 w-12">
              <Pencil className="h-6 w-6" />
            </Button>
          </DockItem>
          <DockItem>
            <Button variant="ghost" size="icon" className="h-12 w-12">
              <Github className="h-6 w-6" />
            </Button>
          </DockItem>
          <DockItem>
            <Button variant="ghost" size="icon" className="h-12 w-12">
              <Linkedin className="h-6 w-6" />
            </Button>
          </DockItem>
          <DockItem>
            <Button variant="ghost" size="icon" className="h-12 w-12">
              <Twitter className="h-6 w-6" />
            </Button>
          </DockItem>
          <DockItem>
            <Button variant="ghost" size="icon" className="h-12 w-12">
              <Mail className="h-6 w-6" />
            </Button>
          </DockItem>
          <DockItem>
            <Button variant="ghost" size="icon" className="h-12 w-12">
              <Sun className="h-6 w-6" />
            </Button>
          </DockItem>
        </Dock>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto p-4 pt-24"
        >
          <div className="flex justify-between mb-4">
            <Button onClick={downloadPDF}>Download Resume</Button>
          </div>
          <FadeInStagger>
            <div id="resume-content" className="space-y-6">
              <FadeIn>
                <Header />
              </FadeIn>
              {visibleSections.highlights && (
                <FadeIn>
                  <div>
                    <Highlights />
                  </div>
                </FadeIn>
              )}
              {visibleSections.summary && (
                <FadeIn>
                  <div>
                    <Summary />
                  </div>
                </FadeIn>
              )}
              {visibleSections.skills && (
                <FadeIn>
                  <div>
                    <Skills />
                  </div>
                </FadeIn>
              )}
              {visibleSections.workExperience && (
                <FadeIn>
                  <div>
                    <WorkExperience />
                  </div>
                </FadeIn>
              )}
              {visibleSections.education && (
                <FadeIn>
                  <div>
                    <Education />
                  </div>
                </FadeIn>
              )}
            </div>
          </FadeInStagger>
        </motion.div>
      </div>
  );
}