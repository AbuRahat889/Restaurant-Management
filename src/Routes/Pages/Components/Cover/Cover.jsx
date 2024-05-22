
const Cover = ({img, title, subtitle}) => {
    return (
        <div className='max-w-screen-2xl mx-auto'>
      <div
        className="hero h-[500px]"
        style={{
          backgroundImage:
           ` url(${img})`,
        }}
      >
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        <div className="hero-content text-center text-neutral-content w-4/5">
          <div className="max-w-4xl  bg-black bg-opacity-50 py-10 px-20 text-white rounded-lg">
            <h1 className="cinzel mb-5 text-5xl font-semibold">{title}</h1>
            <p className="mb-5 text-xl px-4 md:px-20 text-balance">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Cover;