import React from "react";
import FooterItem from "./FooterItem";

interface footerItemStruct {
  id: number;
  name: string;
  route: string;
}
interface footerColStruct {
  heading: string;
  items: footerItemStruct[];
}

function FooterItemList(footerItem: footerColStruct) {
  return (
    <div>
      <h5 className="text-white font-medium text-lg">{footerItem.heading}</h5>
      <ul className="mt-5 space-y-2">
        {footerItem.items.map((item) => {
          return <FooterItem key={item.id} {...item} />;
        })}
      </ul>
    </div>
  );
}

export default FooterItemList;
