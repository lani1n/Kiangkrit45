let database = [],
    loggedInUser = null,
    loggedInEmail = null,
    selectedList = null;

const contentDiv = document.getElementById("content");

const noSections = () => contentDiv.innerHTML = "";

const pageTitle = (title) => {
    if (title === undefined) document.title = "To-Do App";
    else document.title = `To-Do App • ${title}`;
}

const eventLisApp = () => {
    if (document.getElementById("login-button")) {
        document.getElementById("login-button").addEventListener("click", loginButtonClicked);
    }
    
    if (document.getElementById("signup-button")) {
        document.getElementById("signup-button").addEventListener("click", submitButtonClicked);
    }
    
    if (document.getElementById("signup-form")) {
        document.getElementById("signup-form").addEventListener("submit", signupFormSubmitted);
    }
    
    if (document.getElementById("login-form")) {
        document.getElementById("login-form").addEventListener("submit", loginFormSubmitted);
    }
    
    if (document.getElementById("logout-button")) {
        document.getElementById("logout-button").addEventListener("click", logoutButtonClicked);
    }
    
    if (document.getElementById("settings-button")) {
        document.getElementById("settings-button").addEventListener("click", settingsButtonClicked);
    }
    
    if (document.getElementById("dashboard-button")) {
        document.getElementById("dashboard-button").addEventListener("click", dashboardButtonClicked);
    }
    
    if (document.getElementById("dashboard")) {
        if (document.getElementById("dashboard").querySelector("ul")) {
            document.getElementById("dashboard").querySelector("ul").addEventListener("click", displayListDetailScreen);
        }
    }
    
    if (document.getElementById("list")) {
        if (document.getElementById("list").querySelector("ul")) {
            document.getElementById("list").querySelector("ul").addEventListener("click", changeDoneStatusOfItems);
        }
    }
    
    if (document.getElementById("create-new-list")) {
        document.getElementById("create-new-list").addEventListener("click", createNewListButtonClicked);
    }
    
    if (document.getElementById("new-item-form")) {
        document.getElementById("new-item-form").addEventListener("submit", newItemFormSubmitted);
    }
    
    if (document.getElementById("change-title")) {
        document.getElementById("change-title").addEventListener("submit", changeTitleFormSubmitted);
    }
    
    if (document.getElementById("settings-form")) {
        document.getElementById("settings-form").addEventListener("submit", settingsFormSubmitted);
    }
}

const displayIntro = () => {
    const introTemplate = `
    <div id="intro">
        <p>
            <a href="#" id="signup-button" class="button signup">Sign Up</a>
            <a href="#" id="login-button" class="button login">Log In</a>
            </p>
    </div>
    `;
    contentDiv.innerHTML = introTemplate;
    pageTitle();
    eventLisApp();
}

const displaySignup = () => {
    noSections();
    displayIntro();
    contentDiv.innerHTML += `
    <div id="signup">
        <h3>Sign Up</h3>
        <form action="#" id="signup-form">
            <label for="signup-first">
                First Name<br>
                <input type="text" id="signup-first">
            </label>
            <label for="signup-last">
                Last Name<br>
                <input type="text" id="signup-last">
            </label>
            <label for="signup-email">
                Email<br>
                <input type="email" id="signup-email">
            </label>
            <label for="signup-password">
                Password<br>
                <input type="password" id="signup-password">
            </label>
            <label for="signup-terms">
                <input type="checkbox" id="signup-terms"> I agree to the <b>Terms of Use</b>
            </label>
            <button class="button">Sign Up</button>
            <p id="signup-errors" class="error-message hide">There was an error</p>
        </form>
    </div>
    `;
    pageTitle("Sign Up");
    eventLisApp();
}

