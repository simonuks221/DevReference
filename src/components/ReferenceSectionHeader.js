export const ReferenceSectionHeader = ({children, link}) => {

    const HeaderPressed = () => {
        window.location.href = link.toString()
    }

    return (
        <h2 className = 'text' onClick = {HeaderPressed}>
            {children}
        </h2>
    )
}

export default ReferenceSectionHeader
