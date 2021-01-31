import React from 'react';
import AppContext from "../../context";
import styles from './Form.module.scss'
import Button from "../Button/Button";
import Input from "../Input/Input";
import Radio from "./FormRadio";

const types = {
    twitter: 'twitter',
    article: 'article',
    note: 'note',
}

const descriptions = {
    twitter: 'favorite Twitter account',
    article: 'Article',
    note: 'Note',
    title:'',
    link:'',
    image:'',
    description:'',
}

class Form extends React.Component {
    state = {
        type: types.twitter
    }

    handleRadioButtonChange = (type) => {
        this.setState({
            type: type,
        })
    }

    handleInputChange = e =>{
        this.setState({
            [e.target.name]: e.target.value,
        });
        console.log(`
        title: ${this.state.title},
        link: ${this.state.link},
        image: ${this.state.image},
        description: ${this.state.description},
        `
        );
    }

    render() {
        const {type} = this.state;
        return (
            <AppContext.Consumer>
                {(context) => (
                    <div className={styles.wrapper}>
                        <h2>Add new {descriptions[type]}</h2>
                        <form autoComplete="off"
                              className={styles.form} onSubmit={(e) => context.addItem(e,this.state)}>
                            <div>
                            <Radio
                                    id={types.twitter}
                                    type="radio"
                                    checked={type === types.twitter}
                                    changeFn={() => this.handleRadioButtonChange(types.twitter)}
                                >
                                    Twitter
                                </Radio>

                                <Radio
                                    id={types.article}
                                    type="radio"
                                    checked={type === types.article}
                                    changeFn={() => this.handleRadioButtonChange(types.article)}
                                >
                                    Article
                                </Radio>

                                <Radio
                                    id={types.note}
                                    type="radio"
                                    checked={type === types.note}
                                    changeFn={() => this.handleRadioButtonChange(types.note)}
                                >
                                    Note
                                </Radio>
                            </div>
                            <Input
                                onChange={this.handleInputChange}
                                value={this.state.title}
                                name="title" label={type === types.twitter ? 'Twitter Name' : 'Title'}
                                  />
                            {type !== types.note ?
                                <Input
                                    onChange={this.handleInputChange}
                                    value={this.state.link}
                                    name="link" label={type === types.twitter ? 'Twitter Link' : 'Link'}/>
                                : null}
                            {type === types.twitter ? <Input
                                onChange={this.handleInputChange}
                                value={this.state.image}
                                name="image" label="Image"/> : null}
                            <Input
                                onChange={this.handleInputChange}
                                value={this.state.description}
                                tag="textarea" name="description" label="description"/>
                            <Button children="add new item"/>
                        </form>
                    </div>
                )}
            </AppContext.Consumer>
        )
    }

}

export default Form;