import { HashRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/Home';
import Starred from './pages/Starred';
import MainLayout from './components/MainLayout';
import Show from './pages/Show';
import Recommed from './pages/Recommed';
//import { GlobalTheme } from './theme';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Routes>
          {/* for drop down  */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/starred" element={<Starred />} />
            <Route path="/RECOMMED" element={<Recommed />} />
          </Route>
          <Route path="/show/:showId" element={<Show />} />{' '}
          {/* showId for any dynamic content like fdjfkdsfejhfjdscn */}
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  );
}
export default App;
