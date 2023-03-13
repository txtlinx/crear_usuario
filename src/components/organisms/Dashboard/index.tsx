import NewUserForm from '../../molecules/Home/NewUser';
import { DashboardStyle } from './styles';

const DashboardComponent = () => {
  return (
    <DashboardStyle>
      <section>
        <NewUserForm />
      </section>
    </DashboardStyle>
  );
};

export default DashboardComponent;
