import React from 'react';
import styles from './Form.module.scss'
import Button from "../Button/Button";
import Input from "../Input/Input";
const Form = ({submitFn}) => (
    <div className={styles.wrapper}>
        <h2>Add new twitter account</h2>
        <form autoComplete="off"
            className={styles.form} onSubmit={submitFn}>
            <Input name="name" label="Name" maxLenght={30}/>
            <Input name="link" label="Twitter Link"/>
            <Input name="image" label="Image"/>
            <Input tag="textarea" name="description" label="description"/>
            <Button children="add new item"/>
        </form>
    </div>
);

export default Form;