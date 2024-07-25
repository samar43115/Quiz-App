
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Main } from './components/Main';
import { Quiz } from './components/Quiz';
import { Result } from './components/Result';
import { UserProvider } from './components/database/store';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>
  },
  {
    path: '/quiz',
    element: <Quiz></Quiz>
  },
  {
    path: '/result',
    element: <Result></Result>
  },
])
function App() {
  return (
   
    <UserProvider>
       <RouterProvider router={router} />
    </UserProvider>
  )
}

export default App;