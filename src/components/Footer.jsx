export default function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-[#F9F9F9] py-10">
      <div className="flex sm:flex-col sm:px-5 xl:flex-row xl:justify-around">
        <div className="flex flex-col gap-8">
          <i className="fa-solid fa-paper-plane text-2xl"></i>
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
          <h2 className="nunito-sans-bold text-lg">BEST COUNTRIES</h2>
          <p className="poppins-regular text-sm">Overall Rangkings:</p>
          <p className="poppins-regular text-sm">Rangkings Index</p>
          <p className="poppins-regular text-sm">Countries Index</p>
          <p className="poppins-regular text-sm">Countries News</p>
          <p className="poppins-regular text-sm">Countries Methodology</p>
          <p className="poppins-regular text-sm">Countries Countries FAQ</p>
        </div>
        <div className="flex flex-col sm:mt-5 xl:mt-0 roboto-regular gap-5">
          <h2 className="nunito-sans-bold text-lg">News</h2>
          <p className="poppins-regular text-sm">Politics</p>
          <p className="poppins-regular text-sm">Worlds</p>
          <p className="poppins-regular text-sm">Business</p>
          <p className="poppins-regular text-sm">Science</p>
          <p className="poppins-regular text-sm">Health News</p>
          <p className="poppins-regular text-sm">Cartoons</p>
          <p className="poppins-regular text-sm">Games</p>
        </div>
        <div className="flex flex-col sm:mt-5 xl:mt-0 roboto-regular gap-6">
          <h2 className="nunito-sans-bold text-lg">
            Interested to become a subscriber?
          </h2>
          <label htmlFor="mail" className="poppins-regular">
            Let us know:
          </label>
          <textarea
            name="mail"
            id="mail"
            placeholder="Your message..."
            className="text-black"
          ></textarea>
          <button className="border-2 py-2 px-4 rounded-md poppins-regular text-[#2C3E50] bg-[#7ACBAE] hover:text-[#F9F9F9] hover:underline border-[#2C3E50] hover:border-[#F76C6C] text-base">
            Send
          </button>
        </div>
      </div>
    </footer>
  );
}
