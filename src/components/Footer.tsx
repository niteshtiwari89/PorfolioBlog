
import  { Toaster } from 'react-hot-toast';


const Footer = () => {
  

  return (
    <>
      <div className="section w-full bg-gray-800 text-white py-8">
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <div className="px-4">
          <div className="flex justify-center flex-wrap gap-6 mt-8">
            <a href="https://www.linkedin.com/in/gauravpolshettiwar" target="_blank" className="text-gray-400 hover:text-white">
              LinkedIn
            </a>
            <a href="https://x.com/speakbygaurav?s=21" target="_blank" className="text-gray-400 hover:text-white">
              Twitter/X
            </a>
            <a href="https://www.instagram.com/_thegauravofficial?igsh=eXkyOHZ2d2Y5NG85&utm_source=qr" target="_blank" className="text-gray-400 hover:text-white">
              Instagram
            </a>
            <a href="https://www.youtube.com" target="_blank" className="text-gray-400 hover:text-white">
              YouTube
            </a>
            {/* <a href="https://www.youtube.com" target="_blank" className="text-gray-400 flex items-center hover:text-white">
              Contact Us <div className="ml-1"><FaExternalLinkAlt size={12} /></div>
            </a> */}
            {/* <button
              // onClick={() => setIsModalOpen(true)} // Open modal on click
              className="text-gray-400 flex items-center hover:text-white"
            >
              Contact Us
              <div className="ml-1">
                <FaExternalLinkAlt size={12} />
              </div>
            </button> */}
          </div>

          <div className="mt-8 text-center text-sm">
            <p>&copy; 2025 Vertex IT. All Rights Reserved. <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a> | <a href="#" className="text-blue-400 hover:underline">Terms of Use</a></p>
          </div>
        </div>
      </div>
      {/* {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-xs bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-900 p-8 rounded-lg w-full sm:w-96">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white ">Contact Us</h3>
              <button
                onClick={() => setIsModalOpen(false)} // Close modal
                className=" text-sm text-gray-400 hover:text-white"
              >
                <IoMdClose />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <label
                htmlFor="name"
                className="block text-white mb-2 text-sm font-medium"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded"
                required
              />
              <label
                htmlFor="email"
                className="block text-white mb-2 text-sm font-medium"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded"
                required
              />
              <label
                htmlFor="dropdown"
                className="block text-white mb-2 text-sm font-medium"
              >
                Topic of Interest
              </label>
              <select
                id="dropdown"
                name="dropdown"
                value={formData.dropdown}
                onChange={handleChange}
                className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded"
                required
              >
                <option value="">Select a Topic</option>
                <option value="philanthropy">Philanthropy</option>
                <option value="investor">Investor/Angel Investor</option>
                <option value="business">Business</option>
                <option value="contact">Contact</option>
              </select>
              <label
                htmlFor="message"
                className="block text-white mb-2 text-sm font-medium"
              >
                Comments
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded"
                rows={4}
                required
              />
              <button
                type="submit"
                disabled={result}
                className={`w-full p-2 ${result ? "bg-gray-500" : "bg-blue-500"} text-white rounded hover:bg-blue-600`}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )} */}
    </>
  )
}

export default Footer
