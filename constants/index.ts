import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiNextdotjs } from "react-icons/si";

import carhubImg from "@/public/carhub.png";
import realtorImg from "@/public/realtor.png";
import ecommerceImg from "@/public/ecommerce.png";

// Navigation links
export const LINKS = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// External links
export const EXTRA_LINKS = {
  linkedin: "https://www.linkedin.com/in/dr-nirmala-c-r-71b38824/",
  github: "https://github.com/sanidhyy",
  resume: "https://resume.nesarn.in/",
  source_code: "https://github.com/teamvcaicreator/nesarn-portfolio",
  email: "sanidhya.verma12345@gmail.com",
} as const;

// Data for work experience
export const EXPERIENCES_DATA = [
  {
    title: "Founders Intern @VC AI Creator",
    description: "Contributed directly to high impact AI projects under the mentorship of the founder, gaining hands-on experience in AI automation, product development, and startup operations at VC AI Creator.",
    icon: React.createElement(LuGraduationCap),
    date: "2025 - Present",
  },
] as const;


// Data for skills
export const SKILLS_DATA = [
  "C",
  "Teaching",
  "C++",
  "Java",
  "Research",
  "Algorithms",
  "Artificial Intelligence",
  "Python",
  "Presentation",
] as const;

// Owner name
export const OWNER_NAME = "Nesar N";
// Add this at the top or where appropriate
