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
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/mimio/" target="_blank" rel="noreferrer noopener">linkedin.com/in/mimio</a></p>
                    <p>Github: <a href="https://github.com/Mimioj101" target="_blank" rel="noreferrer noopener">github.com/Mimioj101</a></p>
                </div>
            </div>
        )
    }
}

export default ContactMe;