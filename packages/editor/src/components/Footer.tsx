import { GrommetIconsGithub } from '../icons/github';

export default function () {
  return (
    <>
      <div className="editor-footer flex justify-center items-center">
        <a
          href="https://github.com/GodlessLiu/tiptap-react"
          className="mx-2 underline hover:text-red-400"
        >
          tiptap-react
        </a>
        <GrommetIconsGithub className="mx-1" /> Prower &nbsp;by
        <a
          href="https://github.com/GodlessLiu"
          className="text-red mx-2 underline hover:text-red-400"
        >
          Hilary Liu
        </a>
      </div>
    </>
  );
}
