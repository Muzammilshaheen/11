import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
     <figure className="bg-green-100 rounded-xl p-8 dark:bg-slate-800">
  <Image className="w-44 h-44 rounded-full mx-auto" src="/rehan.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium text-white bg-pink-400 px-5 py-5">
      Muzammil Shaheen is known for his dedication and hard work in various fields,
       particularly in technology, education, or business (depending on context).
        People who succeed through hard work often demonstrate perseverance,
         discipline, and a commitment to continuous improvement, which might
          reflect his approach. His efforts likely include overcoming challenges
           and achieving goals through persistent effort. Could you share more
       specific details about his work or achievements that youre referring to?
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400 text-center text-lg bg-white">
        Rehan 
      </div>
      
    </figcaption>
  </div>
</figure>



    </div>
  )
}
export default page