import React, { useEffect, useState } from "react";

function FunAPI(props) {
  const [data, setData] = useState({});
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/albums")
        .then((res) => res.json())
        .then((Response) => {
          setLoader(false);
          setData(Response);
        });
    }, 2000);
  });
  return (
    <>
      {loader ? (
        <>
          <h1>Loading</h1>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </>
      ) : (
        <>
          <h1>Complated...</h1>
          <div className="conatainer">
            <div className="row">
              <div className="col">
                <h1>{loader}</h1>

                <table className="table">
                  <th>UserId</th>
                  <th>ID</th>
                  <th>Title</th>

                  <tbody>
                    {Object.entries(data).map((res, index) => {
                      return (
                        <tr key={index}>
                          <td>{res[1].userId}</td>
                          <td>{res[1].id}</td>
                          <td>{res[1].title}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default FunAPI;
