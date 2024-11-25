import reactLogo from '/React-icon.png'

export default function Header() {
    return(
        <header>
            <nav className="nav-bar">
                <div className='logo'>
                    <img src={reactLogo}/>
                    <h1 className='logo'>ReactFacts</h1>
                </div>
                <ul>
                    <li>About</li>
                    <li>Contact</li>
                </ul>                    
            </nav>
        </header>        
    )
}