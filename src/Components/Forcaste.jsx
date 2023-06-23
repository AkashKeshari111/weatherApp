import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Spacer,
  Spinner,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Forcaste = ({ weatherData, loading }) => {
  const currentDate = new Date();
  var options = { weekday: "long" };
  var dayOfWeek = currentDate.toLocaleDateString("en-US", options);

  return (
    <Box w="100%" p={4} mt={10} mb={10}>
      {loading ? (
        <Center>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      ) : weatherData ? (
        <Stack>
          <Center>
            <Flex
              gap={4}
              flexDir={{ base: "column", md: "row" }}
              rowGap={{ base: "10px", md: "0px" }}
            >
              <Box
                w="300px"
                h="210px"
                bg="rgba(0,0,0,0.2)"
                borderRadius={{ base: "20px", md: "20px 20px 0px 0px" }}
              >
                <VStack>
                  <Box borderBottom={"2px solid lightGray"} p={4} pb={1}>
                    <Heading
                      as="h5"
                      fontSize={"20px"}
                      color="rgb(49,130,206)"
                      fontWeight={500}
                      fontFamily="Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif"
                    >
                      Local Weather Report
                    </Heading>
                  </Box>

                  <Flex
                    w="100%"
                    h="125px"
                    justifyContent={"center"}
                    gap={4}
                    mt={2}
                    mb={2}
                  >
                    {weatherData.location.localtime.slice(10, 13) >= 18 ? (
                      <Box
                        w="40%"
                        h="100%"
                        borderRadius="50%"
                        background="radial-gradient(circle, #f2f2f2, #808080)"
                      ></Box>
                    ) : (
                      <Box
                        w="40%"
                        h="100%"
                        borderRadius="50%"
                        background="radial-gradient(circle, #FFDD00 20%, #FFA500 70%)"
                      ></Box>
                    )}
                    <Box
                      w="40%"
                      h="100%"
                      pt={2}
                      display={"flex"}
                      flexDir={"column"}
                      alignItems={"center"}
                      fontFamily="Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif"
                    >
                      <Heading as="h6" fontSize={"18px"} fontWeight={500}>
                        Temperature
                      </Heading>
                      <Text
                        fontSize={"45px"}
                        lineHeight={"50px"}
                        fontWeight={600}
                        color="rgba(255,255,255,0.7)"
                      >
                        {weatherData.current.temp_c}
                        <Box as="span" fontSize={"20px"}>
                          {" "}
                          °C
                        </Box>
                      </Text>
                      <Text
                        fontSize={"20px"}
                        mt={2}
                        ml="-15px"
                        color="rgb(55,134,208)"
                        border="2px solid lightGray"
                        p={"0px 10px"}
                        borderRadius="10px"
                      >
                        {weatherData.current.temp_f} °F
                      </Text>
                    </Box>
                  </Flex>
                </VStack>
              </Box>
              <Box
                w="300px"
                h="210px"
                bg="rgba(0,0,0,0.2)"
                borderRadius={{ base: "20px", md: "20px 20px 0px 0px" }}
              >
                <VStack>
                  <Box borderBottom={"2px solid lightGray"} p={4} pb={1}>
                    <Heading
                      as="h5"
                      fontSize={"20px"}
                      color="rgb(49,130,206)"
                      fontWeight={500}
                      fontFamily="Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif"
                    >
                      {weatherData.location.country}
                    </Heading>
                  </Box>
                  <Box
                    p={1}
                    pl={7}
                    fontSize={"18px"}
                    w="100%"
                    color="rgba(255,255,255,0.8)"
                    fontFamily="Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif"
                  >
                    <Text>
                      <Box as="span" color="rgba(0,0,0,.7)" fontWeight={500}>
                        City:{" "}
                      </Box>{" "}
                      {weatherData.location.name}
                    </Text>
                    <Text>
                      <Box as="span" color="rgba(0,0,0,.7)" fontWeight={500}>
                        State:{" "}
                      </Box>{" "}
                      {weatherData.location.region}
                    </Text>
                    <Text>
                      <Box as="span" color="rgba(0,0,0,.7)" fontWeight={500}>
                        TimeZone:{" "}
                      </Box>{" "}
                      {weatherData.location.tz_id}
                    </Text>
                    <Text>
                      <Box as="span" color="rgba(0,0,0,.7)" fontWeight={500}>
                        Date:{" "}
                      </Box>{" "}
                      {weatherData.location.localtime.slice(0, 10)}
                    </Text>
                    <Text>
                      <Box as="span" color="rgba(0,0,0,.7)" fontWeight={500}>
                        Time:{" "}
                      </Box>{" "}
                      {weatherData.location.localtime.slice(10, 16)}
                    </Text>
                  </Box>
                </VStack>
              </Box>
            </Flex>
          </Center>

          <Center mt={4}>
            <Box
              w={{ base: "300px", md: "617px", lg: "617px" }}
              h="135px"
              bg={{ base: "transparent", md: "rgba(0,0,0,0.2)" }}
              fontFamily="Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif"
            >
              <VStack h="100%" spacing={0}>
                <Box
                  w="100%"
                  h={{ base: "auto", md: "70%" }}
                  color="rgba(255,255,255,0.8)"
                  display={"flex"}
                  flexDir={{ base: "column", md: "row" }}
                  justifyContent={{ base: "left", md: "center" }}
                  alignItems="center"
                  fontSize={"16px"}
                  // border="1px solid red"
                  rowGap={{ base: "20px", md: "0px" }}
                  mb={{ base: "20px", md: "0px" }}
                >
                  <Box
                    w={{ base: "100%", md: "27%" }}
                    h="100%"
                    pl={1}
                    display={"flex"}
                    flexDir={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    bg={{ base: "rgba(0,0,0,0.2)", md: "none" }}
                    p={{ base: "10px", md: "0px" }}
                  >
                    <Text>
                      <Box as="span" fontSize={"18px"}>
                        Wind Speed:
                      </Box>{" "}
                      {weatherData.current.wind_kph} km/h
                    </Text>
                    <Text>
                      <Box as="span" fontSize={"18px"}>
                        Wind Dir:
                      </Box>{" "}
                      {weatherData.current.wind_dir}
                    </Text>
                  </Box>

                  <Box
                    w={{ base: "100%", md: "25%" }}
                    h="100%"
                    display={"flex"}
                    flexDir={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    bg={{ base: "rgba(0,0,0,0.2)", md: "none" }}
                    p={{ base: "10px", md: "0px" }}
                  >
                    <Text>
                      <Box as="span" fontSize={"18px"}>
                        Humidity:{" "}
                      </Box>
                      {weatherData.current.humidity}%
                    </Text>
                    <Text>
                      <Box as="span" fontSize={"18px"}>
                        Precipitation:{" "}
                      </Box>{" "}
                      {weatherData.current.precip_in}%
                    </Text>
                  </Box>
                  <Box
                    w={{ base: "100%", md: "23%" }}
                    h="100%"
                    display={"flex"}
                    flexDir={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    bg={{ base: "rgba(0,0,0,0.2)", md: "none" }}
                    p={{ base: "10px", md: "0px" }}
                  >
                    <Text fontSize={"18px"}>Feels Like : </Text>
                    <Text> {weatherData.current.feelslike_c} °C</Text>
                    <Text> {weatherData.current.feelslike_f} °F</Text>
                  </Box>
                  <Box
                    w={{ base: "100%", md: "25%" }}
                    h="100%"
                    display={"flex"}
                    flexDir={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    bg={{ base: "rgba(0,0,0,0.2)", md: "none" }}
                    p={{ base: "10px", md: "0px" }}
                  >
                    <Text fontSize={"18px"}>AQI :</Text>
                    <Text>
                      <Box as="span" fontSize={"16px"}>
                        PM<sub>2.5</sub>:
                      </Box>{" "}
                      {weatherData.current.air_quality.pm2_5.toFixed(1)} µg/m3
                    </Text>
                    <Text>
                      <Box as="span" fontSize={"16px"}>
                        PM<sub>10</sub>:
                      </Box>{" "}
                      {weatherData.current.air_quality.pm10.toFixed(1)} µg/m3
                    </Text>
                  </Box>
                </Box>
                <Divider color={"lightGray"} />
                <Box
                  w="100%"
                  h={{ base: "200px", md: "30%" }}
                  pl={4}
                  pr={4}
                  display={"flex"}
                  alignItems={"center"}
                  flexDir={{ base: "column", md: "row" }}
                  // border="1px solid red"
                  bg={{ base: "rgba(0,0,0,0.2)", md: "none" }}
                >
                  <Box
                    color="white"
                    display={"flex"}
                    fontWeight={600}
                    mt="10px"
                    flexDir={{ base: "column", md: "row" }}
                    rowGap={{ base: "10px", md: "0px" }}
                    alignItems={{ base: "center", md: "none" }}
                  >
                    <Box as="span" color="rgba(0,0,0,.7)" fontSize={"16px"}>
                      Weather Condition :-
                    </Box>{" "}
                    &nbsp;{weatherData.current.condition.text}{" "}
                    <Box
                      w={{ base: "100px", md: "50px" }}
                      h={{ base: "100px", md: "40px" }}
                      mt="-5px"
                      ml="-2px"
                    >
                      <Image
                        w="100%"
                        h="100%"
                        src={weatherData?.current.condition.icon}
                      />
                    </Box>
                  </Box>
                  <Spacer />
                  <Box
                    as="span"
                    color="rgb(49,130,206)"
                    p={"0px 10px"}
                    fontSize={"18px"}
                    fontWeight={500}
                    border="2px solid lightGray"
                    borderRadius="10px"
                    display={{ base: "none", md: "block" }}
                  >
                    {dayOfWeek}
                  </Box>
                </Box>
              </VStack>
            </Box>
          </Center>
        </Stack>
      ) : (
        <Center>
          <Box w={{ base: "95%", md: "60%", lg: "45%" }} h="400px">
            <Image
              src="./noweather.png"
              alt="no weather report show"
              objectFit="contain"
              w="100%"
              h="100%"
            />
          </Box>
        </Center>
      )}
    </Box>
  );
};

export default Forcaste;
