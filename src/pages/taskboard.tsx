import Layout from "../components/template/Layout";

const TaskBoard: React.FC = () => {
  return (
    <div className={`flex h-screen`}>
      <Layout title="Tarefas" caption="Gerencie suas tarefas">
        <h1>Lorem Ipsum</h1>
      </Layout>
    </div>
  );
};

export default TaskBoard;
