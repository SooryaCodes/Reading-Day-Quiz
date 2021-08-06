import React from "react";

export default function Alert({msg}) {
  return (
    <div className="w-full border p-3 bg-yellow-100 bg-opacity-30 border-yellow-500 text-yellow-600 border-opacity-40  rounded-md min-h-12 flex items-start justify-center text-sm" style={{textAlign: 'left'}}>
      <strong className="mr-1">Oops!</strong> {msg}
    </div>
  );
}
