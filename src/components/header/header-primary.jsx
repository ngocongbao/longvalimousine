import React from "react";
import { Header } from "zmp-ui";
export const HeaderPrimary = ({ title }) => {
  return (
    <Header
      style={{ background: "#bc955e" }}
      showBackIcon={false}
      title={
        <div>
          <div size="normal" className="text-center font-bold text-white">
            {title}
          </div>
        </div>
      }
    />
  );
};
