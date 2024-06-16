import React, { useRef, useState } from "react";
import { DATA } from "@/static";

/**
 * ready
 * working
 * stuck
 * done
 */

let statuses = ["ready", "working", "stuck", "done"];

const KanbanBoard = () => {
  const [data, setData] = useState(DATA);
  const [status, setStatus] = useState(null);

  const title = useRef(null);
  const desc = useRef(null);

  const filterByStatus = (status) => {
    return data
      ?.filter((el) => el.status === status)
      ?.map((el) => (
        <div key={el.id} className="kanban__item">
          <p>{el.title}</p>
          <p className="kanban__commit">{el.desc}</p>
          <div className="kanban__status">
            <select name="" id="">
              {statuses?.map((el) => (
                <option key={el} value="working">
                  {el}
                </option>
              ))}
            </select>
            <span>9:04</span>
          </div>
        </div>
      ));
  };

  let readyItems = filterByStatus("ready");
  let workingItems = filterByStatus("working");
  let stuckItems = filterByStatus("stuck");
  let doneItems = filterByStatus("done");

  //   const handleAddItem = status => {
  //     setStatus(status)
  //   }

  const handleCreateItem = (e) => {
    e.preventDefault();
    let id = new Date().getTime();
    let newItems = {
      id,
      title: title.current.value,
      desc: desc.current.value,
      status,
    };
    setData((prev) => [...prev, newItems]);

    setStatus(null);
    title.current.value = "";
    desc.current.value = "";
  };

  return (
    <section>
      <div className="container">
        <div className="kanban">
          <h2 className="kanban__title">Kanban Board</h2>
          <form
            onSubmit={handleCreateItem}
            className={`kanban__form ${status ? "show" : ""}`}
          >
            <p>Create something</p>
            <input ref={title} type="text" />
            <input ref={desc} type="text" />
            <button>Create</button>
          </form>
          <div className="kanban__wrapper">
            <div className="kanban__box ready">
              <div className="kanban__heading">
                <p>Ready to start / 1</p>
              </div>
              <div className="kanban__block">{readyItems}</div>
              <button
                onClick={() => setStatus("ready")}
                className="kanban__add_btn"
              >
                Add item
              </button>
            </div>
            <div className="kanban__box working">
              <div className="kanban__heading">
                <p>Working to start / 1</p>
              </div>
              <div className="kanban__block ">{workingItems}</div>
              <button
                onClick={() => setStatus("working")}
                className="kanban__add_btn"
              >
                Add item
              </button>
            </div>
            <div className="kanban__box stuck">
              <div className="kanban__heading">
                <p>Stuck to start / 1</p>
              </div>
              <div className="kanban__block">{stuckItems}</div>
              <button
                onClick={() => setStatus("stuck")}
                className="kanban__add_btn"
              >
                Add item
              </button>
            </div>
            <div className="kanban__box done">
              <div className="kanban__heading">
                <p>Done to start / 1</p>
              </div>
              <div className="kanban__block">{doneItems}</div>
              <button
                onClick={() => setStatus("done")}
                className="kanban__add_btn"
              >
                Add item
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KanbanBoard;
