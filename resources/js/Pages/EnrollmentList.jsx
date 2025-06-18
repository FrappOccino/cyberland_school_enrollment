import { routeUrl } from "../config";

export default function EnrollmentList({ enrollments }) {
  // export default function EnrollmentList({ enrollments }) {
  const handleDownload = () => {
    window.location.href = routeUrl('/admin/export'); // or use route('enrollments.export') if you have it defined
  };
  return (
    <div>
      <button
        onClick={handleDownload}
        style={{
          marginBottom: '10px',
          padding: '8px 12px',
          backgroundColor: '#3490dc',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        ⬇️ Download Excel
      </button>
    <table border="1" cellPadding="8" style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead style={{ backgroundColor: '#f3f3f3' }}>
        <tr>
          <th>Child Name</th><th>Birthday</th><th>LRN</th>
          <th>Parent</th><th>Contact</th><th>Email</th><th>Relationship</th>
        </tr>
      </thead>
      <tbody>
        {enrollments.map((e) => (
          <tr key={e.id}>
            <td>{e.child_name}</td>
            <td>{e.child_birthday}</td>
            <td>{e.lrn}</td>
            <td>{e.parent_name}</td>
            <td>{e.parent_contact}</td>
            <td>{e.parent_email}</td>
            <td>{e.parent_relationship}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>

  );
}
