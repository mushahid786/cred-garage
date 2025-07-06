'use client';

import { motion } from 'framer-motion';
import Layout from 'components/Layout';
import BenefitsGrid from 'components/BenefitsGrid';

function BenefitsGridPage() {
    return (
        <div className="px-4 mb-8">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <div className="mt-6">
                    <BenefitsGrid />
                </div>
            </motion.div>
        </div>
    );
}
BenefitsGridPage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default BenefitsGridPage;


