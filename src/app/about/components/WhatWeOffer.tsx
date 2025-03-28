import CommonHeading from "@/components/ui/CommonHeading";
import Image from "next/image";
import React from "react";

const WhatWeOffer = () => {
  return (
    <section className="padding-yx bg-gradient-to-t from-[#FFE5E5] via-[#FFEBD9] to-[#FFF5EE]">
      <div className="screen">
        {/* Container  */}

        <div className="space-y-12">
          <div className="mx-auto w-max">
            <CommonHeading title="What We Offer" />
          </div>
          {/* What We offer Card  */}
          <div className="flex justify-center flex-wrap gap-y-5 gap-x-10">
            <WhatWeOfferCard />
            <WhatWeOfferCard />
            <WhatWeOfferCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;

const WhatWeOfferCard = () => {
  return (
    <div className="bg-orange-400 relative w-max space-y-5 flex flex-col items-center justify-center px-10 py-12 rounded-3xl">
      <h6 className="text-2xl font-semibold text-white">
        Personal Development
      </h6>
      <div>
        <Image
          src={"/what-we-offer.png"}
          alt="image"
          width={360}
          height={1200}
        />
      </div>
      <p className="w-[32ch] text-center text-lg text-white font-semibold">
        Build confidence, set goals, and create a life you love.
      </p>
    </div>
  );
};
