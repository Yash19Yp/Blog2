import React from "react";

import { useNavigate } from "react-router-dom";
import { getArticles } from "service/api";
import { Column, Row, Text, Line, Image, Grid, Stack, List } from "components";

const BlogPost1Page = () => {
  const [apiData, setapiData] = React.useState();
  React.useEffect(() => {
    callApi();
  }, []);
  const navigate = useNavigate();

  function callApi() {
    const req = { params: { per_page: "6" } };
    getArticles(req)
      .then((res) => {
        setapiData(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function handleNavigate1() {
    navigate("/blog", { state: { id: undefined?.response } });
  }
  function handleNavigate4() {
    navigate("/");
  }
  function handleNavigate5() {
    navigate("/podcasts");
  }
  function handleNavigate6() {
    navigate("/contactus");
  }

  return (
    <>
      <Column className="bg-gray_901 items-start justify-end mx-[auto] lg:pt-[28px] xl:pt-[32px] pt-[37px] 3xl:pt-[44px] w-[100%]">
        <Column className="font-nunitosans items-center lg:pl-[128px] xl:pl-[146px] pl-[165px] 3xl:pl-[198px] lg:pr-[127px] xl:pr-[145px] pr-[164px] 3xl:pr-[196px] w-[100%]">
          <header className="mx-[auto] w-[77%]">
            <Row className="items-start justify-start w-[100%]">
              <Text className="font-black lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 w-[auto]">{`LAOS.`}</Text>
              <Column className="font-publicsans items-start justify-start xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:ml-[218px] xl:ml-[249px] ml-[281px] 3xl:ml-[337px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[36%]">
                <Column className="w-[100%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Text
                      className="common-pointer cursor-pointer hover:font-bold font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center text-deep_purple_A200 tracking-ls1 w-[auto]"
                      onClick={handleNavigate4}
                    >{`Home`}</Text>
                    <Text
                      className="common-pointer cursor-pointer hover:font-bold font-bold lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-center hover:text-deep_purple_A200 tracking-ls1 w-[auto]"
                      onClick={handleNavigate5}
                    >{`Podcast`}</Text>
                    <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-center hover:text-deep_purple_A200 tracking-ls1 w-[auto]">{`Blog`}</Text>
                    <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-center hover:text-deep_purple_A200 tracking-ls1 w-[auto]">{`About`}</Text>
                    <Text
                      className="common-pointer cursor-pointer hover:font-bold font-bold lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_300 text-center hover:text-deep_purple_A200 tracking-ls1 w-[auto]"
                      onClick={handleNavigate6}
                    >{`Contact`}</Text>
                  </Row>
                </Column>
                <Line className="bg-deep_purple_A200 h-[1px] xl:mt-[2px] lg:mt-[2px] mt-[3px] w-[13%]" />
              </Column>
              <Image
                src={"images/img_search21_4.svg"}
                className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[252px] xl:ml-[288px] ml-[324px] 3xl:ml-[389px] mt-[1px] object-contain lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                alt="search21"
              />
            </Row>
          </header>
        </Column>
        <Text className="font-black font-merriweather ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] mt-[111px] 3xl:mt-[133px] lg:mt-[86px] xl:mt-[98px] lg:text-[28px] xl:text-[32px] text-[36px] 3xl:text-[43px] text-center text-white_A700 w-[auto]">{`Articles by dev.to`}</Text>
        <Text className="font-normal font-publicsans ml-[103px] 3xl:ml-[123px] lg:ml-[80px] xl:ml-[91px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_300 text-center tracking-ls1 w-[auto]">{`Get started on latest Articles`}</Text>
        <Column className="font-mulish items-center lg:mt-[21px] xl:mt-[24px] mt-[27.29px] 2xl:mt-[27px] 3xl:mt-[32px] pl-[102px] 3xl:pl-[122px] lg:pl-[79px] xl:pl-[90px] lg:pr-[49px] xl:pr-[56px] pr-[63px] 3xl:pr-[75px] w-[100%]">
          <Grid className="lg:gap-[23px] xl:gap-[26px] gap-[30px] 3xl:gap-[36px] grid grid-cols-3 mx-[auto] w-[89%]">
            {apiData?.map((apiDataEle) => {
              return (
                <Column
                  className="common-pointer bg-white_A700 lg:pb-[15px] xl:pb-[17px] pb-[19.37px] 2xl:pb-[19px] 3xl:pb-[23px] lg:pt-[13px] xl:pt-[15px] pt-[17.6px] 2xl:pt-[17px] 3xl:pt-[21px] rounded-radius5 shadow-bs4 w-[100%]"
                  onClick={handleNavigate1}
                >
                  <Column className="items-center lg:pl-[14px] xl:pl-[16px] pl-[18.75px] 2xl:pl-[18px] 3xl:pl-[22px] lg:pr-[11px] xl:pr-[12px] pr-[14.47px] 2xl:pr-[14px] 3xl:pr-[17px] w-[100%]">
                    <Image
                      src={apiDataEle?.social_image}
                      className="lg:h-[189px] xl:h-[217px] h-[242.84px] 2xl:h-[244px] 3xl:h-[292px] mx-[auto] object-contain rounded-radius5 w-[92%]"
                      alt="Rectangle9"
                    />
                  </Column>
                  <Column className="items-start lg:mt-[14px] xl:mt-[16px] mt-[18.07px] 2xl:mt-[18px] 3xl:mt-[21px] lg:pl-[21px] xl:pl-[24px] pl-[28.1px] 2xl:pl-[28px] 3xl:pl-[33px] lg:pr-[11px] xl:pr-[12px] pr-[14.53px] 2xl:pr-[14px] 3xl:pr-[17px] w-[100%]">
                    <Text className="font-cabin font-medium ml-[0] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_901 text-left w-[auto]">
                      {apiDataEle?.title}
                    </Text>
                    <Text className="font-mulish font-semibold leading-[normal] ml-[0] lg:mt-[13px] xl:mt-[15px] mt-[16.93px] 2xl:mt-[16px] 3xl:mt-[20px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left w-[89%]">
                      {apiDataEle?.description}
                    </Text>
                  </Column>
                  <Column className="items-center lg:mt-[18px] xl:mt-[20px] mt-[23.53px] 2xl:mt-[23px] 3xl:mt-[28px] w-[100%]">
                    <Row className="items-center justify-start lg:pl-[21px] xl:pl-[24px] pl-[28.1px] 2xl:pl-[28px] 3xl:pl-[33px] lg:pr-[25px] xl:pr-[29px] pr-[32.95px] 2xl:pr-[32px] 3xl:pr-[39px] w-[100%]">
                      <Image
                        src={apiDataEle?.user?.profile_image}
                        className="lg:h-[28px] xl:h-[32px] h-[35.2px] 2xl:h-[36px] 3xl:h-[43px] object-contain w-[10%]"
                        alt="Ellipse"
                      />
                      <Text className="font-semibold lg:mb-[15px] xl:mb-[17px] mb-[20.14px] 2xl:mb-[20px] 3xl:mb-[24px] lg:ml-[17px] xl:ml-[19px] ml-[22.25px] 2xl:ml-[22px] 3xl:ml-[26px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] mt-[8.47px] 2xl:mt-[8px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_500 text-left w-[auto]">
                        {apiDataEle?.user?.name}
                      </Text>
                      <Stack className="lg:h-[14px] h-[16.95px] xl:h-[16px] 2xl:h-[17px] 3xl:h-[21px] xl:mb-[10px] mb-[11.66px] 2xl:mb-[11px] 3xl:mb-[14px] lg:mb-[9px] xl:mt-[5px] lg:mt-[5px] mt-[6.59px] 2xl:mt-[6px] 3xl:mt-[7px] w-[44%]">
                        <Text className="absolute bottom-[0] font-semibold left-[0] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_200 text-left w-[auto]">{`I`}</Text>
                        <Text className="absolute font-semibold right-[0] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_500 text-left top-[0] w-[auto]">
                          {apiDataEle?.readable_publish_date}
                        </Text>
                      </Stack>
                    </Row>
                  </Column>
                </Column>
              );
            })}
          </Grid>
        </Column>
        <Row className="font-publicsans items-start justify-start ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] lg:mt-[28px] xl:mt-[32px] mt-[36.74px] 2xl:mt-[36px] 3xl:mt-[44px] w-[15%]">
          <Column className="bg-deep_purple_A200 items-center justify-start lg:pb-[5px] xl:pb-[6px] pb-[7.23px] 2xl:pb-[7px] 3xl:pb-[8px] 3xl:pt-[11px] lg:pt-[7px] xl:pt-[8px] pt-[9.41px] 2xl:pt-[9px] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] rounded-radius1882 w-[19%]">
            <Text className="font-normal mx-[auto] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`1`}</Text>
          </Column>
          <Column className="bg-white_A700 items-center justify-start lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:pb-[5px] xl:pb-[6px] pb-[7.23px] 2xl:pb-[7px] 3xl:pb-[8px] lg:pl-[11px] xl:pl-[13px] pl-[15px] 3xl:pl-[18px] lg:pr-[10px] xl:pr-[12px] pr-[14px] 3xl:pr-[16px] 3xl:pt-[11px] lg:pt-[7px] xl:pt-[8px] pt-[9.41px] 2xl:pt-[9px] rounded-radius1882 w-[19%]">
            <Text className="font-normal mx-[auto] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-deep_purple_A200 text-left w-[auto]">{`2`}</Text>
          </Column>
          <Row className="items-center justify-between lg:mb-[5px] xl:mb-[6px] mb-[7.23px] 2xl:mb-[7px] 3xl:mb-[8px] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] mt-[9.41px] 2xl:mt-[9px] w-[34%]">
            <Text className="font-light lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-deep_purple_A200 text-left w-[auto]">{`Next`}</Text>
            <Image
              src={"images/img_arrowpointing_2.svg"}
              className="lg:h-[12px] xl:h-[14px] h-[15.05px] 2xl:h-[16px] 3xl:h-[19px] mb-[3.13px] 2xl:mb-[3px] lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] mt-[2.82px] 2xl:mt-[2px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] object-contain w-[23%]"
              alt="arrowpointing"
            />
          </Row>
        </Row>
        <Column className="items-center lg:mt-[50px] xl:mt-[57px] mt-[64.36px] 2xl:mt-[64px] 3xl:mt-[77px] w-[100%]">
          <Column className="items-start justify-start mx-[auto] w-[89%]">
            <Text className="font-black font-merriweather lg:ml-[4px] ml-[5.97px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[7px] lg:text-[28px] xl:text-[32px] text-[36px] 3xl:text-[43px] text-center text-white_A700 w-[auto]">{`Publications from Medium`}</Text>
            <Text className="font-normal font-publicsans lg:ml-[6px] ml-[7.96px] 2xl:ml-[7px] xl:ml-[7px] 3xl:ml-[9px] mt-[1px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_300 text-center tracking-ls1 w-[auto]">{`Publications user follows on medium`}</Text>
            <Column className="items-center lg:mt-[23px] xl:mt-[26px] mt-[30.19px] 2xl:mt-[30px] 3xl:mt-[36px] lg:pl-[4px] pl-[5.97px] 2xl:pl-[5px] xl:pl-[5px] 3xl:pl-[7px] w-[100%]">
              <List
                className="lg:gap-[23px] xl:gap-[26px] gap-[29.899963px] 2xl:gap-[29px] 3xl:gap-[35px] grid grid-cols-3 min-h-[auto] w-[100%]"
                orientation="horizontal"
              >
                <Column className="bg-white_A700 lg:pb-[44px] xl:pb-[51px] pb-[57.34px] 2xl:pb-[57px] 3xl:pb-[68px] lg:pt-[15px] xl:pt-[17px] pt-[19.66px] 2xl:pt-[19px] 3xl:pt-[23px] rounded-radius5 shadow-bs4 w-[100%]">
                  <Column className="items-center lg:pl-[14px] xl:pl-[16px] pl-[18.67px] 2xl:pl-[18px] 3xl:pl-[22px] lg:pr-[11px] xl:pr-[12px] pr-[14.4px] 2xl:pr-[14px] 3xl:pr-[17px] w-[100%]">
                    <Image
                      src={"images/img_rectangle9_18.png"}
                      className="lg:h-[211px] xl:h-[242px] h-[271.24px] 2xl:h-[272px] 3xl:h-[326px] mx-[auto] object-contain rounded-radius5 w-[92%]"
                      alt="Rectangle9"
                    />
                  </Column>
                  <Column className="items-start lg:mt-[15px] xl:mt-[17px] mt-[20.18px] 2xl:mt-[20px] 3xl:mt-[24px] lg:pl-[21px] xl:pl-[24px] pl-[27.97px] 2xl:pl-[27px] 3xl:pl-[33px] lg:pr-[11px] xl:pr-[12px] pr-[14.46px] 2xl:pr-[14px] 3xl:pr-[17px] w-[100%]">
                    <Text className="font-cabin font-medium leading-[normal] ml-[0] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_901 text-left w-[89%]">{`The Emotional Toll of Being in UX`}</Text>
                    <Text className="font-mulish font-semibold leading-[normal] ml-[0] lg:mt-[14px] xl:mt-[16px] mt-[18.91px] 2xl:mt-[18px] 3xl:mt-[22px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left w-[89%]">{`There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand`}</Text>
                    <Text className="font-mulish font-semibold ml-[1px] lg:mt-[10px] xl:mt-[12px] mt-[13.88px] 2xl:mt-[13px] 3xl:mt-[16px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_500 text-left w-[auto]">{`Wade Warren`}</Text>
                  </Column>
                </Column>
                <Column className="bg-white_A700 lg:pb-[44px] xl:pb-[51px] pb-[57.34px] 2xl:pb-[57px] 3xl:pb-[68px] lg:pt-[15px] xl:pt-[17px] pt-[19.66px] 2xl:pt-[19px] 3xl:pt-[23px] rounded-radius5 shadow-bs4 w-[100%]">
                  <Column className="items-center lg:pl-[14px] xl:pl-[16px] pl-[18.67px] 2xl:pl-[18px] 3xl:pl-[22px] lg:pr-[11px] xl:pr-[12px] pr-[14.4px] 2xl:pr-[14px] 3xl:pr-[17px] w-[100%]">
                    <Image
                      src={"images/img_rectangle9_19.png"}
                      className="lg:h-[211px] xl:h-[242px] h-[271.24px] 2xl:h-[272px] 3xl:h-[326px] mx-[auto] object-contain rounded-radius5 w-[92%]"
                      alt="Rectangle9"
                    />
                  </Column>
                  <Column className="items-start lg:mt-[15px] xl:mt-[17px] mt-[20.18px] 2xl:mt-[20px] 3xl:mt-[24px] lg:pl-[21px] xl:pl-[24px] pl-[27.97px] 2xl:pl-[27px] 3xl:pl-[33px] lg:pr-[11px] xl:pr-[12px] pr-[14.46px] 2xl:pr-[14px] 3xl:pr-[17px] w-[100%]">
                    <Text className="font-cabin font-medium leading-[normal] ml-[0] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_901 text-left w-[89%]">{`The Emotional Toll of Being in UX`}</Text>
                    <Text className="font-mulish font-semibold leading-[normal] ml-[0] lg:mt-[14px] xl:mt-[16px] mt-[18.91px] 2xl:mt-[18px] 3xl:mt-[22px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left w-[89%]">{`There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand`}</Text>
                    <Text className="font-mulish font-semibold ml-[1px] lg:mt-[10px] xl:mt-[12px] mt-[13.88px] 2xl:mt-[13px] 3xl:mt-[16px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_500 text-left w-[auto]">{`Wade Warren`}</Text>
                  </Column>
                </Column>
                <Column className="bg-white_A700 lg:pb-[44px] xl:pb-[51px] pb-[57.34px] 2xl:pb-[57px] 3xl:pb-[68px] lg:pt-[15px] xl:pt-[17px] pt-[19.66px] 2xl:pt-[19px] 3xl:pt-[23px] rounded-radius5 shadow-bs4 w-[100%]">
                  <Column className="items-center lg:pl-[14px] xl:pl-[16px] pl-[18.67px] 2xl:pl-[18px] 3xl:pl-[22px] lg:pr-[11px] xl:pr-[12px] pr-[14.4px] 2xl:pr-[14px] 3xl:pr-[17px] w-[100%]">
                    <Image
                      src={"images/img_rectangle9_20.png"}
                      className="lg:h-[211px] xl:h-[242px] h-[271.24px] 2xl:h-[272px] 3xl:h-[326px] mx-[auto] object-contain rounded-radius5 w-[92%]"
                      alt="Rectangle9"
                    />
                  </Column>
                  <Column className="items-start lg:mt-[15px] xl:mt-[17px] mt-[20.18px] 2xl:mt-[20px] 3xl:mt-[24px] lg:pl-[21px] xl:pl-[24px] pl-[27.97px] 2xl:pl-[27px] 3xl:pl-[33px] lg:pr-[11px] xl:pr-[12px] pr-[14.46px] 2xl:pr-[14px] 3xl:pr-[17px] w-[100%]">
                    <Text className="font-cabin font-medium leading-[normal] ml-[0] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_901 text-left w-[89%]">{`The Emotional Toll of Being in UX`}</Text>
                    <Text className="font-mulish font-semibold leading-[normal] ml-[0] lg:mt-[14px] xl:mt-[16px] mt-[18.91px] 2xl:mt-[18px] 3xl:mt-[22px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left w-[89%]">{`There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand`}</Text>
                    <Text className="font-mulish font-semibold ml-[1px] lg:mt-[10px] xl:mt-[12px] mt-[13.88px] 2xl:mt-[13px] 3xl:mt-[16px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_500 text-left w-[auto]">{`Wade Warren`}</Text>
                  </Column>
                </Column>
              </List>
            </Column>
            <Row className="font-publicsans items-center justify-start lg:mt-[37px] xl:mt-[43px] mt-[48.66px] 2xl:mt-[48px] 3xl:mt-[58px] w-[16%]">
              <Column className="bg-deep_purple_A200 items-center pb-[10.53px] pl-[15.92px] pr-[15.89px] pt-[10.51px] lg:px-[12px] xl:px-[14px] 2xl:px-[15px] 3xl:px-[19px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[8px] xl:py-[9px] rounded-radius2102 w-[19%]">
                <Text className="font-normal mx-[auto] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`1`}</Text>
              </Column>
              <Column className="bg-white_A700 items-center lg:ml-[15px] xl:ml-[17px] ml-[19.91px] 2xl:ml-[19px] 3xl:ml-[23px] pb-[10.53px] lg:pl-[11px] xl:pl-[13px] pl-[14.93px] 2xl:pl-[14px] 3xl:pl-[17px] lg:pr-[10px] xl:pr-[12px] pr-[13.88px] 2xl:pr-[13px] 3xl:pr-[16px] pt-[10.51px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[8px] xl:py-[9px] rounded-radius2102 w-[19%]">
                <Text className="font-normal mx-[auto] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-deep_purple_A200 text-left w-[auto]">{`2`}</Text>
              </Column>
              <Row className="items-start justify-between mb-[10.53px] lg:ml-[30px] xl:ml-[35px] ml-[39.81px] 2xl:ml-[39px] 3xl:ml-[47px] mt-[10.51px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] w-[34%]">
                <Text className="font-light lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-deep_purple_A200 text-left w-[auto]">{`Next`}</Text>
                <Image
                  src={"images/img_arrowpointing_3.svg"}
                  className="lg:h-[14px] xl:h-[15px] h-[16.82px] 2xl:h-[17px] 3xl:h-[21px] mb-[1px] lg:ml-[11px] xl:ml-[13px] ml-[14.75px] 2xl:ml-[14px] 3xl:ml-[17px] xl:mt-[2px] lg:mt-[2px] mt-[3.15px] 3xl:mt-[3px] 2xl:mt-[3px] object-contain w-[23%]"
                  alt="arrowpointing"
                />
              </Row>
            </Row>
          </Column>
          <footer className="xl:mt-[101px] mt-[113.96px] 2xl:mt-[114px] 3xl:mt-[136px] lg:mt-[88px] w-[100%]">
            <Column className="bg-gray_901 items-center justify-end lg:pb-[27px] xl:pb-[31px] pb-[35px] 3xl:pb-[42px] lg:pl-[129px] xl:pl-[147px] pl-[166px] 3xl:pl-[199px] lg:pr-[128px] xl:pr-[146px] pr-[165px] 3xl:pr-[198px] lg:pt-[47px] xl:pt-[54px] pt-[61px] 3xl:pt-[73px] w-[100%]">
              <Row className="font-merriweather items-center justify-between mx-[auto] w-[77%]">
                <Column className="items-start w-[15%]">
                  <Text className="font-black lg:text-[28px] xl:text-[32px] text-[36px] 3xl:text-[43px] text-gray_200 text-left w-[auto]">{`Laos`}</Text>
                  <Column className="font-publicsans lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                    <Row className="items-start justify-start w-[100%]">
                      <Image
                        src={"images/img_heart31_4.svg"}
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
                    src={"images/img_group94_4.svg"}
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

export default BlogPost1Page;
