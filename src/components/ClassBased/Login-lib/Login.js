import React from 'react'

function UserGreeting(props) {
    return <h1>
        Welcome back!
        <Mailbox unreadMsg={props.msg} />
    </h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting msg={props.msg} />;
    } else {
        return <GuestGreeting />;
    }
}

function LoggedIn(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LoggedOut(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

function Mailbox(props) {
    const unreadMsg = props.unreadMsg;
    return (
        <div>
            <h6>Hello!
             {unreadMsg.length > 0 &&
                    <span>You have {unreadMsg.length} messages.</span>
                }
            </h6>
        </div>
    );
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.state = {
            isLoggedIn: false,
            messages: ['Abc', 'sdsd', 'refds']
        };
    }

    handleLogin() {
        this.setState({ isLoggedIn: true });
    }
    handleLogout() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        let button;
        const isToggleIn = this.state.isLoggedIn;
        const messages = this.state.messages;

        if (isToggleIn) {
            button = <LoggedOut onClick={this.handleLogout} />
        } else {
            button = <LoggedIn onClick={this.handleLogin} />
        }

        return (
            <div>
                <Greeting isLoggedIn={isToggleIn} msg={messages} />
                {button}
            </div>

        );
    }
}

export default Login;