import Hero from "@/components/Hero";
import Header from "../components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Tips from "@/components/Tips";
import BookAppointment from "@/components/BookAppointment";



export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Tips />
      <BookAppointment />
    </>
  );
}
