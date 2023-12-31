import React from "react";
import { Box, Header } from "zmp-ui";
export const HeaderThird = ({ title }) => {
  return (
    <Header
      style={{ background: "#bc955e"}}
      showBackIcon={true}
      title={
        <Box>
          <Box size="normal" className="text-center font-bold text-white">
            {title}
          </Box>
        </Box>
      }
    />
  );
};
