export const TableRender = ({ randomPlayerData }: any) => {
  return (
    <div className="flex justify-center">
      <div className="relative overflow-x-auto">
        <table className="text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="pt-3 pb-3 pl-1 pr-10 border-r">
                Captain Name
              </th>
              <th scope="col" className="pr-1 pl-10">
                Players
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(randomPlayerData).map(
              ([captain, players], index) => (
                <tr key={index}>
                  <td className="pl-1 border-r">{captain}</td>
                  <td className="pr-1 pl-10">
                    <ul>
                      {players.map((player, index) => (
                        <li key={index}>{player}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
