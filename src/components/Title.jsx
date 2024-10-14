import React,{useState,useEffect}from "react";

// define the component as a function
function Title(){
    const [isDarkMode,setIsDarkMode] = useState(false);

    useEffect(()=>{
        if (isDarkMode){
            document.body.classList.add('dark-theme');
        }
        else{
            document.body.classList.remove("dark-theme");
        }
    },[isDarkMode]);

    const toggleTheme = ()=>{
        setIsDarkMode(!isDarkMode);
    }

    

    return(
        <>
        <header>
            <h1 className="font mono text-3x1 font-bold text-slate-300 pt-3">My React Portfolio</h1>
        </header>
        <div>
            <span id="themeToggle" className="theme-toggle" onClick={toggleTheme}>
                {isDarkMode ? 'light' : 'dark'}
            </span>
        </div>
        </>
        );
}
// export the component
export default Title;