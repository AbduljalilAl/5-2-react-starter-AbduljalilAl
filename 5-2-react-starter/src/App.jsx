import './App.css'

function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          <StudentCard name="Alice Johnson" id="S12345" department="Computer Science" />
          <StudentCard name="Bob Martinez" id="S67890" department="Information Technology" />        </div>
      </main>
    </div>
  )
}

export default App
