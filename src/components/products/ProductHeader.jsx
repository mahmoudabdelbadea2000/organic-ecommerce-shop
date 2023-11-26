import UnopDropdown from "unop-react-dropdown";

const ProductHeader = () => {
  const handler = () => {};
  return (
    <section className="flex justify-between items-center my-4">
      <UnopDropdown
        onAppear={handler}
        onDisappearStart={handler}
        trigger={<p>sorting by:</p>}
        align="LEFT"
      >
        <ul className="flex justify-between flex-col bg-white w-52 text-sm capitalize shadow-lg">
          <li className="p-2 transition-colors hover:text-white hover:bg-primary">
            sorting by
          </li>
          <li className="p-2 transition-colors hover:text-white hover:bg-primary">
            upper saling
          </li>
          <li className="p-2 transition-colors hover:text-white hover:bg-primary">
            top rated
          </li>
          <li className="p-2 transition-colors hover:text-white hover:bg-primary">
            price from lower to upper
          </li>
          <li className="p-2 transition-colors hover:text-white hover:bg-primary">
            price from upper to lower
          </li>
        </ul>
      </UnopDropdown>

      <p className="text-gray-400">
        <span className="font-medium text-black">52</span> Results Found
      </p>
    </section>
  );
};

export default ProductHeader;
