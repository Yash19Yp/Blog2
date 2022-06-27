import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Text,
  Line,
  Image,
  Stack,
  Input,
  Button,
  List,
} from "components";

const BlogPage = () => {
  const navigate = useNavigate();

  function handleNavigate9() {
    navigate("/");
  }
  function handleNavigate10() {
    navigate("/podcasts");
  }
  function handleNavigate11() {
    navigate("/blogpost1");
  }
  function handleNavigate12() {
    navigate("/contactus");
  }

  return (
    <>
      <Column className="bg-gray_900 font-nunitosans items-start justify-end mx-[auto] lg:pt-[28px] xl:pt-[32px] pt-[37px] 3xl:pt-[44px] w-[100%]">
        <header className="lg:ml-[127px] xl:ml-[145px] ml-[164px] 3xl:ml-[196px] w-[77%]">
          <Row className="items-start justify-start w-[100%]">
            <Text className="font-black lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 w-[auto]">{`LAOS.`}</Text>
            <Column className="font-publicsans items-start justify-start xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:ml-[218px] xl:ml-[249px] ml-[281px] 3xl:ml-[337px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[36%]">
              <Column className="w-[100%]">
                <Row className="items-center justify-between w-[100%]">
                  <Text
                    className="common-pointer cursor-pointer hover:font-bold font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center text-deep_purple_A200 tracking-ls1 w-[auto]"
                    onClick={handleNavigate9}
                  >{`Home`}</Text>
                  <Text
                    className="common-pointer cursor-pointer hover:font-bold font-bold lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-center hover:text-deep_purple_A200 tracking-ls1 w-[auto]"
                    onClick={handleNavigate10}
                  >{`Podcast`}</Text>
                  <Text
                    className="common-pointer cursor-pointer hover:font-bold font-bold lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-center hover:text-deep_purple_A200 tracking-ls1 w-[auto]"
                    onClick={handleNavigate11}
                  >{`Blog`}</Text>
                  <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-center hover:text-deep_purple_A200 tracking-ls1 w-[auto]">{`About`}</Text>
                  <Text
                    className="common-pointer cursor-pointer hover:font-bold font-bold lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-center hover:text-deep_purple_A200 tracking-ls1 w-[auto]"
                    onClick={handleNavigate12}
                  >{`Contact`}</Text>
                </Row>
              </Column>
              <Line className="bg-deep_purple_A200 h-[1px] xl:mt-[2px] lg:mt-[2px] mt-[3px] w-[13%]" />
            </Column>
            <Image
              src={"images/img_search21_1.svg"}
              className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[252px] xl:ml-[288px] ml-[324px] 3xl:ml-[389px] mt-[1px] object-contain lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
              alt="search21"
            />
          </Row>
        </header>
        <Stack className="font-publicsans lg:h-[614px] xl:h-[702px] h-[789px] 2xl:h-[790px] 3xl:h-[948px] lg:ml-[42px] xl:ml-[48px] ml-[55px] 3xl:ml-[66px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[92%]">
          <Stack className="absolute lg:h-[614px] xl:h-[702px] h-[789px] 2xl:h-[790px] 3xl:h-[948px] inset-[0] w-[100%]">
            <Image
              src={"images/img_rectangle20.png"}
              className="absolute lg:h-[389px] xl:h-[445px] h-[500px] 2xl:h-[501px] 3xl:h-[601px] object-cover rounded-radius25 top-[0] w-[100%]"
              alt="Rectangle20"
            />
            <div className="absolute bg-gray_900 bottom-[7%] lg:h-[286px] xl:h-[327px] h-[367px] 2xl:h-[368px] 3xl:h-[441px] inset-x-[0] mx-[auto] rounded-radius25 w-[83%]"></div>
            <Row className="absolute bottom-[0] inset-x-[0] items-center justify-start mx-[auto] w-[74%]">
              <Image
                src={"images/img_ellipse5_3.png"}
                className="lg:h-[55px] xl:h-[63px] h-[70px] 2xl:h-[71px] 3xl:h-[85px] object-contain rounded-radius501 w-[auto]"
                alt="Ellipse5"
              />
              <Column className="items-start mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[22%]">
                <Column className="w-[100%]">
                  <Text className="font-semibold mx-[auto] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_300 text-center w-[auto]">{`By Jhone Leonardo`}</Text>
                </Column>
                <Text className="font-light lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 text-center w-[auto]">{`12 September, 2020`}</Text>
              </Column>
              <div className="3xl:ml-[594px] bg-transparent border-0 lg:ml-[385px] lg:my-[3px] ml-[495px] my-[4px] w-[19%] xl:ml-[440px] xl:my-[3px] input-wrap">
                <Image
                  src={"images/img_vector_3.svg"}
                  className="absolute z-[1] left-[29.00px] bg-transparent border-0 lg:left-[22px] xl:left-[25px] 2xl:left-[29px] 3xl:left-[34px] my-[auto] inset-y-[0]"
                  alt="Vector"
                />
                <Input
                  className="placeholder:bg-transparent bg-transparent border border-pink_300 border-solid font-medium pb-[18.82px] 3xl:pl-[105px] lg:pl-[68px] xl:pl-[78px] pl-[88.06px] 2xl:pl-[88px] lg:pr-[23px] xl:pr-[26px] pr-[29.94px] 2xl:pr-[29px] 3xl:pr-[35px] pt-[18.86px] lg:py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[22px] rounded-radius5 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] placeholder:text-pink_300 text-pink_300 text-right w-[100%]"
                  name="Group13"
                  placeholder={`Share Now`}
                ></Input>
              </div>
            </Row>
          </Stack>
          <Column className="absolute bottom-[15%] inset-x-[0] items-start justify-start mx-[auto] w-[74%]">
            <Text className="font-light font-publicsans lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-black_900 text-left w-[auto]">
              <span className="text-bluegray_300">
                <>{`Category`}</>
              </span>
              <span className="text-black_900">
                <>{` `}</>
              </span>
              <span className="text-pink_300 tracking-ls1 font-merriweather font-bold">
                <>{`Writing`}</>
              </span>
            </Text>
            <Text className="font-bold font-merriweather italic leading-[normal] lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] lg:text-[37px] xl:text-[42px] text-[48px] 3xl:text-[57px] text-left text-white_A700 tracking-ls1 w-[100%]">{`How to write a book properly and correctly by paying attention to various parts to support the story`}</Text>
          </Column>
        </Stack>
        <Column className="items-start lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] lg:px-[178px] xl:px-[204px] px-[230px] 3xl:px-[276px] w-[100%]">
          <Text className="font-light font-publicsans ml-[1px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 text-center w-[auto]">{`https://google.com`}</Text>
          <Text className="font-light font-publicsans lg:leading-[27px] xl:leading-[31px] leading-[35.00px] 2xl:leading-[35px] 3xl:leading-[42px] ml-[1px] lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-left w-[68%]">{`Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf. Could someone survive inside a transporter buffer for 75 years? Fate. It protects fools, little children, and ships named “Enterprise.”`}</Text>
          <Text className="font-light font-publicsans lg:leading-[27px] xl:leading-[31px] leading-[35.00px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[30px] xl:mt-[34px] mt-[39px] 3xl:mt-[46px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-left w-[68%]">
            <span className="text-bluegray_300">
              <>{`The game’s not big enough unless it scares you a little. Wait a minute – you’ve been declared dead. You can’t give `}</>
            </span>
            <span className="text-bluegray_300 font-bold">
              <>{`orders around`}</>
            </span>
            <span className="text-bluegray_300">
              <>{` here. I’ll alert the crew. What? We’re not at all alike! Flair is what marks the difference between artistry and mere competence.`}</>
            </span>
          </Text>
          <Text className="font-light font-publicsans lg:leading-[27px] xl:leading-[31px] leading-[35.00px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[30px] xl:mt-[34px] mt-[39px] 3xl:mt-[46px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-left w-[68%]">{`Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard.`}</Text>
          <Text className="font-light font-publicsans lg:leading-[27px] xl:leading-[31px] leading-[35.00px] 2xl:leading-[35px] 3xl:leading-[42px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-left w-[68%]">{`Could someone survive inside a transporter buffer for 75 years? Fate. It protects fools, little children, and ships named “Enterprise.”`}</Text>
          <Text className="font-bold font-merriweather ml-[1px] lg:mt-[38px] xl:mt-[43px] mt-[49px] 3xl:mt-[58px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-left text-white_A700 w-[auto]">{`Lorem Ipsum Dolor Sit Amet`}</Text>
          <Text className="font-light font-publicsans lg:leading-[27px] xl:leading-[31px] leading-[35.00px] 2xl:leading-[35px] 3xl:leading-[42px] ml-[1px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-left w-[68%]">{`Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf. Could someone survive inside a transporter buffer for 75 years? Fate. It protects fools, little children, and ships named “Enterprise.”`}</Text>
        </Column>
        <Row className="lg:gap-[22px] xl:gap-[25px] gap-[29px] 3xl:gap-[34px] grid grid-cols-2 items-center justify-center lg:ml-[178px] xl:ml-[204px] ml-[230px] 3xl:ml-[276px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[68%]">
          <Image
            src={"images/img_rectangle23.png"}
            className="lg:h-[260px] xl:h-[298px] h-[334px] 2xl:h-[335px] 3xl:h-[402px] object-contain rounded-radius15 w-[100%]"
            alt="Rectangle23"
          />
          <Image
            src={"images/img_rectangle24.png"}
            className="lg:h-[260px] xl:h-[298px] h-[334px] 2xl:h-[335px] 3xl:h-[402px] object-contain rounded-radius15 w-[100%]"
            alt="Rectangle24"
          />
        </Row>
        <Column className="font-publicsans items-start lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] lg:pl-[178px] xl:pl-[204px] pl-[230px] 3xl:pl-[276px] lg:pr-[179px] xl:pr-[205px] pr-[231px] 3xl:pr-[277px] w-[100%]">
          <Text className="font-light lg:leading-[27px] xl:leading-[31px] leading-[35.00px] 2xl:leading-[35px] 3xl:leading-[42px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-left w-[68%]">{`What’s a knock-out like you doing in a computer-generated gin joint like this? But the probability of making a six is no greater than that of rolling a seven. I guess it’s better to be lucky than good.`}</Text>
          <Text className="font-light lg:leading-[27px] xl:leading-[31px] leading-[35.00px] 2xl:leading-[35px] 3xl:leading-[42px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-left w-[68%]">{`Damage report! I’ve had twelve years to think about it. And if I had it to do over again, I would have grabbed the phaser and pointed it at you instead of them. Some days you get the bear, and some days the bear gets you. Ensign Babyface! I’m afraid I still don’t understand, sir. Mr. Crusher, ready a collision course with the Borg ship. Yesterday I did not know how to eat gagh. You’re going to be an interesting companion.`}</Text>
          <Row className="items-center justify-start lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[34%]">
            <div className="bg-bluegray_300 h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] rounded-radius501 w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
            <Text className="font-light lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-left w-[auto]">{`Lorem ipsum dolor sit amet.`}</Text>
          </Row>
          <Row className="items-center justify-start lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] w-[34%]">
            <div className="bg-bluegray_300 h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] rounded-radius501 w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
            <Text className="font-light lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-left w-[auto]">{`At vero eos et accusamus et iusto odio.`}</Text>
          </Row>
          <Row className="items-center justify-start lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] w-[34%]">
            <div className="bg-bluegray_300 h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] rounded-radius501 w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
            <Text className="font-light lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-left w-[auto]">{`Excepteur sint occaecat cupidatat non proident.`}</Text>
          </Row>
          <Text className="font-light lg:leading-[27px] xl:leading-[31px] leading-[35.00px] 2xl:leading-[35px] 3xl:leading-[42px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-left w-[68%]">{`Could someone survive inside a transporter buffer for 75 years? Fate. It protects fools, little children, and ships named “Enterprise.”`}</Text>
          <Text className="font-medium lg:mt-[53px] xl:mt-[61px] mt-[69px] 3xl:mt-[82px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-left text-white_A700 w-[auto]">{`Tags`}</Text>
          <Row className="items-center justify-start lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[35%]">
            <Button className="bg-gray_800 font-thin py-[10.54px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[8px] xl:py-[9px] rounded-radius5 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center text-white_A700 w-[19%]">{`Writing`}</Button>
            <Button className="bg-gray_800 font-thin lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] py-[10.54px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[8px] xl:py-[9px] rounded-radius5 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center text-white_A700 w-[19%]">{`Tutorial`}</Button>
            <Button className="bg-gray_800 font-thin lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] py-[10.54px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[8px] xl:py-[9px] rounded-radius5 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center text-white_A700 w-[19%]">{`How to`}</Button>
            <Button className="bg-gray_800 font-thin lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] py-[10.54px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[8px] xl:py-[9px] rounded-radius5 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center text-white_A700 w-[15%]">{`Book`}</Button>
            <Button className="bg-gray_800 font-thin lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] py-[10.54px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[8px] xl:py-[9px] rounded-radius5 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center text-white_A700 w-[15%]">{`2020`}</Button>
          </Row>
        </Column>
        <Row className="font-publicsans items-center justify-center lg:ml-[447px] xl:ml-[511px] ml-[575px] 3xl:ml-[690px] lg:mt-[53px] xl:mt-[61px] mt-[69px] 3xl:mt-[82px] w-[16%]">
          <Image
            src={"images/img_ellipse5_4.png"}
            className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] object-contain rounded-radius501 w-[auto]"
            alt="Ellipse5"
          />
          <Column className="items-start lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] w-[68%]">
            <Column className="w-[100%]">
              <Text className="font-semibold mx-[auto] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center text-white_A700 w-[auto]">{`By Jhone Leonardo`}</Text>
            </Column>
            <Text className="font-light lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[auto]">{`Podcaster & Blogger`}</Text>
          </Column>
        </Row>
        <List
          className="lg:gap-[21px] xl:gap-[24px] gap-[27.390015px] 2xl:gap-[27px] 3xl:gap-[32px] grid grid-cols-3 min-h-[auto] lg:ml-[40px] xl:ml-[46px] ml-[52px] 3xl:ml-[62px] mt-[101px] 3xl:mt-[121px] lg:mt-[78px] xl:mt-[89px] w-[94%]"
          orientation="horizontal"
        >
          <Stack className="lg:h-[214px] xl:h-[244px] h-[273.93994px] 2xl:h-[275px] 3xl:h-[329px] w-[100%]">
            <Image
              src={"images/img_rectangle25.png"}
              className="absolute lg:h-[214px] xl:h-[244px] h-[273.94px] 2xl:h-[275px] 3xl:h-[329px] inset-[0] object-cover rounded-radius5 w-[100%]"
              alt="Rectangle25"
            />
            <Column className="absolute bottom-[9%] items-start justify-start left-[6%] w-[72%]">
              <Text className="font-bold font-merriweather italic ml-[1px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-left text-white_A700 w-[auto]">{`Consistent way of working to train yourself`}</Text>
              <Text className="font-light font-publicsans lg:mt-[17px] xl:mt-[20px] mt-[22.82px] 2xl:mt-[22px] 3xl:mt-[27px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`5 minutes ago`}</Text>
            </Column>
          </Stack>
          <Stack className="lg:h-[214px] xl:h-[244px] h-[273.93994px] 2xl:h-[275px] 3xl:h-[329px] w-[100%]">
            <Image
              src={"images/img_rectangle26.png"}
              className="absolute lg:h-[214px] xl:h-[244px] h-[273.94px] 2xl:h-[275px] 3xl:h-[329px] inset-[0] object-cover rounded-radius5 w-[100%]"
              alt="Rectangle26"
            />
            <Column className="absolute bottom-[9%] items-start justify-start left-[6%] w-[72%]">
              <Text className="font-bold font-merriweather italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-left text-white_A700 w-[auto]">{`Consistent way of working to train yourself`}</Text>
              <Text className="font-light font-publicsans lg:mt-[17px] xl:mt-[20px] mt-[22.83px] 2xl:mt-[22px] 3xl:mt-[27px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`5 minutes ago`}</Text>
            </Column>
          </Stack>
          <Stack className="lg:h-[214px] xl:h-[244px] h-[273.93994px] 2xl:h-[275px] 3xl:h-[329px] w-[100%]">
            <Image
              src={"images/img_rectangle26_1.png"}
              className="absolute lg:h-[214px] xl:h-[244px] h-[273.94px] 2xl:h-[275px] 3xl:h-[329px] inset-[0] object-cover rounded-radius5 w-[100%]"
              alt="Rectangle26"
            />
            <Column className="absolute bottom-[9%] items-start justify-start left-[6%] pr-[1px] w-[72%]">
              <Text className="font-bold font-merriweather italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-left text-white_A700 w-[auto]">{`Consistent way of working to train yourself`}</Text>
              <Text className="font-light font-publicsans lg:mt-[17px] xl:mt-[20px] mt-[22.83px] 2xl:mt-[22px] 3xl:mt-[27px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`5 minutes ago`}</Text>
            </Column>
          </Stack>
        </List>
        <footer className="mt-[101.06px] 2xl:mt-[101px] 3xl:mt-[121px] lg:mt-[78px] xl:mt-[89px] w-[100%]">
          <Column className="bg-gray_901 items-center justify-end lg:pb-[27px] xl:pb-[31px] pb-[35px] 3xl:pb-[42px] lg:pl-[123px] xl:pl-[141px] pl-[159px] 3xl:pl-[190px] lg:pr-[128px] xl:pr-[146px] pr-[165px] 3xl:pr-[198px] lg:pt-[47px] xl:pt-[54px] pt-[61px] 3xl:pt-[73px] w-[100%]">
            <Row className="font-merriweather items-center justify-between mx-[auto] w-[77%]">
              <Column className="items-start w-[15%]">
                <Text className="font-black lg:text-[28px] xl:text-[32px] text-[36px] 3xl:text-[43px] text-gray_200 text-left w-[auto]">{`Laos`}</Text>
                <Column className="font-publicsans lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                  <Row className="items-start justify-start w-[100%]">
                    <Image
                      src={"images/img_heart31_1.svg"}
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
                  src={"images/img_group94_1.svg"}
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

export default BlogPage;
