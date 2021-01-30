import '../../App.css';
import './index.css';
import * as React from "react";
import {Route,BrowserRouter,Switch} from "react-router-dom";
import TwittersView from "../TwittersView/TwittersView";
import ArticlesView from "../ArticlesView/ArticlesView";
import NotesView from "../NotesView/NotesView";
import Modal from "../../components/Modal/Modal";
import Header from "../../components/Header/Header";

const initialStateItems = [
    {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Malevich.black-square.jpg/606px-Malevich.black-square.jpg',
        name: 'Dan Abramov',
        description: 'Dan Abramov is a software engineer at Facebook.\n' +
            '            Together with Andrew Clark, he created Redux.',
        twitterLink: 'https://twitter.com/dan_abramov',
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Malevich.black-square.jpg/606px-Malevich.black-square.jpg',
        name: 'Ryan Florence',
        description: 'Ryan started making websites for a local ISP before JavaScript or CSS were created.',
        twitterLink: 'https://twitter.com/ryanflorence',
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Malevich.black-square.jpg/606px-Malevich.black-square.jpg',
        name: 'Michael Jackson',
        description: 'Building @remix_run. Built @unpkg, 2B+ hits per day.',
        twitterLink: 'https://twitter.com/mjackson',
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Malevich.black-square.jpg/606px-Malevich.black-square.jpg',
        name: 'Kent C. Dodds',
        description: 'Hi, Im Kent C. Dodds. I help people make the word better through quality software',
        twitterLink: 'https://twitter.com/kentcdodds',
    },
]

class Root extends React.Component {

    state = {
        items: [...initialStateItems],
    }

    addItem = (e) => {
        e.preventDefault();

        const newItem = {
            name: e.target[0].value,
            twitterLink: e.target[1].value,
            image: e.target[2].value,
            description: e.target[3].value,
        }
        this.setState(prevState =>({
            items: [...prevState.items,newItem]
        }));

        e.target.reset();
    }

    render() {
        return (
            <BrowserRouter>
                < >
                    <Header/>
                    <h1>Helooo</h1>
                    <Switch>
                    <Route exact path="/" component={TwittersView}/>
                    <Route path="/articles" component={ArticlesView}/>
                    <Route path="/notes" component={NotesView}/>
                    </Switch>
                    <Modal/>
                </>
            </BrowserRouter>

        )
    }

}

export default Root;