const displayLogin = () => {
    noSections();
    displayIntro();
    contentDiv.innerHTML += `
    <div id="login">
        <h3>Log In</h3>
        <form action="#" id="login-form">
        <label for="login-email">
            Email<br>
            <input type="email" id="login-email">
        </label>
        <label for="login-password">
            Password<br>
            <input type="password" id="login-password">
        </label>
        <button class="button" type="submit">Log In</button>
        <p id="login-errors" class="error-message hide">There was an error</p>
        </form>
    </div>
    `;
    pageTitle("Log In");
    eventLisApp();
}

const getLoggedinButtons = () => {
    return `
    <div id="logged">
        <p>
            Welcome
            <span id="loggedin-user-firstname">${loggedInUser.user.first}</span>
            <span id="loggedin-user-lastname">${loggedInUser.user.last}</span>
        </p>
        <a href="#" class="button" id="dashboard-button">Dashboard</a>
        <a href="#" class="button" id="settings-button">Account Settings</a>
        <a href="#" class="button logout" id="logout-button">Log Out</a>
    </div>
    `;
}

const displayDashboard = () => {
    selectedList = null;
    contentDiv.innerHTML = getLoggedinButtons();
    contentDiv.innerHTML += `
    <div id="dashboard">
        <h3>Dashboard</h3>
        <ul id="dashboard-todo-lists">
        ${loggedInUser.lists.map((list) => `<li><a href="#">${list.title}</a> (${list.items.length})</li>`).join("")}
        </ul>
        <br>
        <a href="#" class="button" id="create-new-list">Create New To-Do List</a>
    </div>
    `;
    pageTitle("Dashboard");
    eventLisApp();
}

const displaySettings = () => {
    contentDiv.innerHTML = getLoggedinButtons();
    contentDiv.innerHTML += `
    <div id="settings">
        <h3>Account Settings</h3>
        <form action="#" id="settings-form">
        <label for="settings-first">
            First Name<br>
            <input type="text" id="settings-first" value="${loggedInUser.user.first}">
        </label>
        <label for="settings-last">
            Last Name<br>
            <input type="text" id="settings-last" value="${loggedInUser.user.last}">
        </label>
        <label for="settings-email">
            Email<br>
            <input type="email" id="settings-email" value="${loggedInUser.user.email}">
        </label>
        <label for="settings-password">
            Password <small>(your password won't change if you leave this field empty)</small><br>
            <input type="password" id="settings-password">
        </label>
        <p id="settings-errors" class="error-message hide">There was an error</p>
        <button class="button login">Update account</button>
        </form>
    </div>
    `;
    pageTitle("Account Settings");
    eventLisApp();
}

const showSelectedList = (title) => {
    if (title === undefined) title = "New List";
    noSections();
    contentDiv.innerHTML = getLoggedinButtons();
    let selectedListItems = [];
    for (const list of loggedInUser.lists) {
        if (list.title === title) {
            selectedList = list;
            selectedListItems = selectedList.items;
        }
    }
    contentDiv.innerHTML += `
    <div id="list">
        <h3 id="title-list">${title}</h3>
        <form action="#" id="change-title">
            <input type="text" id="list-title" value="${title}">
            <p id="list-title-errors" class="error-message hide">There was an error</p>
            <button class="button" type="submit">Change title</button>
        </form>
        <ul id="todo-list-items">
        ${selectedListItems.map((listItem) => `<li class="${(listItem.done) ? "done" : ""}">${listItem.text}</li>`).join("")}
        </ul>
        <form action="#" id="new-item-form">
            <label for="list-new-item">
                Add new item to the list
                <input type="text" id="list-new-item">
            </label>
            <p id="new-item-errors" class="error-message hide">There was an error</p>
            <button class="button" type="submit">Add to To-Do list</button>
        </form>
        <hr>
    </div>
    `;
    pageTitle(`List: ${title}`);
    eventLisApp();
}

const updateLocalStorage = () => {
    localStorage.setItem('database', JSON.stringify(database));
    localStorage.setItem('loggedInEmail', JSON.stringify(loggedInUserEmail));
}

