import AboutUs from "./AboutUs";
function About() {
  return (
    <div>
      <div className="h-[50vh] w-[100%] bg-[linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url(src/assets/images/about-bg.jpg)] bg-no-repeat bg-cover">
        <div className="flex justify-center items-center container mx-auto pt-[10em] ">
          <h1 className="border p-[1em] px-[3em] bg-[hsl(0,3%,94%)] text-8xl font-bold">
            About Us
          </h1>
        </div>
      </div>
      <div className="container mx-auto">
        <h1 className="flex items-center justify-center mt-12 font-bold text-4xl">
          Who We Are
        </h1>
      </div>
      <div className="container mx-auto">
        <p className="text-xl">
          Clozzet, Kenya's no. 1 online retailer was established in May 2013
          with the aim and vision to become the one-stop shop for retail in
          Kenya with implementation of best practices both online and offline.
          Clozzet is the largest online retail store in Kenya. At inception we
          did an average delivery time of a week, today we do, on average,
          delivery in 1-5 days. Initially starting with 3 employees, Clozzet
          presently has a staff strength of 1000 young and entrepreneurial
          Kenyans including our 150 man strong customer service team available 7
          days a week. We do country-wide delivery. Clozzet set-up the 1st
          e-commerce academy in Kenya, the Clozzet Academy, building young
          entrepreneurs pioneering various aspects of businesses. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
          quia dolor sit amet, consectetur, adipisci velit,
        </p>
      </div>
      <div>
        {/* <AboutUs /> */}
      </div>
    </div>
  );
}
export default About;
