import React from "react";
import { Box, Header} from "zmp-ui";
export const HeaderPrimary = ({ title }) => {
  return (
    <Header
      style={{ background: "#bc955e" }}
      showBackIcon={false}
      title={
        <Box>
          <Box
            size="normal"
            className="text-center font-bold text-white"
          >
            {title}
          </Box>
        </Box>
      }
    />
  );
};
