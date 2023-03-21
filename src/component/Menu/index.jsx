import style from './index.module.css'
export let Menu=()=>{
    return(
        <nav className={style.nav}>
            <a href="/" className={style.sitetitle}>Logo</a>
<ul>
    <li className={style.active}>
        <a href='/page1'>Page1</a>
        </li>
        <li>
        <a href='/page2'>Page2</a>
    </li>
    <li>
        <a href='/page3'>Page3</a>
    </li>
    <li>
        <a href='/page4'>Page4</a>
    </li>
    <li>
        <a href='/page5'>Page5</a>
    </li>
    <li>
        <a href='/page6'>Page6</a>
    </li>
    <li>
        <a href='/page7'>Page7</a>
    </li>
    <li>
        <a href='/page8'>Page8</a>
    </li>
    <li>
        <a href='/page9'>Page9</a>
    </li>
    <li>
        <a href='/page10'>Page10</a>
    </li>
    {/* <li>
        <a href='/page11'>Page11</a>
    </li> */}
    <li>
        <a href='/page12'>Page11</a>
    </li>
</ul>
        </nav>
    )
}