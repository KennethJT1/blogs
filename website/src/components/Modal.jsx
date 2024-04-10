const Modal = ({ openModal, closeModal }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        openModal ? "" : "hidden"
      }`}
    >
      <div className="modal-container">
        <div className="bg-indigo-700 text-center p-5 h-96 lg:w-[500px] rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4 mt-6 uppercase">
            Login in Here!
          </h2>
          <form className="px-4">
            <div className="mb-5">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="DesignKJT@email.com"
                className="w-full rounded-md border border-[#e0e0e0e] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md focus:border-[#6a64f1]"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your Password"
                className="w-full rounded-md border border-[#e0e0e0e] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md focus:border-[#6a64f1]"
              />
            </div>
            <div>
              <button className="mb-[55px] hover:shadow-md rounded-sm bg-[#6a64f1] hover:bg-red-600 py-3 px-8 text-base font-semibold text-white outline-none">
                Login
              </button>
            </div>
          </form>

          <button
            onClick={closeModal}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-2 rounded inline-flex items-center"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
