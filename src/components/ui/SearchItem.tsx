import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import type { City, History } from "../../types/type";
import { GoHistory } from "react-icons/go";

const SearchItem = ({
  item,
  onSelectItem,
  onRemoveItem,
  isHistory,
}: {
  item: City | History;
  onSelectItem: (value: string) => void;
  onRemoveItem?: (value: string) => void;
  isHistory?: boolean;
}) => {
  return (
    <div
      onClick={() => onSelectItem(item.name)}
      className="px-4 flex justify-between transition py-2 cursor-pointer hover:bg-sub-gray rounded-xl text-base font-medium text-white"
    >
      <div className="flex items-center gap-3">
        {isHistory ? (
          <span className="text-white">
            <GoHistory size={20} />
          </span>
        ) : (
          <span className="text-gray">
            <CiSearch size={20} />
          </span>
        )}
        <span>{item.name}</span>
      </div>

      {onRemoveItem && (
        <span
          onClick={(e) => {
            e.stopPropagation();
            onRemoveItem(item.name);
          }}
          className="text-gray hover:text-white transition cursor-pointer"
        >
          <IoCloseOutline size={24} />
        </span>
      )}
    </div>
  );
};

export default SearchItem;
