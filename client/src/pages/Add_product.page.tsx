const AddProducts = () => {
    return (

        <>
            <div className="flex flex-col justify-between items-center">
                <form className="mt-4 space-y-5 max-w-6xl border border-gray-400 rounded-md shadow-2xl p-2">
                    <h1
                        className="text-center text-xl"
                        style={{ color: "var(--on-surface-variant)" }}
                    >
                        Add Product Panel
                    </h1>
                    <div className="flex flex-col gap-2 md:flex-row">
                        <div className="border border-gray-300 rounded-md flex flex-col justify-center items-center p-4  md:w-auto">
                            <p
                                className="form-label"
                                style={{ color: "var(--on-surface-variant)" }}
                            >
                                Product Image
                            </p>
                            <div className="flex flex-wrap items-center justify-center lg:flex-col gap-2">
                                {Array(5).fill('').map((_, index) => (
                                    <label
                                        key={index}
                                        htmlFor={`image${index}`}
                                    >
                                        <input
                                            accept="image/*"
                                            type="file"
                                            id={`image${index}`}
                                            hidden
                                        />
                                        <img
                                            className="max-w-29 cursor-pointer"
                                            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png"
                                            alt="uploadArea"
                                            width={200}
                                            height={200}
                                        />
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className=" border border-gray-300 rounded-md p-2 w-full md:w-95">
                            <div className="flex flex-col gap-1 max-w-md">
                                <label
                                    className="form-label"
                                    htmlFor="product-name"
                                    style={{ color: "var(--on-surface-variant)" }}
                                >
                                    Product Name
                                </label>
                                <input
                                    id="product-name"
                                    type="text"
                                    placeholder="Type here"
                                    className="outline-none md:py-2.5 py-2 px-3 rounded border focus:ring-2 ring-blue-600 border-gray-500/40"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-1 max-w-md">
                                <label
                                    className="form-label"
                                    htmlFor="product-description"
                                    style={{ color: "var(--on-surface-variant)" }}
                                >
                                    Product Description
                                </label>
                                <textarea
                                    id="product-description"
                                    rows={4}
                                    className="outline-none md:py-2.5 py-2 px-3 rounded border focus:ring-2 ring-blue-600 border-gray-500/40 resize-none"
                                    placeholder="Type here"
                                >
                                </textarea>
                            </div>
                            <div className="w-full flex flex-col gap-1">
                                <label
                                    className="form-label"
                                    htmlFor="category"
                                    style={{ color: "var(--on-surface-variant)" }}
                                >
                                    Category
                                </label>
                                <select
                                    id="category"
                                    className="outline-none focus:ring-2 ring-blue-600 md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
                                >
                                    <option
                                        value=""
                                        style={{ color: "var(--on-surface-variant)" }}
                                    >
                                        Select Category
                                    </option>
                                    {[{ name: 'Electronics' }, { name: 'Clothing' }, { name: 'Accessories' }].map((item, index) => (
                                        <option
                                            key={index}
                                            value={item.name}
                                        >
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex items-center gap-5 flex-wrap">
                                <div className="flex-1 flex flex-col gap-1 w-32">
                                    <label
                                        className="form-label"
                                        htmlFor="product-price"
                                        style={{ color: "var(--on-surface-variant)" }}
                                    >
                                        Product Price
                                    </label>
                                    <input
                                        id="product-price"
                                        type="number"
                                        placeholder="0"
                                        className="outline-none md:py-2.5 py-2 px-3 rounded border focus:ring-2 ring-blue-600 border-gray-500/40"
                                        required
                                    />
                                </div>

                                <div className="flex-1 flex flex-col gap-1 w-32">
                                    <label
                                        className="form-label"
                                        htmlFor="offer-price"
                                        style={{ color: "var(--on-surface-variant)" }}
                                    >
                                        Offer Price
                                    </label>
                                    <input
                                        id="offer-price"
                                        type="number"
                                        placeholder="0"
                                        className="outline-none md:py-2.5 py-2 px-3 rounded border focus:ring-2 ring-blue-600 border-gray-500/40"
                                        required
                                    />
                                </div>
                            </div>
                            <button
                                className="px-8 py-2.5 bg-indigo-500 w-full mt-5 curstor-pointer text-white font-medium rounded"
                            >
                                ADD PRODUCTS
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddProducts