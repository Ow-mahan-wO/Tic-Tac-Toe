import React, { useState } from "react";

export const Tic_Tac_Toe: React.FC = () => {
  const [UserChange, setUserChange] = useState("Enemy");
  const [UserLocation, setUserLocation] = useState<number[]>([6,1,5,3,8,5,8,7]);
  const [EnemyLocation, setEnemyLocation] = useState<number[]>([0,3,2,7,4,9,6]);

  const ClickHandler = (id: number) => {
    setUserChange(UserChange === "User" ? "Enemy" : "User");
    UserChange === "User"
      ? setUserLocation([...UserLocation, id])
      : setEnemyLocation([...EnemyLocation, id]);
  };

  return (
    <>
          <div className="grid grid-cols-3 gap-1 text-xl">
        {Array.from({ length: 9 }, (_,i) => (
            <>
                {console.log(i==EnemyLocation[i])
                }
                {i===EnemyLocation[i] ? (
                    
              <>
                <div
                  className="flex justify-center items-center text-blue-500 cursor-pointer font-md border-3 border-4 border-gray-300 rounded w-40 h-40 font-bold"
                  onClick={() => ClickHandler(i)}>
                  X
                </div>
              </>
            ) : UserLocation[i] === i  ? (
              <>
                
                <div
                  className="flex justify-center items-center cursor-pointer text-red-500 font-md border-3 border-4 border-gray-300 rounded w-40 h-40 font-bold"
                  onClick={() => ClickHandler(i)}>
                  O
                </div>
              </>
            ) : (
              <>
                <div
                  className="flex justify-center items-center cursor-pointer font-md border-3 border-4 border-gray-300 rounded w-40 h-40 font-bold"
                  onClick={() => ClickHandler(i)}></div>
              </>
            )}
          </>
        ))}
      </div>
      <p className="text-center font-bold text-md mt-14">Turn {UserChange}</p>
    </>
  );
};
