import React from 'react';
import {
  BannerImage,
  GradientBg,
  LaptopH2PrelineH3Wrap,
  // MobileContainer,
} from 'components';
import {
  homeOceanBanner,
  globalDottedImgUrl,
  smileHandShakeImgUrl,
  globalImgUrl,
  esgImgUrl,
  professionImgUrl,
} from 'common/imgUrls';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

export default function Home() {
  const whyReason = [
    {
      title: 'AC Re always acts in the client’s best interest',
      content:
        'AC Re represents you rather than a single insurance company,\n you can trust you’ll be receiving unbiased information and recommendations.',
    },
    {
      title: 'We help you identify your risks and manage them',
      content: `By offering a customized insurance and risk management program,\n 
      where we design the policies, negotiate the terms with insurance companies\n  
      and help you find the most appropriate cover perfectly tailored to\n   
      your unique needs at fair prices.`,
    },
    {
      title: 'AC Re also supports you by giving you technical advice',
      content:
        'The technical advice can be very useful if you need to make a claim.',
    },
  ];
  const coreValue = [
    {
      title: 'Professionalism',
      description: 'Professional Service',
      img: professionImgUrl,
    },
    {
      title: 'Global Perspectives',
      description: 'Forward-Thinking',
      img: globalImgUrl,
    },
    {
      title: 'ESG',
      description: 'Sustainable Future',
      img: esgImgUrl,
    },
  ];

  return (
    <>
      <section
        className="flex w-screen h-96 flex-row overflow-hidden relative mb-2"
        id="banner-laptop-mobile"
      >
        <GradientBg background="rgba(255, 247, 237, 0.7)" />
        <BannerImage
          url={homeOceanBanner}
          classnames="bg-fixed"
          noHoverEffect
        />
        <div className="absolute flex items-center justify-center inset-0 px-4">
          <FaQuoteLeft
            color="#ffffff"
            fontSize="1.5rem"
            style={{
              marginRight: '1rem',
            }}
          />
          <h1>We bring industry knowledge, expertise, and insight for clients</h1>
          <FaQuoteRight
            color="#ffffff"
            fontSize="1.5rem"
            style={{
              marginLeft: '1rem',
            }}
          />
        </div>
      </section>
      <section
        className="grid grid-cols-1 md:grid-cols-5 w-screen pl-2"
        id="why-laptop"
      >
        <aside className="col-span-1 h-full overflow-hidden relative">
          <GradientBg background="linear-gradient(rgba(255, 247, 237, 0.9), transparent, transparent, transparent, rgba(255, 247, 237, 0.9))" />
          <BannerImage url={smileHandShakeImgUrl} />
          {/* <GradientBg
            classnames="left-0 right-[92%]"
            background="rgba(255, 247, 237, 0.7)"
          /> */}
        </aside>
        <div
          className="col-span-1 md:col-span-4 h-full flex flex-col items-center justify-center py-12"
          // style={{ background: 'azure' }}
        >
          <div className="h-5/6 w-11/12 flex flex-col justify-center space-y-10">
            <LaptopH2PrelineH3Wrap>Why AC Re</LaptopH2PrelineH3Wrap>
            <div className="text-secondary space-y-5">
              {whyReason.map(({ title, content }, i) => (
                <div key={title} className="flex space-x-10" data-aos="fade-up">
                  <div className="">
                    <div
                      className={`flex items-center justify-center order order-${
                        (i + 1) * 25
                      }`}
                    >
                      0{i + 1}
                    </div>
                  </div>
                  <div className="space-y-5">
                    <h2 className='leading-relaxed'>{title}</h2>
                    <h2 className="font-light text-secondary leading-relaxed">
                      {content}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        className="overflow-hidden relative pt-3 pb-12 px-8 md:px-16 space-y-6"
        id="core-value-laptop"
      >
        <LaptopH2PrelineH3Wrap>Our Core Value</LaptopH2PrelineH3Wrap>
        <div
          className="absolute -z-[1] top-2 -right-20 h-72 w-4/6"
          data-aos="fade-up"
        >
          <BannerImage
            url={globalDottedImgUrl}
            classnames="opacity-25"
            styles={{
              backgroundPosition: 'top',
            }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-12 md:py-12" data-aos="fade-up">
          {coreValue.map(({ title, description, img }) => (
              <div
                key={title}
                className="relative hover-scale-inner-img-effect"
              >
                <div className="absolute coreValueLine"></div>
                <div className="w-full h-52 overflow-hidden">
                  <BannerImage url={img} />
                </div>
                <div className="relative grow bg-primary-darker flex flex-col justify-evenly py-3">
                  <h2 className="text-white pl-3 leading-relaxed">{title}</h2>
                  <div className="flex justify-between items-center pr-3">
                    <h2 className="text-white pl-3 font-light leading-relaxed">{description}</h2>
                    <div className="coreArrow"></div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}
