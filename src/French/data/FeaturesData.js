//**********************************************//
//**************** // FRENCH // ****************//
//**********************************************//

import React from "react";

import { BsFillShieldLockFill } from "react-icons/bs";
import { IoIosOptions } from "react-icons/io";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BiSupport, BiDollar } from "react-icons/bi";
import { GrHostMaintenance } from "react-icons/gr";
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
  {
    name: "Lorem",
    description: "Our team is available at all times in case you need us",
    icon: iconStyle(BsFillShieldLockFill),
    imgClass: "one",
  },
  {
    name: "Lorem",
    description: "Our team is available at all times in case you need us",
    icon: iconStyle(IoIosOptions),
    imgClass: "two",
  },
  {
    name: "Lorem",
    description: "Our team is available at all times in case you need us",
    icon: iconStyle(GrHostMaintenance),
    imgClass: "three",
  },
  {
    name: "Lorem",
    description: "Our team is available at all times in case you need us",
    icon: iconStyle(BiSupport),
    imgClass: "four",
  },
  {
    name: "Lorem",
    description: "Our team is available at all times in case you need us",
    icon: iconStyle(BiDollar),
    imgClass: "five",
  },
  {
    name: "Lorem",
    description: "Our team is available at all times in case you need us",
    icon: iconStyle(AiOutlineCloudUpload),
    imgClass: "six",
  },
];
