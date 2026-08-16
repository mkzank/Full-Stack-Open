const Part = ({part}) => part.map(p => <p key={p.id}> {p.name} {p.exercises} </p>)


const Content = ({parts}) => (
    <div>
        <Part part={parts} />
    </div>
)

export default Content