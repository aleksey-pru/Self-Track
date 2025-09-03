import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const SidebarLayout = lazy(() => import('./components/SidebarLayout.tsx'));
const Dashboard = lazy(() => import('./pages/Dashboard.tsx'));
const MyGoals = lazy(() => import('./pages/MyGoals.tsx'));
const CreateGoal = lazy(() => import('./pages/CreateGoal.tsx'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SidebarLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="goals" element={<MyGoals />} />
        <Route path="create" element={<CreateGoal />} />
      </Route>
    </Routes>
  );
};

export default App;
