import { TrophyIcon } from "@heroicons/react/24/outline";
import HomepageProviderSearch from "@/components/homeprovidersearch";
const NewHomepage = (props) => {
  return (
    <div className="w-full min-h-400 pb-12 bg-gradient-to-r from-[#5CBCD1] to-[#7D2CE6]">
      <div className="mx-auto max-w-2xl py-32 sm:py-5 lg:py-10">
        {/* Searchbar */}
      </div>
      <HomepageProviderSearch />
    </div>
  );
};
export default NewHomepage;
