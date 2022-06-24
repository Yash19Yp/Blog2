import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Text,
  Line,
  Image,
  Input,
  TextArea,
  Button,
} from "components";

const ContactusPage = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    navigate("/podcasts");
  }
  function handleNavigate2() {
    navigate("/blogpost1");
  }
  function handleNavigate12() {
    navigate("/");
  }

  return (
    <>
      <Column className="bg-gray_900 items-center justify-end mx-[auto] lg:pt-[28px] xl:pt-[32px] pt-[37px] 3xl:pt-[44px] w-[100%]">
        <header className="font-nunitosans mx-[auto] w-[77%]">
          <Row className="items-start justify-start w-[100%]">
            <Text className="font-black lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 w-[auto]">{`LAOS.`}</Text>
            <Column className="font-publicsans items-start justify-start xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:ml-[218px] xl:ml-[249px] ml-[281px] 3xl:ml-[337px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[36%]">
              <Column className="w-[100%]">
                <Row className="items-center justify-between w-[100%]">
                  <Text
                    className="common-pointer cursor-pointer hover:font-bold font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center text-deep_purple_A200 tracking-ls1 w-[auto]"
                    onClick={handleNavigate12}
                  >{`Home`}</Text>
                  <Text
                    className="common-pointer cursor-pointer hover:font-bold font-bold lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-center hover:text-deep_purple_A200 tracking-ls1 w-[auto]"
                    onClick={handleNavigate1}
                  >{`Podcast`}</Text>
                  <Text
                    className="common-pointer cursor-pointer hover:font-bold font-bold lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-center hover:text-deep_purple_A200 tracking-ls1 w-[auto]"
                    onClick={handleNavigate2}
                  >{`Blog`}</Text>
                  <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-center hover:text-deep_purple_A200 tracking-ls1 w-[auto]">{`About`}</Text>
                  <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-center hover:text-deep_purple_A200 tracking-ls1 w-[auto]">{`Contact`}</Text>
                </Row>
              </Column>
              <Line className="bg-deep_purple_A200 h-[1px] xl:mt-[2px] lg:mt-[2px] mt-[3px] w-[13%]" />
            </Column>
            <Image
              src={"images/img_search21_2.svg"}
              className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[252px] xl:ml-[288px] ml-[324px] 3xl:ml-[389px] mt-[1px] object-contain lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
              alt="search21"
            />
          </Row>
        </header>
        <Text className="font-bold font-publicsans xl:mt-[107px] mt-[121px] 3xl:mt-[145px] lg:mt-[94px] mx-[auto] lg:text-[28px] xl:text-[32px] text-[36px] 3xl:text-[43px] text-left text-white_A700 w-[auto]">{`Contact us`}</Text>
        <Text className="font-light font-publicsans lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] mx-[auto] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`Complete the form to contact us`}</Text>
        <Row className="font-publicsans items-start justify-start lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] lg:pl-[127px] xl:pl-[145px] pl-[164px] 3xl:pl-[196px] lg:pr-[134px] xl:pr-[153px] pr-[173px] 3xl:pr-[207px] w-[100%]">
          <Column className="items-start justify-start lg:mb-[302px] xl:mb-[346px] mb-[389px] 3xl:mb-[467px] w-[22%]">
            <Text className="font-bold lg:text-[28px] xl:text-[32px] text-[36px] 3xl:text-[43px] text-left text-white_A700 w-[auto]">{`Info`}</Text>
            <Row className="items-start justify-start lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] w-[43%]">
              <Image
                src={"images/img_call1.svg"}
                className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mt-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                alt="call1"
              />
              <Text className="font-light ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-left w-[auto]">{`0331223282`}</Text>
            </Row>
            <Row className="items-start justify-start xl:ml-[2px] lg:ml-[2px] ml-[3px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[67%]">
              <Image
                src={"images/img_mail1.svg"}
                className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mb-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                alt="mail1"
              />
              <Text className="font-light ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-left w-[auto]">{`Hellolaos@gmail.com`}</Text>
            </Row>
            <Column className="items-center lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] xl:pl-[2px] lg:pl-[2px] pl-[3px] w-[100%]">
              <Row className="items-start justify-start mx-[auto] w-[99%]">
                <Image
                  src={"images/img_pin1.svg"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mb-[27px] xl:mb-[31px] mb-[35px] 3xl:mb-[42px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] object-contain w-[6%]"
                  alt="pin1"
                />
                <Text className="font-light lg:leading-[23px] xl:leading-[26px] leading-[30.00px] 2xl:leading-[30px] 3xl:leading-[36px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] ml-[8.89px] 2xl:ml-[8px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-left w-[91%]">{`Massachusetts Ave NW, Washington, DC 20036`}</Text>
              </Row>
            </Column>
          </Column>
          <Column className="bg-gray_901 lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] lg:pb-[15px] xl:pb-[17px] pb-[20px] 3xl:pb-[24px] lg:pt-[33px] xl:pt-[38px] pt-[43px] 3xl:pt-[51px] rounded-radius10 shadow-bs4 w-[53%]">
            <Row className="lg:gap-[19px] xl:gap-[22px] gap-[25px] 3xl:gap-[30px] grid grid-cols-2 items-center justify-evenly w-[100%]">
              <Input
                className="placeholder:bg-transparent bg-transparent border border-gray_300 border-solid font-light lg:pl-[19px] xl:pl-[22px] pl-[25px] 3xl:pl-[30px] lg:py-[17px] xl:py-[20px] py-[23.06px] 2xl:py-[23px] 3xl:py-[27px] rounded-radius5 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] placeholder:text-gray_400 text-gray_400 text-left w-[100%]"
                name="field"
                placeholder={`Your Name`}
              ></Input>
              <Input
                className="placeholder:bg-transparent bg-transparent border border-gray_300 border-solid font-light lg:pl-[19px] xl:pl-[22px] pl-[25px] 3xl:pl-[30px] lg:py-[17px] xl:py-[20px] py-[23.06px] 2xl:py-[23px] 3xl:py-[27px] rounded-radius5 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] placeholder:text-gray_400 text-gray_400 text-left w-[100%]"
                name="field"
                placeholder={`Your Email`}
              ></Input>
            </Row>
            <Column className="items-start lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] lg:pl-[21px] xl:pl-[24px] pl-[27px] 3xl:pl-[32px] lg:pr-[20px] xl:pr-[23px] pr-[26px] 3xl:pr-[31px] w-[100%]">
              <Input
                className="placeholder:bg-transparent bg-transparent border border-gray_300 border-solid font-light lg:pl-[19px] xl:pl-[22px] pl-[25px] 3xl:pl-[30px] lg:py-[17px] xl:py-[20px] py-[23.06px] 2xl:py-[23px] 3xl:py-[27px] rounded-radius5 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] placeholder:text-gray_400 text-gray_400 text-left w-[93%]"
                name="field"
                placeholder={`Your Subject`}
              ></Input>
              <TextArea
                className="placeholder:bg-transparent bg-transparent border border-gray_300 border-solid font-light lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] lg:pb-[28px] xl:pb-[32px] pb-[37.06px] 2xl:pb-[37px] 3xl:pb-[44px] lg:pl-[19px] xl:pl-[22px] pl-[25px] 3xl:pl-[30px] lg:pt-[16px] xl:pt-[18px] pt-[21.06px] 2xl:pt-[21px] 3xl:pt-[25px] rounded-radius5 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] placeholder:text-gray_400 text-gray_400 text-left w-[93%]"
                name="field"
                placeholder={`Description`}
              ></TextArea>
              <Button className="bg-deep_purple_A200 font-normal lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] not-italic lg:pb-[19px] xl:pb-[22px] pb-[25.55px] 2xl:pb-[25px] 3xl:pb-[30px] lg:pt-[20px] xl:pt-[23px] pt-[26.55px] 2xl:pt-[26px] 3xl:pt-[31px] rounded-radius5 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center text-white_A700 w-[25%]">{`Send Message`}</Button>
            </Column>
          </Column>
        </Row>
        <footer className="mt-[100px] 3xl:mt-[120px] lg:mt-[77px] xl:mt-[88px] w-[100%]">
          <Column className="bg-gray_901 items-center justify-end lg:pb-[27px] xl:pb-[31px] pb-[35px] 3xl:pb-[42px] lg:pl-[129px] xl:pl-[147px] pl-[166px] 3xl:pl-[199px] lg:pr-[128px] xl:pr-[146px] pr-[165px] 3xl:pr-[198px] lg:pt-[47px] xl:pt-[54px] pt-[61px] 3xl:pt-[73px] w-[100%]">
            <Row className="font-merriweather items-center justify-between mx-[auto] w-[77%]">
              <Column className="items-start w-[15%]">
                <Text className="font-black lg:text-[28px] xl:text-[32px] text-[36px] 3xl:text-[43px] text-gray_200 text-left w-[auto]">{`Laos`}</Text>
                <Column className="font-publicsans lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                  <Row className="items-start justify-start w-[100%]">
                    <Image
                      src={"images/img_heart31_2.svg"}
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
                  src={"images/img_group94_2.svg"}
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

export default ContactusPage;
