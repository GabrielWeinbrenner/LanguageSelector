import React from 'react';
import UserCreate from './UserCreate';
class App extends React.Component{
    state = {
        language: 'english'
    };
    onLanguageChange = (language) =>{
        this.setState({
            language
        })
    }
    render(){
        return(
            <div className="ui container">
                <div>
                    Select a language
                    <i onClick={() => this.onLanguageChange('english')} className="flag us" />
                    <i onClick={() => this.onLanguageChange('tagalog')} className="ph flag" />
                </div>
                <h1>
                {this.state.language}
                </h1>
                <UserCreate />

            </div>
        )
    }
}

export default App;