import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ usersLength, pagesSize, onPageChange, currentPage }) => {
    const pageCount = Math.ceil(usersLength / pagesSize);
    const pages = _.range(1, pageCount + 1);

    if (pageCount === 1) return null;

    return (
        <nav>
            <ul className="pagination">
                {pages.map((page) => (
                    <li
                        className={
                            "page-item" +
                            (page === currentPage ? " active" : "")
                        }
                        key={"page_" + page}
                    >
                        <button
                            className="page-link"
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    usersLength: PropTypes.number.isRequired,
    pagesSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
};

export default Pagination;
