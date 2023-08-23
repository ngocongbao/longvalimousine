import React from "react";
import { Box, Icon, Text } from "zmp-ui";


export const QuantityPicker = ({
  value,
  onChange,
  size,
  limit,
  minimum,
}) => {
  return (
    <Box flex className="items-center">
      <button
        disabled={Boolean(
          minimum !== undefined ? minimum >= value : value === 1
        )}
        onClick={() => {
          onChange(value - 1);
        }}
        className={`h-5 w-5 border-[#00000040] border rounded flex items-center justify-center ${
          size === "medium" && "h-7 w-7"
        } ${
          Boolean(minimum !== undefined ? minimum >= value : value === 1) &&
          "opacity-20"
        }`}
      >
        -
      </button>
      <Box flex justifyContent="center" alignItems="center" className="flex-1">
        <Text
          size="large"
          className={`text-[12px] mx-2 ${size === "medium" && "text-[14px]"}`}
        >
          {value}
        </Text>
      </Box>
      <button
        disabled={Boolean(limit && limit === value)}
        onClick={() => onChange(value + 1)}
        className={`h-5 w-5 border-[#00000040] border rounded flex items-center justify-center  ${
          size === "medium" && "h-7 w-7"
        } ${Boolean(limit && limit === value) && "opacity-20"}`}
      >
        <Icon icon="zi-plus" size={10} />
      </button>
    </Box>
  );
};