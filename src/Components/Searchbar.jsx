import {
  Box,
  Center,
  CloseButton,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { CgSearchLoading } from "react-icons/cg";
import { TiWeatherPartlySunny } from "react-icons/ti";
import axios from "axios";

const Searchbar = ({ weatherData, setWeatherData,loading, setLoading }) => {
  const [location, setLocation] = useState("");
  const toast = useToast();

  const handleSearch = async (e) => {
   
    if (e.key == "Enter") {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://hilarious-lion-scrubs.cyclic.app/weather?location=${location}`
        );
        setLoading(false);
        setWeatherData(response.data);
        console.log(response.data);
        showToast(
          `Show the current weather report of ${response.data.location.name}`,
          "success"
        );
      } catch (error) {
        console.log(error);
        setWeatherData(null);
        location === ""
          ? showToast("Please enter the location!", "info")
          : showToast("Location not found!", "error");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleRemoveText = () => {
    setLocation("");
  };

  const displayCloseButton = location.length > 0;

  const showToast = (message, status) => {
    toast({
      title: message,
      status: status,
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Center>
      <HStack
        spacing={1}
        shadow={"md"}
        w={{ base: "95%", md: "60%", lg: "40%" }}
        bg="white"
      >
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={CgSearchLoading} color="blue.500" />
          </InputLeftElement>
          <Input
            variant="unstyle"
            fontSize={"20px"}
            type="text"
            placeholder="Search weather report in any location..."
            onKeyDown={handleSearch}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          {displayCloseButton && (
            <InputRightElement>
              <CloseButton
                onClick={handleRemoveText}
                size="sm"
                color="blue.500"
              />
            </InputRightElement>
          )}
        </InputGroup>
    <Box pr={1} pl={1}>
    {loading ? (
        <Center h={"90%"} >
          <Spinner size="md"  emptyColor='gray.300'/>
        </Center>
      ) :weatherData ? (
            <Image
              w="80%"
              h="80%"
              src={weatherData?.current.condition.icon}
              title={weatherData.current.condition.text}
            />
          ) : (
            <Icon as={TiWeatherPartlySunny} color="blue.500" fontSize={40} />
          )}
        </Box>
      </HStack>
    </Center>
  );
};

export default Searchbar;
