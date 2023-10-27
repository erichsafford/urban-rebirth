import { useContext } from "react";
import { BrowserContext } from "./BrowserRouter.jsx";

function Route({ children, path }) {
    const { currentURL } = useContext(BrowserContext)
    console.log(currentURL, path)
    // Is the current URL my URL?
    // yes = render myself
    // no = render nothing
    if (currentURL.pathname === path) {
        return <>{children}</>
    } else {
        return null
    }
}

export default Route