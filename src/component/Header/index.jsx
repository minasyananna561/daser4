
import { Menu } from "../Menu"
import style from './index.module.css'
export let Header=()=>{
    return(
        <div className={style.header}>
            
            <Menu/>
        </div>
    )
}