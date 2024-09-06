import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
       <figure className="bg-red-100 rounded-xl p-8 dark:bg-red-800 absolute">
  <Image className="w-700 h-240 rounded-non mx-auto" src="/001.jpg" alt="" width="384" height="512" />
  
  <div className="pt-6 md:p-8 text-center md:text-center space-y-4">
    <blockquote>
      <p className="text-sm font-medium bg-green-400 px-5 py-5 rounded-full text-white">
      Muzammil Shaheen Imagine a spacious, modern home with clean architectural lines.
       The exterior features large windows, allowing plenty of natural light to flow inside
       . A well-manicured garden with lush greenery and colorful
       flowers surrounds the home. There's a paved driveway leading to a garage, and a cozy
        outdoor seating area with elegant furniture.
 </p>
    </blockquote>
    </div>
    </figure>
    </div>
  )
}
export default page