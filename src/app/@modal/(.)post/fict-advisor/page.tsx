'use client';

import { useRouter } from 'next/navigation';

import { FictAdvisorDetails } from '@/components/module/details';
import { Modal } from '@/components/ui';

const FictAdvisorModal = () => {
  const router = useRouter();

  return (
    <Modal onClose={() => router.back()}>
      <FictAdvisorDetails />
    </Modal>
  );
};

export default FictAdvisorModal;
