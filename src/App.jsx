import Faq from "./components/Faq";
import Final from "./components/Final";
import Footer from "./components/Footer";

export default function App() {
  let txt = `Relations and Functions ( Mathematics )`;
  return (
    <>
      <section className=" w-full h-screen bg-[#f8f9f8]">
        <Final />
      </section>
      <section className="w-full h-screen bg-[#f8f9f8]">
        <Footer />
        <Faq />
      </section>
    </>
  );
}
