import React from "react";

import {
  BusinessIcon,
  CallusIcon,
  Logosvgs,
  MemberWIcon,
  PropertyIcon,
} from "./svgs";
import Headerblock from "./headerblock";
import { FaUserCircle } from "react-icons/fa";
import "../../styles/head.scss";

function Header1() {
  return (
    <div className="custom-header1 flex flex-row flex-wrap justify-between items-center w-full h-20 pl-14 pr-8   border border-3 border-red-600">
      <div>
        <Logosvgs />
      </div>
      <div className=" flex flex-row">
        <Headerblock
          svg={<MemberWIcon />}
          link={"https://www.oyorooms.com/wizard/"}
          heading={"Become a Member"}
          content={"Additional 10% off on stays"}
        />
        <Headerblock
          svg={<BusinessIcon />}
          link={
            "https://business.oyorooms.com/business/?utm_campaign=oyoroomsINhome&utm_medium=header&utm_source=dweb"
          }
          heading={"OYO for Business"}
          content={"Trusted by 5000 Corporates"}
        />
        <Headerblock
          svg={<PropertyIcon />}
          link={
            "https://patron.oyorooms.com/in?utm_campaign=dweb&utm_medium=header&utm_source=dweb"
          }
          heading={"List your property"}
          content={"Start earning in 30 mins"}
        />
        <Headerblock
          svg={<CallusIcon />}
          link={"tel:0124-6201611"}
          heading={"0124-6201611"}
          content={"Call us to Book now"}
        />
        <Headerblock
          svg={<PropertyIcon />}
          link={
            "https://patron.oyorooms.com/in?utm_campaign=dweb&utm_medium=header&utm_source=dweb"
          }
          heading={"List your property"}
          content={"Start earning in 30 mins"}
        />
        <Headerblock
          svg={
            <FaUserCircle
              size={23}
              color="#9ca3af"
              fill="#9ca3af"
              stroke-width="5"
              className="stroke-custom "
            />
          }
          link={"/"}
          heading={"List your property"}
          content={"Start earning in 30 mins"}
        />
      </div>
    </div>
  );
}

export default Header1;
