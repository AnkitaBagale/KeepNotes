import { useState } from "react";
import "./tagsFilterStyles.css";

export function TagsFilter({ tags, setTags, setSelectedTag, selectedTag }) {
  const [newTag, setNewTag] = useState("");
  // console.log(selectedTag);
  const [isFilterOpen, setFilterOpen] = useState(false);

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
        <span className="selected-tag-display">{selectedTag}</span>
      </div>
      <div
        className={
          isFilterOpen
            ? "active-filter filter-section-content"
            : "filter-section-content"
        }
      >
        <label
          style={{
            backgroundColor: `${
              selectedTag === "All" ? "var(--focus-color)" : ""
            }`
          }}
        >
          All
          <input
            className="tagFilter"
            type="radio"
            value="All"
            name="filter"
            onClick={(e) => {
              setSelectedTag(e.target.value);
            }}
          />
        </label>
        {tags.map((tag) => {
          return (
            <label
              key={tag}
              style={{
                backgroundColor: `${
                  tag === selectedTag ? "var(--focus-color)" : ""
                }`
              }}
            >
              {tag}
              <input
                className="tagFilter"
                type="radio"
                value={tag}
                name="filter"
                onClick={(e) => {
                  setSelectedTag(e.target.value);
                }}
              />
            </label>
          );
        })}
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
                setTags([...tags, newTag]);
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
