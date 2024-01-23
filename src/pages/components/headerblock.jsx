import Link from "next/link";
import React from "react";

const Headerblock = (props) => {
  return (
    <div className="flex flex-row items-center justify-center w-56 h-20 gap-x-3 border border-3 border-red-600">
      <div>
        <Link href={props.link}>{props.svg}</Link>
      </div>
      <div>
        <Link href={props.link}>
          <h3 className="font-bold text-sm">{props.heading}</h3>
        </Link>
        <Link href={props.link}>
          <p className="text-slate-500 text-xs">{props.content}</p>
        </Link>
      </div>
    </div>
  );
};

export default Headerblock;
