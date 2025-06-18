export default function EnrollmentList({ enrollments }) {
  return (
    <table>
      <thead>
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
  );
}
