import React from 'react'
import "./mainPage.css"

function MainPage() {
    return (
        <div id="main">
            <div id="about">
                <h1 id="mainTitle">About</h1>
                <p>Hey, I'm Mutayyab and I develop things in my free time.</p>
                <p>Programming is one of the things I do to escape the miserable but inevitable reality that encloses us</p>
            </div>

            <div id="languages">
                <h1 id="languageTitle">Languages</h1>
                <ul>
                    <li className="languages">CSS</li>
                    <li className="languages">HTML</li>
                    <li className="languages">Java</li>
                    <li className="languages">Python</li>
                    <li className="languages">JavaScript</li>
              </ul>
            </div>

            <div id="socials">
                <h1 id="socialsTitle">Socials</h1>
                <p>Github: @mutyyab</p>
                <p>Discord: Mutyyab.#4275</p>
            </div>
        </div>
    )
}

export default MainPage;