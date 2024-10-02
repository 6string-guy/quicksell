import React from "react";
import { useSelector } from "react-redux";
import { Card } from "./Card";
import { BoardIcon } from "../utils/BIcons";
import "../assets/styles/KanbanBoard.css";
import image from "../assets/images/image.png";

const KanbanBoard = () => {
  const { dataSelected, user, users } = useSelector((state) => state.dataSlice);

  return (
    <div className="container">
      {dataSelected?.map((item, id) => {
        const element = item[id];

        // Ensure element is defined to prevent crashes
        if (!element) return null;

        return (
          <div key={id} className="Board_container">
            {/* Board Header */}
            <div className="heading_icons">
              <div>
                {!user ? (
                  <BoardIcon element={"element?.title.svg"} />
                ) : (
                  <div className="board_user_icon_container">
                    <img className="board_user_icon" src={image} alt="User" />
                  </div>
                )}
                {/* Title and card count */}
                <span className="board_title">
                  <span>{element?.title || "Untitled"}</span>
                  {/* Show 0 if no cards */}
                  <span className="board_card_count">
                    {element?.value?.length || 0}
                  </span>
                </span>
              </div>
              <div>
                <BoardIcon
                  element={"plus"}
                  title="Add"
                  styleClass={"board_icon board_navigations"}
                />
                <BoardIcon
                  element={"threeDots"}
                  title="Explore"
                  styleClass={"board_navigations"}
                />
              </div>
            </div>
            {/* Cards */}
            <div className="cards_container">
              {element?.value?.length > 0 ? (
                element.value.map((item, ind) => (
                  <Card
                    key={ind}
                    id={item.id}
                    userId={item.userId}
                    tags={item.tag}
                    title={item.title}
                    users={users}
                  />
                ))
              ) : (
                <div className="no_cards_message">No tasks available</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KanbanBoard;
