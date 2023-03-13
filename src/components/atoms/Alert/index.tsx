import { Fragment, ReactNode } from 'react';
import style from './Alert.module.css';

export type Props = {
  id?: string;
  open?: boolean;
  onClose?: () => void;
  children: ReactNode;
  type?: 'success' | 'info' | 'warning' | 'danger';
  title?: string;
};

const Alert = ({ id, open, children, type, title, onClose }: Props) => {
  return (
    <Fragment>
      {open && (
        <div
          data-testid={id}
          className={` ${style.alert} ${type && style[type]}`}
        >
          <div className={style.imgContainer}>
            <div className={style.img}></div>
          </div>
          <div>
            {title && <h4 className={style.alertTitle}>{title}</h4>}
            <p>{children}</p>
          </div>
          {onClose && (
            <button data-testid="btn-close-alert" onClick={onClose}></button>
          )}
        </div>
      )}
    </Fragment>
  );
};

export default Alert;
