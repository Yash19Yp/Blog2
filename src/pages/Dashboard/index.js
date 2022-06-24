import React from "react";

import {
  Column,
  Row,
  Text,
  Line,
  Image,
  Stack,
  Button,
  List,
  Input,
} from "components";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();

  function handleNavigate6() {
    navigate("/blogpost1");
  }
  function handleNavigate7() {
    navigate("/contactus");
  }
  function handleNavigate13() {
    navigate("/podcasts");
  }

  return (
    <>
      <Column className="bg-gray_900 font-nunitosans items-center justify-end mx-[auto] lg:pt-[28px] xl:pt-[32px] pt-[37px] 3xl:pt-[44px] w-[100%]">
        <header className="mx-[auto] w-[77%]">
          <Row className="items-start justify-start w-[100%]">
            <Text className="font-black lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 w-[auto]">{`LAOS.`}</Text>
            <Column className="font-publicsans items-start justify-start xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:ml-[218px] xl:ml-[249px] ml-[281px] 3xl:ml-[337px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[36%]">
              <Column className="w-[100%]">
                <Row className="items-center justify-between w-[100%]">
                  <Text className="cursor-pointer hover:font-bold font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center text-deep_purple_A200 tracking-ls1 w-[auto]">{`Home`}</Text>
                  <Text
                    className="common-pointer cursor-pointer hover:font-bold font-bold lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-center hover:text-deep_purple_A200 tracking-ls1 w-[auto]"
                    onClick={handleNavigate13}
                  >{`Podcast`}</Text>
                  <Text
                    className="common-pointer cursor-pointer hover:font-bold font-bold lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-center hover:text-deep_purple_A200 tracking-ls1 w-[auto]"
                    onClick={handleNavigate6}
                  >{`Blog`}</Text>
                  <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-center hover:text-deep_purple_A200 tracking-ls1 w-[auto]">{`About`}</Text>
                  <Text
                    className="common-pointer cursor-pointer hover:font-bold font-bold lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-center hover:text-deep_purple_A200 tracking-ls1 w-[auto]"
                    onClick={handleNavigate7}
                  >{`Contact`}</Text>
                </Row>
              </Column>
              <Line className="bg-deep_purple_A200 h-[1px] xl:mt-[2px] lg:mt-[2px] mt-[3px] w-[13%]" />
            </Column>
            <Image
              src={"images/img_search21.svg"}
              className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[252px] xl:ml-[288px] ml-[324px] 3xl:ml-[389px] mt-[1px] object-contain lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
              alt="search21"
            />
          </Row>
        </header>
        <Stack className="lg:h-[259px] xl:h-[297px] h-[333px] 2xl:h-[334px] 3xl:h-[400px] mt-[100px] 3xl:mt-[120px] lg:mt-[77px] xl:mt-[88px] mx-[auto] w-[72%]">
          <Column className="absolute inset-x-[10%] inset-y-[0] items-center justify-start w-[80%]">
            <Text className="font-black font-merriweather leading-[normal] lg:text-[38px] xl:text-[44px] text-[50px] 3xl:text-[60px] text-center text-white_A700 w-[100%]">{`Share via writing and podcasts, hope you enjoy`}</Text>
            <Text className="font-normal font-publicsans lg:leading-[27px] xl:leading-[31px] leading-[35.00px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] mx-[auto] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 w-[77%]">{`Increase your knowledge by reading new things and I will share whatever I know for you, as long as I enjoy it`}</Text>
            <Row className="font-publicsans items-center justify-center lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] mx-[auto] w-[63%]">
              <Button className="bg-deep_purple_A200 font-normal not-italic lg:pb-[17px] xl:pb-[20px] pb-[23.06px] 2xl:pb-[23px] 3xl:pb-[27px] lg:pt-[18px] xl:pt-[21px] pt-[24.06px] 2xl:pt-[24px] 3xl:pt-[28px] rounded-radius50 shadow-bs lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 tracking-ls1 w-[43%]">{`Read More`}</Button>
              <Button className="border-2 border-deep_purple_A200 border-solid font-normal lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] not-italic lg:pb-[17px] xl:pb-[20px] pb-[23.06px] 2xl:pb-[23px] 3xl:pb-[27px] lg:pt-[18px] xl:pt-[21px] pt-[24.06px] 2xl:pt-[24px] 3xl:pt-[28px] rounded-radius50 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-deep_purple_A200 tracking-ls1 w-[52%]">{`Listen to Podcasts`}</Button>
            </Row>
          </Column>
          <Image
            src={"images/img_ornamen.svg"}
            className="absolute lg:h-[156px] xl:h-[179px] h-[200.24px] 2xl:h-[201px] 3xl:h-[241px] inset-x-[0] inset-y-[20%] object-cover w-[100%]"
            alt="ornamen"
          />
        </Stack>
        <Row className="font-publicsans items-start justify-start lg:mt-[126px] xl:mt-[144px] mt-[162px] 3xl:mt-[194px] mx-[auto] w-[77%]">
          <Image
            src={"images/img_logo.svg"}
            className="lg:h-[60px] xl:h-[68px] h-[76px] 2xl:h-[77px] 3xl:h-[92px] my-[1px] object-contain lg:w-[59px] xl:w-[67px] w-[76px] 3xl:w-[91px]"
            alt="logo"
          />
          <Column className="font-merriweather items-start justify-start lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] w-[31%]">
            <Text className="font-black xl:ml-[1px] lg:ml-[1px] ml-[2px] lg:text-[28px] xl:text-[32px] text-[36px] 3xl:text-[43px] text-center text-white_A700 w-[auto]">{`Latest Podcasts`}</Text>
            <Column className="font-publicsans lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
              <Text className="font-normal mx-[auto] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 tracking-ls1 w-[auto]">{`Get started on latest episodes`}</Text>
            </Column>
          </Column>
          <Text className="font-bold lg:ml-[441px] xl:ml-[504px] ml-[567px] 3xl:ml-[680px] lg:mt-[48px] xl:mt-[55px] mt-[62px] 3xl:mt-[74px] opacity-op5 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left text-white_A700 tracking-ls1 w-[auto]">{`See all podcasts`}</Text>
        </Row>
        <List
          className="lg:gap-[17px] xl:gap-[19px] gap-[22px] 3xl:gap-[26px] grid grid-cols-4 min-h-[auto] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] mx-[auto] w-[77%]"
          orientation="horizontal"
        >
          <Column className="bg-white_A700 items-start justify-start lg:py-[15px] xl:py-[17px] py-[20px] 3xl:py-[24px] rounded-radius5 shadow-bs1 w-[100%]">
            <Column className="items-center xl:pl-[12px] pl-[14px] 3xl:pl-[16px] xl:pr-[11px] pr-[13px] 3xl:pr-[15px] lg:px-[10px] w-[100%]">
              <Stack className="lg:h-[161px] xl:h-[185px] h-[207px] 2xl:h-[208px] 3xl:h-[249px] mx-[auto] w-[90%]">
                <Image
                  src={"images/img_rectangle9.png"}
                  className="absolute lg:h-[161px] xl:h-[185px] h-[207px] 2xl:h-[208px] 3xl:h-[249px] inset-[0] object-cover rounded-radius5 w-[100%]"
                  alt="Rectangle9"
                />
                <Image
                  src={"images/img_play.svg"}
                  className="absolute lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] inset-x-[0] mx-[auto] object-contain top-[30%] lg:w-[56px] xl:w-[64px] w-[72px] 3xl:w-[86px]"
                  alt="Play"
                />
              </Stack>
            </Column>
            <Text className="font-bold font-merriweather leading-[normal] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-indigo_900 text-left w-[90%]">{`The secrets of writing a good book`}</Text>
            <Text className="font-light font-publicsans lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-left w-[auto]">{`By LaosPodcast`}</Text>
          </Column>
          <Column className="bg-white_A700 items-start justify-start lg:py-[15px] xl:py-[17px] py-[20px] 3xl:py-[24px] rounded-radius5 shadow-bs1 w-[100%]">
            <Column className="items-center xl:pl-[12px] pl-[14px] 3xl:pl-[16px] xl:pr-[11px] pr-[13px] 3xl:pr-[15px] lg:px-[10px] w-[100%]">
              <Stack className="lg:h-[161px] xl:h-[185px] h-[207px] 2xl:h-[208px] 3xl:h-[249px] mx-[auto] w-[90%]">
                <Image
                  src={"images/img_rectangle9_1.png"}
                  className="absolute lg:h-[161px] xl:h-[185px] h-[207px] 2xl:h-[208px] 3xl:h-[249px] inset-[0] object-cover rounded-radius5 w-[100%]"
                  alt="Rectangle9"
                />
                <Image
                  src={"images/img_play_1.svg"}
                  className="absolute lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] inset-x-[0] mx-[auto] object-contain top-[30%] lg:w-[56px] xl:w-[64px] w-[72px] 3xl:w-[86px]"
                  alt="Play"
                />
              </Stack>
            </Column>
            <Text className="font-bold font-merriweather leading-[normal] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-indigo_900 text-left w-[90%]">{`The secrets of writing a good book`}</Text>
            <Text className="font-light font-publicsans lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-left w-[auto]">{`By LaosPodcast`}</Text>
          </Column>
          <Column className="bg-white_A700 items-start justify-start lg:py-[15px] xl:py-[17px] py-[20px] 3xl:py-[24px] rounded-radius5 shadow-bs1 w-[100%]">
            <Column className="items-center xl:pl-[12px] pl-[14px] 3xl:pl-[16px] xl:pr-[11px] pr-[13px] 3xl:pr-[15px] lg:px-[10px] w-[100%]">
              <Stack className="lg:h-[161px] xl:h-[185px] h-[207px] 2xl:h-[208px] 3xl:h-[249px] mx-[auto] w-[90%]">
                <Image
                  src={"images/img_rectangle9_2.png"}
                  className="absolute lg:h-[161px] xl:h-[185px] h-[207px] 2xl:h-[208px] 3xl:h-[249px] inset-[0] object-cover rounded-radius5 w-[100%]"
                  alt="Rectangle9"
                />
                <Image
                  src={"images/img_play_2.svg"}
                  className="absolute lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] inset-x-[0] mx-[auto] object-contain top-[30%] lg:w-[56px] xl:w-[64px] w-[72px] 3xl:w-[86px]"
                  alt="Play"
                />
              </Stack>
            </Column>
            <Text className="font-bold font-merriweather leading-[normal] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-indigo_900 text-left w-[90%]">{`The secrets of writing a good book`}</Text>
            <Text className="font-light font-publicsans lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-left w-[auto]">{`By LaosPodcast`}</Text>
          </Column>
          <Column className="bg-white_A700 items-start justify-start lg:py-[15px] xl:py-[17px] py-[20px] 3xl:py-[24px] rounded-radius5 shadow-bs1 w-[100%]">
            <Column className="items-center xl:pl-[12px] pl-[14px] 3xl:pl-[16px] xl:pr-[11px] pr-[13px] 3xl:pr-[15px] lg:px-[10px] w-[100%]">
              <Stack className="lg:h-[161px] xl:h-[185px] h-[207px] 2xl:h-[208px] 3xl:h-[249px] mx-[auto] w-[90%]">
                <Image
                  src={"images/img_rectangle9_3.png"}
                  className="absolute lg:h-[161px] xl:h-[185px] h-[207px] 2xl:h-[208px] 3xl:h-[249px] inset-[0] object-cover rounded-radius5 w-[100%]"
                  alt="Rectangle9"
                />
                <Image
                  src={"images/img_play_3.svg"}
                  className="absolute lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] inset-x-[0] mx-[auto] object-contain top-[30%] lg:w-[56px] xl:w-[64px] w-[72px] 3xl:w-[86px]"
                  alt="Play"
                />
              </Stack>
            </Column>
            <Text className="font-bold font-merriweather leading-[normal] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-indigo_900 text-left w-[90%]">{`The secrets of writing a good book`}</Text>
            <Text className="font-light font-publicsans lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-left w-[auto]">{`By LaosPodcast`}</Text>
          </Column>
        </List>
        <Row className="items-start justify-start mt-[100px] 3xl:mt-[120px] lg:mt-[77px] xl:mt-[88px] mx-[auto] w-[77%]">
          <Column className="items-start justify-start w-[66%]">
            <Column className="font-publicsans items-center xl:pl-[1px] lg:pl-[1px] pl-[2px] w-[100%]">
              <Row className="items-center justify-start w-[100%]">
                <Stack className="lg:h-[55px] xl:h-[63px] h-[70px] 2xl:h-[71px] 3xl:h-[85px] lg:w-[54px] xl:w-[62px] w-[70px] 3xl:w-[84px]">
                  <Image
                    src={"images/img_ellipse5.png"}
                    className="absolute lg:h-[55px] xl:h-[63px] h-[70px] 2xl:h-[71px] 3xl:h-[85px] inset-[0] object-cover rounded-radius501 w-[auto]"
                    alt="Ellipse5"
                  />
                  <div className="absolute bg-pink_300 lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] right-[6%] rounded-radius501 top-[6%] lg:w-[10px] xl:w-[12px] w-[14px] 3xl:w-[16px]"></div>
                </Stack>
                <Column className="items-start lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:my-[10px] xl:my-[12px] my-[14px] 3xl:my-[16px] w-[22%]">
                  <Column className="w-[100%]">
                    <Text className="font-semibold mx-[auto] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center text-white_A700 w-[auto]">{`By Jhone Leonardo`}</Text>
                  </Column>
                  <Text className="font-light lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[auto]">{`12 September, 2020`}</Text>
                </Column>
                <Text className="font-light lg:mb-[18px] xl:mb-[21px] mb-[24px] 3xl:mb-[28px] lg:ml-[273px] xl:ml-[313px] ml-[352px] 3xl:ml-[422px] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 text-center w-[auto]">
                  <span className="text-bluegray_300 font-publicsans">
                    <>{`Category `}</>
                  </span>
                  <span className="text-pink_300 text-[18px] font-merriweather font-black lg:text-[14px] xl:text-[16px] 3xl:text-[21px]">
                    <>{`Writing`}</>
                  </span>
                </Text>
              </Row>
            </Column>
            <Text className="font-bold font-merriweather italic leading-[normal] lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] lg:text-[37px] xl:text-[42px] text-[48px] 3xl:text-[57px] text-left text-white_A700 tracking-ls1 w-[100%]">{`Consistent way of working to train yourself`}</Text>
            <Column className="items-center lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] xl:pl-[1px] lg:pl-[1px] pl-[2px] w-[100%]">
              <Image
                src={"images/img_rectangle11.png"}
                className="lg:h-[304px] xl:h-[347px] h-[390px] 2xl:h-[391px] 3xl:h-[469px] object-contain rounded-radius5 w-[100%]"
                alt="Rectangle11"
              />
            </Column>
            <Text className="font-light font-publicsans lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[100%]">{`We all know that every person has his or her own desire to work, but do you know that we can actually be consistent in making works if we want, now in this article I want to invite all of you to learn to be consistent in creating.`}</Text>
            <Row className="font-publicsans items-center justify-start lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[65%]">
              <Image
                src={"images/img_group29.svg"}
                className="lg:h-[43px] xl:h-[49px] h-[55px] 2xl:h-[56px] 3xl:h-[67px] object-contain lg:w-[42px] xl:w-[48px] w-[55px] 3xl:w-[66px]"
                alt="Group29"
              />
              <Text className="font-light lg:mb-[14px] xl:mb-[16px] mb-[19px] 3xl:mb-[22px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[auto]">{`5 minutes ago`}</Text>
              <Image
                src={"images/img_group31.svg"}
                className="lg:h-[43px] xl:h-[49px] h-[55px] 2xl:h-[56px] 3xl:h-[67px] lg:ml-[38px] xl:ml-[44px] ml-[50px] 3xl:ml-[60px] object-contain lg:w-[42px] xl:w-[48px] w-[55px] 3xl:w-[66px]"
                alt="Group31"
              />
              <Text className="font-light lg:mb-[14px] xl:mb-[16px] mb-[19px] 3xl:mb-[22px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[auto]">{`12 Like`}</Text>
              <Row className="items-center justify-between lg:ml-[38px] xl:ml-[44px] ml-[50px] 3xl:ml-[60px] w-[22%]">
                <Image
                  src={"images/img_group30.svg"}
                  className="lg:h-[43px] xl:h-[49px] h-[55px] 2xl:h-[56px] 3xl:h-[67px] object-contain lg:w-[42px] xl:w-[48px] w-[55px] 3xl:w-[66px]"
                  alt="Group30"
                />
                <Text className="font-light lg:mb-[14px] xl:mb-[16px] mb-[19px] 3xl:mb-[22px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[auto]">{`Share`}</Text>
              </Row>
            </Row>
            <div className="3xl:mt-[24px] lg:mt-[15px] mt-[20px] w-[35%] xl:mt-[17px] input-wrap">
              <Image
                src={"images/img_vector.svg"}
                className="absolute z-[1] right-[29px] lg:right-[22px] xl:right-[25px] 3xl:right-[34px] my-[auto] inset-y-[0]"
                alt="Vector"
              />
              <Button className="bg-white_A700 font-bold font-publicsans lg:pb-[20px] xl:pb-[23px] pb-[26.55px] 2xl:pb-[26px] 3xl:pb-[31px] lg:pl-[21px] xl:pl-[24px] pl-[28px] 3xl:pl-[33px] pr-[108px] 3xl:pr-[129px] lg:pr-[84px] xl:pr-[96px] lg:pt-[21px] xl:pt-[24px] pt-[27.55px] 2xl:pt-[27px] 3xl:pt-[33px] rounded-radius5 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 tracking-ls1 w-[100%]">{`Continue Reading`}</Button>
            </div>
            <Column className="lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[100%]">
              <List
                className="gap-[0] min-h-[auto] w-[100%]"
                orientation="vertical"
              >
                <Column className="items-start justify-start lg:my-[19px] xl:my-[22px] my-[25px] 3xl:my-[30px] w-[100%]">
                  <Column className="font-publicsans items-center xl:pl-[1px] lg:pl-[1px] pl-[2px] w-[100%]">
                    <Row className="items-center justify-start w-[100%]">
                      <Stack className="lg:h-[55px] xl:h-[63px] h-[70px] 2xl:h-[71px] 3xl:h-[85px] lg:w-[54px] xl:w-[62px] w-[70px] 3xl:w-[84px]">
                        <Image
                          src={"images/img_ellipse5_1.png"}
                          className="absolute lg:h-[55px] xl:h-[63px] h-[70px] 2xl:h-[71px] 3xl:h-[85px] inset-[0] object-cover rounded-radius501 w-[auto]"
                          alt="Ellipse5"
                        />
                        <div className="absolute bg-pink_300 lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] right-[6%] rounded-radius501 top-[6%] lg:w-[10px] xl:w-[12px] w-[14px] 3xl:w-[16px]"></div>
                      </Stack>
                      <Column className="items-start lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:my-[10px] xl:my-[12px] my-[14px] 3xl:my-[16px] w-[22%]">
                        <Column className="w-[100%]">
                          <Text className="font-semibold mx-[auto] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center text-white_A700 w-[auto]">{`By Jhone Leonardo`}</Text>
                        </Column>
                        <Text className="font-light lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[auto]">{`12 September, 2020`}</Text>
                      </Column>
                      <Text className="font-light lg:mb-[18px] xl:mb-[21px] mb-[24px] 3xl:mb-[28px] lg:ml-[273px] xl:ml-[313px] ml-[352px] 3xl:ml-[422px] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 text-center w-[auto]">
                        <span className="text-bluegray_300 font-publicsans">
                          <>{`Category `}</>
                        </span>
                        <span className="text-pink_300 text-[18px] font-merriweather font-black lg:text-[14px] xl:text-[16px] 3xl:text-[21px]">
                          <>{`Writing`}</>
                        </span>
                      </Text>
                    </Row>
                  </Column>
                  <Text className="font-bold font-merriweather italic leading-[normal] lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] lg:text-[37px] xl:text-[42px] text-[48px] 3xl:text-[57px] text-left text-white_A700 tracking-ls1 w-[100%]">{`Consistent way of working to train yourself`}</Text>
                  <Column className="items-center lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] xl:pl-[1px] lg:pl-[1px] pl-[2px] w-[100%]">
                    <Image
                      src={"images/img_rectangle11_1.png"}
                      className="lg:h-[304px] xl:h-[347px] h-[390px] 2xl:h-[391px] 3xl:h-[469px] object-contain rounded-radius5 w-[100%]"
                      alt="Rectangle11"
                    />
                  </Column>
                  <Text className="font-light font-publicsans lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[100%]">{`We all know that every person has his or her own desire to work, but do you know that we can actually be consistent in making works if we want, now in this article I want to invite all of you to learn to be consistent in creating.`}</Text>
                  <Row className="font-publicsans items-center justify-start lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[65%]">
                    <Row className="items-center justify-start w-[33%]">
                      <Image
                        src={"images/img_group29_1.svg"}
                        className="lg:h-[43px] xl:h-[49px] h-[55px] 2xl:h-[56px] 3xl:h-[67px] object-contain lg:w-[42px] xl:w-[48px] w-[55px] 3xl:w-[66px]"
                        alt="Group29"
                      />
                      <Text className="font-light lg:mb-[14px] xl:mb-[16px] mb-[19px] 3xl:mb-[22px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[auto]">{`5 minutes ago`}</Text>
                    </Row>
                    <Row className="items-center justify-center lg:ml-[38px] xl:ml-[44px] ml-[50px] 3xl:ml-[60px] w-[23%]">
                      <Image
                        src={"images/img_group31_1.svg"}
                        className="lg:h-[43px] xl:h-[49px] h-[55px] 2xl:h-[56px] 3xl:h-[67px] object-contain lg:w-[42px] xl:w-[48px] w-[55px] 3xl:w-[66px]"
                        alt="Group31"
                      />
                      <Text className="font-light lg:mb-[14px] xl:mb-[16px] mb-[19px] 3xl:mb-[22px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[auto]">{`12 Like`}</Text>
                    </Row>
                    <Row className="items-center justify-between lg:ml-[38px] xl:ml-[44px] ml-[50px] 3xl:ml-[60px] w-[22%]">
                      <Image
                        src={"images/img_group30_1.svg"}
                        className="lg:h-[43px] xl:h-[49px] h-[55px] 2xl:h-[56px] 3xl:h-[67px] object-contain lg:w-[42px] xl:w-[48px] w-[55px] 3xl:w-[66px]"
                        alt="Group30"
                      />
                      <Text className="font-light lg:mb-[14px] xl:mb-[16px] mb-[19px] 3xl:mb-[22px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[auto]">{`Share`}</Text>
                    </Row>
                  </Row>
                  <div className="3xl:mt-[24px] lg:mt-[15px] mt-[20px] w-[35%] xl:mt-[17px] input-wrap">
                    <Image
                      src={"images/img_vector_1.svg"}
                      className="absolute z-[1] right-[29px] lg:right-[22px] xl:right-[25px] 3xl:right-[34px] my-[auto] inset-y-[0]"
                      alt="Vector"
                    />
                    <Button className="bg-white_A700 font-bold font-publicsans lg:pb-[20px] xl:pb-[23px] pb-[26.55px] 2xl:pb-[26px] 3xl:pb-[31px] lg:pl-[21px] xl:pl-[24px] pl-[28px] 3xl:pl-[33px] pr-[108px] 3xl:pr-[129px] lg:pr-[84px] xl:pr-[96px] lg:pt-[21px] xl:pt-[24px] pt-[27.55px] 2xl:pt-[27px] 3xl:pt-[33px] rounded-radius5 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 tracking-ls1 w-[100%]">{`Continue Reading`}</Button>
                  </div>
                </Column>
                <Column className="items-start justify-start lg:my-[19px] xl:my-[22px] my-[25px] 3xl:my-[30px] w-[100%]">
                  <Column className="font-publicsans items-center xl:pl-[1px] lg:pl-[1px] pl-[2px] w-[100%]">
                    <Row className="items-center justify-start w-[100%]">
                      <Stack className="lg:h-[55px] xl:h-[63px] h-[70px] 2xl:h-[71px] 3xl:h-[85px] lg:w-[54px] xl:w-[62px] w-[70px] 3xl:w-[84px]">
                        <Image
                          src={"images/img_ellipse5_2.png"}
                          className="absolute lg:h-[55px] xl:h-[63px] h-[70px] 2xl:h-[71px] 3xl:h-[85px] inset-[0] object-cover rounded-radius501 w-[auto]"
                          alt="Ellipse5"
                        />
                        <div className="absolute bg-pink_300 lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] right-[6%] rounded-radius501 top-[6%] lg:w-[10px] xl:w-[12px] w-[14px] 3xl:w-[16px]"></div>
                      </Stack>
                      <Column className="items-start lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:my-[10px] xl:my-[12px] my-[14px] 3xl:my-[16px] w-[22%]">
                        <Column className="w-[100%]">
                          <Text className="font-semibold mx-[auto] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center text-white_A700 w-[auto]">{`By Jhone Leonardo`}</Text>
                        </Column>
                        <Text className="font-light lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[auto]">{`12 September, 2020`}</Text>
                      </Column>
                      <Text className="font-light lg:mb-[18px] xl:mb-[21px] mb-[24px] 3xl:mb-[28px] lg:ml-[273px] xl:ml-[313px] ml-[352px] 3xl:ml-[422px] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 text-center w-[auto]">
                        <span className="text-bluegray_300 font-publicsans">
                          <>{`Category `}</>
                        </span>
                        <span className="text-pink_300 text-[18px] font-merriweather font-black lg:text-[14px] xl:text-[16px] 3xl:text-[21px]">
                          <>{`Writing`}</>
                        </span>
                      </Text>
                    </Row>
                  </Column>
                  <Text className="font-bold font-merriweather italic leading-[normal] lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] lg:text-[37px] xl:text-[42px] text-[48px] 3xl:text-[57px] text-left text-white_A700 tracking-ls1 w-[100%]">{`Consistent way of working to train yourself`}</Text>
                  <Column className="items-center lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] xl:pl-[1px] lg:pl-[1px] pl-[2px] w-[100%]">
                    <Image
                      src={"images/img_rectangle11_2.png"}
                      className="lg:h-[304px] xl:h-[347px] h-[390px] 2xl:h-[391px] 3xl:h-[469px] object-contain rounded-radius5 w-[100%]"
                      alt="Rectangle11"
                    />
                  </Column>
                  <Text className="font-light font-publicsans lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[100%]">{`We all know that every person has his or her own desire to work, but do you know that we can actually be consistent in making works if we want, now in this article I want to invite all of you to learn to be consistent in creating.`}</Text>
                  <Row className="font-publicsans items-center justify-start lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[65%]">
                    <Row className="items-center justify-start w-[33%]">
                      <Image
                        src={"images/img_group29_2.svg"}
                        className="lg:h-[43px] xl:h-[49px] h-[55px] 2xl:h-[56px] 3xl:h-[67px] object-contain lg:w-[42px] xl:w-[48px] w-[55px] 3xl:w-[66px]"
                        alt="Group29"
                      />
                      <Text className="font-light lg:mb-[14px] xl:mb-[16px] mb-[19px] 3xl:mb-[22px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[auto]">{`5 minutes ago`}</Text>
                    </Row>
                    <Row className="items-center justify-center lg:ml-[38px] xl:ml-[44px] ml-[50px] 3xl:ml-[60px] w-[23%]">
                      <Image
                        src={"images/img_group31_2.svg"}
                        className="lg:h-[43px] xl:h-[49px] h-[55px] 2xl:h-[56px] 3xl:h-[67px] object-contain lg:w-[42px] xl:w-[48px] w-[55px] 3xl:w-[66px]"
                        alt="Group31"
                      />
                      <Text className="font-light lg:mb-[14px] xl:mb-[16px] mb-[19px] 3xl:mb-[22px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[auto]">{`12 Like`}</Text>
                    </Row>
                    <Row className="items-center justify-between lg:ml-[38px] xl:ml-[44px] ml-[50px] 3xl:ml-[60px] w-[22%]">
                      <Image
                        src={"images/img_group30_2.svg"}
                        className="lg:h-[43px] xl:h-[49px] h-[55px] 2xl:h-[56px] 3xl:h-[67px] object-contain lg:w-[42px] xl:w-[48px] w-[55px] 3xl:w-[66px]"
                        alt="Group30"
                      />
                      <Text className="font-light lg:mb-[14px] xl:mb-[16px] mb-[19px] 3xl:mb-[22px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[auto]">{`Share`}</Text>
                    </Row>
                  </Row>
                  <div className="3xl:mt-[24px] lg:mt-[15px] mt-[20px] w-[35%] xl:mt-[17px] input-wrap">
                    <Image
                      src={"images/img_vector_2.svg"}
                      className="absolute z-[1] right-[29px] lg:right-[22px] xl:right-[25px] 3xl:right-[34px] my-[auto] inset-y-[0]"
                      alt="Vector"
                    />
                    <Button className="bg-white_A700 font-bold font-publicsans lg:pb-[20px] xl:pb-[23px] pb-[26.55px] 2xl:pb-[26px] 3xl:pb-[31px] lg:pl-[21px] xl:pl-[24px] pl-[28px] 3xl:pl-[33px] pr-[108px] 3xl:pr-[129px] lg:pr-[84px] xl:pr-[96px] lg:pt-[21px] xl:pt-[24px] pt-[27.55px] 2xl:pt-[27px] 3xl:pt-[33px] rounded-radius5 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 tracking-ls1 w-[100%]">{`Continue Reading`}</Button>
                  </div>
                </Column>
              </List>
            </Column>
            <Column className="font-publicsans items-end lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] lg:pl-[350px] xl:pl-[400px] pl-[450px] 3xl:pl-[540px] lg:pr-[53px] xl:pr-[61px] pr-[69px] 3xl:pr-[82px] w-[100%]">
              <Row className="items-center justify-end w-[29%]">
                <Column className="bg-deep_purple_A200 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center 3xl:pb-[10px] pb-[9px] pt-[10px] 3xl:pt-[12px] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] lg:py-[7px] xl:py-[8px] rounded-radius501 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]">
                  <Text className="font-normal mx-[auto] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`1`}</Text>
                </Column>
                <Column className="bg-white_A700 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] 3xl:pb-[10px] pb-[9px] lg:pl-[11px] xl:pl-[13px] pl-[15px] 3xl:pl-[18px] lg:pr-[10px] xl:pr-[12px] pr-[14px] 3xl:pr-[16px] pt-[10px] 3xl:pt-[12px] lg:py-[7px] xl:py-[8px] rounded-radius501 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]">
                  <Text className="font-normal mx-[auto] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-deep_purple_A200 text-left w-[auto]">{`2`}</Text>
                </Column>
                <Row className="items-start justify-between 3xl:mb-[10px] mb-[9px] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] mt-[10px] 3xl:mt-[12px] lg:my-[7px] xl:my-[8px] w-[34%]">
                  <Text className="font-light lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-deep_purple_A200 text-left w-[auto]">{`Next`}</Text>
                  <Image
                    src={"images/img_arrowpointing.svg"}
                    className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] xl:mt-[2px] lg:mt-[2px] mt-[3px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                    alt="arrowpointing"
                  />
                </Row>
              </Row>
            </Column>
          </Column>
          <Column className="items-start justify-start mb-[1122px] 3xl:mb-[1347px] lg:mb-[872px] xl:mb-[998px] lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] w-[32%]">
            <Column className="items-center pl-[1px] xl:pr-[1px] lg:pr-[1px] pr-[2px] w-[100%]">
              <Stack className="lg:h-[323px] xl:h-[370px] h-[415px] 2xl:h-[416px] 3xl:h-[499px] mx-[auto] w-[99%]">
                <Image
                  src={"images/img_rectangle10.png"}
                  className="absolute bottom-[4%] lg:h-[312px] xl:h-[356px] h-[400px] 2xl:h-[401px] 3xl:h-[481px] inset-x-[0] object-cover rounded-radius5 top-[0] w-[100%]"
                  alt="Rectangle10"
                />
                <div className="absolute bg-pink_300 bottom-[0] lg:h-[25px] xl:h-[28px] h-[31px] 2xl:h-[32px] 3xl:h-[38px] right-[7%] rounded-radius501 shadow-bs2 lg:w-[24px] xl:w-[27px] w-[31px] 3xl:w-[37px]"></div>
              </Stack>
            </Column>
            <Text className="font-bold font-merriweather ml-[1px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-left text-white_A700 w-[auto]">{`Jhone Leonardo`}</Text>
            <Text className="font-medium font-publicsans lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_300 text-center w-[auto]">{`Podcaster & Blogger`}</Text>
            <Text className="font-light font-publicsans lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[100%]">{`I want to share knowledge in my own style. I have been working on various things that I think I really need to share with you all. I am a jhone podcaster and blogger`}</Text>
            <Column className="font-merriweather items-start justify-start ml-[1px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[55%]">
              <Text className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`Follow Me On`}</Text>
              <Column className="font-publicsans lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                <Column className="items-start justify-start w-[100%]">
                  <Column className="w-[100%]">
                    <Row className="items-start justify-evenly w-[100%]">
                      <Image
                        src={"images/img_email1.svg"}
                        className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                        alt="email1"
                      />
                      <Text className="font-light lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] mt-[1px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_300 text-left w-[auto]">{`Hellojhone@gmail.com`}</Text>
                    </Row>
                  </Column>
                  <Row className="items-start justify-start lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[77%]">
                    <Image
                      src={"images/img_instagram21.svg"}
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                      alt="instagram21"
                    />
                    <Text className="font-light lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] mt-[1px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_300 text-center w-[auto]">{`@Johoe_Podcast`}</Text>
                  </Row>
                  <Row className="items-start justify-start lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[77%]">
                    <Image
                      src={"images/img_twitter21.svg"}
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                      alt="twitter21"
                    />
                    <Text className="font-light lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] mt-[1px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_300 text-center w-[auto]">{`@JohoeLeonardo`}</Text>
                  </Row>
                </Column>
              </Column>
            </Column>
            <Column className="font-merriweather items-center lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] pl-[1px] w-[100%]">
              <Column className="items-start justify-start w-[100%]">
                <Text className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`Tranding Blog`}</Text>
                <Column className="lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                  <Stack className="lg:h-[156px] xl:h-[178px] h-[200px] 2xl:h-[201px] 3xl:h-[241px] rounded-radius5 w-[100%]">
                    <Image
                      src={"images/img_rectangle13.png"}
                      className="absolute lg:h-[156px] xl:h-[178px] h-[200px] 2xl:h-[201px] 3xl:h-[241px] inset-[0] object-cover rounded-radius5 w-[100%]"
                      alt="Rectangle13"
                    />
                    <Column className="absolute bg-gray_900_3f inset-[0] items-start justify-center lg:pb-[20px] xl:pb-[23px] pb-[26.32px] 2xl:pb-[26px] 3xl:pb-[31px] xl:pl-[36px] pl-[41px] 3xl:pl-[49px] xl:pr-[35px] pr-[40px] 3xl:pr-[48px] 3xl:pt-[117px] lg:pt-[76px] xl:pt-[87px] pt-[97.89px] 2xl:pt-[97px] lg:px-[31px] rounded-radius5 w-[100%]">
                      <Text className="font-bold font-merriweather italic leading-[normal] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[77%]">{`Consistent way of working to train yourself`}</Text>
                      <Text className="font-light font-publicsans mt-[10.53px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left text-white_A700 w-[auto]">{`5 minutes ago`}</Text>
                    </Column>
                  </Stack>
                  <List
                    className="gap-[0] min-h-[auto] lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="items-center justify-between my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] w-[100%]">
                      <Image
                        src={"images/img_rectangle14.png"}
                        className="3xl:h-[116px] lg:h-[75px] xl:h-[86px] h-[96px] 2xl:h-[97px] object-contain rounded-radius5 3xl:w-[115px] lg:w-[74px] xl:w-[85px] w-[96px]"
                        alt="Rectangle14"
                      />
                      <Column className="items-start lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[68%]">
                        <Text className="font-bold font-merriweather italic leading-[normal] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[100%]">{`Consistent way of working to train yourself`}</Text>
                        <Text className="font-light font-publicsans mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 text-left w-[auto]">{`5 minutes ago`}</Text>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] w-[100%]">
                      <Image
                        src={"images/img_rectangle14_1.png"}
                        className="3xl:h-[116px] lg:h-[75px] xl:h-[86px] h-[96px] 2xl:h-[97px] object-contain rounded-radius5 3xl:w-[115px] lg:w-[74px] xl:w-[85px] w-[96px]"
                        alt="Rectangle14"
                      />
                      <Column className="items-start lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[68%]">
                        <Text className="font-bold font-merriweather italic leading-[normal] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[100%]">{`Consistent way of working to train yourself`}</Text>
                        <Text className="font-light font-publicsans mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 text-left w-[auto]">{`5 minutes ago`}</Text>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] w-[100%]">
                      <Image
                        src={"images/img_rectangle14_2.png"}
                        className="3xl:h-[116px] lg:h-[75px] xl:h-[86px] h-[96px] 2xl:h-[97px] object-contain rounded-radius5 3xl:w-[115px] lg:w-[74px] xl:w-[85px] w-[96px]"
                        alt="Rectangle14"
                      />
                      <Column className="items-start lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[68%]">
                        <Text className="font-bold font-merriweather italic leading-[normal] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[100%]">{`Consistent way of working to train yourself`}</Text>
                        <Text className="font-light font-publicsans mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 text-left w-[auto]">{`5 minutes ago`}</Text>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] w-[100%]">
                      <Image
                        src={"images/img_rectangle14_3.png"}
                        className="3xl:h-[116px] lg:h-[75px] xl:h-[86px] h-[96px] 2xl:h-[97px] object-contain rounded-radius5 3xl:w-[115px] lg:w-[74px] xl:w-[85px] w-[96px]"
                        alt="Rectangle14"
                      />
                      <Column className="items-start lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[68%]">
                        <Text className="font-bold font-merriweather italic leading-[normal] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[100%]">{`Consistent way of working to train yourself`}</Text>
                        <Text className="font-light font-publicsans mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 text-left w-[auto]">{`5 minutes ago`}</Text>
                      </Column>
                    </Row>
                  </List>
                </Column>
              </Column>
              <Column className="items-start justify-start lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[100%]">
                <Text className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 tracking-ls1 w-[auto]">{`Categories`}</Text>
                <Column className="font-publicsans lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                  <Column className="w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Text className="font-light 3xl:mb-[10px] mb-[9px] mt-[10px] 3xl:mt-[12px] lg:my-[7px] xl:my-[8px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-left w-[auto]">{`Writing`}</Text>
                      <Column className="bg-bluegray_900 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center lg:ml-[192px] xl:ml-[220px] ml-[248px] 3xl:ml-[297px] 3xl:pb-[10px] pb-[9px] pt-[10px] 3xl:pt-[12px] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] lg:py-[7px] xl:py-[8px] rounded-radius501 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]">
                        <Text className="font-normal mx-[auto] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`1`}</Text>
                      </Column>
                    </Row>
                    <Line className="bg-bluegray_100 h-[0.5px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                    <Row className="items-center justify-between 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] mt-[9.5px] 2xl:mt-[9px] w-[100%]">
                      <Text className="font-light 3xl:mb-[10px] mb-[9px] mt-[10px] 3xl:mt-[12px] lg:my-[7px] xl:my-[8px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-left w-[auto]">{`Working`}</Text>
                      <Column className="bg-bluegray_900 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center lg:ml-[186px] xl:ml-[213px] ml-[240px] 3xl:ml-[288px] 3xl:pb-[10px] pb-[9px] pt-[10px] 3xl:pt-[12px] lg:px-[10px] xl:px-[12px] px-[14px] 3xl:px-[16px] lg:py-[7px] xl:py-[8px] rounded-radius501 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]">
                        <Text className="font-normal mx-[auto] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`5`}</Text>
                      </Column>
                    </Row>
                    <Line className="bg-bluegray_100 h-[0.5px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                    <Row className="items-center justify-between 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] mt-[9.5px] 2xl:mt-[9px] w-[100%]">
                      <Text className="font-light 3xl:mb-[10px] mb-[9px] mt-[10px] 3xl:mt-[12px] lg:my-[7px] xl:my-[8px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-left w-[auto]">{`Podcaster`}</Text>
                      <Column className="bg-bluegray_900 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center lg:ml-[175px] xl:ml-[200px] ml-[225px] 3xl:ml-[270px] 3xl:pb-[10px] pb-[9px] pt-[10px] 3xl:pt-[12px] lg:px-[10px] xl:px-[12px] px-[14px] 3xl:px-[16px] lg:py-[7px] xl:py-[8px] rounded-radius501 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]">
                        <Text className="font-normal mx-[auto] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`3`}</Text>
                      </Column>
                    </Row>
                  </Column>
                </Column>
              </Column>
            </Column>
          </Column>
        </Row>
        <Stack className="font-publicsans lg:h-[334px] xl:h-[381px] h-[428.18018px] 2xl:h-[429px] 3xl:h-[515px] lg:mt-[59px] xl:mt-[68px] mt-[77px] 3xl:mt-[92px] mx-[auto] w-[77%]">
          <Row className="absolute bg-gray_901 bottom-[9%] inset-x-[0] items-center justify-evenly lg:pb-[63px] xl:pb-[72px] pb-[82px] 3xl:pb-[98px] lg:pt-[64px] xl:pt-[73px] pt-[83px] 3xl:pt-[99px] lg:px-[44px] xl:px-[50px] px-[57px] 3xl:px-[68px] rounded-radius5 top-[5%] w-[100%]">
            <Column className="items-start w-[45%]">
              <Text className="font-light font-publicsans lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-deep_purple_A200 text-left w-[auto]">{`NEWSLETTER`}</Text>
              <Text className="font-black font-merriweather leading-[normal] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:text-[28px] xl:text-[32px] text-[36px] 3xl:text-[43px] text-left text-white_A700 w-[100%]">{`Subscribe to our website newsletter to receive news and updates.`}</Text>
              <Text className="font-light font-publicsans lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-left w-[auto]">{`Get special offers directly to your email every week!`}</Text>
            </Column>
            <Column className="items-start lg:mb-[41px] xl:mb-[47px] mb-[53px] 3xl:mb-[63px] lg:ml-[41px] xl:ml-[47px] ml-[53px] 3xl:ml-[63px] w-[39%]">
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-deep_purple_A200 border-solid font-bold lg:pb-[20px] xl:pb-[23px] pb-[26.55px] 2xl:pb-[26px] 3xl:pb-[31px] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:pt-[21px] xl:pt-[24px] pt-[27.55px] 2xl:pt-[27px] 3xl:pt-[33px] rounded-radius5 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] placeholder:text-deep_purple_A200 text-deep_purple_A200 text-left w-[100%]"
                name="field"
                placeholder={`Your Email`}
              ></Input>
              <Button className="bg-deep_purple_A200 font-semibold lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:py-[15px] xl:py-[17px] py-[19.55px] 2xl:py-[19px] 3xl:py-[23px] rounded-radius5 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center text-white_A700 w-[31%]">{`Subscribe`}</Button>
            </Column>
          </Row>
          <Image
            src={"images/img_group86.svg"}
            className="absolute bottom-[0] h-[105.18px] 2xl:h-[106px] 3xl:h-[127px] lg:h-[82px] xl:h-[94px] object-contain right-[11%] w-[105.18px] 2xl:w-[105px] 3xl:w-[126px] lg:w-[81px] xl:w-[93px]"
            alt="Group86"
          />
          <div className="absolute bg-orange_500 lg:h-[35px] xl:h-[41px] h-[45px] 2xl:h-[46px] 3xl:h-[55px] left-[41%] rounded-radius501 shadow-bs3 top-[0] lg:w-[35px] xl:w-[40px] w-[45px] 3xl:w-[54px]"></div>
        </Stack>
        <footer className="3xl:mt-[109px] lg:mt-[70px] xl:mt-[80px] mt-[90.82px] 2xl:mt-[90px] w-[100%]">
          <Column className="bg-gray_901 items-center justify-end lg:pb-[27px] xl:pb-[31px] pb-[35px] 3xl:pb-[42px] lg:pl-[129px] xl:pl-[147px] pl-[166px] 3xl:pl-[199px] lg:pr-[128px] xl:pr-[146px] pr-[165px] 3xl:pr-[198px] lg:pt-[47px] xl:pt-[54px] pt-[61px] 3xl:pt-[73px] w-[100%]">
            <Row className="font-merriweather items-center justify-between mx-[auto] w-[77%]">
              <Column className="items-start w-[15%]">
                <Text className="font-black lg:text-[28px] xl:text-[32px] text-[36px] 3xl:text-[43px] text-gray_200 text-left w-[auto]">{`Laos`}</Text>
                <Column className="font-publicsans lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                  <Row className="items-start justify-start w-[100%]">
                    <Image
                      src={"images/img_heart31.svg"}
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mb-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                      alt="heart31"
                    />
                    <Text className="font-medium ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`Build with heart`}</Text>
                  </Row>
                </Column>
              </Column>
              <Row className="font-publicsans items-center justify-center lg:ml-[138px] xl:ml-[158px] ml-[178px] 3xl:ml-[213px] lg:my-[19px] xl:my-[22px] my-[25px] 3xl:my-[30px] w-[43%]">
                <Text className="font-light lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`Home`}</Text>
                <Text className="font-light lg:ml-[38px] xl:ml-[44px] ml-[50px] 3xl:ml-[60px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`Podcast`}</Text>
                <Text className="font-light lg:ml-[38px] xl:ml-[44px] ml-[50px] 3xl:ml-[60px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`Blog`}</Text>
                <Text className="font-light lg:ml-[38px] xl:ml-[44px] ml-[50px] 3xl:ml-[60px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`About`}</Text>
                <Text className="font-light lg:ml-[38px] xl:ml-[44px] ml-[50px] 3xl:ml-[60px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`Contact`}</Text>
              </Row>
              <Column className="font-publicsans items-center xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[138px] xl:ml-[158px] ml-[178px] 3xl:ml-[213px] xl:mt-[2px] lg:mt-[2px] mt-[3px] w-[10%]">
                <Text className="font-bold mx-[auto] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center text-white_A700 w-[auto]">{`Follow Me on`}</Text>
                <Image
                  src={"images/img_group94.svg"}
                  className="lg:h-[20px] xl:h-[23px] h-[25px] 2xl:h-[26px] 3xl:h-[31px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] object-cover w-[100%]"
                  alt="Group94"
                />
              </Column>
            </Row>
            <Text className="font-light font-publicsans lg:mt-[50px] xl:mt-[57px] mt-[65px] 3xl:mt-[78px] mx-[auto] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left text-white_A700 w-[auto]">{`Powered by Majengkarya - Premium Theme`}</Text>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default DashboardPage;
