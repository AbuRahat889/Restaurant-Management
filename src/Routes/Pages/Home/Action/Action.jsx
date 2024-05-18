import img from '../../../../assets/home/chef-service.jpg'


const Action = () => {
  return (
    <div className='max-w-screen-xl mx-auto mt-32'>
      <div
        className="hero h-96"
        style={{
          backgroundImage:
           ` url(${img})`,
        }}
      >
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-4xl  bg-white py-10 px-20 text-black rounded-lg">
            <h1 className="cinzel mb-5 text-5xl font-semibold">Bistro Boss</h1>
            <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Action;
