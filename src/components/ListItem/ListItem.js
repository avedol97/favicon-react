import React from 'react';
import './ListItem.css';
import * as PropTypes from "prop-types";

const ListItem = ({
                      image,
                      name,
                      description,
                      twitterLink
                  }) => (
    <li className="listItem__wrapper">
        <img
            alt={name}
            src={image}
            className="listItem__image"/>
        <div>
            <h2 className="listItem__name">{name}</h2>
            <p className="listItem__description">
                {description}</p>
            <a href={twitterLink}
               target="_blank"
               className="listItem__button">visit twitter page</a>
        </div>
    </li>
)
export default ListItem;

ListItem.propTypes = {
    image:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    description:PropTypes.string,
    twitterLink:PropTypes.string.isRequired,
}

ListItem.defaultProps ={
    description: "One of the React Creators",
}