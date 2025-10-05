function StudentCard({ name, id, department }) {
  return (
    <div
      style={{
        border: '1px solid blue',
        borderRadius: '12px',
        padding: '1rem',
        backgroundColor: 'black',
        width: '240px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}
    >
      <h3>{name}</h3>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Department:</strong> {department}</p>
    </div>
  )
}

export default StudentCard
