interface Props {
  from: number;
  to: number;
  total: number;
}

const SearchCount = ({ from, to, total }: Props) => {
  return (
    <span className="text-sm font-semibold text-heading">
      {`Hiển thị ${from} - ${to} của ${total} sản phẩm`}
    </span>
  );
};

export default SearchCount;