const readLocalStorage = () => {
    if (localStorage.getItem('database')) {
        database = JSON.parse(localStorage.getItem('database'));
    }
    if (localStorage.getItem('loggedInEmail')) {
        loggedInUserEmail = JSON.parse(localStorage.getItem('loggedInEmail'));
        for (const user of database) {
            if (user.user.email === loggedInUserEmail) loggedInUser = user;
        }
    }
    // localStorage.clear();
}

const hashCode = (word) => {
    var hash = 0, i, chr;
    if (word.length === 0) return hash;
    for (i = 0; i < word.length; i++) {
        chr   = word.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0;
    }
    return hash;
};

const noErrors = () => {
    if (document.getElementById("signup-errors")) {
        document.getElementById("signup-errors").classList.add("hide");
    }
    
    if (document.getElementById("login-errors")) {
        document.getElementById("login-errors").classList.add("hide");
    }
    
    if (document.getElementById("list-title-errors")) {
        document.getElementById("list-title-errors").classList.add("hide");
    }
    
    if (document.getElementById("new-item-errors")) {
        document.getElementById("new-item-errors").classList.add("hide");
    }
    
    if (document.getElementById("settings-errors")) {
        document.getElementById("settings-errors").classList.add("hide");
    }
}

const showError = (errorId, message) => {
    const loginErrors = document.getElementById(errorId);
    loginErrors.innerText = message;
    loginErrors.classList.remove("hide");
    setTimeout(() => noErrors(), 5000);
}

const loginUser = (user) => {
    loggedInUser = user;
    loggedInUserEmail = user.user.email;
    noSections();
    displayDashboard();
    updateLocalStorage();
}

const logoutUser = () => {
    loggedInUser = null;
    loggedInUserEmail = null;
    selectedList = null;
    displayIntro();
    updateLocalStorage();
}

const status = () => {
    if (loggedInUser === null) logoutUser();
    else loginUser(loggedInUser) 
}

const userExists = (email, password) => {
    for (const user of database) {
        if (user.user.email === email && user.user.password === hashCode(password)) {
            noErrors();
            loginUser(user);
            return;
        }
    }
    showError("login-errors", "No user match the email and password. Try again.");
}

function loginButtonClicked(e) {
    e.preventDefault();
    displayLogin();
}

function submitButtonClicked(e) {
    e.preventDefault();
    displaySignup();
}

const createUser = (first, last, email, password) => {
    const newUser = {
        user: {
            first: first,
            last: last,
            email: email,
            password: hashCode(password),
        },
        lists: []
    };
    return newUser;
}

const user2DB = (user) => {
    database = [...database, user];
    updateLocalStorage();
}

function signupFormSubmitted(e) {
    e.preventDefault();
    const targetForm = e.target,
        signupFirst = targetForm.querySelector("#signup-first").value,
        signupLast = targetForm.querySelector("#signup-last").value,
        signupEmail = targetForm.querySelector("#signup-email").value,
        signupPassword = targetForm.querySelector("#signup-password").value,
        signupTerms = targetForm.querySelector("#signup-terms").checked;
    let signupError = "There are some errors:",
        errors = false;

    if (signupFirst === "") {
        signupError += " First name is empty.";
        errors = true;
    }
    
    if (signupLast === "") {
        signupError += " Last name is empty.";
        errors = true;
    }
    
    if (signupEmail === "") {
        signupError += " Email is empty.";
        errors = true;
    }
    
    if (signupPassword === "") {
        signupError += " Password is empty.";
        errors = true;
    }
    
    if (signupTerms === false) {
        signupError += " You must agree with our terms of use.";
        errors = true;
    }
    
    for (const user of database) {
        if (user.user.email === signupEmail) {
            signupError += " The email you are using already is on our database.";
            errors = true;
        }
    }
    
    if (errors) {
        showError("signup-errors", signupError);
        return;
    } else {
        noErrors();
        const newUser = createUser(signupFirst, signupLast, signupEmail, signupPassword);
        user2DB(newUser);
        loginUser(newUser);
        targetForm.reset();
    }
}

