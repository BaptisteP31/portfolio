export function NavItem(prop: {name:string, link:string}) {
    return (
        <a key={prop.name + prop.link} href={prop.link}>{prop.name}</a>
    )
}