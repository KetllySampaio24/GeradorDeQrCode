@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

html {
    font-size: 62.5%;
    height: 100vh;
    width: 100vw;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(15,121,9,1) 36%, rgba(0,212,255,1) 100%);
}

body {
    height: 100%;
    display: grid;
    place-items: center;
}

#container {
    background-color: rgb(255, 255, 255);
    color: #000000;
    width: 600px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 108px -22px 93px 14px rgba(0, 0, 0, 0.75);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#container.active{
    height: 300px;
}

#container.active .header h1{
    font-size: 2.5rem;
 
}

#header {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#header h1 {
    font-size: 3rem;
    text-align: center;
}

#header p {
    font-size: 1.6rem;
    margin-bottom: 5px;
    text-align: center;
}

#formularioinput {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1rem;
}

#formularioinput input {
    width: 100%;
    height: 50px;
    padding-left: .5rem;
    border: none;
    border-bottom: 1px solid rgba(109, 106, 106, 0.911);
    background-color: transparent;
    outline: none;
}

#button {
    width: 100%;
    margin-bottom: 1rem;
}

#button button {
    width: 100%;
    height: 40px;
    background-color: #1de616;
    outline: none;
    border: none;
    border-radius: 5px;
    color: black;
    cursor: pointer;
}

#button button:hover {
    border: 1px solid black;
    color: #1a8b16;
    background-color: transparent;
    font-weight: bolder;
}

#qr-code {
    padding: 10px;
    border-radius: 5px;
    pointer-events: none;
}

#qr-code img {
    width: 170px;
}

#qr-code.show {
    display: block;
    transition: all .5s ease;
}

@media (max-width: 1024px) {
    #container {
        width: 90%;
    }

    #header h1 {
        font-size: 2.5rem;
    }

    #header p {
        font-size: 1.4rem;
    }

    #formularioinput input {
        height: 45px;
    }

    #button button {
        height: 45px;
    }
}

@media (max-width: 768px) {
    #container {
        width: 95%;
    }

    #header h1 {
        font-size: 2rem;
    }

    #header p {
        font-size: 1.2rem;
    }

    #formularioinput input {
        height: 40px;
    }

    #button button {
        height: 40px;
    }
}

@media (max-width: 480px) {
    html {
        font-size: 50%;
    }

    #container {
        width: 95%;
        padding: 1rem;
    }

    #header h1 {
        font-size: 1.8rem;
    }

    #header p {
        font-size: 1rem;
    }

    #formularioinput input {
        height: 35px;
    }

    #button button {
        height: 35px;
    }
}
