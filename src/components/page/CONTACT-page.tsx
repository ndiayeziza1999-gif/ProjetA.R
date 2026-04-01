import { FaMapMarkerAlt } from "react-icons/fa";
import { BsEnvelopeHeartFill } from "react-icons/bs";
import { FaPhoneVolume } from "react-icons/fa6";

export default function CONTACTPage() {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-16 px-4">
        <h2 className="text-5xl font-bold mb-4">Contact</h2>
        <div className="w-12 h-0.5 bg-black mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto text-gray-600 font-medium leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis dolorem ab nostrum impedit id magnam cumque exercitationem delectus recusandae suscipit perferendis nobis unde est, qui eaque vitae sunt? Nesciunt, sunt!
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">

        <div className="p-12 lg:p-20 flex flex-col justify-center">
          <h3 className="text-4xl font-bold mb-6">Get in touch</h3>
          <p className="text-gray-500 mb-10 leading-relaxed max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo tempor, congue justo at, lobortis orci.
          </p>

          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <FaMapMarkerAlt className="h-5 w-5 mt-1" />
              <a href="#" className="underline decoration-1 underline-offset-4 ">
                123 Fifth Avenue, New York, NY 10160
              </a>
            </li>
            <li className="flex items-center gap-4">
              <BsEnvelopeHeartFill className="h-5 w-5" />
              <a href="mailto:contact@info.com" className="underline decoration-1 underline-offset-4 ">
                contact@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-4">
              <FaPhoneVolume className="h-5 w-5" />
              <span>1-234-567-890</span>
            </li>
          </ul>
        </div>
        <div className="bg-white p-8 lg:p-16 shadow-sm border border-gray-100 lg:-ml-12 lg:my-12 z-10">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="First Name *" 
                className="w-full p-3 border border-gray-200 bg-gray-50/50 focus:bg-white outline-none focus:border-black transition-colors"/>
              <input 
                type="text" 
                placeholder="Last Name *" 
                className="w-full p-3 border border-gray-200 bg-gray-50/50 focus:bg-white outline-none focus:border-black transition-colors"/>
            </div>
            <input 
              type="email" 
              placeholder="Your Email Address *" 
              className="w-full p-3 border border-gray-200 bg-gray-50/50 focus:bg-white outline-none focus:border-black transition-colors"/>
            <textarea 
              rows={5} 
              placeholder="Message" 
              className="w-full p-3 border border-gray-200 bg-gray-50/50 focus:bg-white outline-none focus:border-black transition-colors resize-none">
              </textarea>
            
            <button className="bg-black text-white px-8 py-3 font-bold cursor-pointer rounded-xl uppercase tracking-widest hover:bg-gray-800 transition-colors">
              Send
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}
