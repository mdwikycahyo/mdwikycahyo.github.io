import React from "react";

interface ContactProps {
  data: {
    closingStatement: string;
    email: string;
    linkedin: string;
    github: string;
    instagram: string;
    medium: string;
  };
}

const Contact: React.FC<ContactProps> = ({ data }) => {
  const handleEmailClick = () => {
    const emailAddress = data.email;
    const subject = "Hello";
    const body = "I hope this email finds you well.";

    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <h1 className="text-4xl md:text-6xl mt-14 font-bold leading-normal">
        Let's Work Together
      </h1>
      <p
        className="md:leading-10 md:text-xl mb-14"
        dangerouslySetInnerHTML={{ __html: data.closingStatement }}
      />
      <div className="md:w-1/4 flex items-center justify-center mb-14">
        <div
          className="flex items-center justify-center cursor-pointer hover:font-bold"
          onClick={handleEmailClick}
        >
          <div className="bg-[#363636] rounded-full w-[50px] h-[50px]" />
          <p className="-ml-[25px] mr-2 font-mono">Say Hello!</p>
          <i className="bi bi-arrow-right text-yellow-500 text-3xl" />
        </div>
      </div>
      <div className="mt-4 md:flex items-center my-5">
        <p className="text-sm flex items-center justify-center md:text-base">
          © 2023 Muhammad Dwiky Cahyo Wicaksono
        </p>
        <p className="text-black md:text-white text-xs md:mx-20">|</p>
        <p>
          <i
            className="bi bi-linkedin text-3xl hover:text-4xl duration-300 cursor-pointer mx-5 md:mr-5"
            onClick={() => window.open(data.linkedin, "_blank")}
          />
          <i
            className="bi bi-github text-3xl hover:text-4xl duration-300 cursor-pointer mx-5"
            onClick={() => window.open(data.github, "_blank")}
          />
          <i
            className="bi bi-instagram text-3xl hover:text-4xl duration-300 cursor-pointer mx-5"
            onClick={() => window.open(data.instagram, "_blank")}
          />
          <i
            className="bi bi-medium text-3xl hover:text-4xl duration-300 cursor-pointer mx-5"
            onClick={() => window.open(data.medium, "_blank")}
          />
          <i
            className="bi bi-envelope-fill text-3xl hover:text-4xl duration-300 cursor-pointer mx-5"
            onClick={handleEmailClick}
          />
        </p>
      </div>
    </>
  );
};

export default Contact;