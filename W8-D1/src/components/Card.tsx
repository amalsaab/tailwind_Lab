import React from "react";

function Card(props: { src: string; title: string; pro: string[] }) {
  return (
    <>
      <div className="border-2 flex justify-center items-center gap-3 w-[19.3vw] h-40 p">
        <img className="w-36 h-36" src={props.src} />
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold">{props.title}</h4>
          <div >
            {props.pro.map((pro) => {
              return <p className="text-sm" >{pro}</p>;
            })}
          </div>

        </div>
      </div>
    </>
  );
}

export default Card;
