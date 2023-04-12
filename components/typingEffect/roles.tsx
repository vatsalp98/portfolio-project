import React from 'react';
import { TypePhase, useTypedSuperpower } from './useTypedRoles';
import cn from 'classnames';

type Props = {
  superpowers: string[];
  className: string;
};

const Roles: React.FC<Props> = ({ superpowers, className }) => {
  const { typedSuperpower, selectedSuperpower, phase, resume } =
    useTypedSuperpower(superpowers);

  return (
    <h2
      className={`${className}`}
      onClick={resume}
    >
      <span
        className={cn(`${className}`, {
          ['end-cursor']: phase !== TypePhase.Deleting,
          ['blinking']: phase === TypePhase.Pausing,
        })}
        aria-label={selectedSuperpower}
      >
        I&apos;m a {typedSuperpower}
      </span>
    </h2>
  );
}

export default Roles;