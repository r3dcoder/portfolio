import type { NextPage } from "next";
import Head from "next/head";
// import { Sidebar } from "@/components/layouts/sidebar";
import { TopContainer } from "@/components/container/top-container";
import { AboutMe } from "@/components/container/about-me";

import TopNavBar from "@/components/layouts/top-nav-bar";
import { Skills } from "@/components/container/skills";
import TopTitleContainer from "@/components/container/top-title-container";
import { Projects } from "@/components/container/projects";
import Reviews from "@/components/container/reviews";
import FeaturesContainer from "@/components/container/features-container";
import Footer from "@/components/layouts/footer";

const Home: NextPage = () => {

  const scroll = (id:string) => {
    console.log("id", id)
    const section = document.querySelector( id );
    section?.scrollIntoView( { behavior: 'smooth', block: 'center' } );
  };

  return (
    <div >
      <Head>
        <title>Mahfuz Hasan</title>
         <meta
          name="description"
          content="Mahfuz Hasan who is a creative Sofware Engineer "
        />
      </Head>

     <div className="w-full px-1 md:px-0">
     <TopNavBar onChangeScroll={(id:string)=>scroll(id)} />
     <TopTitleContainer />
      <div id="" className="w-full max-w-[1152px]  mx-auto ">
        <div id=" ">
          
          <div id="home"><AboutMe /></div>
          <div id="service"><Skills /></div>
          <div id="project"><Projects /></div>
          
          <div id="review"><Reviews /></div>
          <div id="feature"><FeaturesContainer/></div>
          
        </div>
      </div>
      <Footer/>
     </div>
    </div>
  );
};

export default Home;
