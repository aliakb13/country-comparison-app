export default function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-[#F9F9F9] py-6">
      <div className="flex sm:flex-col sm:px-5 xl:flex-row xl:justify-around">
        <div className="flex flex-col gap-8">
          <i className="fa-brands fa-audible text-2xl"></i>
          <p className="playfair-display-bold text-lg">
            <i className="fa-solid fa-quote-left me-5"></i>
            Success is the sum of small efforts, repeated day in and day out.
            <i className="fa-solid fa-quote-left ms-5"></i>
            <br />
            <br />- Robert Collier
          </p>
          <p className="roboto-regular text-xs">
            &copy; 2024 Ali Inc. All rights reserved
          </p>
        </div>
        <div className="flex flex-col sm:mt-5 xl:mt-0 roboto-regular gap-5">
          <h2>My writing</h2>
          <div>
            <p>On medium:</p>
            <a href="">
              <i className="fa-brands fa-medium"></i>
            </a>
          </div>
          <div className="">
            <p>On quora:</p>
            <a href="">
              <i className="fa-brands fa-quora"></i>
            </a>
          </div>
          <div>
            <p>On reddit:</p>
            <a href="">
              <i className="fa-brands fa-reddit"></i>
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:mt-5 xl:mt-0 roboto-regular gap-6">
          <h2>Interested collaborating with me?</h2>
          <label htmlFor="mail">Send me mail:</label>
          <textarea
            name="mail"
            id="mail"
            placeholder="Your message..."
            className="text-black"
          ></textarea>
          <button className="border-2 py-2 px-4 rounded-md roboto-regular text-[#2C3E50] bg-[#7ACBAE] hover:text-[#F9F9F9] hover:underline border-[#2C3E50] hover:border-[#F76C6C] text-base">
            Send
          </button>
        </div>
      </div>
    </footer>
  );
}
