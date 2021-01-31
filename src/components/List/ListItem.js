import React from 'react';
import styles from './ListItem.module.scss';
import * as PropTypes from "prop-types";
import Button from "../Button/Button";

const ListItem = ({
                      image,
                      title,
                      description,
                      link
                  }) => {
    const ImageTag = image ? "img" : "div";
    return(
        <li className={styles.wrapper}>
            {image && <ImageTag
                alt={title}
                src={image}
                className={styles.image}/>}

            <div>
                <h2 className={styles.name}>{title}</h2>
                <p className={styles.description}>
                    {description}</p>
                {link && <Button href={link} children="visit twitter page"/>}
            </div>
        </li>
    )

}
export default ListItem;

ListItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string,

}

ListItem.defaultProps = {
    image: null,
    link: null,
}