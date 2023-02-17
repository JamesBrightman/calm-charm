import { FcGoogle } from 'react-icons/fc';
import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { HeaderWave } from '../../components/HeaderWave';
import { EmailSignupForm } from '../../form/EmailSignupForm';
import { IconButton } from '../../components/IconButton';
import { InfoChit } from '../../components/InfoChit';

export interface CreateAccountPageProps {
  toggleLogin: () => void;
}

export const CreateAccountPage: FC<CreateAccountPageProps> = ({
  toggleLogin,
}) => {
  return (
    <div className="h-screen flex flex-col flex-1 bg-blue-500">
      <motion.div
        className="w-full h-content mt-auto flex flex-col"
        initial={{ y: 500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 0.7 }}
      >
        <HeaderWave />
        <div className="flex flex-col gap-4 bg-white items-center justify-center">
          <p className="text-2xl font-extrabold px-4 bg-white">
            Join Calm Charm
          </p>
          <EmailSignupForm
            onSubmit={() => {
              console.log('SUBMITTING');
            }}
          />
          <IconButton
            buttonText="Sign up with Google"
            icon={<FcGoogle />}
            handleClick={() => {}}
            variant="outlined"
            className="w-72 p-1 font-semibold text-gray-700"
          />
          <InfoChit onClick={toggleLogin}>
            <div className="flex flex-row gap-1">
              <p>Already have an account?</p>
              <p className="underline font-bold">Sign in here.</p>
            </div>
          </InfoChit>
          <p className="pt-8">Legal text TODO</p>
        </div>
      </motion.div>
    </div>
  );
};
