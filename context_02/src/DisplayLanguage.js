import React from "react";
import { LanguageContext } from "./LanguageContext";
import { Welcome } from "./Welcome";


export class DisplayLanguage extends React.Component {

    state = {
        language: 'en',
    }

    handleLanguageChange = (event) => {
        this.setState({
            language: event.target.value,
        })
    }

    render() {
        return (
            <div>
                <select value={this.state.language} onChange={this.handleLanguageChange}>
                    <option value="en">ENGLISH</option>
                    <option value="it">ITALIANO</option>
                </select>
                <LanguageContext.Provider value={this.state.language}>
                    <Welcome name="Alessandro" />
                </LanguageContext.Provider>
            </div>

        )
    }
}
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status