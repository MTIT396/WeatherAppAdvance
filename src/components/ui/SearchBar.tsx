import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useSearchStore } from "../../store/useSearchStore";
import useClickOutside from "../../hooks/useClickOutside";
import useFetchCities from "../../hooks/useFetchCities";
import SearchItem from "./SearchItem";
import type { City, History } from "../../types/type";
import useDebounce from "../../hooks/useDebounce";
import { CiSearch } from "react-icons/ci";
import { getStorageValue, setStorageValue } from "../../utils/storageUtils";
import { v4 } from "uuid";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [suggestions, setSuggestions] = useState<City[]>([]);
  const [history, setHistory] = useState<History[]>([]);
  const [historySuggestions, setHistorySuggestions] = useState<History[]>([]);
  const setSearchQuery = useSearchStore((state) => state.setSearchQuery);
  const wrapperRef = useClickOutside({ setIsOpen });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const { data } = useFetchCities();

  useEffect(() => {
    const store = getStorageValue<History[]>("history", []);
    setHistory(store);
  }, []);

  const keyword = useDebounce(searchTerm, 500).trim();

  useEffect(() => {
    if (!keyword) {
      setSuggestions([]);
      return;
    }
    if (data) {
      const newSuggestions = data.filter((item) =>
        item.name.toLowerCase().includes(keyword.toLowerCase())
      );

      const newHistorySuggestions = history.filter((item) =>
        item.name.toLowerCase().includes(keyword.toLowerCase())
      );
      setHistorySuggestions(newHistorySuggestions);
      setSuggestions(newSuggestions);
    }
  }, [keyword, data, history]);

  const handleSelectItem = (value: string) => {
    setSearchQuery(value);
    setSearchTerm(value);
    setIsOpen(false);
    setSuggestions([]);
    setHistory((prev) => {
      const item = {
        id: v4(),
        name: value,
      };
      const newHistory = [item, ...prev.filter((item) => item.name !== value)];
      setStorageValue("history", newHistory);
      return newHistory;
    });
  };

  const handleRemoveSearchTerm = () => {
    setSearchTerm("");
  };

  const handleRemoveHistoryItem = (value: string) => {
    const newHistory = history.filter((item) => item.name !== value);
    setHistory(newHistory);
    setStorageValue("history", newHistory);
  };
  return (
    <div
      ref={wrapperRef}
      className="relative flex xl:w-[333px] rounded-full bg-main z-12"
    >
      <span className="text-gray absolute left-7 top-1/2 -translate-y-1/2">
        <CiSearch size={24} />
      </span>
      {searchTerm && (
        <span
          onClick={handleRemoveSearchTerm}
          className="text-gray hover:text-white transition cursor-pointer absolute right-4 top-1/2 -translate-y-1/2"
        >
          <IoCloseOutline size={24} />
        </span>
      )}

      <input
        onFocus={() => setIsOpen(true)}
        value={searchTerm}
        onChange={handleSearchChange}
        type="text"
        placeholder="Search your location"
        className="focus:ring-2 focus:ring-gray-400 transition duration-300 rounded-full w-full h-full outline-none text-[18px] text-white placeholder:text-[18px] placeholder:text-gray py-4 pl-16 pr-12"
      />

      {isOpen && (searchTerm ? suggestions.length > 0 : history.length > 0) && (
        <div className="max-h-[620px] shadow-2xl overflow-auto p-2 absolute top-full translate-y-2 bg-layout rounded-xl w-full ">
          {searchTerm ? (
            <>
              {historySuggestions.map((item) => (
                <SearchItem
                  isHistory
                  onSelectItem={handleSelectItem}
                  key={item.id}
                  item={item}
                />
              ))}
              {suggestions?.slice(0, 10).map((city) => (
                <SearchItem
                  onSelectItem={handleSelectItem}
                  key={city.id}
                  item={city}
                />
              ))}
            </>
          ) : (
            <>
              {history?.slice(0, 10).map((item) => (
                <SearchItem
                  isHistory
                  onSelectItem={handleSelectItem}
                  key={item.id}
                  item={item}
                  onRemoveItem={handleRemoveHistoryItem}
                />
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
