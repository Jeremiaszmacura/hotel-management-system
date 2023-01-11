import * as TiIcons from "react-icons/ti"
import * as BsIcons from "react-icons/bs"
import * as MdIcons from "react-icons/md"

const sideMenuData = (isLoggedIn) => {
    if (isLoggedIn) {
        return [
            {
                title: "Start",
                path: "/",
                icon: <TiIcons.TiHome size={25}/>
            },
            {
                title: "Pokoje",
                path: "/rooms",
                icon: <MdIcons.MdHotel size={25}/>
            },
            {
                title: "Atrakcje",
                path: "/attractions",
                icon: <MdIcons.MdAttractions size={25}/>
            },
            {
                title: "Rezerwacje",
                path: "/bookings",
                icon: <BsIcons.BsFillCalendarCheckFill size={25}/>
            }
        ]
    } else {
        return [
            {
                title: "Start",
                path: "/",
                icon: <TiIcons.TiHome size={25}/>
            },
            {
                title: "Pokoje",
                path: "/rooms",
                icon: <MdIcons.MdHotel size={25}/>
            },
            {
                title: "Atrakcje",
                path: "/attractions",
                icon: <MdIcons.MdAttractions size={25}/>
            },
            {
                title: "Rejestracja",
                path: "/register",
                icon: <MdIcons.MdAccountCircle size={25}/>
            },
            {
                title: "Logowanie",
                path: "/login",
                icon: <MdIcons.MdLogin size={25}/>
            }
        ]
    }
}

export default sideMenuData