import React from "react";

import {
  Column,
  Row,
  Text,
  Line,
  Image,
  Stack,
  Button,
  Grid,
} from "components";

const PodcastsPage = () => {
  return (
    <>
      <Column className="bg-gray_901 font-nunitosans items-start justify-end mx-[auto] lg:pt-[28px] xl:pt-[32px] pt-[37px] 3xl:pt-[44px] w-[100%]">
        <Column className="items-center w-[100%]">
          <header className="mx-[auto] w-[77%]">
            <Row className="items-start justify-start w-[100%]">
              <Text className="font-black lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 w-[auto]">{`LAOS.`}</Text>
              <Column className="font-publicsans items-start justify-start xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:ml-[218px] xl:ml-[249px] ml-[281px] 3xl:ml-[337px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[36%]">
                <Column className="w-[100%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Text className="cursor-pointer hover:font-bold font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center text-deep_purple_A200 tracking-ls1 w-[auto]">{`Home`}</Text>
                    <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-center hover:text-deep_purple_A200 tracking-ls1 w-[auto]">{`Podcast`}</Text>
                    <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-center hover:text-deep_purple_A200 tracking-ls1 w-[auto]">{`Blog`}</Text>
                    <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-center hover:text-deep_purple_A200 tracking-ls1 w-[auto]">{`About`}</Text>
                    <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-center hover:text-deep_purple_A200 tracking-ls1 w-[auto]">{`Contact`}</Text>
                  </Row>
                </Column>
                <Line className="bg-deep_purple_A200 h-[1px] xl:mt-[2px] lg:mt-[2px] mt-[3px] w-[13%]" />
              </Column>
              <Image
                src={"images/img_search21_3.svg"}
                className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[252px] xl:ml-[288px] ml-[324px] 3xl:ml-[389px] mt-[1px] object-contain lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                alt="search21"
              />
            </Row>
          </header>
          <Stack className="bg-gray_901 font-publicsans lg:h-[532px] xl:h-[609px] h-[684px] 2xl:h-[685px] 3xl:h-[822px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[100%]">
            <Image
              src={"images/img_maskgroup.svg"}
              className="absolute lg:h-[409px] xl:h-[468px] h-[525px] 2xl:h-[526px] 3xl:h-[631px] object-cover top-[0] w-[100%]"
              alt="MaskGroup"
            />
            <Row className="absolute inset-x-[0] items-center justify-start mx-[auto] top-[9%] w-[77%]">
              <Column className="items-start w-[57%]">
                <Button className="bg-white_A700_3f font-light font-publicsans xl:py-[5px] lg:py-[5px] py-[6.54px] 2xl:py-[6px] 3xl:py-[7px] rounded-radius5 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center text-white_A700 w-[13%]">{`Writer`}</Button>
                <Text className="font-bold font-merriweather italic leading-[normal] lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] lg:text-[28px] xl:text-[32px] text-[36px] 3xl:text-[43px] text-left text-white_A700 tracking-ls1 w-[100%]">{`Eps 3 : How to write a book properly and correctly by paying attention to various parts to support the story`}</Text>
                <Row className="font-publicsans items-center justify-start lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[37%]">
                  <Image
                    src={"images/img_ellipse5_5.png"}
                    className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] object-contain rounded-radius501 w-[auto]"
                    alt="Ellipse5"
                  />
                  <Column className="items-start lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] w-[68%]">
                    <Column className="w-[100%]">
                      <Text className="font-semibold mx-[auto] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center text-white_A700 tracking-ls1 w-[auto]">{`By Jhone Leonardo`}</Text>
                    </Column>
                    <Text className="font-light ml-[1px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[auto]">{`Podcaster & Blogger`}</Text>
                  </Column>
                </Row>
              </Column>
              <Column className="bg-white_A700_3f items-start xl:ml-[111px] ml-[125px] 3xl:ml-[150px] lg:ml-[97px] lg:my-[16px] xl:my-[18px] my-[21px] 3xl:my-[25px] lg:py-[33px] xl:py-[38px] py-[43px] 3xl:py-[51px] rounded-radius5 w-[31%]">
                <Text className="font-semibold leading-[normal] lg:ml-[25px] xl:ml-[29px] ml-[33px] 3xl:ml-[39px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-left text-white_A700 tracking-ls1 w-[81%]">{`Find and make it easy for yourself in listening to our podcasts on`}</Text>
                <Column className="items-center lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] lg:pl-[25px] xl:pl-[29px] pl-[33px] 3xl:pl-[39px] lg:pr-[24px] xl:pr-[28px] pr-[32px] 3xl:pr-[38px] w-[100%]">
                  <Image
                    src={"images/img_listpodcast.svg"}
                    className="lg:h-[41px] xl:h-[47px] h-[52px] 2xl:h-[53px] 3xl:h-[63px] mx-[auto] object-contain w-[81%]"
                    alt="listpodcast"
                  />
                </Column>
              </Column>
            </Row>
            <Row className="absolute bg-white_A700 bottom-[0] inset-x-[0] items-center justify-center mx-[auto] lg:pb-[16px] xl:pb-[18px] pb-[21px] 3xl:pb-[25px] lg:pl-[20px] xl:pl-[23px] pl-[26px] 3xl:pl-[31px] lg:pr-[17px] xl:pr-[19px] pr-[22px] 3xl:pr-[26px] lg:pt-[22px] xl:pt-[25px] pt-[29px] 3xl:pt-[34px] rounded-radius5 shadow-bs3 w-[64%]">
              <Image
                src={"images/img_rectangle39.png"}
                className="lg:h-[168px] xl:h-[192px] h-[215px] 2xl:h-[216px] 3xl:h-[259px] object-contain rounded-radius5 w-[23%]"
                alt="Rectangle39"
              />
              <Column className="xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[17px] xl:ml-[19px] ml-[22px] 3xl:ml-[26px] w-[70%]">
                <Column className="font-publicsans w-[100%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Button className="bg-indigo_900_26 font-light xl:pb-[4px] pb-[5.38px] 2xl:pb-[5px] 3xl:pb-[6px] xl:pt-[5px] pt-[6.38px] 2xl:pt-[6px] 3xl:pt-[7px] lg:py-[4px] rounded-radius5 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-indigo_900 w-[12%]">{`Writer`}</Button>
                    <Text className="font-light lg:ml-[359px] xl:ml-[410px] ml-[462px] 3xl:ml-[554px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 text-left w-[auto]">{`25 August, 2020`}</Text>
                  </Row>
                </Column>
                <Text className="font-bold font-merriweather italic leading-[normal] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_900 text-left tracking-ls1 w-[100%]">{`Eps 3 : How to write a book properly and correctly by paying attention to various parts to support the story`}</Text>
                <Text className="font-light font-publicsans lg:leading-[19px] xl:leading-[22px] leading-[25.00px] 2xl:leading-[25px] 3xl:leading-[30px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-left w-[100%]">{`Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a sabot...`}</Text>
                <Column className="font-publicsans mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                  <Row className="items-center justify-start lg:pr-[290px] xl:pr-[331px] pr-[373px] 3xl:pr-[447px] w-[100%]">
                    <Row className="bg-gray_900 items-center justify-start xl:pb-[10px] pb-[12px] 3xl:pb-[14px] lg:pb-[9px] lg:pl-[16px] xl:pl-[18px] pl-[21px] 3xl:pl-[25px] lg:pr-[15px] xl:pr-[17px] pr-[20px] 3xl:pr-[24px] lg:pt-[10px] xl:pt-[11px] pt-[13px] 3xl:pt-[15px] rounded-radius5 w-[21%]">
                      <Image
                        src={"images/img_playbutton1.svg"}
                        className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                        alt="playbutton1"
                      />
                      <Text className="font-light ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[1px] lg:my-[1px] my-[2px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left text-white_A700 w-[auto]">{`Play Now`}</Text>
                    </Row>
                    <Text className="font-light lg:mb-[10px] xl:mb-[12px] mb-[14px] 3xl:mb-[16px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] opacity-op5 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-indigo_900 text-left w-[auto]">{`Go to Spotify Now`}</Text>
                  </Row>
                </Column>
              </Column>
            </Row>
          </Stack>
        </Column>
        <Row className="font-merriweather items-center justify-start lg:ml-[129px] xl:ml-[148px] ml-[167px] 3xl:ml-[200px] mt-[100px] 3xl:mt-[120px] lg:mt-[77px] xl:mt-[88px] w-[30%]">
          <Image
            src={"images/img_logo.svg"}
            className="lg:h-[60px] xl:h-[68px] h-[76px] 2xl:h-[77px] 3xl:h-[92px] my-[1px] object-contain lg:w-[59px] xl:w-[67px] w-[76px] 3xl:w-[91px]"
            alt="logo"
          />
          <Column className="items-start lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] w-[78%]">
            <Text className="font-black xl:ml-[1px] lg:ml-[1px] ml-[2px] lg:text-[28px] xl:text-[32px] text-[36px] 3xl:text-[43px] text-center text-white_A700 w-[auto]">{`Latest Podcasts`}</Text>
            <Column className="font-publicsans lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
              <Text className="font-normal mx-[auto] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_300 text-center tracking-ls1 w-[auto]">{`Get started on latest episodes`}</Text>
            </Column>
          </Column>
        </Row>
        <Column className="items-center lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:px-[129px] xl:px-[148px] px-[167px] 3xl:px-[200px] w-[100%]">
          <Grid className="lg:gap-[17px] xl:gap-[19px] gap-[22px] 3xl:gap-[26px] grid grid-cols-4 mx-[auto] w-[77%]">
            <Column className="bg-white_A700 items-start justify-start lg:pb-[19px] xl:pb-[22px] pb-[25px] 3xl:pb-[30px] lg:pt-[11px] xl:pt-[13px] pt-[15px] 3xl:pt-[18px] rounded-radius5 shadow-bs4 w-[100%]">
              <Column className="items-center xl:pl-[12px] pl-[14px] 3xl:pl-[16px] xl:pr-[11px] pr-[13px] 3xl:pr-[15px] lg:px-[10px] w-[100%]">
                <Stack className="lg:h-[161px] xl:h-[185px] h-[207px] 2xl:h-[208px] 3xl:h-[249px] mx-[auto] w-[90%]">
                  <Image
                    src={"images/img_rectangle9.png"}
                    className="absolute lg:h-[161px] xl:h-[185px] h-[207px] 2xl:h-[208px] 3xl:h-[249px] inset-[0] object-cover rounded-radius5 w-[100%]"
                    alt="Rectangle9"
                  />
                  <Image
                    src={"images/img_group15.svg"}
                    className="absolute lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] inset-[0] justify-center m-[auto] object-contain lg:w-[56px] xl:w-[64px] w-[72px] 3xl:w-[86px]"
                    alt="Group15"
                  />
                </Stack>
              </Column>
              <Text className="font-bold font-merriweather leading-[normal] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-indigo_900 text-left w-[90%]">{`The secrets of writing a good book`}</Text>
              <Text className="font-light font-publicsans lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-left w-[auto]">{`By LaosPodcast`}</Text>
            </Column>
            <Column className="bg-white_A700 items-start justify-start lg:pb-[19px] xl:pb-[22px] pb-[25px] 3xl:pb-[30px] lg:pt-[11px] xl:pt-[13px] pt-[15px] 3xl:pt-[18px] rounded-radius5 shadow-bs4 w-[100%]">
              <Column className="items-center xl:pl-[12px] pl-[14px] 3xl:pl-[16px] xl:pr-[11px] pr-[13px] 3xl:pr-[15px] lg:px-[10px] w-[100%]">
                <Stack className="lg:h-[161px] xl:h-[185px] h-[207px] 2xl:h-[208px] 3xl:h-[249px] mx-[auto] w-[90%]">
                  <Image
                    src={"images/img_rectangle9_1.png"}
                    className="absolute lg:h-[161px] xl:h-[185px] h-[207px] 2xl:h-[208px] 3xl:h-[249px] inset-[0] object-cover rounded-radius5 w-[100%]"
                    alt="Rectangle9"
                  />
                  <Image
                    src={"images/img_group15_1.svg"}
                    className="absolute lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] inset-[0] justify-center m-[auto] object-contain lg:w-[56px] xl:w-[64px] w-[72px] 3xl:w-[86px]"
                    alt="Group15"
                  />
                </Stack>
              </Column>
              <Text className="font-bold font-merriweather leading-[normal] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-indigo_900 text-left w-[90%]">{`The secrets of writing a good book`}</Text>
              <Text className="font-light font-publicsans lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-left w-[auto]">{`By LaosPodcast`}</Text>
            </Column>
            <Column className="bg-white_A700 items-start justify-start lg:pb-[19px] xl:pb-[22px] pb-[25px] 3xl:pb-[30px] lg:pt-[11px] xl:pt-[13px] pt-[15px] 3xl:pt-[18px] rounded-radius5 shadow-bs4 w-[100%]">
              <Column className="items-center xl:pl-[12px] pl-[14px] 3xl:pl-[16px] xl:pr-[11px] pr-[13px] 3xl:pr-[15px] lg:px-[10px] w-[100%]">
                <Stack className="lg:h-[161px] xl:h-[185px] h-[207px] 2xl:h-[208px] 3xl:h-[249px] mx-[auto] w-[90%]">
                  <Image
                    src={"images/img_rectangle9_2.png"}
                    className="absolute lg:h-[161px] xl:h-[185px] h-[207px] 2xl:h-[208px] 3xl:h-[249px] inset-[0] object-cover rounded-radius5 w-[100%]"
                    alt="Rectangle9"
                  />
                  <Image
                    src={"images/img_group15_2.svg"}
                    className="absolute lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] inset-[0] justify-center m-[auto] object-contain lg:w-[56px] xl:w-[64px] w-[72px] 3xl:w-[86px]"
                    alt="Group15"
                  />
                </Stack>
              </Column>
              <Text className="font-bold font-merriweather leading-[normal] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-indigo_900 text-left w-[90%]">{`The secrets of writing a good book`}</Text>
              <Text className="font-light font-publicsans lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-left w-[auto]">{`By LaosPodcast`}</Text>
            </Column>
            <Column className="bg-white_A700 items-start justify-start lg:pb-[19px] xl:pb-[22px] pb-[25px] 3xl:pb-[30px] lg:pt-[11px] xl:pt-[13px] pt-[15px] 3xl:pt-[18px] rounded-radius5 shadow-bs4 w-[100%]">
              <Column className="items-center xl:pl-[12px] pl-[14px] 3xl:pl-[16px] xl:pr-[11px] pr-[13px] 3xl:pr-[15px] lg:px-[10px] w-[100%]">
                <Stack className="lg:h-[161px] xl:h-[185px] h-[207px] 2xl:h-[208px] 3xl:h-[249px] mx-[auto] w-[90%]">
                  <Image
                    src={"images/img_rectangle9_3.png"}
                    className="absolute lg:h-[161px] xl:h-[185px] h-[207px] 2xl:h-[208px] 3xl:h-[249px] inset-[0] object-cover rounded-radius5 w-[100%]"
                    alt="Rectangle9"
                  />
                  <Image
                    src={"images/img_group15_3.svg"}
                    className="absolute lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] inset-[0] justify-center m-[auto] object-contain lg:w-[56px] xl:w-[64px] w-[72px] 3xl:w-[86px]"
                    alt="Group15"
                  />
                </Stack>
              </Column>
              <Text className="font-bold font-merriweather leading-[normal] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-indigo_900 text-left w-[90%]">{`The secrets of writing a good book`}</Text>
              <Text className="font-light font-publicsans lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-left w-[auto]">{`By LaosPodcast`}</Text>
            </Column>
            <Column className="bg-white_A700 items-start justify-start lg:pb-[19px] xl:pb-[22px] pb-[25px] 3xl:pb-[30px] lg:pt-[11px] xl:pt-[13px] pt-[15px] 3xl:pt-[18px] rounded-radius5 shadow-bs4 w-[100%]">
              <Column className="items-center xl:pl-[12px] pl-[14px] 3xl:pl-[16px] xl:pr-[11px] pr-[13px] 3xl:pr-[15px] lg:px-[10px] w-[100%]">
                <Stack className="lg:h-[161px] xl:h-[185px] h-[207px] 2xl:h-[208px] 3xl:h-[249px] mx-[auto] w-[90%]">
                  <Image
                    src={"images/img_rectangle9_4.png"}
                    className="absolute lg:h-[161px] xl:h-[185px] h-[207px] 2xl:h-[208px] 3xl:h-[249px] inset-[0] object-cover rounded-radius5 w-[100%]"
                    alt="Rectangle9"
                  />
                  <Image
                    src={"images/img_group15_4.svg"}
                    className="absolute lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] inset-[0] justify-center m-[auto] object-contain lg:w-[56px] xl:w-[64px] w-[72px] 3xl:w-[86px]"
                    alt="Group15"
                  />
                </Stack>
              </Column>
              <Text className="font-bold font-merriweather leading-[normal] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-indigo_900 text-left w-[90%]">{`The secrets of writing a good book`}</Text>
              <Text className="font-light font-publicsans lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-left w-[auto]">{`By LaosPodcast`}</Text>
            </Column>
            <Column className="bg-white_A700 items-start justify-start lg:pb-[19px] xl:pb-[22px] pb-[25px] 3xl:pb-[30px] lg:pt-[11px] xl:pt-[13px] pt-[15px] 3xl:pt-[18px] rounded-radius5 shadow-bs4 w-[100%]">
              <Column className="items-center xl:pl-[12px] pl-[14px] 3xl:pl-[16px] xl:pr-[11px] pr-[13px] 3xl:pr-[15px] lg:px-[10px] w-[100%]">
                <Stack className="lg:h-[161px] xl:h-[185px] h-[207px] 2xl:h-[208px] 3xl:h-[249px] mx-[auto] w-[90%]">
                  <Image
                    src={"images/img_rectangle9_5.png"}
                    className="absolute lg:h-[161px] xl:h-[185px] h-[207px] 2xl:h-[208px] 3xl:h-[249px] inset-[0] object-cover rounded-radius5 w-[100%]"
                    alt="Rectangle9"
                  />
                  <Image
                    src={"images/img_group15_5.svg"}
                    className="absolute lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] inset-[0] justify-center m-[auto] object-contain lg:w-[56px] xl:w-[64px] w-[72px] 3xl:w-[86px]"
                    alt="Group15"
                  />
                </Stack>
              </Column>
              <Text className="font-bold font-merriweather leading-[normal] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-indigo_900 text-left w-[90%]">{`The secrets of writing a good book`}</Text>
              <Text className="font-light font-publicsans lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-left w-[auto]">{`By LaosPodcast`}</Text>
            </Column>
            <Column className="bg-white_A700 items-start justify-start lg:pb-[19px] xl:pb-[22px] pb-[25px] 3xl:pb-[30px] lg:pt-[11px] xl:pt-[13px] pt-[15px] 3xl:pt-[18px] rounded-radius5 shadow-bs4 w-[100%]">
              <Column className="items-center xl:pl-[12px] pl-[14px] 3xl:pl-[16px] xl:pr-[11px] pr-[13px] 3xl:pr-[15px] lg:px-[10px] w-[100%]">
                <Stack className="lg:h-[161px] xl:h-[185px] h-[207px] 2xl:h-[208px] 3xl:h-[249px] mx-[auto] w-[90%]">
                  <Image
                    src={"images/img_rectangle9_6.png"}
                    className="absolute lg:h-[161px] xl:h-[185px] h-[207px] 2xl:h-[208px] 3xl:h-[249px] inset-[0] object-cover rounded-radius5 w-[100%]"
                    alt="Rectangle9"
                  />
                  <Image
                    src={"images/img_group15_6.svg"}
                    className="absolute lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] inset-[0] justify-center m-[auto] object-contain lg:w-[56px] xl:w-[64px] w-[72px] 3xl:w-[86px]"
                    alt="Group15"
                  />
                </Stack>
              </Column>
              <Text className="font-bold font-merriweather leading-[normal] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-indigo_900 text-left w-[90%]">{`The secrets of writing a good book`}</Text>
              <Text className="font-light font-publicsans lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-left w-[auto]">{`By LaosPodcast`}</Text>
            </Column>
            <Column className="bg-white_A700 items-start justify-start lg:pb-[19px] xl:pb-[22px] pb-[25px] 3xl:pb-[30px] lg:pt-[11px] xl:pt-[13px] pt-[15px] 3xl:pt-[18px] rounded-radius5 shadow-bs4 w-[100%]">
              <Column className="items-center xl:pl-[12px] pl-[14px] 3xl:pl-[16px] xl:pr-[11px] pr-[13px] 3xl:pr-[15px] lg:px-[10px] w-[100%]">
                <Stack className="lg:h-[161px] xl:h-[185px] h-[207px] 2xl:h-[208px] 3xl:h-[249px] mx-[auto] w-[90%]">
                  <Image
                    src={"images/img_rectangle9_7.png"}
                    className="absolute lg:h-[161px] xl:h-[185px] h-[207px] 2xl:h-[208px] 3xl:h-[249px] inset-[0] object-cover rounded-radius5 w-[100%]"
                    alt="Rectangle9"
                  />
                  <Image
                    src={"images/img_group15_7.svg"}
                    className="absolute lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] inset-[0] justify-center m-[auto] object-contain lg:w-[56px] xl:w-[64px] w-[72px] 3xl:w-[86px]"
                    alt="Group15"
                  />
                </Stack>
              </Column>
              <Text className="font-bold font-merriweather leading-[normal] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-indigo_900 text-left w-[90%]">{`The secrets of writing a good book`}</Text>
              <Text className="font-light font-publicsans lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-left w-[auto]">{`By LaosPodcast`}</Text>
            </Column>
            <Column className="bg-white_A700 items-start justify-start lg:pb-[19px] xl:pb-[22px] pb-[25px] 3xl:pb-[30px] lg:pt-[11px] xl:pt-[13px] pt-[15px] 3xl:pt-[18px] rounded-radius5 shadow-bs4 w-[100%]">
              <Column className="items-center xl:pl-[12px] pl-[14px] 3xl:pl-[16px] xl:pr-[11px] pr-[13px] 3xl:pr-[15px] lg:px-[10px] w-[100%]">
                <Stack className="lg:h-[161px] xl:h-[185px] h-[207px] 2xl:h-[208px] 3xl:h-[249px] mx-[auto] w-[90%]">
                  <Image
                    src={"images/img_rectangle9_8.png"}
                    className="absolute lg:h-[161px] xl:h-[185px] h-[207px] 2xl:h-[208px] 3xl:h-[249px] inset-[0] object-cover rounded-radius5 w-[100%]"
                    alt="Rectangle9"
                  />
                  <Image
                    src={"images/img_group15_8.svg"}
                    className="absolute lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] inset-[0] justify-center m-[auto] object-contain lg:w-[56px] xl:w-[64px] w-[72px] 3xl:w-[86px]"
                    alt="Group15"
                  />
                </Stack>
              </Column>
              <Text className="font-bold font-merriweather leading-[normal] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-indigo_900 text-left w-[90%]">{`The secrets of writing a good book`}</Text>
              <Text className="font-light font-publicsans lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-left w-[auto]">{`By LaosPodcast`}</Text>
            </Column>
            <Column className="bg-white_A700 items-start justify-start lg:pb-[19px] xl:pb-[22px] pb-[25px] 3xl:pb-[30px] lg:pt-[11px] xl:pt-[13px] pt-[15px] 3xl:pt-[18px] rounded-radius5 shadow-bs4 w-[100%]">
              <Column className="items-center xl:pl-[12px] pl-[14px] 3xl:pl-[16px] xl:pr-[11px] pr-[13px] 3xl:pr-[15px] lg:px-[10px] w-[100%]">
                <Stack className="lg:h-[161px] xl:h-[185px] h-[207px] 2xl:h-[208px] 3xl:h-[249px] mx-[auto] w-[90%]">
                  <Image
                    src={"images/img_rectangle9_9.png"}
                    className="absolute lg:h-[161px] xl:h-[185px] h-[207px] 2xl:h-[208px] 3xl:h-[249px] inset-[0] object-cover rounded-radius5 w-[100%]"
                    alt="Rectangle9"
                  />
                  <Image
                    src={"images/img_group15_9.svg"}
                    className="absolute lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] inset-[0] justify-center m-[auto] object-contain lg:w-[56px] xl:w-[64px] w-[72px] 3xl:w-[86px]"
                    alt="Group15"
                  />
                </Stack>
              </Column>
              <Text className="font-bold font-merriweather leading-[normal] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-indigo_900 text-left w-[90%]">{`The secrets of writing a good book`}</Text>
              <Text className="font-light font-publicsans lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-left w-[auto]">{`By LaosPodcast`}</Text>
            </Column>
            <Column className="bg-white_A700 items-start justify-start lg:pb-[19px] xl:pb-[22px] pb-[25px] 3xl:pb-[30px] lg:pt-[11px] xl:pt-[13px] pt-[15px] 3xl:pt-[18px] rounded-radius5 shadow-bs4 w-[100%]">
              <Column className="items-center xl:pl-[12px] pl-[14px] 3xl:pl-[16px] xl:pr-[11px] pr-[13px] 3xl:pr-[15px] lg:px-[10px] w-[100%]">
                <Stack className="lg:h-[161px] xl:h-[185px] h-[207px] 2xl:h-[208px] 3xl:h-[249px] mx-[auto] w-[90%]">
                  <Image
                    src={"images/img_rectangle9_10.png"}
                    className="absolute lg:h-[161px] xl:h-[185px] h-[207px] 2xl:h-[208px] 3xl:h-[249px] inset-[0] object-cover rounded-radius5 w-[100%]"
                    alt="Rectangle9"
                  />
                  <Image
                    src={"images/img_group15_10.svg"}
                    className="absolute lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] inset-[0] justify-center m-[auto] object-contain lg:w-[56px] xl:w-[64px] w-[72px] 3xl:w-[86px]"
                    alt="Group15"
                  />
                </Stack>
              </Column>
              <Text className="font-bold font-merriweather leading-[normal] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-indigo_900 text-left w-[90%]">{`The secrets of writing a good book`}</Text>
              <Text className="font-light font-publicsans lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-left w-[auto]">{`By LaosPodcast`}</Text>
            </Column>
            <Column className="bg-white_A700 items-start justify-start lg:pb-[19px] xl:pb-[22px] pb-[25px] 3xl:pb-[30px] lg:pt-[11px] xl:pt-[13px] pt-[15px] 3xl:pt-[18px] rounded-radius5 shadow-bs4 w-[100%]">
              <Column className="items-center xl:pl-[12px] pl-[14px] 3xl:pl-[16px] xl:pr-[11px] pr-[13px] 3xl:pr-[15px] lg:px-[10px] w-[100%]">
                <Stack className="lg:h-[161px] xl:h-[185px] h-[207px] 2xl:h-[208px] 3xl:h-[249px] mx-[auto] w-[90%]">
                  <Image
                    src={"images/img_rectangle9_11.png"}
                    className="absolute lg:h-[161px] xl:h-[185px] h-[207px] 2xl:h-[208px] 3xl:h-[249px] inset-[0] object-cover rounded-radius5 w-[100%]"
                    alt="Rectangle9"
                  />
                  <Image
                    src={"images/img_group15_11.svg"}
                    className="absolute lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] inset-[0] justify-center m-[auto] object-contain lg:w-[56px] xl:w-[64px] w-[72px] 3xl:w-[86px]"
                    alt="Group15"
                  />
                </Stack>
              </Column>
              <Text className="font-bold font-merriweather leading-[normal] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-indigo_900 text-left w-[90%]">{`The secrets of writing a good book`}</Text>
              <Text className="font-light font-publicsans lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-left w-[auto]">{`By LaosPodcast`}</Text>
            </Column>
          </Grid>
        </Column>
        <Row className="font-publicsans items-center justify-start lg:ml-[129px] xl:ml-[148px] ml-[167px] 3xl:ml-[200px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[15%]">
          <Column className="bg-deep_purple_A200 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center 3xl:pb-[10px] pb-[9px] pt-[10px] 3xl:pt-[12px] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] lg:py-[7px] xl:py-[8px] rounded-radius501 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]">
            <Text className="font-normal mx-[auto] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`1`}</Text>
          </Column>
          <Column className="bg-white_A700 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] 3xl:pb-[10px] pb-[9px] lg:pl-[11px] xl:pl-[13px] pl-[15px] 3xl:pl-[18px] lg:pr-[10px] xl:pr-[12px] pr-[14px] 3xl:pr-[16px] pt-[10px] 3xl:pt-[12px] lg:py-[7px] xl:py-[8px] rounded-radius501 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]">
            <Text className="font-normal mx-[auto] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-deep_purple_A200 text-left w-[auto]">{`2`}</Text>
          </Column>
          <Row className="items-start justify-between 3xl:mb-[10px] mb-[9px] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] mt-[10px] 3xl:mt-[12px] lg:my-[7px] xl:my-[8px] w-[34%]">
            <Text className="font-light lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-deep_purple_A200 text-left w-[auto]">{`Next`}</Text>
            <Image
              src={"images/img_arrowpointing_1.svg"}
              className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] xl:mt-[2px] lg:mt-[2px] mt-[3px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
              alt="arrowpointing"
            />
          </Row>
        </Row>
        <Column className="3xl:mt-[116px] lg:mt-[75px] xl:mt-[86px] mt-[97px] w-[100%]">
          <footer className="w-[100%]">
            <Column className="bg-gray_901 items-center justify-end lg:pb-[27px] xl:pb-[31px] pb-[35px] 3xl:pb-[42px] lg:pl-[129px] xl:pl-[147px] pl-[166px] 3xl:pl-[199px] lg:pr-[128px] xl:pr-[146px] pr-[165px] 3xl:pr-[198px] lg:pt-[47px] xl:pt-[54px] pt-[61px] 3xl:pt-[73px] w-[100%]">
              <Row className="font-merriweather items-center justify-between mx-[auto] w-[77%]">
                <Column className="items-start w-[15%]">
                  <Text className="font-black lg:text-[28px] xl:text-[32px] text-[36px] 3xl:text-[43px] text-gray_200 text-left w-[auto]">{`Laos`}</Text>
                  <Column className="font-publicsans lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                    <Row className="items-start justify-start w-[100%]">
                      <Image
                        src={"images/img_heart31_3.svg"}
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
                    src={"images/img_group94_3.svg"}
                    className="lg:h-[20px] xl:h-[23px] h-[25px] 2xl:h-[26px] 3xl:h-[31px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] object-cover w-[100%]"
                    alt="Group94"
                  />
                </Column>
              </Row>
              <Text className="font-light font-publicsans lg:mt-[50px] xl:mt-[57px] mt-[65px] 3xl:mt-[78px] mx-[auto] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left text-white_A700 w-[auto]">{`Powered by Majengkarya - Premium Theme`}</Text>
            </Column>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default PodcastsPage;
