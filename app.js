* { box-sizing: border-box; }

/* TODO: Icons max width*/

body {
    margin: 0;
    padding: 0;
    background: #EFF1F7;
}

.content {
    grid-area: content;
}

.sidebar {
    grid-area: sidebar;
    background: linear-gradient(to right, 
    rgba(249,107,142,1),
    rgba(218,103,230,1),
    rgba(130,129,253,1));
    justify-content: center;
}

.container {
    font-size: 1.5em;
    display: grid;
    grid-template-areas: 
        "sidebar"
        "content";
    grid-template-columns: 1fr;
    grid-template-rows: 3em auto;
}


nav ul {
    padding: 0;
    margin: 1em;
    display: flex;
    justify-content: space-between;
    text-align: center;
}
nav li {
    list-style: none;
}

nav li a {
    color: white;
    font-weight: 700;
    opacity: 0.6;
    text-decoration: none;
    transition: 0.3s;
}

nav li a:hover {
    opacity: 1;
}

.hero {
    text-align: center;
}

#foto-perfil {
    width: 130px;
    border-radius: 50%;
    margin-top: 10px;
}

.hero h1 {
    margin: 0;
    padding: 0;
    font-size: 2em;
    font-weight: 300;
    color: #373d46;
}
.hero p {
    font-weight: 300;
    line-height: 1.8em;
    color: #98a8ad;
}

.action-btn {
    display: inline-block;
    text-decoration: none;
    color: white;
    font-weight: 760;
    background: #867bfb;
    padding: 1em 2em;
    border-radius: 48px;
    margin: 1em 0;
    transition: 0.3s;
}
.action-btn:hover {
    box-shadow: 0 10px 50px rgba(188,197,216,1);
}


.right-content ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-direction: row;
    
}
.right-content > ul > li{
    margin: 0px 22px;
}
.right-content ul li {
    list-style: none;
}
.right-content ul li a {
    text-decoration: none;
    color: #c1c6ce;
}

.right-content svg {
    width: 45px;
}

.heart {
    fill: red;
    animation: pulse 1s ease infinite; 
    max-height: 20px;
    max-width: 30px; 
  }

.made-with {
    display: flex;
    justify-content: center;
}

#made-with-love {
text-align: center;
font-family: 'Roboto Mono', monospace;
opacity: 0.3;
text-decoration: none;
margin: 0;
transition: 2s;
}
#made-with-love:hover { 
    opacity: 1; 
    transition: ease-out 1s;
}

#mate {
    height: 30px;
    width: 30px;
}

@keyframes pulse {
0% { transform: scale(1); }
50% { transform: scale(1.3); }
100% { transform: scale(1); }
}

.footer, #svg-review, #svg-languages, #svg-java {
    display: none;
}

.footer { grid-area: footer; }

/*1040*/
@media (min-width: 768px) {
    .footer, #svg-review, #svg-java {
        display: contents;
    }
    
    
    .container {
        grid-template-areas: 
            "sidebar content"
            "sidebar footer";
        grid-template-columns: 10em auto;
        grid-template-rows: 1fr;
    }

    

    nav ul {
        flex-direction: column;
    }

    nav ul li {
        margin: 1.3em 0;
    }

    #svg-java {
        position: absolute;
        display: flex;
        margin-right: 2em;
        top: 0;
        right:0;
        opacity: 0.06;
        z-index: -1;
    }


    .sidebar {
        background: linear-gradient(
            rgba(249,107,142,1),
            rgba(218,103,236,1),
            rgba(138,125,254,1));
        padding-top: 6.5em;
    }

    .action-btn {
        margin: 0 1em;
    }

   
}
