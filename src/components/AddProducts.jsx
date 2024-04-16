function AddProducts() {
  return (
    <div className="container mx-auto flex justify-center items-center">
      <div className="flex flex-col justify-center items-center border w-[70%] gap-[5em]">
        <div className="border-b-[#b0b0b0]">
          <h1>Add New Product</h1>
        </div>
        <div>
          <input
            className="border p-5"
            type="text"
            placeholder="Product Name"
          />
        </div>
        <div>
          <input className="border p-5" type="text" placeholder="Price" />
        </div>
        <div>
          <input
            className="border p-5"
            type="text"
            placeholder="Select Ctegory"
          />
        </div>
        <div className="flex gap-8 items-center">
          <input
            className="border p-5"
            type="text"
            placeholder="Upload Product Image"
          />
          <p>No file chosen</p>
        </div>
        <div>
          <input type="text" placeholder="" />
        </div>
      </div>
    </div>
  );
}
export default AddProducts;
