import LampDemo from "@/components/ui/lamp";
import Moto from "@/components/moto";
import DevServices from "@/components/DevServices";
import DevApproach from "@/components/DevApproach";
import Projects from "@/components/Projects";
import Customers from "@/components/Customers";
import Pricing from "@/components/Pricing";
import WebflowDevelopment from "@/components/WebFlowDev";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <LampDemo />
    <Moto />
    <DevServices />
    <DevApproach />
    <Projects />
    <Customers />
    <Pricing />
    <WebflowDevelopment />
    <CallToAction />
    <Footer />
    </>
  );
}
