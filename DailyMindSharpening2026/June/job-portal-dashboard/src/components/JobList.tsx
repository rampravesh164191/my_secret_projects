type Job = {
  id: number;
  title: string;
  company: string;
};

const jobs: Job[] = [
  { id: 1, title: "Frontend Developer", company: "Microsoft" },
  { id: 2, title: "Backend Developer", company: "Google" },
  { id: 3, title: "Fullstack Developer", company: "Amazon" },
];

export default function JobList() {
  if (jobs.length === 0) {
    return <p>No jobs available.</p>;
  }
  return (
    <ul>
      {jobs.map((job) => (
        <li key={job.id}>
          {job.title} at {job.company}
        </li>
      ))}
    </ul>
  );
}
