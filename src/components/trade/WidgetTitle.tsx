import Image from "next/image";

export default function WidgetTitle() {
  return (
    <div className="flex relative">
      <div className="text-purple font-bold flex items-center text-3xl mb-2 md:mb-4 select-none">
        MMC
        <Image
          src="/assets/logos/MMC.svg"
          className="w-12 h-12 mx-4 spin"
          alt=""
          width={48}
          height={48}
        />
        Swap
      </div>
    </div>
  );
}
