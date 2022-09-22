import type { NextPage } from "next";
import Head from "next/head";
// import { Sidebar } from "@/components/layouts/sidebar";
import { TopContainer } from "@/components/container/top-container";
import { AboutMe } from "@/components/container/about-me";
 
import TopNavBar from "@/components/layouts/top-nav-bar";
 
const Home: NextPage = () => {
 
  const scroll = (id:string) => {
    const section = document.querySelector( 'id' );
    section?.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };

  return (
    <div className=" ">
      <Head>
        <title>Mahfuz Hasan</title>
        {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
        <meta
          name="description"
          content="Mahfuz Hasan who is a creative Sofware Engineer "
        />
      </Head>

       <div className=" overflow-hidden">
        {/* <TopNavBar/> */}
        {/* <TopTitleContainer /> */}
      </div>
      {/* <TopNavBar/> */}
      {/* <TopTitleContainer/> */}
      <div className="">
        {/* <div className="w-[220px] sm:w-48 md:w-0 h-screen bg-green-500 mr-6 md:mr-0">
         </div> */}
        <div className=" w-screen">
          <TopNavBar />
        {/* <TopTitleContainer /> */}
           <div id="" className="w-full max-w-[1152px]  mx-auto ">
            <div id=" ">
              <AboutMe />
            </div>
            {/* <div id="review">
              <Skills />
            </div>
            <div id="project">
              <Projects />
            </div>
            <div id="project">
              <Reviews />
            </div>
            <FeaturesContainer/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
