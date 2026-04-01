import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { Nav } from "react-bootstrap";
import classNames from "classnames";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
    className?: string;
    activeClassName?: string;
    pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
    ({ className, activeClassName = "active", pendingClassName, to, ...props }, ref) => {
        return (
            <Nav.Link
                as={RouterNavLink} // Faz o componente do Bootstrap se comportar como um Link do Router
                ref={ref}
                to={to}
                className={({ isActive, isPending }: { isActive: boolean; isPending: boolean }) =>
                    classNames(
                        className,
                        isActive && activeClassName,
                        isPending && pendingClassName
                    )
                }
                {...props}
            />
        );
    }
);

NavLink.displayName = "NavLink";

export { NavLink };