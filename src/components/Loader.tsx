// export default function Loader() {
//   return (
//     <div className="w-full h-full rounded-full bg-[#1E1E1E] p-0.5 md:p-1 overflow-hidden">
//       <div className="h-full w-full rounded-full bg-[linear-gradient(90deg,white_0%,white_33%,transparent_66%,transparent_100%)] bg-size-[300%_100%] animate-[loader-dash_3s_ease-in-out_infinite]"></div>
//     </div>
//   );
// }

export default function Loader() {
  return (
    <div className="w-full h-full rounded-full p-px md:p-0.5 overflow-hidden">
      <div className="h-full w-full rounded-full bg-[linear-gradient(90deg,white_0%,white_33%,transparent_66%,transparent_100%)] bg-size-[300%_100%] animate-[loader-dash_3s_ease-in-out_infinite]"></div>
    </div>
  );
}
