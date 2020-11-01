import React from "react"

class ContactMe extends React.Component {
    render() {
        return(
            <div className="window" id="contact-me-window">
                <div className="title-bar">
                    <div className="title-bar-text">Contact Mimi</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close"></button>
                    </div>
                </div>
                <div className="window-body">
                    <p>Email: <a href="mailto: mimioj@gmail.com">mimioj@gmail.com</a></p>
                    <p>Phone: 609-457-7718</p>
                    <p>LinkedIn: https://www.linkedin.com/in/mimio/</p>
                    <p>Github: https://github.com/Mimioj101</p>
                </div>
            </div>
        )
    }
}

export default ContactMe;