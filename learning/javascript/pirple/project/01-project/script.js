let
    database = [],
    loggedInUser = null,
    loggedInUserEmail = null,
    selectedList = null;

const
    introDiv = document.getElementById("intro"),
    loggedDiv = document.getElementById("logged"),
    signupDiv = document.getElementById("signup"),
    loginDiv = document.getElementById("login"),
    dashboardDiv = document.getElementById("dashboard"),
    listDiv = document.getElementById("list"),
    settingsDiv = document.getElementById("settings");

const hideSections = () => {
    introDiv.classList.add("hide");
    loggedDiv.classList.add("hide");
    signupDiv.classList.add("hide");
    loginDiv.classList.add("hide");
    dashboardDiv.classList.add("hide");
    listDiv.classList.add("hide");
    settingsDiv.classList.add("hide");
};

const displayLoggedInName = () => {
    const firstName = document.getElementById("loggedin-user-firstname");
    const lastName = document.getElementById("loggedin-user-lastname");
    firstName.innerText = loggedInUser.user.first;
    lastName.innerText = loggedInUser.user.last;
};

const displayLoggedinButtons = () => {
    loggedDiv.classList.remove("hide");
    displayLoggedInName();
};

const displaySignup = () => {
    document.getElementById("signup-form").reset();
    signupDiv.classList.remove("hide");
};

const displayLogin = () => {
    document.getElementById("login-form").reset();
    loginDiv.classList.remove("hide");
};

const updateLocalStorage = () => {
    localStorage.setItem("database", JSON.stringify(database));
    localStorage.setItem('loggedInEmail', JSON.stringify(loggedInUserEmail));
};

const titleExist = (title) => {
    for (const list of loggedInUser.lists) {
        if (list.title === title) return true;
        return false;
    }
};

document.getElementById("change-title").addEventListener("submit", (e) => {
    e.preventDefault();
    const newTitle = document.getElementById("list-title").value;

    if (newTitle === "") {
        error("list-title-errors", "The title cannot be empty.");
        return;
    }
    if (newTitle === "New list") {
        error("list-title-errors", "Use another name for the list.");
        return;
    }
    if (titleExist(newTitle) && newTitle !== selectedList.title) {
        error("list-title-errors", "There is already a list with this name.");
        return;
    }
    document.getElementById("title-list").innerText = newTitle;
  
    if (selectedList === null) {
        const newList = {
            title: newTitle,
            items: [],
        };
        loggedInUser.lists = [...loggedInUser.lists, newList];
        selectedList = newList;
    }
    else {
        selectedList.title = newTitle;
    }
    updateLocalStorage();
});

const displayDashboard = () => {
    dashboardDiv.classList.remove("hide");
    const todoListUL = document.getElementById("dashboard-todo-lists");
    todoListUL.innerHTML = "";
    for (const list of loggedInUser.lists) {
        const 
            newListLI = document.createElement("li"),
            newTitleA = document.createElement("a");
        newTitleA.href = "#";
        newTitleA.innerText = list.title;
        newListLI.append(newTitleA);
        newListLI.innerHTML += " (" + list.items.length + ")";
        todoListUL.appendChild(newListLI);
    }
};

const displayTodoItems = (items) => {
    const todoItemsUL = document.getElementById("todo-list-items");
    todoItemsUL.innerHTML = "";
    if (items === null) return;
    for (const listItem of items) {
        const newItem = document.createElement("li");
        newItem.innerText = listItem.text;
        if (listItem.done) newItem.classList.add("done");
        todoItemsUL.append(newItem);
    }
};

const displayListItemsBy = (title) => {
    for (const list of loggedInUser.lists) {
        if (list.title === title) {
            displayTodoItems(list.items);
            selectedList = list;
            return;
        }
    }
    displayTodoItems(null);
};

const updateListDB = () => {
    let newSelectedList = [];
    for (const item of listItemsUL.querySelectorAll("li")) {
        let doneStatus = (item.className === "done") ? true : false;   
        let updatedItem = {
            text: item.innerText,
            done: doneStatus,
        };
        newSelectedList = [...newSelectedList, updatedItem];
    }
    selectedList.items = newSelectedList
    updateLocalStorage();
};

document.getElementById("new-item-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const newValue = document.getElementById("list-new-item").value;
    if (newValue === "") return;

    const listTitle = document.getElementById("title-list").innerText;
    if (listTitle === "New list") {
        error("new-item-errors", "First you must add a custom title to the list.");
        return;
    }
    selectedList.items = [...selectedList.items, {text: newValue, done: false}];
    console.log(selectedList.items);

    const newLI = document.createElement("li");
    newLI.innerText = newValue;
    listItemsUL.appendChild(newLI);
    e.target.reset();
    updateLocalStorage();
});

const listItemsUL = listDiv.querySelector("ul");
listItemsUL.addEventListener("click", (e) => {
    e.target.classList.toggle("done");
    updateListDB();
});

const displayIntro = () => introDiv.classList.remove("hide");

const displayList = (title) => {
    listDiv.classList.remove("hide");
    displayListItemsBy(title);
};

const loginUser = (user) => {
    loggedInUser = user;
    loggedInUserEmail = user.user.email;
    hideSections();
    displayLoggedinButtons();
    displayDashboard();
    updateLocalStorage();
};

