'use client';
import { motion } from 'framer-motion';
import Layout from 'components/Layout';
import RewardsChart from 'components/RewardsChart';

function Rewards() {
    return (
        <div className="px-4 mb-8">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <div className="mt-6">
                    <RewardsChart />
                </div>
            </motion.div>
        </div>
    );
}
Rewards.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default Rewards;


