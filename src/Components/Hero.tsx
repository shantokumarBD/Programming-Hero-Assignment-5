import bannerImg from '../assets/banner-stack.png'

const Hero = () => {
  return (
 <div className="max-w-7xl mx-auto px-4 py-10 lg:py-20 flex flex-col lg:flex-row items-center lg:gap-10">
     
      {/* left: Text Content */}
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-3xl lg:text-6xl font-extrabold mb-6">
          Build Your Ideal <br />
          <span className="text_brand_gradient">Development Stack</span>
        </h1>
        <p className="text-[#475569] text-base lg:text-lg lg:max-w-lg mb-5 lg:mb-10">
          Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex gap-4 justify-center lg:justify-start pt-2">
          <button className="btn bg_brand_gradient text-white border-none rounded-lg px-4 py-3">
            Explore Technologies
          </button>
          <button className="btn btn-outline rounded-lg px-4 py-3 text-[#475569] border-[#475569] ">
            Learn More
          </button>
        </div>
      </div>


      {/* right: Banner Image */}
      <div className="flex-1 flex justify-center">
        <img src={bannerImg} alt="Dev Stack Banner" className="w-full max-w-md" />
      </div>
    </div>
  )
}

export default Hero