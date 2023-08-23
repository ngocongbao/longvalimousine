import React from "react";
import { Box, Text } from "zmp-ui";
import iconperson from "../../assets/images/person.png";
import iconedit from "../../assets/images/iconedit.png";
const HeaderSecond = () => {
  return (
    <Box
      style={{
        backgroundColor: "#bc955e",
        height: "10%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "15px",
        paddingRight: "15px",
        color: "white",
      }}
    >
      <Box>
        <Box
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <Text>Bảo</Text>
          <img
            src={iconedit}
            style={{
              width: "16px",
              height: "16px",
            }}
          />
        </Box>
        <Text>0344462861</Text>
      </Box>
      <Box>
        <img
          src={iconperson}
          style={{
            borderRadius: "20%",
            padding: "15px",
            background: "white",
          }}
        />
      </Box>
    </Box>
  );
};
export default HeaderSecond;
