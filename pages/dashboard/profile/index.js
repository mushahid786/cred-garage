'use client';

import { motion } from 'framer-motion';
import ProfileSummary from '../../../components/ProfileSummary';
import Layout from 'components/Layout';

function Profile() {
    return (
        <div className="px-4 mb-8">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <div className="mt-6">
                    <ProfileSummary />
                </div>
            </motion.div>
        </div>
    );
}
Profile.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default Profile;


