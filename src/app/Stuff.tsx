"use client";

import { Box, HStack, VStack } from "@chakra-ui/react";
import response from "../../data/output.json";

enum ParkingSizes {
  groot = 600,
  medium = 300,
  klein = 150,
}

export default function Stuff() {
  const { garage: garages } = response;

  return (
    <HStack overflow="scroll" alignItems="flex-end">
      {Object.entries(garages).map(([type, plaatsen]) => {
        return plaatsen.map((plaats, index) => {
          return (
            <VStack
              key={index}
              border="2px solid blue"
              p={4}
              h={ParkingSizes[type]}
            >
              {plaats.map((bus, index) => {
                return (
                  <Box key={index} bg="red" flexGrow={1}>
                    {bus.bus}
                  </Box>
                );
              })}
            </VStack>
          );
        });
      })}
    </HStack>
  );
}
