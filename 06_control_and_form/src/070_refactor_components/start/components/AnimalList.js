import AnimalItem from "./AnimalItem"

const AnimalList = ({ animals }) => {
    if (animals.length === 0) return <p>No animals found</p>
    return (
        <ul>
            {animals
                .map((animal) => {
                    return <AnimalItem animal={animal} key={animal} />
                })}
        </ul>
    )
}

export default AnimalList