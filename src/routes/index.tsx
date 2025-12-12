import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import Header from '../components/header'
import { getTodos } from '@/api/todo'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const { data, isLoading } = useQuery({
    queryKey: ['todos'],
    queryFn: () => getTodos(),
  })

  return (
    <>
      <div className="container">
        <Header></Header>
        {isLoading ? 'Loading...' : data?.map((todo) => (
          <div key={todo.id}>{todo.title} {todo.isCompleted ? '✅' : '❌'}</div>
        ))}
      </div>
    </>
  )
}
