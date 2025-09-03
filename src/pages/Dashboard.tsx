export interface DashboardProps {}

const Dashboard = ({}: DashboardProps) => {
  return (
    <div>
      <h1 className="text-3xl font-bold bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent mb-2">
        Dashboard
      </h1>
      <p className="text-neutral-600 text-lg">Track your progress and achieve your dreams ✨</p>
    </div>
  );
};

export default Dashboard;
