import { Box, HStack } from "@chakra-ui/react";
import response from "../../data/output.json";

enum GaragesSizes {
  groot = "groot",
  medium = "medium",
  klein = "klein",
}

export default function Home() {
  const { garage: garages } = response;

  return (
    <HStack overflow="scroll">
      {Object.entries(garages).map(([type, bussen]) => {
        if (type === GaragesSizes.groot) {
          return bussen.map((bus) => {
            return (
              <Box
                key={bus.bus}
                height="300"
                bg="blue"
                borderRadius="8px"
                p={16}
              >
                {bus.bus}
              </Box>
            );
          });
        }
        return bussen.map((bus) => {
          return (
            <Box key={bus.bus} height="300" bg="blue" borderRadius="8px" p={16}>
              {bus.bus}
            </Box>
          );
        });
      })}
    </HStack>
  );
}
