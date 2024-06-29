interface ItemProps {
  width?: number;
  height?: number;
  children?: React.ReactElement;
}

const Item = ({ width, height, children }: ItemProps) => {
  const style = {
    width: width ? `${width}px` : "auto",
    height: height ? `${height}px` : "auto",
  };

  return (
    <>
      <div style={style} className="rounded-lg bg-white">
        {children}
      </div>
    </>
  );
};

export default Item;
