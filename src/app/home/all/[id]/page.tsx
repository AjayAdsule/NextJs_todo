export default function TaskPage({ params }: { params: { id: string } }) {
  console.log(params);

  return <div>Task is {params.id}</div>;
}
