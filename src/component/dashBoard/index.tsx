import Item from "./item";

const DashBoard = () => {
  return (
    <>
      <div className="p-2 h-full w-full bg-gray-200 flex flex-wrap gap-3 overflow-y-scroll">
        <Item width={400} height={400}>
          <div>어쩌구 저쩌구</div>
        </Item>
        <Item width={450} height={400}>
          <div>어쩌구 저쩌구</div>
        </Item>
        <Item width={600} height={400}>
          <div>어쩌구 저쩌구</div>
        </Item>
        <Item width={400} height={400}>
          <div>어쩌구 저쩌구</div>
        </Item>
        <Item height={400}>
          <div>어쩌구 저쩌구</div>
        </Item>
        <Item width={400} height={400}>
          <div>어쩌구 저쩌구</div>
        </Item>
        <Item width={400} height={400}>
          <div>어쩌구 저쩌구</div>
        </Item>
        <Item width={400} height={400}>
          <div>어쩌구 저쩌구</div>
        </Item>
      </div>
    </>
  );
};

export default DashBoard;
