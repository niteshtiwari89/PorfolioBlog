const Footer = () => {
  return (
    <>
      <div className="section w-full bg-gray-800 text-white py-8">
        <div className="px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-2">Business Inquiries</h4>
              <p>Your Email</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Philanthropy Inquiries</h4>
              <p>Your Email</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Investments Inquiries</h4>
              <p>Your Email</p>
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-8">
            <a href="https://www.linkedin.com" target="_blank" className="text-gray-400 hover:text-white">
              LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" className="text-gray-400 hover:text-white">
              Twitter/X
            </a>
            <a href="https://instagram.com" target="_blank" className="text-gray-400 hover:text-white">
              Instagram
            </a>
            <a href="https://www.youtube.com" target="_blank" className="text-gray-400 hover:text-white">
              YouTube
            </a>
          </div>

          <div className="mt-8 text-center">
            <h4 className="text-lg font-semibold mb-2">Newsletter Signup</h4>
            <p className="mb-4">Subscribe for insights on technology, business, and investment trends.</p>
            <form action="#" method="POST" className="flex justify-center items-center">
              <input type="email" placeholder="Your Email" className="px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">Subscribe</button>
            </form>
          </div>

          <div className="mt-8 text-center text-sm">
            <p>&copy; 2025 Vertex IT. All Rights Reserved. <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a> | <a href="#" className="text-blue-400 hover:underline">Terms of Use</a></p>
          </div>
        </div>
      </div>

    </>
  )
}

export default Footer
