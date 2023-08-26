import React, { useState } from "react";
import { LocationUser } from "../Model";

export const Tic_Tac_Toe: React.FC = () => {
  const [UserChange, setUserChange] = useState("User");
  const [winer, setWiner] = useState("");
  let count = 0;

  const [Location, setLocation] = useState<LocationUser[]>([
    { id: 0, User: "Pock", Target: false },
    { id: 1, User: "Pock", Target: false },
    { id: 2, User: "Pock", Target: false },
    { id: 3, User: "Pock", Target: false },
    { id: 4, User: "Pock", Target: false },
    { id: 5, User: "Pock", Target: false },
    { id: 6, User: "Pock", Target: false },
    { id: 7, User: "Pock", Target: false },
    { id: 8, User: "Pock", Target: false },
  ]);

  const WinStatus = (User: string) => {
    Location[0].User == User &&
    Location[1].User == User &&
    Location[2].User == User
      ? setWiner(User)
      : Location[0].User == User &&
        Location[3].User == User &&
        Location[6].User == User
      ? setWiner(User)
      : Location[2].User == User &&
        Location[5].User == User &&
        Location[8].User == User
      ? setWiner(User)
      : Location[6].User == User &&
        Location[7].User == User &&
        Location[8].User == User
      ? setWiner(User)
      : Location[2].User == User &&
        Location[4].User == User &&
        Location[6].User == User
      ? setWiner(User)
      : Location[0].User == User &&
        Location[4].User == User &&
        Location[8].User == User
      ? setWiner(User)
      : Location[1].User == User &&
        Location[4].User == User &&
        Location[7].User == User
      ? setWiner(User)
      : "";
  };

  function ResetGameHandler() {
    setUserChange("User");
    location.reload();

  }

  const ClickHandler = (id: number) => {

    count==8?setUserChange('Refresh'):''
    let NewItem = Location.map((item) => {
      item.id === id && item.User != "blue" && item.User != "red" && winer == ""
        ? UserChange == "User"
          ? ((item.User = "blue"),
            setUserChange(UserChange === "User" ? "Enemy" : "User"),
            WinStatus("blue"))
          : ((item.User = "red"),
            
            setUserChange(UserChange === "User" ? "Enemy" : "User"),
            WinStatus("red"))
        : "";

      return item;
    });
    setLocation(NewItem);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-1 text-xl ">
        {Array.from({ length: 9 }, (_, i) => (
          <>
            {Location[i].User === "blue" ? (
              <>
                <div
                  className="sm: w-28 h-11 flex text-blue-500 justify-center items-center cursor-pointer font-md border-3 border-4 border-gray-300 rounded  font-bold md:w-40 h-17 "
                  onClick={() => ClickHandler(i)}>
                  X
                </div>
              </>
            ) : Location[i].User === "red" ? (
                <>
                  
                <div
                  className="sm: w-28 h-11 flex text-red-500 justify-center items-center cursor-pointer font-md border-3 border-4 border-gray-300 rounded  font-bold md:w-40 h-17 "
                  onClick={() => ClickHandler(i)}>
                  O
                </div>
              </>
            ) : (
              <>
                <div
                  className="sm: w-28 h-11 flex justify-center items-center cursor-pointer font-md border-3 border-4 border-gray-300 rounded  font-bold md:w-40 h-17 "
                  onClick={() => ClickHandler(i)}></div>
              </>
            )}
          </>
        ))}
      </div>
      <p
        className={
          winer == "red"
            ? "sm:text-sm text-red-500 text-cente font-bold text-md mt-14 "
            : winer == "blue"
            ? "sm:text-sm text-blue-400 text-cente font-bold md:text-md mt-14"
            : "sm:text-sm text-gray-900 text-center font-bold md:text-md mt-14"
        }>
        {winer == "blue"
          ? "Blue Win (Refresh for Continue)"
          : winer == "red"
          ? "Red Win (Refresh for Continue)"
          : UserChange}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          onClick={ResetGameHandler}
          className="w-10 h-10 text-gray-400 cursor-pointer mx-auto mt-4 ">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </p>
    </>
  );
};
