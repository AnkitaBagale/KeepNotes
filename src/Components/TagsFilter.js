import { useState } from "react";
import "./tagsFilterStyles.css";
import { useNotes } from "../Context";

export function TagsFilter() {
  const [newTag, setNewTag] = useState("");

  const [isFilterOpen, setFilterOpen] = useState(false);

  const {
    state: { tags },
    dispatch
  } = useNotes();

  return (
    <div className="tags-area">
      <div
        onClick={() => {
          setFilterOpen(!isFilterOpen);
        }}
        className={isFilterOpen ? "active-filter" : ""}
      >
        <h3>Filter</h3>
        <span role="img" className="filter-arrow">
          <i className="fas fa-chevron-down"></i>
        </span>
        <span className="selected-tag-display">{""}</span>
      </div>
      <div
        className={
          isFilterOpen
            ? "active-filter filter-section-content"
            : "filter-section-content"
        }
      >
        <ul className="list-style-none">
          <li
            className="tagFilter"
            style={{
              backgroundColor: `${true === "All" ? "var(--focus-color)" : ""}`
            }}
          >
            <span>
              <i class="fas fa-tag"></i>
            </span>
            All
          </li>
          {tags.map((tag) => {
            return (
              <li
                className="tagFilter"
                key={tag}
                style={{
                  backgroundColor: `${tag === true ? "var(--focus-color)" : ""}`
                }}
              >
                <span>
                  <i class="fas fa-tag"></i>
                </span>
                {tag}
              </li>
            );
          })}
        </ul>
        <div className="input-for-new-tag">
          <input
            value={newTag}
            onChange={(e) => {
              setNewTag(e.target.value);
            }}
            placeholder="enter new tag"
          />
          <button
            onClick={() => {
              if (newTag && !tags.includes(newTag)) {
                setNewTag("");
              }
            }}
          >
            <i className="fas fa-plus-circle"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
