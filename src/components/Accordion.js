const Accordion = ({ items }) => {
    const renderedItems = items.map((item) => {
        return (
            <div key={item.id}>
                {item.label}
                {item.content}
            </div>
        )
    })

    return <div>{renderedItems}</div>

}

export default Accordion;