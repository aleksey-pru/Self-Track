export interface MyGoalsProps {}

const MyGoals = ({}: MyGoalsProps) => {
  return (
    <div>
      <h1 className="text-3xl font-bold bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent mb-2">
        My Goals
      </h1>
      <p className="text-neutral-600 text-lg">Here are your current goals.</p>
    </div>
  );
};

export default MyGoals;
