export const TableRender = ({ firstCaptainName, secondCaptainName, teams }) => {
  return (
    <div className="flex justify-center">
      <div className="relative overflow-x-auto">
        <table className="text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="pt-3 pb-3 pl-1 pr-10 border-r">
                {firstCaptainName}
              </th>
              <th scope="col" className="pr-1 pl-10">
                {secondCaptainName}
              </th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team) => {
              return <td className="pl-1 border-r">{team}</td>;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
