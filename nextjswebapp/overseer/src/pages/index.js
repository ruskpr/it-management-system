import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroHome from "../components/landingpage/HeroHome";
import FeaturesBlocks from "../components/landingpage/FeaturesBlocks";
import Testimonials from "../components/landingpage/Testimonials";
import Newsletter from "../components/landingpage/Newsletter";
import Banner from "../components/landingpage/Banner";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroHome />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />
      </main>

      <Banner />

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

// <Button rounded primary noBorder>
//             <Link href="/auth/signup">Sign up</Link>
//           </Button>
//           <Button rounded secondary noBorder>
//             <Link href="/auth/login">Login</Link>
//           </Button>
