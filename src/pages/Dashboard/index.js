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
import { getLatest } from "service/api";

const DashboardPage = () => {
  const [apiData, setapiData] = React.useState();
  React.useEffect(() => {
    callApi();
  }, []);
  const navigate = useNavigate();

  function callApi() {
    const req = { params: { per_page: "3" } };
    getLatest(req)
      .then((res) => {
        setapiData(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function handleNavigate7() {
    navigate("/blogpost1");
  }
  function handleNavigate8() {
    navigate("/contactus");
  }
  function handleNavigate14() {
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
                    onClick={handleNavigate14}
                  >{`Podcast`}</Text>
                  <Text
                    className="common-pointer cursor-pointer hover:font-bold font-bold lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-center hover:text-deep_purple_A200 tracking-ls1 w-[auto]"
                    onClick={handleNavigate7}
                  >{`Blog`}</Text>
                  <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-center hover:text-deep_purple_A200 tracking-ls1 w-[auto]">{`About`}</Text>
                  <Text
                    className="common-pointer cursor-pointer hover:font-bold font-bold lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-center hover:text-deep_purple_A200 tracking-ls1 w-[auto]"
                    onClick={handleNavigate8}
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
        <Row className="items-start justify-start lg:mt-[56px] xl:mt-[64px] mt-[72px] 3xl:mt-[86px] mx-[auto] w-[77%]">
          <List className="gap-[0] min-h-[auto] w-[66%]" orientation="vertical">
            {apiData?.map((apiDataEle) => {
              return (
                <Column className="font-publicsans items-center lg:my-[11px] xl:my-[13px] my-[15px] 3xl:my-[18px] xl:pl-[1px] lg:pl-[1px] pl-[2px] w-[100%]">
                  <Row className="items-center justify-start w-[100%]">
                    <Image
                      src={apiDataEle?.user?.profile_image}
                      className="lg:h-[55px] xl:h-[63px] h-[70px] 2xl:h-[71px] 3xl:h-[85px] object-contain lg:w-[54px] xl:w-[62px] w-[70px] 3xl:w-[84px]"
                      alt="Ellipse5"
                    />
                    <Column className="items-start lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:my-[10px] xl:my-[12px] my-[14px] 3xl:my-[16px] w-[22%]">
                      <Text className="font-semibold mx-[auto] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center text-white_A700 w-[auto]">
                        {apiDataEle?.user?.name}
                      </Text>
                      <Text className="font-light lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[auto]">
                        {apiDataEle?.readable_publish_date}
                      </Text>
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
              );
            })}
          </List>
          <Column className="items-start justify-start mb-[1122px] 3xl:mb-[1347px] lg:mb-[872px] xl:mb-[998px] lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] w-[32%]">
            <Column className="items-center pl-[1px] xl:pr-[1px] lg:pr-[1px] pr-[2px] w-[100%]">
              <Image
                src={"images/img_rectangle10.png"}
                className="lg:h-[312px] xl:h-[356px] h-[400px] 2xl:h-[401px] 3xl:h-[481px] mx-[auto] object-contain rounded-radius5 w-[99%]"
                alt="Rectangle10"
              />
            </Column>
            <Text className="font-bold font-merriweather ml-[1px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-left text-white_A700 w-[auto]">{`Jhone Leonardo`}</Text>
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
        <Stack className="font-publicsans lg:h-[334px] xl:h-[381px] h-[428.17993px] 2xl:h-[429px] 3xl:h-[515px] lg:mt-[36px] xl:mt-[41px] mt-[47px] 3xl:mt-[56px] mx-[auto] w-[77%]">
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
          <div className="absolute bg-orange_500 lg:h-[35px] xl:h-[41px] h-[45px] 2xl:h-[46px] 3xl:h-[55px] left-[41%] rounded-radius501 shadow-bs1 top-[0] lg:w-[35px] xl:w-[40px] w-[45px] 3xl:w-[54px]"></div>
        </Stack>
        <footer className="lg:mt-[20px] xl:mt-[23px] mt-[26.82px] 2xl:mt-[26px] 3xl:mt-[32px] w-[100%]">
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
