import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({ onAdd, onCancel }) {
  const titleRef = useRef();
  const descRef = useRef();
  const dateRef = useRef();
  const modalRef = useRef();
  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDesc = descRef.current.value;
    const enteredDate = dateRef.current.value;
    //validation...
    if (
      enteredTitle.trim() === "" ||
      enteredDesc.trim() === "" ||
      enteredDate.trim() === ""
    ) {
      //show error modal
      console.log("calling");
      modalRef.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDesc,
      dueDate: enteredDate,
    });
  }
  return (
    <>
      <Modal ref={modalRef}>
        <h2 className="text-xl font-bold text-stone-500 my-4">
          Invalid Input{" "}
        </h2>
        <p className="text-stone-400 mb-4">Please provide valid input </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <div>
          <Input type="text" ref={titleRef} label="Title" />
          <Input ref={descRef} label="Description" textarea />
          <Input type="date" ref={dateRef} label="DueDate" />
        </div>
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950 hover:bg-slate-500"
            >
              Cancel{" "}
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-900"
            >
              Save{" "}
            </button>
          </li>
        </menu>
      </div>
    </>
  );
}
