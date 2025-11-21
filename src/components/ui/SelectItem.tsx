import React from "react";

const SelectItem = ({
  value,
  onClick,
}: {
  value: string;
  onClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}) => {
  return (
    <li
      onClick={onClick}
      className="cursor-pointer transition hover:bg-main flex justify-center items-center w-full rounded-xl p-1"
    >
      {value}
    </li>
  );
};

export default SelectItem;
