const ListItem = ({ item }: any) => {
  return (
    <li className="border-b-[1px] flex w-fit text-sm ">
      <div className="w-40 p-[6px_14px] box-content whitespace-nowrap overflow-hidden text-ellipsis">
        {item.roomName}
      </div>
      <div className="w-24 p-[6px_14px] box-content ">{item.selectMenu}</div>
      <div className="w-12 p-[6px_14px] box-content ">{item.status}</div>
    </li>
  );
};

export default ListItem;
