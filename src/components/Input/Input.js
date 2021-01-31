import React from 'react';
import styles from "../Input/Input.module.scss";
import * as PropTypes from "prop-types";

const Input = ({tag: Tag, name, label, maxLength,...props}) => (
    <div className={styles.formItem}>
        <Tag
            className={ Tag === 'textarea' ? styles.textarea :styles.input}
            type="text"
            name={name}
            id={name}
            maxLength={maxLength}
            placeholder=" "
            {...props}
        />
        <label
            className={styles.label}
            htmlFor={name}>{label}</label>
        <div className={styles.formItemBar}/>
    </div>
)

Input.propTypes = {
    tag:PropTypes.string,
    name:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    maxLenght:PropTypes.string,
}

Input.defaultProps = {
    tag: 'input',
    maxLenght:'200',
}

export default Input;