export const RenderData = ({ dataFromBackend }: any) => {
  return (
    <div>
      <h1>{dataFromBackend}</h1>
    </div>
  );
};

// <div className="relative overflow-x-auto">
//       <table className="w-full text-sm text-left rtl:text-right text-gray-500">
//         <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
//           <tr>
//             <th scope="col" className="px-6 py-3">
//               {data.firstCaptain}
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="bg-white border-b">
//             <th
//               scope="row"
//               className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
//             >
//               Apple MacBook Pro 17"
//             </th>
//           </tr>
//           <tr className="bg-white border-b">
//             <th
//               scope="row"
//               className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
//             >
//               Microsoft Surface Pro
//             </th>
//           </tr>
//           <tr className="bg-white">
//             <th
//               scope="row"
//               className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
//             >
//               Magic Mouse 2
//             </th>
//           </tr>
//         </tbody>
//       </table>
//     </div>
