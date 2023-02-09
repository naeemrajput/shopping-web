import React, { Component, ErrorInfo, ReactNode } from "react";
// import { AiOutlineReload } from "react-icons/ai";
// import { FiLogOut } from "react-icons/fi";

// import { EButton } from "./libs/ui";

import { AppContext, IAuthContext } from './AppContext';

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {

    static contextType: React.Context<IAuthContext> = AppContext;
    context!: React.ContextType<typeof AppContext>;

    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    };

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error in error boundary:", error, errorInfo);
    };

    private handleUserLogout() {
        this.context.handleLogout();
        window.location.reload();
    };

    public render() {
        if (this.state.hasError) {
            return (
                <div className="h-screen flex flex-1 flex-col justify-center items-center">
                    {/* <img
                        className="w-80 h-80 object-contain"
                        src={require("./assets/taken404.svg").default}
                        alt="Random unsplash image"
                    /> */}

                    <div className="my-3 flex flex-col items-center">
                        <h1 className="text-indigo-600">Sorry..... There was an error!</h1>
                        <p className="text-slate-400">It seems like we ran into a problem</p>
                    </div>

                    <div className="my-3 flex gap-2 justify-center items-center">
                        {/* <EButton
                            className="blue"
                            rightIcon={<AiOutlineReload />}
                            onClick={() => window.location.reload()}
                        >Try Reloading</EButton>
                        <EButton
                            className="red"
                            rightIcon={<FiLogOut />}
                            onClick={() => this.handleUserLogout()}
                        >Logout</EButton> */}
                    </div>
                </div>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;