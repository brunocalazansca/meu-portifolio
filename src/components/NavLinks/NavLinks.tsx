import { NavLink as RouterNavLink, type NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import classNames from "classnames";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
    className?: string;
    activeClassName?: string;
    pendingClassName?: string;
    children?: React.ReactNode;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
    ({ className, activeClassName = "active", pendingClassName, to, ...props }, ref) => {
        return (
            <RouterNavLink
                to={to}
                ref={ref}
                className={({ isActive, isPending }: { isActive: boolean; isPending: boolean }): string =>
                    classNames(
                        "nav-link",
                        className,
                        isActive && activeClassName,
                        isPending && pendingClassName
                    )
                }
                {...props}
            >
                {props.children}
            </RouterNavLink>
        );
    }
);

NavLink.displayName = "NavLink";

export { NavLink };