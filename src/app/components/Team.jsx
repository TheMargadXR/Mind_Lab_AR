import React from "react";
import Image from "next/image";
import me from "../images/image/member_1.jpg";
const Team = () => {
  return (
    <div className=" text-[#33363B] " id="team">
      <div className=" ">
        <h2 className="text-3xl text-center ">
          <span className="text-[#0099CC]">Team </span>members
        </h2>
        <br />
        <br />
        <div className="flex justify-evenly ">
          <div className="text-center py-5 ">
            <Image
              src={me}
              className="rounded-xl"
              height={300}
              width={200}
              alt="team leader"
            />
            <div className="text-center py-5 ">
              <span>Member</span>
              <p>Margad Erdene Kh</p>
            </div>
          </div>
          <div className="text-center py-5 ">
            <Image
              src={me}
              className="rounded-xl"
              alt="team member"
              width={200}
              height={200}
            />
            <div className="text-center py-5">
              <span>Member</span>
              <p>Khulan E</p>
            </div>
          </div>
          <div className="text-center py-5 ">
            <Image
              src={me}
              className="rounded-xl"
              alt="team member"
              width={200}
              height={200}
            />
            <div className="text-center py-5">
              <span>Member</span>
              <p>Usukhbayr G</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
