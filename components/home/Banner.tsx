import { appLogo } from "../obj_paths/images";

function Banner() {
  return <div className="flex justify-between items-center mt-5 mx-4 bg-amber-100 px-10 py-10 md:py-0 shadow-lg hover:shadow-xl">
      <div className="space-y-5">
      <h2 className="text-6xl">
          <span className="underline decoration-4 decoration-yellow-400">Write</span>, Read, Share
      </h2>
      <h3 className="text-4xl">
          Let us know what you are thinking.
      </h3>
      </div>
      <img src={appLogo} alt="logo" className="hidden md:inline-flex h-80 lg:h-1/3" />
  </div>;
}

export default Banner;
