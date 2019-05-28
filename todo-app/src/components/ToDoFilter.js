import React from "react";
import { connect } from "react-redux";
import { filters, setFilter } from "../actions/index";

class ToDoFilter extends React.Component {
  render() {
    return (
      <div className="todo-filters text-right">
        <div
          className="btn-group btn-group-sm"
          role="group"
          aria-label="Set a filter to show items"
        >
          {Object.keys(filters).map(filterKey => {
            const filter = filters[filterKey];

            return (
              <button
                type="button"
                className={`btn btn-light ${
                  this.props.filter === filter ? "active" : ""
                }`}
                onClick={e => {
                  this.props.setFilter(filter);
                }}
                key={filterKey}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    filter: state.filter
  }),
  {
    setFilter
  }
)(ToDoFilter);
