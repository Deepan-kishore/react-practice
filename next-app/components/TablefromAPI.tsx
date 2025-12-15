import { useEffect, useState } from "react";
import useFetch from "./CustomHook";

const Table = ({ url }: { url: string }) => {
  const { data, isLoading, error } = useFetch(url);
  const [slicedData, setSlicedData] = useState([]);

  const [selectedId, setSelectedId] = useState<number[]>([]);

  useEffect(() => {
    if (data) {
      setSlicedData(data.slice(10));
    }
  }, [data]);
  if (error) {
    console.log(error);
    return <>eror showing data</>;
  }

  if (isLoading) {
    return <>loading...</>;
  }

  const getHead = (title: string) => <th>{title}</th>;

  if (slicedData.length) {
    return (
      <table>
        <thead>
          <tr>{["User Id", "Title", "Is Completed"].map(getHead)}</tr>
        </thead>

        <tbody>
          {slicedData.map(({ id, userId, title, completed }) => (
            <tr
              key={id}
              onClick={() =>
                setSelectedId((idlist) => {
                  // If id is already selected, remove it
                  if (idlist.includes(id)) {
                    return idlist.filter((item) => item !== id);
                  }
                  // If id is not selected, add it
                  else {
                    return [...idlist, id];
                  }
                })
              }
              style={{
                background: selectedId?.includes(id) ? "yellow" : "",
                color: selectedId?.includes(id) ? "red" : "",

              }}
            >
              <td>{userId}</td>
              <td>{title}</td>
              <td>{completed.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
};

export default Table;
