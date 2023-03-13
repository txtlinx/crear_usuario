import Button from '../../../atoms/Button';
import Input from '../../../atoms/Input';
import {
  CardNewUserForm,
  CardNewUserFormHeaders,
  ContainerCard,
  ContainerForm,
  ContainerInput,
  ContainerNewUser,
  ContainerTitle,
  ContainerFieldSet,
  PrettyButton,
} from './styles';
import { labels } from '../../../../consts/labels';
import Switch from '../../../atoms/Switch';
//import Button from '../../../atoms/Button';
const { TITLEA, INPUTNAME, INPUTLASTNAME, INPUTRUT, TITLEB, INPUTEMAIL } =
  labels.SETUPNEWUSER;
const NewUserForm = () => {
  return (
    <ContainerNewUser>
      <ContainerTitle>
        <h2>Crear nuevo usuario</h2>
      </ContainerTitle>

      <ContainerCard>
        <CardNewUserForm>
          <CardNewUserFormHeaders>
            <h3>{TITLEA}</h3>

            <ContainerForm>
              <ContainerInput>
                <ContainerFieldSet>
                  <legend>{INPUTNAME.LABEL}</legend>
                  <PrettyButton
                    id="name"
                    name="name"
                    value=""
                    variant="ligth"
                    label={INPUTNAME.LABEL}
                    placeholder={INPUTNAME.PLACEHOLDER}
                    maxLength={50}
                  />
                </ContainerFieldSet>
                <ContainerFieldSet>
                  <legend>{INPUTLASTNAME.LABEL}</legend>
                  <PrettyButton
                    id="lastname"
                    name="lastname"
                    value=""
                    variant="ligth"
                    label={INPUTLASTNAME.LABEL}
                    placeholder={INPUTLASTNAME.PLACEHOLDER}
                    maxLength={50}
                  />
                </ContainerFieldSet>
              </ContainerInput>
              <ContainerFieldSet>
                <legend>{INPUTRUT.LABEL}</legend>
                <PrettyButton
                  id="rut"
                  name="RUT"
                  value=""
                  variant="ligth"
                  label={INPUTRUT.LABEL}
                  placeholder={INPUTRUT.PLACEHOLDER}
                  maxLength={50}
                />
              </ContainerFieldSet>
              <ContainerFieldSet>
                <legend>{INPUTEMAIL.LABEL}</legend>
                <PrettyButton
                  id="Email"
                  name="email"
                  value=""
                  variant="ligth"
                  label={INPUTEMAIL.LABEL}
                  placeholder={INPUTEMAIL.PLACEHOLDER}
                  maxLength={50}
                />
              </ContainerFieldSet>
            </ContainerForm>
          </CardNewUserFormHeaders>
        </CardNewUserForm>

        <CardNewUserForm>
          <CardNewUserFormHeaders>
            <h3>{TITLEB}</h3>

            <div>
              <div>
                <Switch
                  onChange={(e) => console.log(e)}
                  name="switchSaldo"
                  text="Permite consultar estados de transacciones"
                />
                <Switch
                  onChange={(e) => console.log(e)}
                  name="switchSaldo"
                  text="Permite autorizar transacciones"
                />
                <Switch
                  onChange={(e) => console.log(e)}
                  name="switchSaldo"
                  text="Permite administrar usuarios"
                />
              </div>
            </div>
          </CardNewUserFormHeaders>
        </CardNewUserForm>
      </ContainerCard>
      <button>Ir a firmas</button>
    </ContainerNewUser>
  );
};

export default NewUserForm;
