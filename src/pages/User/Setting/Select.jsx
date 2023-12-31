import React from "react";

const Select = () => {
  return (
    <select
      id="countries"
      class="bg-white border-2 border-gray text-[#bc955e] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option selected>English</option>
      <option value="VN">Tiếng Việt</option>
    </select>
  );
};

export default Select;