function loginFormSubmitted(e) {
    e.preventDefault();
    const loginForm = e.target,
        loginEmail = loginForm.querySelector("#login-email").value,
        loginPassword = loginForm.querySelector("#login-password").value;
    userExists(loginEmail, loginPassword);
}

function logoutButtonClicked(e) {
    e.preventDefault();
    logoutUser();
}

function dashboardButtonClicked(e) {
    e.preventDefault();
    displayDashboard();
}

function newItemFormSubmitted(e) {
    e.preventDefault();
    const newValue = document.getElementById("list-new-item").value;
    if (newValue === "") return;
  
    const listTitle = document.getElementById("title-list").innerText;
    if (listTitle === "New list") {
        showError("new-item-errors", "First you have to add a custom title to your list.");
        return;
    }

    selectedList.items = [...selectedList.items, {text: newValue, done: false}]
    const newLI = document.createElement("li");
    newLI.innerText = newValue;
    document.getElementById("list").querySelector("ul").appendChild(newLI);
    e.target.reset();
    updateLocalStorage();
    eventLisApp();
}

function createNewListButtonClicked(e) {
    e.preventDefault();
    showSelectedList();
}

const titleExists = (title) => {
    for (const list of loggedInUser.lists) {
        if (list.title === title) return true;
        return false;
    }
}

function changeTitleFormSubmitted(e) {
    e.preventDefault();
    const newTitle = document.getElementById("list-title").value;
  
    if (newTitle === "") {
        showError("list-title-errors", "The title can't be empty.");
        return;
    }
  
    if (newTitle === "New list") {
        showError("list-title-errors", "Use another name for the list.");
        return;
    }
  
    if (titleExists(newTitle) && newTitle !== selectedList.title) {
        showError("list-title-errors", "There's already a list with this name.");
        return;
    }
  
    document.getElementById("title-list").innerText = newTitle;
    if (selectedList === null) {
        const newList = {
            title: newTitle,
            items: [],
        };
        loggedInUser.lists = [...loggedInUser.lists, newList]
        selectedList = newList;
    }
    else {
        selectedList.title = newTitle;
    }
    updateLocalStorage();
    pageTitle(`List: ${newTitle}`);
    eventLisApp();
}

function displayListDetailScreen(e) {
    e.preventDefault();
    if (e.target.nodeName !== "A") return;
    showSelectedList(e.target.innerText);
    eventLisApp();
}

const updateListInDB = () => {
    let newSelectedList = [];
    for (const item of document.getElementById("list").querySelector("ul").querySelectorAll("li")) {
        let doneStatus = (item.className === "done") ? true : false;
        let updatedItem = {
            text: item.innerText,
            done: doneStatus,
        };
        newSelectedList = [...newSelectedList, updatedItem]
    }
    selectedList.items = newSelectedList;
    updateLocalStorage();
    eventLisApp();
}

function changeDoneStatusOfItems(e) {
    e.target.classList.toggle("done");  
    updateListInDB();
}

function settingsButtonClicked(e) {
    e.preventDefault();
    displaySettings();
}
  
function settingsFormSubmitted(e) {
    e.preventDefault();
    const first = document.getElementById("settings-first").value,
        last = document.getElementById("settings-last").value,
        email = document.getElementById("settings-email").value;
    let password = document.getElementById("settings-password").value;
    loggedInUser.user.first = first;
    loggedInUser.user.last = last;
    loggedInUser.user.email = email;
    loggedInUserEmail = email;
    if (password !== "") loggedInUser.user.password = hashCode(password);
    displaySettings();
    updateLocalStorage();
}

const author = (name) => {
    var meta = document.createElement("meta");
    meta.setAttribute("name", "author");
    meta.setAttribute("content", name);
    document.getElementsByTagName("head")[0].appendChild(meta);
}

const startProject = () => {
    readLocalStorage();
    author("k.supharatana");
    status();
}