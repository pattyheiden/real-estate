import { Carousel } from "@/components/Carousel";
import ImovelItems from "@/components/ImovelItems";
import { SearchBar } from "@/components/SearBar";

export default function Page() {

  return (
    <>
      <Carousel />
      <SearchBar />
      <ImovelItems />
    </>
  )
}