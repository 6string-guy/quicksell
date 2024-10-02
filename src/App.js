import React, { useEffect } from 'react';
import './App.css';
import KanbanBoard from './components/KanbanBoard';
import Header from './components/Header';
import { useDispatch, useSelector } from "react-redux";
import { fetchDataApi } from './service/action';

function App() {
  const dispatch = useDispatch();
  const { tickets } = useSelector((state) => state.dataSlice);
  useEffect(() => {
    dispatch(fetchDataApi());
  }, [dispatch]);

  return (
    <React.Fragment>
      {tickets.length === 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            margin: 0,
          }}
        >
          <div
            style={{
              fontSize: "24px",
              textAlign: "center",
            }}
          >
            Loading...
          </div>
        </div>
      ) : (
        <div className="app_container">
          <Header />
          <KanbanBoard />
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
