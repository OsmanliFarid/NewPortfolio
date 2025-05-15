const About = () => {
  return (
    <>
      <div className="Container font-[Lato]">
        <h1 className="text-center mt-[100px] text-[40px]">About Me</h1>
        <div>
          <div className="h-[618px] bg-[url('/HeaderGrad2.png')] bg-no-repeat bg-center bg-cover w-[618px]">
            <div className="flex justify-center items-center pt-[30px]">
              <img src="/man.png" alt="Man" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
