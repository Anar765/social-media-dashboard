const Header = ({ darkMode, onToggleMode }) => {

    return (
        <header className={darkMode ? "light" : ""}>
            <div className="text">
                <h1>Social Media Dashboard</h1>
                <p>Total Followers: 23,004</p>
            </div>

            <div className="modeChange">
                <p>{darkMode ? "Light" : "Dark"} Mode</p>
                <label className="switch">
                    <input type="checkbox" checked={darkMode} onChange={onToggleMode} />
                    <span className="slider round"></span>
                </label>
            </div>
        </header>
    )
}

export default Header