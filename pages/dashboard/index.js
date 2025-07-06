'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProfileSummary from '../../components/ProfileSummary';
import BenefitsGrid from '../../components/BenefitsGrid';
import RewardsChart from '../../components/RewardsChart';
import LoadingSkeleton from '../../components/LoadingSkeleton';
import Layout from 'components/Layout';

function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="px-4 mb-8">
      {isLoading ? (
        <div className="mt-6">
          <LoadingSkeleton />
        </div>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <div className="mt-6">
            <ProfileSummary />
          </div>
          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-6">Your Benefits</h2>
            <BenefitsGrid />
          </div>
          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-6">Reward Points</h2>
            <RewardsChart />
          </div>
        </motion.div>
      )}
    </div>
  );
}

DashboardPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default DashboardPage;