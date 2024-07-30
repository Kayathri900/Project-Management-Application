import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";
const Modal = forwardRef(function Modal({ children }, ref) {
  const dailogRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        console.log("caling");
        dailogRef.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dailogRef}
      className="backdrop:bg-slate-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>Close</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});
export default Modal;
