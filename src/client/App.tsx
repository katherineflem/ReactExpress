import * as React from 'react';
import { useState, useEffect } from 'react'

import './scss/app'; //import your styling file


//App is given types: <IAppProps> and <IAppState>.
//IAppState is an object with property of name that must be a string or else it wont compile
//IAppProps can be any type?
export default class App extends React.Component<IAppProps, IAppState> {

//pass in props type
    constructor(props: IAppProps) { 
        super(props);
//name must be a string since it is the type <IAppState>
        this.state = { name: null };
    }
//calling an async method that will request the api and putting the response in variable (r)
//making the name equal to the response.json 
//setting the state to be the name which should now be the response of the api request in json format
    async componentWillMount() {
        let r = await fetch('/api/hello');
        let name = await r.json();
        this.setState({ name })
    }
//this is what you want rendered to the screen
    render () {
        return (
            <main className="container-fluid">
                <h1 className="covalence-blue">The Office Quotes Game</h1>
                <section className="container">
                    <h1 className="quote">"This is a quote"</h1>
                </section>
            </main>
        )
    }
}


//USING REACT HOOKS:

//convert from class to function
//SFC = Stateless Functional Component
// const App: React.SFC<IAppProps> = props => {
//     //array destructuring
//     const [name, setName] = useState<string>('');

//     const getName = async () => {
//         let r = await fetch('/api/hello');
//         let name = await r.json();
//         setName(name)
//     }
//     useEffect(() => {
//         getName();//get and set the name from api
//     }, [])

//     return (
//         <main className="container">
//             <h1 className="covalence-blue">Hello {name}</h1>
//         </main>
//     );


    interface IAppProps {

    }

    interface IAppState {
        name: string
    }
