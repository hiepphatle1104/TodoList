const Modal = ({ trigger, children, modalId, icons }) => {
  return (
    <>
      <button
        className={trigger.className}
        onClick={() => document.getElementById(`modal-${modalId}`).showModal()}
      >
        {icons && icons}
        {trigger.name && trigger.name}
      </button>
      <dialog
        id={`modal-${modalId}`}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          {children}
          <CloseModalButton />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Modal;

const CloseModalButton = () => {
  return (
    <form method="dialog">
      <button className="btn btn-outline w-full mt-3">Close</button>
    </form>
  );
};
