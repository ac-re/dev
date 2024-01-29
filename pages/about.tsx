import React from 'react';
import { BsCalendar3 } from 'react-icons/bs';
import { IoDiamondOutline, IoEarthOutline } from 'react-icons/io5';
import { BannerImage, LaptopH2PrelineH3Wrap, GradientBg } from 'components';
import {
  aboutBannerImgUrl,
  aboutTeamsImgUrl,
  aboutBestImgUrl,
  aboutfastGrowImgUrl,
  aboutSuccessfulImgUrl,
  aboutFounderImgUrl,
} from 'common/imgUrls';

export default function About() {
  const about = [
    {
      icon: <BsCalendar3 color="#A0DDFE" fontSize="3rem" />,
      title: 'Founded in 2021',
      content: <><span className='whitespace-nowrap'>AC Re Services Co., Ltd.</span> <span className='whitespace-nowrap'>(AC Re)</span> was founded in 2021 by <span className='whitespace-nowrap'>Solomon Chiu.</span></>,
    },{
      icon: <IoDiamondOutline color="#A0DDFE" fontSize="3rem" />,
      title: 'Innovative and Forward-Thinking',
      content: <><span className='whitespace-nowrap'>AC Re</span> is an innovative, forward-thinking <span className='whitespace-nowrap'>insurance broker</span> that takes pride in <span className='whitespace-nowrap'>risk management</span> and <span className='whitespace-nowrap'>insurance/reinsurance</span> solutions for <span className='md:whitespace-nowrap'>direct corporate clients and reinsureds.</span></>,
    },{
      icon: <IoEarthOutline color="#A0DDFE" fontSize="3rem" />,
      title: 'Global Markets',
      content: <>We offer a wide range of <span className='whitespace-nowrap'>specialist lines;</span> placed in the global, composite, and <span className='whitespace-nowrap'>Taiwan insurance markets.</span></>,
    }
  ]

  const teamReason = [
    'Long tenured and international market experienced management team.',
    'Provide excellent holistic solutions incorporating our mutual values which are professionalism, global perspectives, and ESG.',
    'Passionate about providing exceptional customer care and maintaining an impressive dedication to every client, regardless of your business size.',
  ];
  
  const founder = [
    'Solomon has more than 30 years of experience\nin the risk management and insurance industry.\nHis industry experience includes senior leadership\nroles at Evergreen Group, where he was\nalso a Board Director of the Evergreen Insurance Company,\nBermuda, responsible for all management and operations,\nand President of Central Re.',
    'Previously, Solomon was a senior management of ACR.\nHe led ACR’s rapid expansion in Greater China during a 10-year span\nin which it became one of the largest reinsurers in Asia,\nnegotiating and completing many reinsurance businesses.',
    'He has twice won Risk Manager of the Year 1994(Singapore) and 2002(Tokyo),\nChairman of Risk Management Society of Taiwan,\nand Licenced Master Mariner of Ocean Going ships.\nSolomon earned his EMBA from National Chengchi University.',
  ];

  const goal = [
    {
      title: 'Be The Fastest-Growing',
      img: aboutfastGrowImgUrl,
      style: {
        backgroundPositionX: '85%',
      },
    },
    {
      title: 'Be The Most Successful',
      img: aboutSuccessfulImgUrl,
      style: {
        backgroundPositionX: '54%',
      },
    },
    {
      title: 'Be The Best',
      img: aboutBestImgUrl,
      style: {
        backgroundPositionX: '70%',
      },
      noGradientBg: true,
    },
  ];

  return (
    <>
      <section className="w-full h-96 relative" id="about-banner">
        {/* <GradientBg background="linear-gradient(rgba(255, 255, 255, 0.9), transparent, transparent, rgba(255, 255, 255, 0.9))" /> */}
        <BannerImage url={aboutBannerImgUrl} />
        <div
          className="absolute inset-0 flex flex-col justify-center items-center space-y-5"
          data-aos="fade-up"
        >
          <h1>About AC Re</h1>
        </div>
      </section>
      <section
        className="w-full px-6 md:px-1 xl:px-20 py-20"
        id="about-intro"
        data-aos="fade-up"
      >
        <div className="grid grid-cols-1 md:grid-cols-7 gap-y-10 gap-x-1">
          {about.map((o, i) => (
            <div
              key={i}
              className={`flex flex-col space-y-6 items-center col-span-2 ${i === 1 && 'md:col-span-3'}`}
              id={o.title.split(' ').join('')}
              >
              {o.icon}
              <div className="flex flex-col space-y-3 items-center">
                <h2 className="text-primary-darkest">
                  {o.title}
                </h2>
                <h3 className="font-light text-secondary text-center leading-relaxed">
                  {o.content}
                </h3>
              </div>
          </div>
          ))}
        </div>
      </section>
      <section
        className="md:inline-flex hidden w-screen h-[35rem] flex-col overflow-hidden bg-amber-50"
        id="about-goal-md"
      >
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-5 relative">
            <div className="col-span-1 flex h-full relative bg-amber-100 justify-end items-center">
              <div className="absolute top-2 z-[2] flex justify-between items-center">
                <h1 className="text-right leading-relaxed">
                  Our goal
                  <br />
                  is to
                </h1>
                <div className="coreArrow2"></div>
              </div>
            </div>
            <div className='col-span-3 flex'>
              {goal.map(
                ({ title, img, style = {}, noGradientBg = false }, i) => (
                  <div
                    className="h-full flex grow hover-grow-effect relative overflow-hidden"
                    key={title}
                    id={`about-goal${i}`}
                  >
                    <BannerImage url={img} styles={style} />
                    {!noGradientBg && (
                      <GradientBg background="linear-gradient(rgba(255, 247, 237, 0.9), transparent, transparent, transparent, rgba(255, 247, 237, 0.9))" />
                    )}
                    <div className="absolute img-caption-bg-cover top-0 left-0 vertical w-16 bottom-[20%]">
                      <h3
                        className="absolute bottom-4 color-amber-200 top-4 left-4 text-secondary-DEFAULT text-vertical"
                        data-aos="fade-up"
                      >
                        {title}
                      </h3>
                    </div>
                    <div className="absolute img-caption-bg-cover left-0 right-0 top-0 pt-10 pb-9 horizontal overflow-hidden">
                      <h2 className="absolute text-primary-dark top-5 left-4 right-4 text-horizontal whitespace-nowrap">
                        {title}
                      </h2>
                    </div>
                  </div>
                ),
              )}
            </div>
          <div className="col-span-1 h-full flex flex-col items-center justify-center relative z-[1]">
            <h2 data-aos="fade-up">
              insurance broker
              <br />
              in Taiwan.
            </h2>
            <div
              id="triangleBg"
              className="absolute bg-amber-100 top-0 bottom-0 left-0 w-20 -z-[1]"
              style={{
                clipPath: 'polygon(0 0, 0% 100%, 100% 50%)',
              }}
            ></div>
          </div>
        </div>
      </section>
      <section
        className="md:hidden flex-col w-screen overflow-hidden bg-amber-50"
        id="about-goal-phone"
        data-aos="fade-up"
      >
        <div className="px-6 w-full col-span-1 py-8 relative justify-end items-center bg-amber-100"
          style={{
            clipPath: 'polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)',
          }}
        >
          <div className="z-[2] flex justify-center items-center">
            <h1 className="text-center leading-relaxed">
              Our goal is to
            </h1>
          </div>
        </div>
        <div className='grow flex-col px-3 pt-2'>
          {goal.map(
            ({ title, img, style = {}, noGradientBg = false }, i) => (
              <div
                className={`sm:h-80 h-60 flex grow hover-grow-effect relative overflow-hidden`}
                key={title}
                id={`about-goal${i}`}
              >
                <BannerImage url={img} styles={style} />
                {!noGradientBg && (
                  <GradientBg background="linear-gradient(rgba(255, 247, 237, 0.9), transparent, transparent, transparent, rgba(255, 247, 237, 0.9))" />
                )}
                <div className="absolute img-caption-bg-cover left-0 right-0 bottom-0 pt-10 pb-9 horizontal opacity-100 overflow-hidden">
                  <h2 className="text-center absolute text-primary-dark top-5 left-4 right-4 text-horizontal whitespace-nowrap">
                    {title}
                  </h2>
                </div>
              </div>
            ),
          )}
        </div>
        <div className="py-10 flex flex-col items-center justify-center relative z-[1]">
          <h2>
            insurance broker in Taiwan.
          </h2>
        </div>
      </section>
      <div className="h-5"></div>
      <section
        className="md:inline-flex w-screen flex-row hidden relative"
        id="about-team-md"
      >
        <div className="absolute inset-0 -z-[1]">
          <GradientBg
            classnames="w-full h-full"
            background="linear-gradient(rgba(255, 251, 235, 0.9), rgba(254, 249, 195, 0.5))"
          />
          <BannerImage
            url={aboutTeamsImgUrl}
            styles={{
              backgroundPositionY: 'bottom',
              backgroundPositionX: '45%',
            }}
          />
        </div>
        <aside
          className="w-2/12 h-full overflow-hidden relative flex justify-center items-center"
          // style={{
          //   clipPath: 'polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)'
          // }}
        ></aside>
        <div
          className="grow h-full flex flex-col items-center justify-center pl-22 py-28"
          style={{
            backgroundColor: 'rgba(255, 247, 237,0.8)',
            clipPath: 'polygon(5% 0, 100% 0%, 100% 100%, 5% 100%, 0% 50%)',
          }}
        >
          <div className="h-5/6 w-10/12 flex flex-col justify-center space-y-10">
            <LaptopH2PrelineH3Wrap>
              Highly Experienced Senior Management Team
            </LaptopH2PrelineH3Wrap>
            <div className="text-secondary space-y-6">
              {teamReason.map((content, i) => (
                <div
                  key={content}
                  className="flex space-x-16"
                  data-aos="fade-up"
                  id={`teamSection${i+1}`}
                >
                  <div className="w-full space-y-2">
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
        className="md:hidden w-screen overflow-hidden bg-amber-50"
        id="about-team-phone"
        data-aos="fade-up"
      >
        <div className="p-6 w-full col-span-1 flex h-[10%] relative justify-center items-center bg-amber-100"
          style={{
            clipPath: 'polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)',
          }}
        >
          <h1 className="leading-relaxed text-center">
              Highly Experienced Senior Management Team
            </h1>
        </div>
        <div className="sm:h-56 h-52 relative px-3 pt-3">
          <GradientBg
            classnames="w-full h-full"
            background="linear-gradient(rgba(255, 251, 235, 0.9), rgba(254, 249, 195, 0.3))"
          />
          <BannerImage
            url={aboutTeamsImgUrl}
            styles={{
              backgroundPositionY: 'bottom',
              backgroundPositionX: '45%',
            }}
          />
        </div>
        <div 
          className="text-secondary space-y-6 px-6 pt-6 pb-12 bg-amber-50"
          >
          {teamReason.map((content, i) => (
            <div
              key={content}
              className="space-x-16"
              id={`teamSection${i+1}`}
            >
              <div className="w-full space-y-2">
                <h2 className="font-light text-secondary leading-relaxed">
                  {content}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="h-5"></div>
      <section
        className="md:inline-flex w-screen h-[53rem] flex-row hidden"
        id="about-founder-md"
      >
        <aside
          className="w-[66rem] bg-amber-100 h-full overflow-hidden relative flex flex-col justify-center items-center space-y-10"
          style={{
            clipPath: 'polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)',
          }}
        >
          <div
            className="overflow-hidden rounded-lg w-36 h-36 z-[1] -mt-[10rem]"
            style={{
              clipPath: 'circle(50% at 50% 50%)',
            }}
            data-aos="fade-up"
            id="founderPhoto"
          >
            <BannerImage url={aboutFounderImgUrl} />
          </div>
          <div
            className="border-l-8 border-solid border-primary-darker pl-2"
            data-aos="fade-up"
          >
            <h2 className="text-primary-darker font-bold" id="founderName">Solomon Chiu</h2>
            <h3 className="text-primary-darker" id="founderTitle">Chairman</h3>
          </div>
        </aside>
        <div className="h-full grow flex flex-col items-center justify-center">
          <div className="flex flex-col justify-evenly space-y-5 px-16">
            <LaptopH2PrelineH3Wrap>
              Our Founder
            </LaptopH2PrelineH3Wrap>
            <div className="text-secondary space-y-6">
              {founder.map((content, i) => (
                <h2 
                  key={i} 
                  className="font-light text-secondary leading-relaxed indent-8" 
                  data-aos="fade-up"
                  id={`coreValueSection${i}`}
                >
                  {content}
                </h2>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        className="md:hidden w-screen overflow-hidden bg-amber-50"
        id="about-founder-phone"
        data-aos="fade-up"
      >
        <div className="p-6 w-full h-[10%] relative bg-amber-100"
          style={{
            clipPath: 'polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)',
          }}
        >
          <h1 className="leading-relaxed text-center">
            Our Founder
          </h1>
        </div>
        <div
          className="bg-amber-50 overflow-hidden relative space-y-3 flex flex-col justify-center items-center pt-6"
        >
          <div
              className="overflow-hidden rounded-lg w-36 h-36 z-[1]"
              style={{
                clipPath: 'circle(50% at 50% 50%)',
              }}
              id="founderPhoto"
            >
              <BannerImage url={aboutFounderImgUrl} />
            </div>
            <div
              className="border-l-8 border-solid border-primary-darker pl-2"
            >
              <h2 className="text-primary-darker font-bold" id="founderName">Solomon Chiu</h2>
              <h3 className="text-primary-darker" id="founderTitle">Chairman</h3>
            </div>
        </div>
        <div 
          className="text-secondary space-y-6 px-6 pt-6 pb-20 bg-amber-50"
          >
            {founder.map((content, i) => (
                <h2 
                  key={i} 
                  className="font-light text-secondary leading-relaxed indent-8" 
                  id={`coreValueSection${i}`}
                >
                  {content}
                </h2>
              ))}
          </div>
      </section>
    </>
  );
}
