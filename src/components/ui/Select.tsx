import { useContext, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { tempData } from "../../constants/constants";
import SelectItem from "./SelectItem";
import { TempContext } from "../../contexts/TempContext";
import useClickOutside from "../../hooks/useClickOutside";

type SelectProps = {
  value: string;
};

const Select = ({ value }: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [label, setLabel] = useState<string>(value);
  const context = useContext(TempContext);
  if (!context) throw new Error("TempContext must be used within TempProvider");
  const { setIsCelsius } = context;

  const handleSelectItem = (value: string) => {
    if (value === "°F") {
      setIsCelsius(false);
    } else {
      setIsCelsius(true);
    }
    setLabel(value);
  };
  const wrapperRef = useClickOutside({ setIsOpen });
  return (
    <div
      ref={wrapperRef}
      onClick={() => setIsOpen(!isOpen)}
      className={`${
        isOpen ? "outline-1 outline-gray-600" : ""
      } cursor-pointer relative py-2 px-3 flex items-center gap-2 text-white bg-secondary rounded-full`}
    >
      <span className="text-sm">{label}</span>
      <span>
        <FaChevronDown size={10} />
      </span>
      {isOpen && (
        <ul className="z-10 absolute top-full left-0 translate-y-2 w-full bg-secondary rounded-xl flex flex-col items-center p-1">
          {tempData.map((temp) => (
            <SelectItem
              onClick={() => handleSelectItem(temp.value)}
              value={temp.value}
              key={temp.id}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
