'use client';
import { ReactNode } from 'react';

import { Spinner } from '@/shared/components';
import { Footer, Header } from '@/widgets';

type PropTypes = {
  title: string;
  children: ReactNode;
  isLoading?: boolean;
};
export const MainWrapper = ({ title, children, isLoading }: PropTypes) => {
  return (
    <div className="flex flex-col w-full h-full ">
      <Header title={title} />
      <div className="flex-grow min-h-0 p-2 px-5 flex flex-col gap-3">
        {isLoading ? <Spinner /> : children}
      </div>
      <Footer currentPage={title} />
    </div>
  );
};
