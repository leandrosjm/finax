import { useHistory } from 'react-router-dom';
import { ErrorsContainer } from './style';
import Logo from '../../assets/images/icon-logo.svg';

export interface ErrorsProps {
  status: number;
  text: string;
}

function Erros({ status, text }: ErrorsProps) {
  const history = useHistory();
  return (
    <ErrorsContainer>
      <h2>{status}</h2>
      <p>{text}</p>
      <div className="icon">
        <img src={Logo} alt="Logo" />
      </div>
      <div>
        <button type="button" onClick={() => history.goBack()}>
          back
        </button>
      </div>
    </ErrorsContainer>
  );
}

export default Erros;
