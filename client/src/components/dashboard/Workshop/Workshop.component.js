import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteWorkshop } from "../../../redux/actions/profile.action";

const Workshop = ({ workshop, deleteWorkshop }) => {
  const workshops = workshop.map(work => (
    <tr key={work._id}>
      <td>{work.description}</td>
      <td>
        <button
          onClick={() => deleteWorkshop(proj._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-2">Workshops & Meetups</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Workshops</th>
            <th />
          </tr>
        </thead>
        <tbody>{workshops}</tbody>
      </table>
    </Fragment>
  );
};

Project.propTypes = {
  workshop: PropTypes.array.isRequired,
  deleteWorkshop: PropTypes.func.isRequired
};

export default connect(null, { deleteWorkshop })(Workshop);
