

const SectionTitle = ({subtitle, title}) => {
    return (
        <div className="text-center">
        <h1 className="text-2xl text-yellow-500">
          {subtitle}
        </h1>
        <div className="flex justify-center mt-3">
          <hr className="w-96 " />
        </div>
        <h1 className="text-4xl font-semibold my-4">{title}</h1>
        <div className="flex justify-center ">
          <hr className="w-96 " />
        </div>
      </div>
    );
};

export default SectionTitle;