import { h } from 'preact';

interface Props {
    /** */
    className: string;
    /** */
    color?: string;
}

export default function Email(props: Props) {
    return (<svg
        className={props.className}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        viewBox="0 0 24 24">
        <title>Email icon</title>
        <path fill={props.color} d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
    );
}