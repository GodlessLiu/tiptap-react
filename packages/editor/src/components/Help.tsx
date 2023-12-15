import { useContext, useEffect, useState } from 'react';
import { MaterialSymbolsHelpOutline } from '../icons/Help';
import WithToolTip from './WithToolTip';
import I18nContext from './i18n';
import Modal from 'react-modal';
import Helper from '../local/helper';
const Help: React.FC = () => {
  const data = useContext(I18nContext)!;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function keyDownFn(e: KeyboardEvent) {
    if (e.ctrlKey && e.key === '/') {
      setIsOpen((preIsopen) => !preIsopen);
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', keyDownFn);

    return () => window.removeEventListener('keydown', keyDownFn);
  }, []);

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <WithToolTip title={data['helper']['help']}>
        <MaterialSymbolsHelpOutline onClick={openModal} />
      </WithToolTip>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Help"
      >
        <div className="flex flex-row flex-wrap mt-40">
          {Helper.length > 0 &&
            Helper.map(({ command, options }) => {
              return (
                <div className="w-1/3 mb-4">
                  <span className=" inline-block text-lg w-32 text-left">
                    {data['helper'][command] + ':'}
                  </span>
                  {options
                    .join('?+?')
                    .split('?')
                    .map((option) => {
                      return (
                        <span
                          className={`p-2 ${
                            option !== '+' && 'bg-gray-200'
                          } rounded ml-2 text-xs`}
                        >
                          {option}
                        </span>
                      );
                    })}
                </div>
              );
            })}
        </div>
      </Modal>
    </>
  );
};

export default Help;
