import { Logo } from "../components/Logo";

export const CommonLayout = ({ children }: { children: React.ReactElement }) => {

    return (
        <div className="common-layout">
            <Logo />
            <>{children}</>
        </div>
    )
}
