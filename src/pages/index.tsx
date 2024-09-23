import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Header />
      <Layout>
        <Banner />
        <Features />
        <About />
        <Faq />
        <Contact />
      </Layout>
    </>
  );
}
