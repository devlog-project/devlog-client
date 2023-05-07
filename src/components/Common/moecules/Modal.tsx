interface ModalProps {
  visible: boolean;
  onCancel: () => void;
  title?: string;
}

/**
 * visible - Modal 관련 상태
 *
 * title - 해당 Modal이 어떤 Modal인지, 제목 입력
 *
 * onCancel - Modal Close Function
 */

function Modal({ visible, title, onCancel }: ModalProps) {
  return visible ? (
    <section
      className="flex justify-center items-center w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-30"
      onClick={onCancel}
    >
      <div
        className="flex flex-col items-center bg-white w-1/4 h-2/4 rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center w-full px-[15px] py-[15px] bg-slate-50 rounded-tl-md rounded-tr-md">
          <h2 className="text-lg text-black font-bold"> {title} </h2>
          <span onClick={onCancel} className="text-xl font-bold cursor-pointer px-[5px] box-border">
            ✖
          </span>
        </div>
      </div>
    </section>
  ) : (
    <></>
  );
}

export default Modal;