const logoutUser = () => {
    loggedInUser = null;
    loggedInUserEmail = null;
    selectedList = null;
    hideSections();
    displayIntro();
    updateLocalStorage();   
};

const status = () => {
    if (loggedInUser == null) logoutUser();
    else loginUser(loggedInUser);
};

const showSelectedList = (title) => {
    if (title === undefined) title = "New list";

    hideSections();
    displayLoggedinButtons();
    displayList(title);
    document.getElementById("list").getElementsByTagName("h3")[0].innerText = title;
    document.getElementById("list-title").value = title;
};

const displaySettings = () => {
    settingsDiv.classList.remove("hide");
    document.getElementById("settings-first").value = loggedInUser.user.first;
    document.getElementById("settings-last").value = loggedInUser.user.last;
    document.getElementById("settings-email").value = loggedInUser.user.email;
};

const hideErrors = () => {
    document.getElementById("signup-errors").classList.add("hide");
    document.getElementById("login-errors").classList.add("hide");
    document.getElementById("list-title-errors").classList.add("hide");
    document.getElementById("new-item-errors").classList.add("hide");
    document.getElementById("settings-errors").classList.add("hide");
};

const error = (errorId, message) => {
    const loginErrors = document.getElementById(errorId);
    loginErrors.innerText = message;
    loginErrors.classList.remove("hide");
    setTimeout(() => hideErrors(), 5000);
};

const userExist = (email, password) => {
    for (const user of database) {
        if (user.user.email === email && user.user.password === hashCode(password)) {
            hideErrors();
            loginUser(user);
            return;
        }
    }
    error("login-errors", "No users match the email and password. Try again.");
};

const hashCode = (word) => {
    let hash = 0, i, chr;
    if (word.length === 0) return hash;
    for (i = 0; i < word.length; i++) {
        chr = word.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0;
    }
    return hash;
};

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
};

const resetAccform = () => {
    document.getElementById("settings-password").value = "";
};
  
const newUserDB = (user) => {
    database = [...database, user];
    updateLocalStorage();
};

const dashboardListUL = dashboardDiv.querySelector("ul");
dashboardListUL.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.nodeName !== "A") return;
    showSelectedList(e.target.innerText);
});

document.getElementById("signup-button").addEventListener("click", (e) => {
    e.preventDefault();
    hideSections();
    displayIntro();
    displaySignup();
});
  
document.getElementById("login-button").addEventListener("click", (e) => {
    e.preventDefault();
    hideSections();
    displayIntro();
    displayLogin();
});
  
document.getElementById("logout-button").addEventListener("click", (e) => {
    e.preventDefault();
    logoutUser();
});
  
document.getElementById("settings-button").addEventListener("click", (e) => {
    e.preventDefault();
    hideSections();
    displayLoggedinButtons();
    displaySettings();
});
  
document.getElementById("dashboard-button").addEventListener("click", (e) => {
    e.preventDefault();
    hideSections();
    displayLoggedinButtons();
    displayDashboard();
});

document.getElementById("create-new-list").addEventListener("click", (e) => {
    e.preventDefault();
    showSelectedList();
});
  
document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const loginEmail = document.querySelector("#login-email").value;
    const loginPassword = document.querySelector("#login-password").value;
    userExist(loginEmail, loginPassword);
});

document.getElementById("signup-form").addEventListener("submit", (e) => {
    e.preventDefault();
  
    const signupFirst = document.querySelector("#signup-first").value;
    const signupLast = document.querySelector("#signup-last").value;
    const signupEmail = document.querySelector("#signup-email").value;
    const signupPassword = document.querySelector("#signup-password").value;
    const signupTerms = document.querySelector("#signup-terms").checked;
  
    let signupError = "There are some errors:";
    let errors = false;
  
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
        signupError += " You must agree with our Terms of Use.";
        errors = true;
    }
  
    for (const user of database) {
        if (user.user.email === signupEmail) {
            signupError += " The email you are using is already on our database.";
            errors = true;
        }
    }
  
    if (errors) {
        error("signup-errors", signupError);
        return;
    } else {
        hideErrors();
        const newUser = createUser(signupFirst, signupLast, signupEmail, signupPassword);
        newUserDB(newUser);
        loginUser(newUser);
        e.target.reset();
    }
});

document.getElementById("settings-form").addEventListener("submit", (e) => {
    e.preventDefault();
  
    const first = document.getElementById("settings-first").value;
    const last = document.getElementById("settings-last").value;
    const email = document.getElementById("settings-email").value;
    let password = document.getElementById("settings-password").value;
  
    loggedInUser.user.first = first;
    loggedInUser.user.last = last;
    loggedInUser.user.email = email;
    loggedInUserEmail = email;

    if (password !== "") loggedInUser.user.password = hashCode(password);
    resetAccform();
    displayLoggedInName();
    updateLocalStorage();
});

const rdLocalStorage = () => {
    if (localStorage.getItem('database')) database = JSON.parse(localStorage.getItem('database'));
    if (localStorage.getItem('loggedInEmail')) {
        loggedInUserEmail = JSON.parse(localStorage.getItem('loggedInEmail'));
        for (const user of database) {
            if (user.user.email === loggedInUserEmail) loggedInUser = user;
        }
    }
};

const start = () => {
    rdLocalStorage();
    status();
    // localStorage.clear();
};