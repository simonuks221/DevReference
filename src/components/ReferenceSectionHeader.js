export const ReferenceSectionHeader = ({children, link}) => {

    const HeaderPressed = () => {
        window.location.href = link.toString()
    }

    return (
        <h2 className = 'text py-3 cursorPointer' onClick = {HeaderPressed}>
            {children}
        </h2>
    )
}

export default ReferenceSectionHeader
