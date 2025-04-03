import { NavLink } from "react-router-dom"

export const ItemNav = ({contentItem ,myStyle,routes}) => {
    return (
        <>
            <li className = {myStyle}>
                <NavLink to= {routes}>{contentItem}</NavLink>
            </li>
        </>
    )
}