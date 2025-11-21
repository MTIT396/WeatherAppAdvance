import { greetByTime } from "../../utils/dateUtils";
import SearchBar from "../ui/SearchBar";

const Header = () => {
  return (
    <header className="flex flex-wrap gap-4 items-center justify-between mb-6">
      <div>
        <span className="text-white text-[18px]">Hello, It's Weather App</span>
        <h2 className="text-2xl text-white font-semibold leading-6">
          {greetByTime()}
        </h2>
      </div>
      <div className="w-full lg:w-auto">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
