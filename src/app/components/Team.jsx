import React from "react";
import Image from "next/image";

const Team = () => {
  return (
    <div className="bg-[#33363B] text-[#f4f4f4] " id="team">
      <div className=" p-20">
        <h2 className="text-3xl text-center ">Our Team</h2>
        <br />
        <br />
        <div className="flex justify-evenly ">
          <div className="  p-4  ">
            <Image
              src="/assets/member.png"
              alt="team leader"
              width={200}
              height={200}
            />
            <div className="text-center ">
              <span>Team leader</span>
              <p>Margad Erdene Kh</p>
            </div>
          </div>
          <div className="  p-4  ">
            <Image
              src="/assets/member.png"
              alt="team member"
              width={200}
              height={200}
            />
            <div className="text-center">
              <span>Team member</span>
              <p>Khulan E</p>
            </div>
          </div>
          <div className="  p-4  ">
            <Image
              src="/assets/member.png"
              alt="team member"
              width={200}
              height={200}
            />
            <div className="text-center">
              <span>Team member</span>
              <p>Usukhbayr G</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
