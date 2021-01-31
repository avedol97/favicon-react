import React from 'react';
import styles from './ListItem.module.scss';
import * as PropTypes from "prop-types";
import Button from "../Button/Button";

const ListItem = ({
                      image,
                      name,
                      description,
                      twitterLink
                  }) => (
    <li className={styles.wrapper}>
        <img
            alt={name}
            src={image}
            className={styles.image}/>
        <div>
            <h2 className={styles.name}>{name}</h2>
            <p className={styles.description}>
                {description}</p>
            <Button href={twitterLink} children="visit twitter page"/>
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