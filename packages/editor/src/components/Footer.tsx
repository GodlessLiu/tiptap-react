import React from 'react';
import { GrommetIconsGithub } from '../icons/Github';
const Footer: React.FC = () => {
  return (
    <>
      <div className="text-sm py-[10px] editor-footer flex justify-center items-center">
        <a
          href="https://github.com/GodlessLiu/tiptap-react"
          className="mx-2 underline hover:text-red-400"
        >
          laf-react-editor
        </a>
        <GrommetIconsGithub className="mx-1" /> Power &nbsp;By
        <a
          href="https://github.com/GodlessLiu"
          className="text-red mx-2 underline hover:text-red-400"
        >
          Hilary Liu
        </a>
      </div>
    </>
  );
};

export default Footer;
