'use server';

import { FooterConstant } from '@/Constant/footer';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-12 h-[400px] container grid grid-cols-5">
      {Object.keys(FooterConstant).map((title) => (
        <div key={title}>
          <h2 className="font-semibold text-lg">{title}</h2>
          {FooterConstant[title].map((content, indx) => (
            <ul key={indx} className="mt-4 cursor-pointer">
              <li>{content}</li>
            </ul>
          ))}
          {title === 'Todo' && (
            <div className=" mt-7">
              <div className="flex w-[150px] justify-evenly">
                <Instagram size={20} strokeWidth={1.4} />
                <Facebook size={20} strokeWidth={1.4} />
                <Linkedin size={20} strokeWidth={1.4} />
                <Twitter size={20} strokeWidth={1.4} />
              </div>
            </div>
          )}
        </div>
      ))}
    </footer>
  );
};

export default Footer;
