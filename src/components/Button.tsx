import Link from "next/link";
import { HTMLAttributes, PropsWithChildren, ReactNode } from "react";

const style = {
    backgroundColor: '#fff',
    color: 'var(--dark)',
    padding: '15px 25px',
    borderRadius: '40px'
}
interface Props {
    href : HTMLLinkElement,
    children : ReactNode,
    className ?: string 
}
const Button: React.FC<Props> = (props) => {
    return (
        <Link href={props.href} className={props.className} style={style}>
            console.log(typeof(props.className));
            {props.children}
        </Link>
    )
}
export default Button;