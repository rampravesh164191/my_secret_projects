import Menu from "./Menu";

function Sidebar({theme}){
    return (
        <div>
            <h3>Sidebar Component</h3>
            <Menu theme={theme} />
        </div>
    )
}

export default Sidebar;