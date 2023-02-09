interface dataProps {
  title: string;
  descriptionProduct: string;
  descriptionName: string;
  image: string;
}

const NavbarContent = ({
  title,
  descriptionProduct,
  descriptionName,
  image,
}: dataProps) => {
  return (
    <div className="flex flex-col mt-[78px] md:mt-[84px] pb-10 mx-auto pl-5 items-center justify-center md:flex md:flex-row">
      <div className="mr-10">
        <h1 className="text-4xl sm:text-5xl font-mono">{title}</h1>
        <p className="text-base sm:text-lg mt-2 font-serif">{descriptionProduct}</p>
        <p className="text-base sm:text-lg font-serif">{descriptionName}</p>
      </div>

      <div>
        <img
          className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] overflow-hidden rounded-full bg-red "
          src={`${image}`}
          alt="image_photos"
        />
      </div>
    </div>
  );
};

export default NavbarContent;
